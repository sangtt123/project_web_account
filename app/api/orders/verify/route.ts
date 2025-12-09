import { NextResponse } from "next/server";
import { PayOS } from "@payos/node";
import { prisma } from "@/lib/prisma";
import { sendOrderEmail } from "@/utils/mail";

// Cấu hình PayOS
const payos = new PayOS({
    clientId: process.env.PAYOS_CLIENT_ID!,
    apiKey: process.env.PAYOS_API_KEY!,
    checksumKey: process.env.PAYOS_CHECKSUM_KEY!
});

export async function POST(req: Request) {
    try {
        const { orderId } = await req.json();

        if (!orderId) return NextResponse.json({ error: "Thiếu Order ID" }, { status: 400 });

        // ---------------------------------------------------------
        // BƯỚC 1: TÌM ĐƠN HÀNG TRONG DB TRƯỚC (THAY ĐỔI QUAN TRỌNG)
        // ---------------------------------------------------------
        // Chúng ta cần tìm đơn hàng để biết payment_method là gì
        const existingOrder = await prisma.order.findUnique({
            where: { order_code: orderId }, // Tìm theo ID chính của bảng Order
            include: {
                order_item: {
                    include: { account: true }
                }
            }
        });

        if (!existingOrder) {
            return NextResponse.json({ error: "Không tìm thấy đơn hàng" }, { status: 404 });
        }

        // Nếu đơn hàng đã PAID hoặc đang chờ xử lý kho (C001)
        // Trường hợp là PAID và method là PAYPAL và tài khoản đã được phát thì return
        // Trường hợp là ( PAID hoặc đang chờ xử lý kho (C001)) và method là PAYOS và tài khoản đã được phát thì return
        // if (existingOrder.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID ||
        //     existingOrder.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID_C001) {
        //     return NextResponse.json({ success: true, status: existingOrder.status, data: existingOrder });
        // }
        // 1. Kiểm tra xem đơn hàng đã được gán tài khoản chưa (Chỉ cần 1 item có acc là tính đã phát)
        const hasAccountsAssigned = existingOrder.order_item.some(
            (item) => item.account && item.account.length > 0
        );

        const statusPaid = process.env.NEXT_PUBLIC_STATUS_ODR_PAID;
        const statusWaitStock = process.env.NEXT_PUBLIC_STATUS_ODR_PAID_C001;
        const currentStatus = existingOrder.status;
        const method = existingOrder.payment_method;

        // 2. Định nghĩa các điều kiện return sớm
        const isPayPalCompleted =
            method === 'PAYPAL' &&
            currentStatus === statusPaid &&
            hasAccountsAssigned;

        const isPayOSCompleted =
            method === 'PAYOS' &&
            (currentStatus === statusPaid || currentStatus === statusWaitStock) &&
            hasAccountsAssigned;

        // 3. Thực hiện Return nếu thỏa mãn
        if (isPayPalCompleted || isPayOSCompleted) {
            return NextResponse.json({
                success: true,
                status: currentStatus,
                data: existingOrder
            });
        }

        // ---------------------------------------------------------
        // BƯỚC 2: KIỂM TRA TRẠNG THÁI THANH TOÁN DỰA THEO METHOD
        // ---------------------------------------------------------
        let isPaymentConfirmed = false;

        // === CASE A: PAYOS ===
        if (existingOrder.payment_method === 'PAYOS') {
            try {
                // Chỉ gọi PayOS nếu phương thức là PAYOS
                const paymentLinkInfo = await payos.paymentRequests.get(existingOrder.order_code);

                if (paymentLinkInfo && paymentLinkInfo.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID) {
                    isPaymentConfirmed = true;
                } else {
                    return NextResponse.json({ success: false, status: paymentLinkInfo?.status || "PENDING", message: "PayOS chưa xác nhận thanh toán" });
                }
            } catch (err) {
                console.error("Lỗi check PayOS:", err);
                return NextResponse.json({ success: false, status: "ERROR", message: "Lỗi kết nối PayOS" });
            }
        }

        // === CASE B: PAYPAL ===
        else if (existingOrder.payment_method === 'PAYPAL') {
            // Với PayPal, bước "Capture" trước đó đã update status thành PAID trong DB rồi.
            // Nếu tới đây mà status trong DB vẫn chưa phải PAID, nghĩa là Capture lỗi hoặc chưa chạy.
            if (existingOrder.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID) {
                isPaymentConfirmed = true;
            } else {
                return NextResponse.json({
                    success: false,
                    status: existingOrder.status,
                    message: "Giao dịch PayPal chưa hoàn tất hoặc đang chờ xử lý."
                });
            }
        }

        // Nếu chưa xác nhận thanh toán thì dừng
        if (!isPaymentConfirmed) {
            return NextResponse.json({ success: false, status: "PENDING" });
        }

        // ---------------------------------------------------------
        // BƯỚC 3: TRANSACTION XỬ LÝ KHO (GIỮ NGUYÊN CODE CŨ)
        // ---------------------------------------------------------
        const result = await prisma.$transaction(async (tx) => {

            // BƯỚC A: Kiểm tra tồn kho
            let isInsufficientStock = false;
            for (const item of existingOrder.order_item) {
                const stockCount = await tx.account.count({
                    where: {
                        product_id: item.product_id,
                        option_id: item.option_id,
                        is_sold: false
                    }
                });

                if (stockCount < item.quantity) {
                    isInsufficientStock = true;
                    break;
                }
            }

            // BƯỚC B: Phân nhánh xử lý
            // === TRƯỜNG HỢP 1: THIẾU HÀNG ===
            if (isInsufficientStock) {
                const updatedOrderOOS = await tx.order.update({
                    where: { id: existingOrder.id },
                    data: {
                        status: process.env.NEXT_PUBLIC_STATUS_ODR_PAID_C001,
                        updated_at: new Date()
                    },
                    include: { order_item: true }
                });
                return updatedOrderOOS;
            }

            // === TRƯỜNG HỢP 2: ĐỦ HÀNG ===
            const updatedOrder = await tx.order.update({
                where: { id: existingOrder.id },
                data: {
                    status: process.env.NEXT_PUBLIC_STATUS_ODR_PAID,
                    updated_at: new Date()
                },
                include: { order_item: true }
            });

            // Nhả account
            for (const item of updatedOrder.order_item) {
                const accountsToAssign = await tx.account.findMany({
                    where: {
                        product_id: item.product_id,
                        option_id: item.option_id,
                        is_sold: false
                    },
                    take: item.quantity
                });

                if (accountsToAssign.length < item.quantity) {
                    throw new Error("Concurrency Error: Hết hàng trong lúc giao dịch.");
                }

                const accountIds = accountsToAssign.map(acc => acc.id);
                await tx.account.updateMany({
                    where: { id: { in: accountIds } },
                    data: {
                        is_sold: true,
                        sold_at: new Date(),
                        order_item_id: item.id
                    }
                });
            }

            return updatedOrder;
        });

        // 4. Lấy lại dữ liệu cuối cùng
        const finalOrderData = await prisma.order.findUnique({
            where: { id: result.id },
            include: {
                order_item: {
                    include: { account: true }
                }
            }
        });

        // 5. Gửi Email
        if (finalOrderData?.user_email) {
            if (finalOrderData.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID_C001) {
            } else {
                sendOrderEmail(finalOrderData.user_email, Number(orderId), finalOrderData.order_item)
                    .catch(err => console.error("Lỗi gửi mail:", err));
            }
        }

        return NextResponse.json({
            success: true,
            status: finalOrderData?.status,
            data: finalOrderData
        });

    } catch (error: any) {
        console.error("Critical Error Verify:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}