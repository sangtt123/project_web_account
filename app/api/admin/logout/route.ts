import { NextResponse } from "next/server";

export async function POST() {
    // 1. Tạo response thành công
    const response = NextResponse.json({ success: true });

    // 2. Xóa cookie trên response này
    response.cookies.delete('admin_session');

    // 3. Trả về response
    return response;
}