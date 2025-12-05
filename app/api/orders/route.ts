import { NextResponse } from "next/server";
import { apiCreateOrder } from "@/services/orderService";
import { prisma } from "@/lib/prisma";
export const dynamic = 'force-dynamic';

// 1. GET: Lấy danh sách đơn hàng
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email');
        const query = searchParams.get('q') || ''; // Từ khóa tìm kiếm
        const page = Number(searchParams.get('page')) || 1;
        const limit = 10; // Số lượng mỗi trang
        const skip = (page - 1) * limit;

        let whereClause: any = {};

        // Nếu có tìm kiếm
        if (query) {
            whereClause.OR = [
                { user_email: { contains: query, mode: 'insensitive' } }, // Tìm theo email
                { id: { contains: query, mode: 'insensitive' } },         // Tìm theo ID đơn
            ];
            // Nếu query là số, tìm theo order_code
            if (!isNaN(Number(query))) {
                whereClause.OR.push({ order_code: Number(query) });
            }
        }

        // Lọc theo user (nếu không phải admin xem hết)
        if (email) {
            whereClause.user_email = email;
        }

        // Chạy song song: Lấy dữ liệu + Đếm tổng số
        const [orders, total] = await Promise.all([
            prisma.order.findMany({
                where: whereClause,
                orderBy: { created_at: 'desc' },
                include: { order_item: { include: { account: true } } },
                take: limit,
                skip: skip
            }),
            prisma.order.count({ where: whereClause })
        ]);

        return NextResponse.json({
            data: orders,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error("GET Orders Error:", error);
        return NextResponse.json({ error: "Lỗi lấy danh sách đơn hàng" }, { status: 500 });
    }
}

// 2. POST: Tạo đơn hàng mới (Logic Checkout)
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { items, email, totalAmount } = body;

        // 1. Validation cơ bản
        if (!items || items.length === 0) {
            return NextResponse.json({ error: "Giỏ hàng trống" }, { status: 400 });
        }
        if (!email) {
            return NextResponse.json({ error: "Email là bắt buộc" }, { status: 400 });
        }

        // 2. Sinh mã đơn hàng (Order Code) cho PayOS
        // Yêu cầu của PayOS: Số nguyên, duy nhất, nhỏ hơn 9007199254740991
        // Cách tạo: Lấy 6 số cuối của timestamp + 3 số ngẫu nhiên -> Đảm bảo tính duy nhất cao và ngắn gọn
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        const orderCode = Number(`${timestamp}${random}`);

        // 3. Gọi Service để lưu vào Database
        // Hàm này sẽ tạo Order và OrderItem trong DB (Status mặc định là PENDING)
        const newOrder = await apiCreateOrder(items, email, totalAmount, orderCode);

        // 4. Trả về thông tin đơn hàng (để Frontend lấy orderCode gọi tiếp PayOS)
        return NextResponse.json(newOrder);

    } catch (error: any) {
        console.error("Lỗi tạo đơn hàng:", error);
        return NextResponse.json(
            { error: error.message || "Lỗi máy chủ nội bộ" },
            { status: 500 }
        );
    }
}

// 3. PUT: Cập nhật trạng thái đơn hàng (Dùng cho Admin hoặc Webhook)
export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, status, user_email } = body;

        // Bắt buộc phải có ID đơn hàng
        if (!id) {
            return NextResponse.json({ error: "Thiếu ID đơn hàng" }, { status: 400 });
        }

        const updateData: any = {
            updated_at: new Date()
        };

        if (status) updateData.status = status;
        if (user_email) updateData.user_email = user_email;

        const updatedOrder = await prisma.order.update({
            where: { id },
            data: updateData,
            include: { order_item: true }
        });

        return NextResponse.json(updatedOrder);

    } catch (error) {
        console.error("UPDATE Order Error:", error);
        return NextResponse.json({ error: "Lỗi cập nhật đơn hàng" }, { status: 500 });
    }
}

// 4. DELETE: Xóa đơn hàng (Chỉ Admin dùng)
export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: "Thiếu ID đơn hàng" }, { status: 400 });
        }

        // Nhưng thường Prisma xử lý gọn.
        await prisma.order.delete({
            where: { id }
        });

        return NextResponse.json({ message: "Đã xóa đơn hàng thành công" });

    } catch (error: any) {
        console.error("DELETE Order Error:", error);
        return NextResponse.json({ error: "Lỗi xóa đơn hàng" }, { status: 500 });
    }
}