import paypal from '@paypal/checkout-server-sdk';

// 1. Cấu hình môi trường
// Nếu đang chạy dev (npm run dev) thì dùng Sandbox để test không mất tiền thật
// Khi nào build production thì nó tự chuyển sang Live
const Environment =
    process.env.NODE_ENV === 'production'
        ? paypal.core.LiveEnvironment
        : paypal.core.SandboxEnvironment;

// 2. Kiểm tra biến môi trường để tránh lỗi ngớ ngẩn
const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

if (!clientId || !clientSecret) {
    throw new Error("Chưa cấu hình PAYPAL_CLIENT_ID hoặc PAYPAL_CLIENT_SECRET trong file .env");
}

// 3. Khởi tạo Client
const client = new paypal.core.PayPalHttpClient(
    new Environment(clientId, clientSecret)
);

export default client;