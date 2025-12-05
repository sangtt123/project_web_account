import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Dòng này để báo Next.js không được cache API này (Luôn lấy số liệu mới nhất)
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // Chạy song song 4 câu lệnh query để tiết kiệm thời gian
        const [revenue, totalOrders, soldStock, availableStock] = await Promise.all([

            // 1. Tính tổng Doanh thu (Chỉ tính các đơn đã PAID)
            prisma.order.aggregate({
                _sum: { total_amount: true },
                where: { status: process.env.NEXT_PUBLIC_STATUS_ODR_PAID }
            }),

            // 2. Đếm tổng số đơn hàng
            prisma.order.count(),

            // 3. Đếm số account ĐÃ BÁN
            prisma.account.count({
                where: { is_sold: true }
            }),

            // 4. Đếm số account CÒN TRONG KHO (Tồn kho)
            prisma.account.count({
                where: { is_sold: false }
            })
        ]);

        return NextResponse.json({
            totalRevenue: revenue._sum.total_amount || 0, // Nếu null thì trả về 0
            totalOrders,
            soldStock,
            availableStock
        });

    } catch (error) {
        console.error("Stats Error:", error);
        return NextResponse.json({ error: "Lỗi lấy thống kê" }, { status: 500 });
    }
}