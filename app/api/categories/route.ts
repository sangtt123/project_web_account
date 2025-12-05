import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Import từ file cấu hình ở Bước 1

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);

        const query = searchParams.get("q") || "";
        const hasPageParam = searchParams.has("page");
        const page = Number(searchParams.get("page")) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        // Điều kiện tìm kiếm
        let whereClause: any = {};
        if (query) {
            whereClause.category_name = {
                contains: query,
                mode: 'insensitive' // Không phân biệt hoa thường
            };
        }

        // TRƯỜNG HỢP 1: Có phân trang (Dùng cho bảng Admin)
        if (hasPageParam) {
            const [categories, total] = await Promise.all([
                prisma.category.findMany({
                    where: whereClause,
                    orderBy: { category_name: 'asc' },
                    take: limit,
                    skip: skip
                }),
                prisma.category.count({ where: whereClause })
            ]);

            return NextResponse.json({
                data: categories,
                pagination: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit)
                }
            });
        }

        // TRƯỜNG HỢP 2: Lấy tất cả (Dùng cho Dropdown ở form thêm sản phẩm)
        else {
            const categories = await prisma.category.findMany({
                where: whereClause,
                orderBy: { category_name: 'asc' }
            });
            return NextResponse.json(categories);
        }

    } catch (error) {
        console.error("GET Category Error:", error);
        return NextResponse.json({ error: "Lỗi lấy danh mục" }, { status: 500 });
    }
}

// 2. POST: Thêm mới
export async function POST(req: Request) {
    try {
        const body = await req.json();
        if (!body.category_name) {
            return NextResponse.json({ error: "Tên danh mục không được để trống" }, { status: 400 });
        }

        const newCat = await prisma.category.create({
            data: {
                category_name: body.category_name
            }
        });
        return NextResponse.json(newCat, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Lỗi thêm danh mục" }, { status: 500 });
    }
}

// 3. PUT: Sửa tên
export async function PUT(req: Request) {
    try {
        const body = await req.json();
        if (!body.id || !body.category_name) {
            return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
        }

        const updatedCat = await prisma.category.update({
            where: { id: Number(body.id) },
            data: { category_name: body.category_name }
        });
        return NextResponse.json(updatedCat);
    } catch (error) {
        return NextResponse.json({ error: "Lỗi cập nhật" }, { status: 500 });
    }
}

// 4. DELETE: Xóa danh mục
export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) return NextResponse.json({ error: "Thiếu ID" }, { status: 400 });

        // Lưu ý: Nếu sản phẩm đang dùng danh mục này, bạn có thể cần logic xử lý (ví dụ: set null hoặc chặn xóa)
        // Ở đây mình xóa thẳng
        await prisma.category.delete({
            where: { id: Number(id) }
        });
        return NextResponse.json({ message: "Đã xóa" });
    } catch (error) {
        return NextResponse.json({ error: "Lỗi xóa (Có thể danh mục đang được sử dụng)" }, { status: 500 });
    }
}