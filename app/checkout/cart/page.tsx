'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cartService } from '@/services/cartService';
import {
    Loader2, QrCode, Wallet, Bitcoin, CheckCircle2,
    ShieldCheck, ChevronRight, Mail, CreditCard, ShoppingBag, ArrowRight
} from 'lucide-react';
import PayPalPaymentSection from '@/components/PayPalPaymentSection'; // Đảm bảo đường dẫn đúng

// --- TYPE & CONFIG ---
type PaymentMethod = 'PAYOS' | 'PAYPAL' | 'CRYPTO';

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const CheckoutCart: React.FC = () => {
    const router = useRouter();
    const [itemsToCheckout, setItemsToCheckout] = useState<any[]>([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [email, setEmail] = useState('');

    // State chọn phương thức thanh toán
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('PAYOS');

    // State lưu đơn hàng sau khi tạo thành công (Dùng cho luồng PayPal)
    const [createdOrder, setCreatedOrder] = useState<any>(null);

    const [isProcessing, setIsProcessing] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Reset createdOrder nếu người dùng đổi phương thức thanh toán
    useEffect(() => {
        setCreatedOrder(null);
    }, [paymentMethod]);

    useEffect(() => {
        if (!mounted) return;
        const cart = cartService.getCart();
        if (cart.length === 0) {
            router.push('/cart');
            return;
        }

        const items = cart.map(c => {
            const price = c.selectedOption ? c.selectedOption.price : c.product.price;
            return {
                productId: c.product.id,
                productName: c.product.name,
                optionId: c.selectedOption?.id || 'default',
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

        // Đang update
        if (paymentMethod === 'CRYPTO') {
            alert("Chuẩn bị ra mắt, chưa thể thanh toán!");
            return;

        }

        if (!email) {
            alert("Vui lòng nhập Email để nhận tài khoản!");
            return;
        }

        setIsProcessing(true);
        setStatusMessage('Đang khởi tạo đơn hàng...');

        try {
            // -------------------------------------------------------
            // BƯỚC 1: LUÔN TẠO ĐƠN HÀNG TRONG DB TRƯỚC (Status: PENDING)
            // -------------------------------------------------------
            const createOrderRes = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: itemsToCheckout,
                    email: email,
                    totalAmount: totalAmount,
                    paymentMethod: paymentMethod
                })
            });

            if (!createOrderRes.ok) {
                const err = await createOrderRes.json();
                throw new Error(err.error || 'Lỗi tạo đơn hàng');
            }

            const orderData = await createOrderRes.json();

            // -------------------------------------------------------
            // BƯỚC 2: PHÂN LUỒNG XỬ LÝ
            // -------------------------------------------------------

            // === CASE A: PAYPAL ===
            if (paymentMethod === 'PAYPAL') {
                // Lưu thông tin đơn hàng lại để hiển thị nút PayPal
                setCreatedOrder(orderData);
                setIsProcessing(false); // Dừng loading để UI render nút PayPal
                setStatusMessage('');
                return; // DỪNG LẠI TẠI ĐÂY, KHÔNG REDIRECT
            }

            // === CASE B: PAYOS / CRYPTO (Cần Redirect) ===
            setStatusMessage('Đang kết nối cổng thanh toán...');
            let paymentUrl = '';

            if (paymentMethod === 'PAYOS') {
                const paymentRes = await fetch('/api/payment/create-link', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        orderId: orderData.order_code, // Lưu ý: PayOS dùng order_code (số int)
                        amount: totalAmount,
                        description: `Thanh toan don ${orderData.order_code}`
                    })
                });
                const data = await paymentRes.json();
                if (!paymentRes.ok) throw new Error(data.error);
                paymentUrl = data.checkoutUrl;

            } else if (paymentMethod === 'CRYPTO') {
                const paymentRes = await fetch('/api/payment/crypto/create-charge', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        orderId: orderData.id,
                        amount: totalAmount,
                        email: email
                    })
                });
                const data = await paymentRes.json();
                if (!paymentRes.ok) throw new Error(data.error);
                paymentUrl = data.hostedUrl;
            }

            // Redirect cho PayOS/Crypto
            if (paymentUrl) {
                setStatusMessage('Đang chuyển hướng...');
                window.location.href = paymentUrl;
            } else {
                throw new Error('Không lấy được link thanh toán');
            }

        } catch (error: any) {
            console.error('Lỗi:', error);
            alert(`Lỗi: ${error.message}`);
            setIsProcessing(false);
            setStatusMessage('');
        }
    };

    if (!mounted || itemsToCheckout.length === 0) return null;

    // --- SUB-COMPONENT: RADIO CARD ---
    const PaymentMethodCard = ({
        method, icon: Icon, label, desc, themeClass
    }: {
        method: PaymentMethod, icon: any, label: string, desc: string, themeClass: string
    }) => {
        const isSelected = paymentMethod === method;
        return (
            <div
                onClick={() => setPaymentMethod(method)}
                className={`
                    relative cursor-pointer rounded-xl border p-4 flex items-center gap-4 transition-all duration-200 group
                    ${isSelected
                        ? `border-transparent ring-2 ring-offset-1 ${themeClass} bg-white shadow-md`
                        : 'border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-white'
                    }
                `}
            >
                <div className={`
                    p-3 rounded-lg transition-colors
                    ${isSelected ? 'bg-current/10 text-current' : 'bg-white text-gray-500 group-hover:text-gray-700 shadow-sm'}
                    ${isSelected ? themeClass.replace('ring-', 'text-') : ''} 
                `}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <p className={`font-semibold text-sm ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                        {label}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
                <div className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                    ${isSelected ? `border-current ${themeClass.replace('ring-', 'text-')}` : 'border-gray-300'}
                `}>
                    {isSelected && <div className={`w-2.5 h-2.5 rounded-full bg-current`} />}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 flex items-center gap-3">
                    <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200">
                        <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Thanh toán</h1>
                        <p className="text-sm text-gray-500">Hoàn tất đơn hàng của bạn một cách an toàn</p>
                    </div>
                </div>

                <form onSubmit={handleCheckout} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* CỘT TRÁI */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-800 mb-5 flex items-center gap-2 pb-3 border-b border-gray-100">
                                <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">1</span>
                                Thông tin nhận tài khoản
                            </h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email của bạn <span className='text-red-500'>*</span>
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        // Nếu đã tạo đơn rồi thì không cho sửa email nữa
                                        disabled={!!createdOrder}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all sm:text-sm disabled:bg-gray-100 disabled:text-gray-500"
                                    />
                                </div>
                                <div className="mt-3 flex items-start gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-lg text-xs">
                                    <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <p>Tài khoản và thông tin đăng nhập sẽ được gửi tự động qua email này ngay sau khi thanh toán thành công.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-800 mb-5 flex items-center gap-2 pb-3 border-b border-gray-100">
                                <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">2</span>
                                Chọn phương thức thanh toán
                            </h3>
                            {/* Nếu đã tạo đơn (cho PayPal) thì disable chọn phương thức khác */}
                            <div className={`space-y-3 ${createdOrder ? 'opacity-50 pointer-events-none' : ''}`}>
                                <PaymentMethodCard
                                    method="PAYOS"
                                    icon={QrCode}
                                    label="Chuyển khoản Ngân hàng (VietQR)"
                                    desc="Quét mã QR, tự động xác nhận trong 5s"
                                    themeClass="ring-indigo-500 text-indigo-600"
                                />
                                <PaymentMethodCard
                                    method="PAYPAL"
                                    icon={Wallet}
                                    label="PayPal / Thẻ Quốc tế"
                                    desc="Thanh toán an toàn qua cổng PayPal"
                                    themeClass="ring-[#0070BA] text-[#0070BA]"
                                />
                                <PaymentMethodCard
                                    method="CRYPTO"
                                    icon={Bitcoin}
                                    label="Tiền điện tử (Crypto)"
                                    desc="BTC, ETH, USDT qua Coinbase Commerce"
                                    themeClass="ring-[#F7931A] text-[#F7931A]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CỘT PHẢI */}
                    <div className="lg:col-span-5 sticky top-8">
                        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                            <div className="p-6 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                    <ShoppingBag className="w-5 h-5 text-gray-500" />
                                    Đơn hàng ({itemsToCheckout.length})
                                </h3>
                                {!createdOrder && (
                                    <button type="button" onClick={() => router.push('/cart')} className="text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline">
                                        Chỉnh sửa
                                    </button>
                                )}
                            </div>

                            <div className="p-6 max-h-[400px] overflow-y-auto custom-scrollbar">
                                <div className="space-y-4">
                                    {itemsToCheckout.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 bg-white flex-shrink-0">
                                                <img
                                                    src={item.thumbnail || "https://placehold.co/64"}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    alt={item.productName}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                <h4 className="text-sm font-semibold text-gray-900 truncate" title={item.productName}>
                                                    {item.productName}
                                                </h4>
                                                <div className="flex items-center text-xs text-gray-500 mt-1 gap-2">
                                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{item.optionName}</span>
                                                    <span>x{item.quantity}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center text-right">
                                                <span className="text-sm font-bold text-gray-900">{formatCurrency(item.price * item.quantity)}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-2 text-sm">
                                    <span className="text-gray-500">Tạm tính</span>
                                    <span className="font-medium text-gray-900">{formatCurrency(totalAmount)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-6 text-sm">
                                    <span className="text-gray-500">Giảm giá</span>
                                    <span className="font-medium text-green-600">-0đ</span>
                                </div>

                                <div className="flex justify-between items-end border-t border-dashed border-gray-300 pt-4 mb-6">
                                    <div>
                                        <span className="block text-gray-600 text-sm font-medium">Tổng thanh toán</span>
                                        {paymentMethod !== 'PAYOS' && (
                                            <span className="text-[10px] text-gray-400 mt-1 block">Tỷ giá tự động quy đổi</span>
                                        )}
                                    </div>
                                    <span className="text-2xl font-extrabold text-indigo-600 tracking-tight">
                                        {formatCurrency(totalAmount)}
                                    </span>
                                </div>

                                {/* --- KHU VỰC NÚT THANH TOÁN (LOGIC MỚI) --- */}

                                {isProcessing ? (
                                    <button disabled className="w-full bg-gray-900/5 text-gray-400 font-bold py-4 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed transition-all">
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>{statusMessage}</span>
                                    </button>
                                ) : (
                                    // LOGIC CÓ ĐIỀU KIỆN
                                    <>
                                        {/* TRƯỜNG HỢP 1: PAYPAL + ĐÃ TẠO ĐƠN -> HIỆN NÚT PAYPAL */}
                                        {paymentMethod === 'PAYPAL' && createdOrder ? (
                                            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                                <div className="bg-blue-50 text-blue-800 text-xs px-3 py-2 rounded-lg mb-2 text-center border border-blue-100">
                                                    Đơn hàng #{createdOrder.id} đã được tạo. Vui lòng thanh toán bên dưới:
                                                </div>
                                                <PayPalPaymentSection
                                                    orderId={createdOrder.id}
                                                    amount={totalAmount}
                                                    onSuccess={() => router.push(`/success/${createdOrder.order_code}`)}
                                                />
                                            </div>
                                        ) : (
                                            // TRƯỜNG HỢP 2: NÚT MẶC ĐỊNH (Tạo đơn hoặc PayOS/Crypto)
                                            <button
                                                type="submit"
                                                className={`
                                                    group w-full font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all duration-300 flex items-center justify-center gap-2 text-white relative overflow-hidden
                                                    ${paymentMethod === 'PAYOS' ? 'bg-indigo-600 hover:bg-indigo-700' : ''}
                                                    ${paymentMethod === 'PAYPAL' ? 'bg-[#0070BA] hover:bg-[#003087]' : ''}
                                                    ${paymentMethod === 'CRYPTO' ? 'bg-[#F7931A] hover:bg-[#E0820B]' : ''}
                                                `}
                                            >
                                                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-in-out -skew-x-12 -translate-x-full" />
                                                <span className="relative">
                                                    {paymentMethod === 'PAYPAL' ? 'Tiếp tục' : 'Thanh toán ngay'}
                                                    {/* {paymentMethod === 'PAYPAL' ? 'Tiếp tục' : 'Chuẩn bị ra mắt'} */}
                                                </span>
                                                {paymentMethod === 'PAYPAL' ? (
                                                    <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                                                ) : (
                                                    <ChevronRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                                                )}
                                            </button>
                                        )}
                                    </>
                                )}

                                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                                    <ShieldCheck className="w-3 h-3" />
                                    Bảo mật thanh toán 256-bit SSL
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutCart;