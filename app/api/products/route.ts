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

        const prodId = body.id;

        // BƯỚC 1: Tìm các Option ID hiện có trong DB để biết cái nào cần xóa
        const currentOptions = await prisma.product_options.findMany({
            where: { product_id: prodId },
            select: { id: true }
        });
        const currentIds = currentOptions.map(o => o.id);

        // BƯỚC 2: Lọc ra các ID được gửi lên từ Frontend
        // (Lưu ý: lọc bỏ các ID giả 'NEW-...' nếu bạn dùng cách đó)
        const incomingOptions = body.options || [];
        const incomingIds = incomingOptions
            .filter((o: any) => o.id && !o.id.toString().startsWith('NEW')) // Logic lọc ID giả nếu có
            .map((o: any) => o.id);

        // BƯỚC 3: Xác định các ID cần xóa (Có trong DB nhưng không có trong list gửi lên)
        const idsToDelete = currentIds.filter(id => !incomingIds.includes(id));

        // --- BẮT ĐẦU TRANSACTION ---
        // Chúng ta sẽ gom tất cả lệnh vào một mảng operations
        const operations: any[] = [];

        // 1. Xóa các Option bị user remove
        if (idsToDelete.length > 0) {
            operations.push(prisma.product_options.deleteMany({
                where: { id: { in: idsToDelete } }
            }));
        }

        // 2. Lặp qua từng option gửi lên để quyết định Update hay Create
        incomingOptions.forEach((opt: any) => {
            // Nếu có ID (và không phải ID giả) -> UPDATE
            if (opt.id && !opt.id.toString().startsWith('NEW')) {
                operations.push(prisma.product_options.update({
                    where: { id: opt.id },
                    data: {
                        name: opt.name,
                        price: Number(opt.price),
                        original_price: opt.original_price ? Number(opt.original_price) : null,
                        option_code: opt.option_code || null
                    }
                }));
            }
            // Nếu không có ID (hoặc là ID giả) -> CREATE
            else {
                operations.push(prisma.product_options.create({
                    data: {
                        product_id: prodId, // Link với sản phẩm cha
                        name: opt.name,
                        price: Number(opt.price),
                        original_price: opt.original_price ? Number(opt.original_price) : null,
                        option_code: opt.option_code || null
                    }
                }));
            }
        });

        // 3. Xóa Features và Guides cũ (Giữ nguyên logic của bạn)
        operations.push(prisma.product_features.deleteMany({ where: { product_id: prodId } }));
        operations.push(prisma.product_guides.deleteMany({ where: { product_id: prodId } }));

        // 4. Update thông tin chính của Product + Tạo lại Features/Guides
        operations.push(prisma.products.update({
            where: { id: prodId },
            data: {
                name: body.name,
                description: body.description,
                long_description: body.long_description,
                price: Number(body.price),
                original_price: body.original_price ? Number(body.original_price) : null,
                thumbnail: body.thumbnail,
                category: body.category,
                youtube_video_id: body.youtube_video_id,
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
        }));

        // Chạy tất cả trong 1 transaction
        await prisma.$transaction(operations);

        return NextResponse.json({ message: "Update thành công" });

    } catch (err) {
        console.log("error update:", err);
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