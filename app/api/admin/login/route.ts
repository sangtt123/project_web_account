import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        // 1. Tìm admin (code cũ của bạn)
        const admin = await prisma.admin.findUnique({
            where: { user_name: username }
        });

        // 2. Check pass (code cũ của bạn)
        if (!admin || admin.password !== password) {
            return NextResponse.json({ error: "Sai thông tin" }, { status: 401 });
        }

        // --- BẮT ĐẦU SỬA TỪ ĐÂY ---

        // 3. Tạo Response thành công trước
        const response = NextResponse.json({
            success: true,
            username: admin.user_name
        });

        // 4. Set Cookie vào Response này
        response.cookies.set({
            name: 'admin_session',
            value: JSON.stringify({ id: admin.id, username: admin.user_name }),
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24 // 1 ngày
        });

        // 5. Trả về response đã có cookie
        return response;

        // --- KẾT THÚC SỬA ---

    } catch (error) {
        return NextResponse.json({ error: "Lỗi hệ thống" }, { status: 500 });
    }
}