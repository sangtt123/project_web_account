import { NextResponse } from "next/server";
import { cartService } from "@/services/cartService"; // import service

export async function GET() {
    // Trả về cart (chỉ ví dụ, sẽ lấy từ server memory)
    const cart = cartService.getCart();
    return NextResponse.json(cart);
}

export async function POST(request: Request) {
    // Thêm sản phẩm vào cart
    const body = await request.json();
    const { product, quantity, option } = body;

    cartService.addToCart(product, quantity, option);

    return NextResponse.json({ success: true, cart: cartService.getCart() });
}

export async function PUT(request: Request) {
    const body = await request.json();
    const { productId, quantity, optionId } = body;

    cartService.updateQuantity(productId, quantity, optionId);
    return NextResponse.json({ success: true, cart: cartService.getCart() });
}

export async function DELETE(request: Request) {
    const body = await request.json();
    const { productId, optionId } = body;

    cartService.removeFromCart(productId, optionId);
    return NextResponse.json({ success: true, cart: cartService.getCart() });
}
