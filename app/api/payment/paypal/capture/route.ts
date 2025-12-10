import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import client from "@/lib/paypal";
import paypal from "@paypal/checkout-server-sdk";

export async function POST(req: Request) {
    try {
        const { orderIdDB, paypalOrderID } = await req.json(); // Nhận từ Frontend

        // 1. Gọi PayPal để "Capture" (Trừ tiền thật)
        const request = new paypal.orders.OrdersCaptureRequest(paypalOrderID);
        request.requestBody({});
        const response = await client.execute(request);

        if (response.result.status === 'COMPLETED') {

            // 2. LƯU TRANSACTION_ID VÀO DB NGAY TẠI ĐÂY
            // response.result.id chính là Transaction ID của PayPal
            await prisma.order.update({
                where: { id: orderIdDB },
                data: {
                    status: process.env.NEXT_PUBLIC_STATUS_ODR_PAID, // Set luôn thành PAID
                    transaction_id: response.result.id, // <--- LƯU CÁI NÀY
                    updated_at: new Date()
                }
            });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ success: false });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}