import { prisma } from "@/lib/prisma";

// GET all guides hoặc theo id / product_id
export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");           // lấy guide theo id
        const productId = url.searchParams.get("product_id"); // lấy all guide theo product_id

        if (id) {
            const guide = await prisma.product_guides.findUnique({
                where: { id: Number(id) },
            });

            if (!guide) {
                return new Response(JSON.stringify({ error: "Guide not found" }), { status: 404 });
            }

            return new Response(JSON.stringify(guide), { headers: { "Content-Type": "application/json" } });
        } else if (productId) {
            const guides = await prisma.product_guides.findMany({
                where: { product_id: productId },
                orderBy: { step_order: "asc" },
            });

            return new Response(JSON.stringify(guides), { headers: { "Content-Type": "application/json" } });
        } else {
            const guides = await prisma.product_guides.findMany({
                orderBy: { step_order: "asc" },
            });

            return new Response(JSON.stringify(guides), { headers: { "Content-Type": "application/json" } });
        }
    } catch (err) {
        console.error("GET product_guides error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// POST tạo guide mới
export async function POST(req: Request) {
    try {
        const body = await req.json();

        const newGuide = await prisma.product_guides.create({
            data: body, // body chứa product_id, step_order, step_text
        });

        return new Response(JSON.stringify(newGuide), { headers: { "Content-Type": "application/json" } });
    } catch (err) {
        console.error("CREATE product_guides error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// PUT cập nhật guide
export async function PUT(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        if (!id) {
            return new Response(JSON.stringify({ error: "Missing guide id" }), { status: 400 });
        }

        const body = await req.json();
        const updatedGuide = await prisma.product_guides.update({
            where: { id: Number(id) },
            data: body,
        });

        return new Response(JSON.stringify(updatedGuide), { headers: { "Content-Type": "application/json" } });
    } catch (err) {
        console.error("UPDATE product_guides error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// DELETE guide
export async function DELETE(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        if (!id) {
            return new Response(JSON.stringify({ error: "Missing guide id" }), { status: 400 });
        }

        await prisma.product_guides.delete({
            where: { id: Number(id) },
        });

        return new Response(JSON.stringify({ message: "Guide deleted" }), { status: 200 });
    } catch (err) {
        console.error("DELETE product_guides error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
