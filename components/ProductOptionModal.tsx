'use client';
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Product, ProductOption } from '@/types';
import { formatCurrency } from '@/utils/format';
import { cartService } from '@/services/cartService';
import { X, CheckCircle, ShoppingCart, Plus, Package, ShieldCheck, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProductOptionModalProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
}

export const ProductOptionModal: React.FC<ProductOptionModalProps> = ({ product, isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState<ProductOption | null>(null);
    const [fetchedOptions, setFetchedOptions] = useState<ProductOption[]>([]); // State lưu data fetch từ API
    const router = useRouter();
    const imgRef = useRef<HTMLImageElement>(null);

    // LOGIC THÔNG MINH:
    // 1. Ưu tiên lấy options có sẵn từ props (nếu trang chủ đã load)
    // 2. Nếu không có, dùng fetchedOptions (lấy từ API bên dưới)
    const options = (product.product_options && product.product_options.length > 0)
        ? product.product_options
        : fetchedOptions;

    // --- GIỮ LẠI LOGIC FETCH DATA CŨ (Dự phòng) ---
    useEffect(() => {
        if (isOpen && (!product.product_options || product.product_options.length === 0)) {
            const fetchOptions = async () => {
                try {
                    // Gọi API lấy option (nhớ kiểm tra đúng đường dẫn API của bạn)
                    // Ở đây mình map dữ liệu trả về cho khớp với interface ProductOption
                    const res = await fetch(`/api/products?id=${product.id}`);
                    const data = await res.json();

                    if (data && data.product_options) {
                        setFetchedOptions(data.product_options);
                    }
                } catch (err) {
                    console.error("Failed to fetch options:", err);
                }
            };
            fetchOptions();
        }
    }, [isOpen, product]);

    // Tự động chọn option đầu tiên khi có dữ liệu
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (options && options.length > 0 && !selectedOption) {
                setSelectedOption(options[0]);
            }
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen, options, selectedOption]);

    if (!isOpen) return null;

    // Tính toán giá hiển thị
    const currentPrice = selectedOption ? selectedOption.price : product.price;
    const currentOriginalPrice = selectedOption ? selectedOption.original_price : product.original_price;

    const handleAddToCart = () => {
        cartService.addToCart(product, 1, selectedOption || undefined);
        onClose();
    };

    const handleBuyNow = () => {
        cartService.addToCart(product, 1, selectedOption || undefined);
        onClose();
        setTimeout(() => router.push('/cart'), 300);
    };

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 font-sans">
            <style>{`
                @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes modalScaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .animate-modal-fade { animation: modalFadeIn 0.2s ease-out forwards; }
                .animate-modal-scale { animation: modalScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
            `}</style>

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-modal-fade"
                onClick={onClose}
            ></div>

            {/* Modal Content - GIAO DIỆN MỚI */}
            <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-modal-scale flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]">

                {/* Close Button Mobile */}
                <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 rounded-full text-gray-600 md:hidden">
                    <X className="w-5 h-5" />
                </button>

                {/* CỘT TRÁI: ẢNH */}
                <div className="w-full md:w-5/12 bg-gray-100 relative min-h-[250px] md:min-h-full group">
                    <img
                        ref={imgRef}
                        src={product.thumbnail}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                        <span className="bg-indigo-600 w-fit px-3 py-1 rounded-md text-[10px] font-bold tracking-wider mb-2 uppercase shadow-sm">
                            {product.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-200">
                            <ShieldCheck className="w-4 h-4 text-green-400" /> Bảo hành trọn đời
                        </div>
                    </div>
                </div>

                {/* CỘT PHẢI: THÔNG TIN */}
                <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col bg-white overflow-y-auto custom-scrollbar">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{product.name}</h2>
                            <p className="text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                        <button onClick={onClose} className="hidden md:block p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors -mr-2 -mt-2">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* GIÁ TIỀN */}
                    <div className="flex items-end gap-3 mb-6 pb-6 border-b border-gray-100">
                        <span className="text-4xl font-bold text-indigo-600 tracking-tight">
                            {formatCurrency(currentPrice)}
                        </span>
                        {currentOriginalPrice && currentOriginalPrice > currentPrice && (
                            <>
                                <span className="text-lg text-gray-400 line-through mb-1.5 font-medium">
                                    {formatCurrency(currentOriginalPrice)}
                                </span>
                                <span className="ml-auto bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded-lg self-center">
                                    -{Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100)}%
                                </span>
                            </>
                        )}
                    </div>

                    {/* LIST OPTIONS */}
                    {options && options.length > 0 ? (
                        <div className="mb-6">
                            <label className="text-xs font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                                <Package className="w-4 h-4 text-indigo-600" /> Chọn gói dịch vụ:
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {options.map(opt => {
                                    const isSelected = selectedOption?.id === opt.id;
                                    return (
                                        <button
                                            key={opt.id}
                                            onClick={() => setSelectedOption(opt)}
                                            className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 group ${isSelected
                                                ? 'border-indigo-600 bg-indigo-50 shadow-sm ring-0'
                                                : 'border-gray-100 hover:border-indigo-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-1">
                                                <span className={`font-bold text-sm ${isSelected ? 'text-indigo-700' : 'text-gray-900'}`}>
                                                    {opt.name}
                                                </span>
                                                {isSelected && <CheckCircle className="w-5 h-5 text-indigo-600" />}
                                            </div>
                                            <div className="text-xs font-medium text-gray-500 group-hover:text-indigo-600 transition-colors">
                                                {formatCurrency(opt.price)}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="mb-6 flex items-center gap-3 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            <span>Đang tải gói dịch vụ hoặc sản phẩm này là gói mặc định.</span>
                        </div>
                    )}

                    {/* NÚT MUA */}
                    <div className="grid grid-cols-2 gap-4 mt-auto pt-4 border-t border-gray-50">
                        <button
                            onClick={handleAddToCart}
                            className="flex items-center justify-center gap-2 bg-white text-indigo-600 border-2 border-indigo-600 font-bold py-3.5 rounded-xl hover:bg-indigo-50 transition-all active:scale-[0.98]"
                        >
                            <Plus className="w-5 h-5" /> Thêm giỏ
                        </button>

                        <button
                            onClick={handleBuyNow}
                            className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <ShoppingCart className="w-5 h-5" /> Mua ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};