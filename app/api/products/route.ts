import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Bắt buộc dòng này để dữ liệu luôn mới nhất
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);

        const id = searchParams.get("id");
        const query = searchParams.get("q") || "";

        const hasPageParam = searchParams.has("page");
        const page = Number(searchParams.get("page")) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        // --- CẤU HÌNH INCLUDE CHUNG (Để lấy đủ Options, Features, Guides) ---
        const commonInclude = {
            product_options: true,
            product_features: true, // <--- MỚI: Lấy danh sách tính năng
            product_guides: {       // <--- MỚI: Lấy danh sách hướng dẫn
                orderBy: { step_order: 'asc' as const } // Sắp xếp bước 1, 2, 3...
            }
        };

        // -------------------------------------------------------
        // TRƯỜNG HỢP 1: Lấy chi tiết 1 sản phẩm (theo ID)
        // -------------------------------------------------------
        if (id) {
            const product = await prisma.products.findUnique({
                where: { id },
                include: commonInclude, // Sử dụng include chung
            });

            if (!product) {
                return NextResponse.json({ error: "Product not found" }, { status: 404 });
            }

            return NextResponse.json(product);
        }

        // Điều kiện lọc chung
        let whereClause: any = {};
        if (query) {
            whereClause.OR = [
                { name: { contains: query, mode: 'insensitive' } },
                { id: { contains: query, mode: 'insensitive' } },
                { category: { contains: query, mode: 'insensitive' } }
            ];
        }

        // -------------------------------------------------------
        // TRƯỜNG HỢP 2: Lấy danh sách CÓ PHÂN TRANG (Dùng cho Bảng Admin)
        // -------------------------------------------------------
        if (hasPageParam) {
            const [products, total] = await Promise.all([
                prisma.products.findMany({
                    where: whereClause,
                    orderBy: { created_at: 'desc' },
                    include: commonInclude, // Sử dụng include chung
                    take: limit,
                    skip: skip
                }),
                prisma.products.count({ where: whereClause })
            ]);

            return NextResponse.json({
                data: products,
                pagination: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit)
                }
            });
        }

        // -------------------------------------------------------
        // TRƯỜNG HỢP 3: Lấy TOÀN BỘ danh sách (Dùng cho Dropdown nhập kho)
        // -------------------------------------------------------
        else {
            const products = await prisma.products.findMany({
                where: whereClause,
                orderBy: { name: 'asc' },
                include: commonInclude // Sử dụng include chung
            });

            return NextResponse.json(products);
        }

    } catch (err) {
        console.error("GET product error:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// ... (Giữ nguyên các hàm POST, PUT, DELETE bên dưới)

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Check required fields
        if (!body.id || !body.name) {
            return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
        }

        const newProduct = await prisma.products.create({
            data: {
                id: body.id,
                name: body.name,
                description: body.description,
                long_description: body.long_description,
                youtube_video_id: body.youtube_video_id,
                price: Number(body.price),
                original_price: body.original_price ? Number(body.original_price) : null,
                thumbnail: body.thumbnail,
                category: body.category,

                // --- THÊM OPTIONS KHI TẠO ---
                product_options: {
                    create: body.options?.map((opt: any) => ({
                        name: opt.name,
                        price: Number(opt.price),
                        original_price: opt.original_price ? Number(opt.original_price) : null,
                        option_code: opt.option_code || null
                    })) || [] // Nếu không có options thì mảng rỗng
                },
                // Tạo Features
                product_features: {
                    create: body.product_features?.map((f: string) => ({ feature: f })) || []
                },
                // Tạo Guides
                product_guides: {
                    create: body.product_guides?.map((g: string, index: number) => ({
                        step_order: index + 1,
                        step_text: g
                    })) || []
                }
            },
            include: {
                product_options: true,
                product_features: true,
                product_guides: true
            } // Trả về cả options vừa tạo
        });

        return NextResponse.json(newProduct, { status: 201 });
    } catch (err: any) {
        console.error("CREATE Error:", err);
        if (err.code === 'P2002') {
            return NextResponse.json({ error: "ID sản phẩm đã tồn tại" }, { status: 400 });
        }
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        if (!body.id) return NextResponse.json({ error: "Thiếu ID" }, { status: 400 });

        // Dùng transaction để: Xóa hết cái cũ -> Tạo cái mới
        await prisma.$transaction([
            // 1. Xóa Options cũ (nếu muốn reset option) - Ở đây mình giữ logic cũ là chỉ update product chính,
            // nhưng với Features/Guides thì nên xóa đi tạo lại cho dễ quản lý thứ tự.
            prisma.product_options.deleteMany({ where: { product_id: body.id } }),
            prisma.product_features.deleteMany({ where: { product_id: body.id } }),
            prisma.product_guides.deleteMany({ where: { product_id: body.id } }),
            // Update thông tin sản phẩm chính
            prisma.products.update({
                where: { id: body.id },
                data: {
                    name: body.name,
                    description: body.description,
                    long_description: body.long_description,
                    price: Number(body.price),
                    original_price: body.original_price ? Number(body.original_price) : null,
                    thumbnail: body.thumbnail,
                    category: body.category,
                    youtube_video_id: body.youtube_video_id,
                    product_options: {
                        create: body.options?.map((opt: any) => ({
                            name: opt.name,
                            price: Number(opt.price),
                            original_price: opt.original_price ? Number(opt.original_price) : null,
                            option_code: opt.option_code || null
                        })) || [] // Nếu không có options thì mảng rỗng
                    },
                    // Re-create Features
                    product_features: {
                        create: body.product_features?.map((f: string) => ({ feature: f })) || []
                    },
                    // Re-create Guides
                    product_guides: {
                        create: body.product_guides?.map((g: string, index: number) => ({
                            step_order: index + 1,
                            step_text: g
                        })) || []
                    }
                }
            })
        ]);

        return NextResponse.json({ message: "Update thành công" });
    } catch (err) {
        return NextResponse.json({ error: "Lỗi update" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        if (!id) return NextResponse.json({ error: "Thiếu ID" }, { status: 400 });

        // Xóa các bảng con trước (nếu chưa set cascade DB)
        await prisma.$transaction([
            prisma.product_options.deleteMany({ where: { product_id: id } }),
            prisma.product_features.deleteMany({ where: { product_id: id } }),
            prisma.product_guides.deleteMany({ where: { product_id: id } }),
            prisma.products.delete({ where: { id } })
        ]);

        return NextResponse.json({ message: "Đã xóa thành công" });
    } catch (err) {
        return NextResponse.json({ error: "Lỗi xóa sản phẩm" }, { status: 500 });
    }
}