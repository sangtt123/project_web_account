import { NextResponse } from "next/server";
import { PayOS } from "@payos/node";
import { prisma } from "@/lib/prisma";
import { sendOrderEmail } from "@/utils/mail";

const payos = new PayOS({
    clientId: process.env.PAYOS_CLIENT_ID!,
    apiKey: process.env.PAYOS_API_KEY!,
    checksumKey: process.env.PAYOS_CHECKSUM_KEY!
});

export async function POST(req: Request) {
    try {
        const { orderId } = await req.json();

        if (!orderId) return NextResponse.json({ error: "Thiếu Order ID" }, { status: 400 });

        // 1. Check PayOS
        const paymentLinkInfo = await payos.paymentRequests.get(orderId);

        if (!paymentLinkInfo || paymentLinkInfo.status !== process.env.NEXT_PUBLIC_STATUS_ODR_PAID) {
            return NextResponse.json({ success: false, status: paymentLinkInfo?.status || "PENDING" });
        }

        // 2. Check DB
        const existingOrder = await prisma.order.findFirst({
            where: { order_code: Number(orderId) },
            include: {
                order_item: {
                    include: { account: true }
                }
            }
        });

        // Nếu đã xử lý rồi (PAID hoặc trường hợp đặc biệt kia) thì return
        if (existingOrder?.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID || existingOrder?.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID_C001) {
            return NextResponse.json({ success: true, status: existingOrder?.status, data: existingOrder });
        }

        // 3. TRANSACTION XỬ LÝ LOGIC KHO
        const result = await prisma.$transaction(async (tx) => {

            // BƯỚC A: Kiểm tra tồn kho trước cho TẤT CẢ sản phẩm trong đơn
            let isInsufficientStock = false;

            for (const item of existingOrder!.order_item) {
                const stockCount = await tx.account.count({
                    where: {
                        product_id: item.product_id,
                        option_id: item.option_id,
                        is_sold: false
                    }
                });

                if (stockCount < item.quantity) {
                    isInsufficientStock = true;
                    break; // Chỉ cần 1 món thiếu là dừng check, đánh dấu thiếu hàng
                }
            }

            // BƯỚC B: Phân nhánh xử lý dựa trên kết quả kiểm tra kho

            // === TRƯỜNG HỢP 1: THIẾU HÀNG ===
            if (isInsufficientStock) {
                // Chỉ update trạng thái đặc biệt, KHÔNG nhả account
                const updatedOrderOOS = await tx.order.update({
                    where: { id: existingOrder!.id },
                    data: {
                        status: process.env.NEXT_PUBLIC_STATUS_ODR_PAID_C001, // Đã thanh toán nhưng chưa giao hàng (Code 001)
                        updated_at: new Date()
                    },
                    include: { order_item: true }
                });
                return updatedOrderOOS;
            }

            // === TRƯỜNG HỢP 2: ĐỦ HÀNG (Logic cũ) ===
            // Update trạng thái PAID chuẩn
            const updatedOrder = await tx.order.update({
                where: { id: existingOrder!.id },
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

                // (Đoạn này lý thuyết sẽ không xảy ra do đã check count ở trên,
                // nhưng giữ lại để an toàn concurrency nếu traffic cực cao)
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
            // Tùy chỉnh nội dung mail dựa trên trạng thái
            if (finalOrderData.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID_C001) {
                // Gửi mail thông báo: "Thanh toán thành công, đang chờ xử lý kho"
                // await sendOrderPendingStockEmail(...) 
                console.log("Đã thanh toán nhưng hết hàng, cần admin check manual");
            } else {
                // Gửi mail kèm account như bình thường
                sendOrderEmail(finalOrderData.user_email, orderId, finalOrderData.order_item)
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