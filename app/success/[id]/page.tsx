"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { cartService } from '@/services/cartService';
import { CheckCircle, Copy, Loader2, AlertTriangle, Home, Phone, Mail, Package } from 'lucide-react';

// 1. ĐỊNH NGHĨA TYPE NGAY TẠI ĐÂY (Để đảm bảo khớp với Backend)
interface Account {
    id: number;
    username: string;
    password: string;
}

interface OrderItem {
    id: number;
    productName: string;
    quantity: number;
    price: number;
    account: Account[]; // Quan trọng: Mảng account nằm trong OrderItem
}

interface OrderData {
    id: string | number;
    status: string;
    order_item: OrderItem[]; // Quan trọng: Tên field là order_item (do Prisma)
    user_email?: string;
}

const OrderSuccess: React.FC = () => {
    const router = useRouter();
    const params = useParams();

    // Xử lý ID an toàn (tránh trường hợp undefined hoặc array)
    const orderId = Array.isArray(params?.id) ? params.id[0] : params?.id;

    const [order, setOrder] = useState<OrderData | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (!orderId) return;

        const verifyAndUpdateOrder = async () => {
            try {
                setLoading(true);

                // Gọi API Verify (API này trả về dữ liệu đã include order_item và account)
                const res = await fetch('/api/orders/verify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ orderId: Number(orderId) }) // Chuyển sang Number nếu DB dùng Int
                });

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.error || 'Không thể xác thực đơn hàng');
                }

                if (data.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID) {
                    setOrder(data.data); // data.data chính là OrderData đã define ở trên
                    cartService.clearCart(); // Xóa giỏ hàng
                } else {
                    setErrorMsg(`Trạng thái đơn hàng: ${data.status} (Chưa thanh toán)`);
                }

            } catch (e: any) {
                console.error("Lỗi:", e);
                setErrorMsg(e.message || "Đã có lỗi xảy ra");
            } finally {
                setLoading(false);
            }
        };

        verifyAndUpdateOrder();
    }, [orderId]);

    // --- RENDER UI ---

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
                <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                <p className="text-gray-600 font-medium">Đang xác thực giao dịch...</p>
            </div>
        );
    }

    // Nếu có lỗi HOẶC không có dữ liệu order
    if (errorMsg || !order || order.status !== process.env.NEXT_PUBLIC_STATUS_ODR_PAID) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
                <AlertTriangle className="w-12 h-12 text-red-500" />
                <h2 className="text-xl font-bold text-gray-900">Thanh toán chưa hoàn tất</h2>
                <p className="text-gray-500">{errorMsg || "Không tìm thấy thông tin đơn hàng."}</p>
                {/* KHỐI LIÊN HỆ HỖ TRỢ */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100 text-left">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Bạn gặp sự cố? Liên hệ hỗ trợ ngay:</p>

                    <div className="space-y-3">
                        <a
                            href="tel:0909123456" // Sửa số điện thoại của bạn
                            className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors p-2 hover:bg-white rounded-lg"
                        >
                            <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center">
                                <Phone className="w-4 h-4 text-indigo-600" />
                            </div>
                            <div>
                                <span className="text-xs text-gray-400 block">Hotline / Zalo</span>
                                <span className="font-medium">{process.env.NEXT_PUBLIC_PHONE_LH || "0000.000.000"}</span>
                            </div>
                        </a>

                        <a
                            href="mailto:support@shopacc.com" // Sửa email của bạn
                            className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors p-2 hover:bg-white rounded-lg"
                        >
                            <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center">
                                <Mail className="w-4 h-4 text-indigo-600" />
                            </div>
                            <div>
                                <span className="text-xs text-gray-400 block">Email hỗ trợ</span>
                                <span className="font-medium">{process.env.NEXT_PUBLIC_MAIL_LH || "test@gmail.com"}</span>
                            </div>
                        </a>
                    </div>
                </div>
                <button
                    onClick={() => router.push('/')}
                    className="text-indigo-600 hover:underline mt-2"
                >
                    Quay lại trang chủ
                </button>
            </div>
        );
    }

    // Giao diện Thành công
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Thanh toán thành công!</h1>
                    <p className="text-gray-500 mb-8 text-sm">Mã đơn hàng: #{order.id}</p>

                    {/* DANH SÁCH SẢN PHẨM & TÀI KHOẢN */}
                    <div className="text-left space-y-6">
                        {/* Kiểm tra mảng order_item có tồn tại không trước khi map */}
                        {order.order_item && order.order_item.length > 0 ? (
                            order.order_item.map((item, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                    <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-4">
                                        <Package className="w-5 h-5 text-indigo-600" />
                                        {item.productName}
                                        <span className="text-sm font-normal text-gray-500 bg-white px-2 py-0.5 rounded border">
                                            x{item.quantity}
                                        </span>
                                    </h3>

                                    <div className="grid gap-4">
                                        {/* Kiểm tra mảng account có tồn tại không */}
                                        {item.account && item.account.length > 0 ? (
                                            item.account.map((acc, accIdx) => (
                                                <div key={accIdx} className="bg-indigo-900 rounded-lg p-4 relative overflow-hidden group shadow-sm">
                                                    {/* Decorative blur */}
                                                    <div className="absolute top-0 right-0 p-16 bg-white/5 rounded-full -mr-8 -mt-8 blur-2xl"></div>

                                                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                        <div className="space-y-2 overflow-hidden">
                                                            <div className="flex items-center gap-2">
                                                                <span className="px-2 py-0.5 rounded bg-indigo-800 text-indigo-200 text-[10px] uppercase tracking-wider font-bold">
                                                                    Account {accIdx + 1}
                                                                </span>
                                                            </div>
                                                            <div className="grid grid-cols-[60px_1fr] gap-2 text-sm">
                                                                <span className="text-indigo-300">User:</span>
                                                                <span className="text-white font-mono truncate">{acc.username}</span>

                                                                <span className="text-indigo-300">Pass:</span>
                                                                <span className="text-white font-mono truncate">{acc.password}</span>
                                                            </div>
                                                        </div>

                                                        <button
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(`${acc.username}|${acc.password}`);
                                                                // Có thể thêm toast notification ở đây
                                                            }}
                                                            className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-all active:scale-95 whitespace-nowrap"
                                                        >
                                                            <Copy className="w-3.5 h-3.5" />
                                                            Copy
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-yellow-600 text-sm italic p-2 bg-yellow-50 rounded">
                                                Đang cập nhật kho tài khoản... Vui lòng kiểm tra email sau ít phút.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">Không có sản phẩm nào trong đơn hàng này.</p>
                        )}
                    </div>

                    {order.user_email && (
                        <p className="text-sm text-gray-500 mt-8 bg-blue-50 p-3 rounded-lg inline-block">
                            Thông tin chi tiết cũng đã được gửi đến email: <span className="font-semibold text-blue-700">{order.user_email}</span>
                        </p>
                    )}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => router.push('/')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 border border-indigo-200 transition-colors shadow-sm"
                    >
                        <Home className="w-4 h-4" />
                        Tiếp tục mua sắm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;