import { prisma } from "@/lib/prisma";

// GET all features hoặc theo id / product_id
export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");           // lấy feature theo id
        const productId = url.searchParams.get("product_id"); // lấy all features theo product_id

        if (id) {
            const feature = await prisma.product_features.findUnique({
                where: { id: Number(id) },
            });

            if (!feature) {
                return new Response(JSON.stringify({ error: "Feature not found" }), { status: 404 });
            }

            return new Response(JSON.stringify(feature), { headers: { "Content-Type": "application/json" } });
        } else if (productId) {
            const features = await prisma.product_features.findMany({
                where: { product_id: productId },
            });

            return new Response(JSON.stringify(features), { headers: { "Content-Type": "application/json" } });
        } else {
            const features = await prisma.product_features.findMany();
            return new Response(JSON.stringify(features), { headers: { "Content-Type": "application/json" } });
        }
    } catch (err) {
        console.error("GET product_features error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// POST tạo feature mới
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newFeature = await prisma.product_features.create({
            data: body, // body chứa product_id và feature
        });

        return new Response(JSON.stringify(newFeature), { headers: { "Content-Type": "application/json" } });
    } catch (err) {
        console.error("CREATE product_features error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// PUT cập nhật feature
export async function PUT(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        if (!id) {
            return new Response(JSON.stringify({ error: "Missing feature id" }), { status: 400 });
        }

        const body = await req.json();
        const updatedFeature = await prisma.product_features.update({
            where: { id: Number(id) },
            data: body,
        });

        return new Response(JSON.stringify(updatedFeature), { headers: { "Content-Type": "application/json" } });
    } catch (err) {
        console.error("UPDATE product_features error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// DELETE feature
export async function DELETE(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        if (!id) {
            return new Response(JSON.stringify({ error: "Missing feature id" }), { status: 400 });
        }

        await prisma.product_features.delete({
            where: { id: Number(id) },
        });

        return new Response(JSON.stringify({ message: "Feature deleted" }), { status: 200 });
    } catch (err) {
        console.error("DELETE product_features error:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
