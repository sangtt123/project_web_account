'use client'; // nếu bạn dùng App Router, cần đánh dấu component này là client

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cartService } from '@/services/cartService';
import { CartItem } from '@/types';
import { formatCurrency } from '@/utils/format';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Tag } from 'lucide-react';

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Cuộn lên đầu trang khi vào giỏ hàng
        window.scrollTo(0, 0);

        setCartItems(cartService.getCart());
        const unsubscribe = cartService.subscribe(() => {
            setCartItems(cartService.getCart());
        });
        return () => unsubscribe();
    }, []);

    const totalAmount = cartService.getTotalPrice();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="text-center">
                    <div className="bg-white p-6 rounded-full inline-block mb-4 shadow-sm">
                        <ShoppingBag className="w-12 h-12 text-gray-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Giỏ hàng trống</h2>
                    <p className="text-gray-500 mb-6">Bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
                    <Link href="/" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                        <ArrowRight className="w-4 h-4" /> Tiếp tục mua sắm
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-8">Giỏ hàng của bạn</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="lg:w-2/3 space-y-4">
                        {cartItems.map((item, idx) => {
                            const price = item.selectedOption ? item.selectedOption.price : item.product.price;
                            const optionId = item.selectedOption?.id;

                            return (
                                <div key={`${item.product.id}-${optionId || 'default'}-${idx}`} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center">
                                    <img src={item.product.thumbnail} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg bg-gray-100" />

                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base">{item.product.name}</h3>
                                        {item.selectedOption && (
                                            <div className="flex items-center gap-1 mt-1">
                                                <Tag className="w-3 h-3 text-indigo-500" />
                                                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                                    {item.selectedOption.name}
                                                </span>
                                            </div>
                                        )}
                                        <p className="text-indigo-600 font-bold text-sm mt-1">{formatCurrency(price)}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center border border-gray-200 rounded-lg">
                                            <button
                                                onClick={() => cartService.updateQuantity(item.product.id, item.quantity - 1, optionId)}
                                                className="p-2 text-gray-500 hover:bg-gray-50"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-8 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                                            <button
                                                onClick={() => cartService.updateQuantity(item.product.id, item.quantity + 1, optionId)}
                                                className="p-2 text-gray-500 hover:bg-gray-50"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => cartService.removeFromCart(item.product.id, optionId)}
                                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Summary Box */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="font-bold text-gray-900 mb-4">Tổng quan đơn hàng</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Tạm tính</span>
                                    <span>{formatCurrency(totalAmount)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Giảm giá</span>
                                    <span>0 đ</span>
                                </div>
                                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-lg">
                                    <span>Tổng cộng</span>
                                    <span className="text-indigo-600">{formatCurrency(totalAmount)}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => router.push('/checkout/cart')}
                                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                Tiến hành thanh toán <ArrowRight className="w-4 h-4" />
                            </button>

                            <div className="mt-4 text-xs text-center text-gray-400">
                                Cam kết bảo mật thông tin & Giao hàng tự động
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
