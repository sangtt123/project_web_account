import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all accounts hoặc theo id / product_id
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);

        // 1. Lấy các tham số từ URL
        const id = searchParams.get("id");
        const productId = searchParams.get("product_id");
        const query = searchParams.get("q") || ""; // Từ khóa tìm kiếm
        const page = Number(searchParams.get("page")) || 1;
        const limit = 10; // Số lượng bản ghi mỗi trang
        const skip = (page - 1) * limit;

        // TRƯỜNG HỢP 1: Lấy chi tiết 1 account (theo ID)
        if (id) {
            const account = await prisma.account.findUnique({
                where: { id: Number(id) },
            });

            if (!account) {
                return NextResponse.json({ error: "Account not found" }, { status: 404 });
            }
            return NextResponse.json(account);
        }

        // TRƯỜNG HỢP 2: Lấy danh sách (Có lọc, tìm kiếm, phân trang)
        let whereClause: any = {};

        // Nếu có filter theo product_id cụ thể (Dùng cho dropdown lọc nếu sau này cần)
        if (productId) {
            whereClause.product_id = productId;
        }

        // Nếu có từ khóa tìm kiếm (Search Box)
        if (query) {
            whereClause.OR = [
                { username: { contains: query, mode: 'insensitive' } },   // Tìm theo username
                { product_id: { contains: query, mode: 'insensitive' } }, // Tìm theo tên sản phẩm (ID)
            ];
        }

        // Chạy song song 2 câu lệnh: Lấy dữ liệu & Đếm tổng số
        const [accounts, total] = await Promise.all([
            prisma.account.findMany({
                where: whereClause,
                orderBy: { created_at: 'desc' }, // Mới nhất lên đầu
                take: limit,
                skip: skip
            }),
            prisma.account.count({ where: whereClause })
        ]);

        // Trả về dữ liệu chuẩn format cho Frontend
        return NextResponse.json({
            data: accounts,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });

    } catch (err) {
        console.error("GET accounts error:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// POST: Thêm mới (Hỗ trợ cả Thêm lẻ và Thêm nhiều)
export async function POST(req: Request) {
    try {
        const body = await req.json();

        // TRƯỜNG HỢP 1: Thêm danh sách nhiều account (Import Excel)
        if (Array.isArray(body)) {
            const count = await prisma.account.createMany({
                data: body.map((item: any) => ({
                    product_id: item.productId,
                    option_id: String(item.optionId),
                    username: item.username,
                    password: item.password,
                    is_sold: false
                })),
                skipDuplicates: true, // Bỏ qua nếu trùng lặp
            });
            return NextResponse.json({ message: `Đã thêm ${count.count} tài khoản` });
        }

        // TRƯỜNG HỢP 2: Thêm lẻ 1 account (Form nhập tay cũ)
        else {
            const newAccount = await prisma.account.create({
                data: {
                    product_id: body.product_id,
                    option_id: String(body.option_id),
                    username: body.username,
                    password: body.password,
                    is_sold: false
                }
            });
            return NextResponse.json(newAccount);
        }

    } catch (error) {
        console.error("ADD Account Error:", error);
        return NextResponse.json({ error: "Lỗi thêm tài khoản" }, { status: 500 });
    }
}

// 3. PUT: Cập nhật thông tin tài khoản
export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, username, password, is_sold, sold_at } = body;

        if (!id) {
            return NextResponse.json({ error: "Thiếu ID tài khoản" }, { status: 400 });
        }

        const updateData: any = {};
        if (username !== undefined) updateData.username = username;
        if (password !== undefined) updateData.password = password;
        if (is_sold !== undefined) {
            updateData.is_sold = is_sold;
            // Nếu đánh dấu là đã bán mà chưa có ngày bán thì tự điền ngày hiện tại
            if (is_sold && !sold_at) {
                updateData.sold_at = new Date();
            }
            // Nếu đánh dấu là chưa bán thì xóa ngày bán
            if (!is_sold) {
                updateData.sold_at = null;
                updateData.order_item_id = null; // Gỡ bỏ liên kết đơn hàng nếu có
            }
        }

        const updatedAccount = await prisma.account.update({
            where: { id: Number(id) }, // ID là Int
            data: updateData,
        });

        return NextResponse.json(updatedAccount);

    } catch (error) {
        console.error("UPDATE Account Error:", error);
        return NextResponse.json({ error: "Lỗi cập nhật tài khoản" }, { status: 500 });
    }
}

// 4. DELETE: Xóa tài khoản
export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: "Thiếu ID tài khoản" }, { status: 400 });
        }

        await prisma.account.delete({
            where: { id: Number(id) } // Convert sang số
        });

        return NextResponse.json({ message: "Đã xóa tài khoản thành công" });

    } catch (error) {
        console.error("DELETE Account Error:", error);
        return NextResponse.json({ error: "Lỗi xóa tài khoản" }, { status: 500 });
    }
}
