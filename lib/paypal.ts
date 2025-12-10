import paypal from '@paypal/checkout-server-sdk';

// 1. Cấu hình môi trường
const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

if (!clientId || !clientSecret) {
    throw new Error("Chưa cấu hình PAYPAL_CLIENT_ID hoặc PAYPAL_CLIENT_SECRET");
}

// LOGIC MỚI: Kiểm tra biến PAYPAL_MODE trong .env trước
// Nếu PAYPAL_MODE='live' -> Dùng Live
// Nếu PAYPAL_MODE='sandbox' -> Dùng Sandbox
// Nếu không set gì cả -> Mới check NODE_ENV
let Environment;

if (process.env.PAYPAL_MODE === 'live') {
    Environment = paypal.core.LiveEnvironment;
} else if (process.env.PAYPAL_MODE === 'sandbox') {
    Environment = paypal.core.SandboxEnvironment;
} else {
    // Fallback: Nếu không cấu hình PAYPAL_MODE thì mới dùng logic cũ
    Environment = process.env.NODE_ENV === 'production'
        ? paypal.core.LiveEnvironment
        : paypal.core.SandboxEnvironment;
}

// 2. Khởi tạo Client
const client = new paypal.core.PayPalHttpClient(
    new Environment(clientId, clientSecret)
);

export default client;