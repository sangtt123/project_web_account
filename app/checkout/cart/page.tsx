'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cartService } from '@/services/cartService';
import { Loader2, CreditCard } from 'lucide-react';

// Helper format tiền
const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const CheckoutCart: React.FC = () => {
    const router = useRouter();
    const [itemsToCheckout, setItemsToCheckout] = useState<any[]>([]); // Dùng any tạm để linh hoạt map field
    const [totalAmount, setTotalAmount] = useState(0);
    const [email, setEmail] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const cart = cartService.getCart();
        if (cart.length === 0) {
            router.push('/cart');
            return;
        }

        // Map dữ liệu từ Cart sang cấu trúc OrderItem mà API mong đợi
        const items = cart.map(c => {
            const price = c.selectedOption ? c.selectedOption.price : c.product.price;

            // Logic tên sản phẩm hiển thị
            const name = c.product.name;

            return {
                productId: c.product.id,
                productName: name,

                // Quan trọng: Truyền thông tin Option
                optionId: c.selectedOption?.id || 'default', // Nếu không có option thì để default
                optionName: c.selectedOption?.name || 'Mặc định',

                price: price,
                quantity: c.quantity,
                thumbnail: c.product.thumbnail,
            };
        });

        setItemsToCheckout(items);
        setTotalAmount(cartService.getTotalPrice());
    }, [mounted, router]);

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsProcessing(true);
        setStatusMessage('Đang khởi tạo đơn hàng...');

        try {
            // BƯỚC 1: Gọi API tạo đơn hàng trong Database
            const createOrderRes = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: itemsToCheckout,
                    email: email,
                    totalAmount: totalAmount
                })
            });

            if (!createOrderRes.ok) {
                const err = await createOrderRes.json();
                throw new Error(err.error || 'Lỗi tạo đơn hàng');
            }

            const orderData = await createOrderRes.json();
            // orderData sẽ trả về: { id: "uuid...", orderCode: 123456, ... }

            // BƯỚC 2: Gọi API tạo link thanh toán PayOS
            setStatusMessage('Đang kết nối cổng thanh toán...');

            const paymentRes = await fetch('/api/payment/create-link', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId: orderData.order_code, // PayOS cần orderCode (số), KHÔNG dùng id (uuid)
                    amount: totalAmount,
                    description: `Thanh toan don ${orderData.order_code}`
                })
            });

            if (!paymentRes.ok) {
                const err = await paymentRes.json();
                throw new Error(err.error || 'Lỗi tạo link thanh toán');
            }

            const paymentData = await paymentRes.json();

            // BƯỚC 3: Chuyển hướng sang trang thanh toán của PayOS
            if (paymentData.checkoutUrl) {
                setStatusMessage('Đang chuyển hướng...');
                window.location.href = paymentData.checkoutUrl; // Redirect
            } else {
                throw new Error('Không lấy được link thanh toán');
            }

        } catch (error: any) {
            console.error('Thanh toán thất bại:', error);
            alert(`Lỗi: ${error.message}`);
            setIsProcessing(false);
            setStatusMessage('');
        }
    };

    if (!mounted || itemsToCheckout.length === 0) return null;

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gray-900 p-6 text-center">
                    <h2 className="text-white font-bold text-xl">Thanh Toán An Toàn</h2>
                    <p className="text-gray-400 text-sm mt-1">Hệ thống tự động 24/7</p>
                </div>

                {!isProcessing ? (
                    <div className="p-8">
                        {/* Danh sách sản phẩm */}
                        <div className="bg-gray-50 rounded-lg p-4 mb-6 max-h-60 overflow-y-auto scrollbar-thin">
                            {itemsToCheckout.map((item, idx) => (
                                <div key={idx} className="flex gap-3 items-center mb-3 last:mb-0">
                                    <img
                                        src={item.thumbnail || "https://placehold.co/50"}
                                        className="w-10 h-10 rounded bg-gray-200 object-cover"
                                        alt=""
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-gray-900 truncate">{item.productName}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded">
                                                {item.optionName}
                                            </span>
                                            <span>x{item.quantity}</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-indigo-600 whitespace-nowrap">
                                        {formatCurrency(item.price * item.quantity)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Tổng tiền */}
                        <div className="flex justify-between items-center mb-6 border-t border-gray-100 pt-4">
                            <span className="font-bold text-gray-700">Tổng thanh toán:</span>
                            <span className="font-bold text-2xl text-indigo-600">{formatCurrency(totalAmount)}</span>
                        </div>

                        {/* Form nhập Email */}
                        <form onSubmit={handleCheckout} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email nhận tài khoản</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Nhập email của bạn..."
                                    className="text-gray-950 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                />
                                <p className="text-xs text-gray-500 mt-2 bg-yellow-50 p-2 rounded border border-yellow-100 text-yellow-700">
                                    ⚠️ Quan trọng: Tài khoản & Mật khẩu sẽ được gửi về email này và hiển thị ngay sau khi thanh toán thành công.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2"
                            >
                                <CreditCard className="w-5 h-5" />
                                Thanh toán qua QR Code
                            </button>
                        </form>
                    </div>
                ) : (
                    // Màn hình loading khi đang xử lý
                    <div className="p-12 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Loader2 className="w-6 h-6 text-indigo-600 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">Đang xử lý...</h3>
                        <p className="text-indigo-600 font-medium animate-pulse">{statusMessage}</p>
                        <p className="text-gray-400 text-xs mt-8">Vui lòng không tắt trình duyệt</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutCart;