import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const productId = searchParams.get('product_id');
        const optionId = searchParams.get('option_id'); // Lấy thêm tham số option_id

        if (!productId) {
            return NextResponse.json({ count: 0 });
        }

        // Xây dựng điều kiện lọc linh hoạt
        // Mặc định lọc theo product_id và chưa bán
        const whereClause: any = {
            product_id: productId, // Lưu ý: Kiểm tra xem DB lưu là String hay Int để ép kiểu nếu cần (ví dụ: Number(productId))
            is_sold: false
        };

        // Nếu client gửi lên option_id (tức là đang check tồn kho của 1 option cụ thể)
        // thì thêm điều kiện lọc theo option_id
        if (optionId) {
            whereClause.option_id = optionId;
        }

        const stockCount = await prisma.account.count({
            where: whereClause
        });

        return NextResponse.json({ count: stockCount });
    } catch (error) {
        console.error("Check Stock API Error:", error);
        return NextResponse.json({ count: 0 });
    }
}