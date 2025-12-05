import { NextResponse } from "next/server";
// 1. SỬA LỖI IMPORT: Dùng import có ngoặc nhọn cho TypeScript
import { PayOS } from "@payos/node";

// 2. KHỞI TẠO: Đảm bảo biến môi trường tồn tại
const payos = new PayOS({
    clientId: process.env.PAYOS_CLIENT_ID!, // Thêm dấu ! để báo TS là biến này chắc chắn có
    apiKey: process.env.PAYOS_API_KEY!,
    checksumKey: process.env.PAYOS_CHECKSUM_KEY!
}
);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { orderId, amount, description, returnUrl, cancelUrl } = body;

        // Validation
        if (!orderId || !amount) {
            return NextResponse.json({ error: "Thiếu thông tin đơn hàng (orderId, amount)" }, { status: 400 });
        }

        const YOUR_DOMAIN = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

        // 3. Tạo Payment Link Data
        const paymentLinkData = {
            orderCode: Number(orderId),
            amount: Number(amount),
            description: description || `Thanh toan don hang ${orderId}`,
            returnUrl: returnUrl || `${YOUR_DOMAIN}/success/${orderId}`,
            cancelUrl: cancelUrl || `${YOUR_DOMAIN}/cart`,
        };

        // 4. Gọi hàm tạo link
        // Nếu dòng này lỗi, chắc chắn do key sai hoặc import sai
        const paymentLink = await payos.paymentRequests.create(paymentLinkData);

        return NextResponse.json({
            checkoutUrl: paymentLink.checkoutUrl,
            paymentLinkId: paymentLink.paymentLinkId
        });

    } catch (error: any) {
        console.error("CHI TIẾT LỖI:", error);

        // Trả về lỗi chi tiết để debug
        return NextResponse.json({
            error: error.message,
            stack: error.stack // Xem stack trace để biết lỗi ở dòng nào
        }, { status: 500 });
    }
}