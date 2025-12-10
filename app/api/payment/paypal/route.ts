import { NextResponse } from 'next/server';
import client from '@/lib/paypal'; // File config bạn vừa tạo
import paypal from '@paypal/checkout-server-sdk';
import { getExchangeRate } from '@/utils/convertvndtousd';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { orderId, amount } = body; // amount này đang là VND

        if (!amount) {
            return NextResponse.json({ error: 'Thiếu số tiền' }, { status: 400 });
        }

        // 1. LẤY TỶ GIÁ ĐỘNG
        const exchangeRate = await getExchangeRate();

        // 2. TÍNH TOÁN USD
        // PayPal charge phí chuyển đổi và phí giao dịch khá cao.
        const valueUSD = (amount / exchangeRate).toFixed(2);
        // console.log(`Quy đổi: ${amount} VND / ${exchangeRate} = ${valueUSD} USD`);

        // 3. TẠO REQUEST GỬI PAYPAL
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    reference_id: orderId.toString(),
                    amount: {
                        currency_code: 'USD',
                        value: valueUSD
                    }
                }
            ]
        });

        // 4. GỌI PAYPAL VÀ TRẢ VỀ ID
        // Thêm đoạn này vào trước khi gọi fetch PayPal
        console.log("=== DEBUG ENV ===");
        console.log("Client ID:", process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);
        // Chỉ in độ dài hoặc 3 ký tự cuối để bảo mật, nhưng đủ để biết nó có đọc được không
        const secret = process.env.PAYPAL_CLIENT_SECRET || "";
        console.log("Secret Length:", secret.length);
        console.log("Secret Last 3 chars:", secret.slice(-3));
        console.log("Secret contains \\r?:", secret.includes("\r")); // Kiểm tra ký tự lạ
        const response = await client.execute(request);
        return NextResponse.json({
            id: response.result.id // Trả về OrderID (VD: 5KJ62132W7083044F)
        });

    } catch (error: any) {
        console.log("=================");
        console.error("PayPal Create Order Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}