import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    // 1. Dùng await để lấy cookie store
    const cookieStore = await cookies();

    // 2. Sau đó mới get session
    const session = cookieStore.get('admin_session');

    if (!session) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    try {
        const userData = JSON.parse(session.value);
        return NextResponse.json({
            authenticated: true,
            user: userData
        });
    } catch {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }
}