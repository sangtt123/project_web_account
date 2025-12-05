import { prisma } from "@/lib/prisma";

// GET: get ưu tiên optionid -> productid
export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id"); // ?id=optionId
        const productId = url.searchParams.get("product_id"); // ?product_id=xxx

        if (id) {
            // GET theo option id
            const option = await prisma.product_options.findUnique({
                where: { id: Number(id) },
            });
            if (!option) {
                return new Response(JSON.stringify({ error: "Option not found" }), { status: 404 });
            }
            return new Response(JSON.stringify(option), { headers: { "Content-Type": "application/json" } });
        }

        // GET tất cả hoặc theo product_id
        const options = await prisma.product_options.findMany({
            where: productId ? { product_id: productId } : undefined,
        });
        return new Response(JSON.stringify(options), { headers: { "Content-Type": "application/json" } });

    } catch (err) {
        console.error("GET product_options error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// POST: tạo mới
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newOption = await prisma.product_options.create({
            data: {
                product_id: body.product_id,
                option_code: body.option_code,
                name: body.name,
                price: body.price,
                original_price: body.original_price,
            },
        });
        return new Response(JSON.stringify(newOption), { status: 201, headers: { "Content-Type": "application/json" } });
    } catch (err) {
        console.error("CREATE product_option error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// PUT: cập nhật theo id
export async function PUT(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        if (!id) {
            return new Response(JSON.stringify({ error: "Missing option id" }), { status: 400 });
        }

        const body = await req.json();
        const updatedOption = await prisma.product_options.update({
            where: { id: Number(id) },
            data: body,
        });

        return new Response(JSON.stringify(updatedOption), { headers: { "Content-Type": "application/json" } });
    } catch (err) {
        console.error("UPDATE product_option error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// DELETE: xóa theo id
export async function DELETE(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        if (!id) {
            return new Response(JSON.stringify({ error: "Missing option id" }), { status: 400 });
        }

        await prisma.product_options.delete({ where: { id: Number(id) } });
        return new Response(JSON.stringify({ message: "Option deleted" }), { status: 200 });
    } catch (err) {
        console.error("DELETE product_option error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
