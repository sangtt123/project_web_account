import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

// GET: Lấy danh sách
export async function GET() {
    try {
        const slides = await prisma.hero_slides.findMany({ orderBy: { id: 'desc' } });
        return NextResponse.json(slides);
    } catch (e) {
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}

// POST: Thêm mới
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newSlide = await prisma.hero_slides.create({
            data: {
                tag: body.tag,
                title: body.title,
                highlight: body.highlight,
                description: body.description,
                bg_image: body.bg_image,
                gradient: body.gradient,
                btn_color: body.btn_color
            }
        });
        return NextResponse.json(newSlide, { status: 201 });
    } catch (e) {
        return NextResponse.json({ error: "Lỗi thêm" }, { status: 500 });
    }
}

// PUT: Sửa
export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const updatedSlide = await prisma.hero_slides.update({
            where: { id: Number(body.id) },
            data: {
                tag: body.tag,
                title: body.title,
                highlight: body.highlight,
                description: body.description,
                bg_image: body.bg_image,
                gradient: body.gradient,
                btn_color: body.btn_color
            }
        });
        return NextResponse.json(updatedSlide);
    } catch (e) {
        return NextResponse.json({ error: "Lỗi sửa" }, { status: 500 });
    }
}

// DELETE: Xóa
export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        await prisma.hero_slides.delete({ where: { id: Number(searchParams.get("id")) } });
        return NextResponse.json({ message: "Đã xóa" });
    } catch (e) {
        return NextResponse.json({ error: "Lỗi xóa" }, { status: 500 });
    }
}