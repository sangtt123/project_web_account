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
        const response = await client.execute(request);
        return NextResponse.json({
            id: response.result.id // Trả về OrderID (VD: 5KJ62132W7083044F)
        });

    } catch (error: any) {
        console.error("PayPal Create Order Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}