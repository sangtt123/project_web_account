// lib/mail.ts
import nodemailer from 'nodemailer';

// Định nghĩa kiểu dữ liệu cho Account để không phải dùng 'any'
interface AccountInfo {
    username: string;
    password: string;
}

interface OrderItemInfo {
    productName: string;
    quantity: number;
    account: AccountInfo[]; // Mảng các account
}

export const sendOrderEmail = async (
    toEmail: string,
    orderCode: string | number,
    orderItems: OrderItemInfo[] // Dùng interface thay vì any[]
) => {

    console.log("test mail 1: ", toEmail, orderCode, orderItems)

    // Cấu hình SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    console.log("test mail 2: ", transporter)

    // Verify kết nối trước khi gửi (Optional - giúp debug lỗi login gmail)
    try {
        await transporter.verify();
    } catch (error) {
        console.error("Lỗi kết nối SMTP:", error);
        console.log("test mail error: ", error)
        return;
    }

    console.log("test mail 3: ", transporter)

    // Tạo HTML
    const itemsHtml = orderItems.map(item => `
        <div style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px;">
            <div style="background-color: #f9fafb; padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">
                📦 ${item.productName} (SL: ${item.quantity})
            </div>
            <div style="padding: 10px;">
                ${item.account && item.account.length > 0 ? item.account.map((acc, index) => `
                    <div style="margin-bottom: 8px; font-family: monospace; background: #f0fdf4; padding: 8px; border-radius: 4px; color: #166534;">
                        <strong>ACC ${index + 1}:</strong> ${acc.username} | ${acc.password}
                    </div>
                `).join('') : '<p style="color:red">Đang cập nhật kho...</p>'}
            </div>
        </div>
    `).join('');

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #4F46E5;">Thanh toán thành công!</h2>
            <p>Xin chào, đơn hàng <strong>#${orderCode}</strong> của bạn đã hoàn tất.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

            <h3>Thông tin tài khoản:</h3>
            ${itemsHtml}

            <p style="margin-top: 30px; font-size: 12px; color: #666;">
                Cảm ơn bạn đã ủng hộ Shop!
            </p>
        </div>
    `;

    // Gửi mail
    await transporter.sendMail({
        from: '"Shop Account" <no-reply@shop.com>',
        to: toEmail,
        subject: `[Đã thanh toán] Đơn hàng #${orderCode} - Thông tin tài khoản`,
        html: htmlContent
    });
};