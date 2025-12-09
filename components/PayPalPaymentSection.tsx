'use client';
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Loader2 } from 'lucide-react';

interface PayPalProps {
    orderId: number;    // ID đơn hàng trong DB của bạn
    amount: number;     // Số tiền VND
    onSuccess: (details: any) => void; // Hàm callback khi thành công
}

const PayPalPaymentSection: React.FC<PayPalProps> = ({ orderId, amount, onSuccess }) => {

    // A. Hàm gọi API Bước 1 (Tạo Order)
    const createOrder = async () => {
        try {
            const res = await fetch('/api/payment/paypal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderId, amount }),
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error);
            return data.id; // Trả về ID cho nút PayPal
        } catch (err) {
            console.error("Lỗi tạo order:", err);
            throw err;
        }
    };

    // B. Hàm gọi API Bước 2 (Capture - Bạn đã có file này rồi)
    const onApprove = async (data: any) => {
        try {
            // data.orderID là ID do PayPal sinh ra
            const res = await fetch('/api/payment/paypal/capture', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    paypalOrderID: data.orderID,
                    orderIdDB: orderId
                }),
            });

            const result = await res.json();

            if (result.success) {
                // Gọi hàm xử lý thành công ở trang cha (để chuyển hướng)
                onSuccess(result);
            } else {
                alert("Thanh toán thất bại: " + (result.error || "Lỗi không xác định"));
            }
        } catch (err) {
            console.error("Lỗi capture:", err);
            alert("Lỗi kết nối đến server");
        }
    };

    return (
        <div className="w-full z-0">
            {/* Bọc Provider ở đây hoặc ở file layout gốc đều được */}
            <PayPalScriptProvider options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
                currency: "USD"
            }}>
                <PayPalButtons
                    style={{ layout: "vertical", shape: "rect", label: "pay" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default PayPalPaymentSection;