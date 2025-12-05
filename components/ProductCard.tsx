'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Product, Options, Feature } from '@/types';
import { formatCurrency } from '@/utils/format';
import { Check, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { ProductOptionModal } from '@/components/ProductOptionModal';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [options, setOptions] = useState<Options | null>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [showOptionModal, setShowOptionModal] = useState(false);

    const handleOpenModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowOptionModal(true);
    };

    // --------------- options--------------
    // Lấy toàn bộ data options
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const res = await fetch(`/api/product_option?product_id=${product.id}`); // gọi API
                const data = await res.json();
                setOptions(data);
            } catch (err) {
                console.error("Failed to fetch options:", err);
            }
        };
        fetchOptions();
    }, []); // chỉ chạy 1 lần khi component mount

    const hasOptions = Array.isArray(options) && options.length > 0;
    let priceToShow = 0;

    if (hasOptions) {
        // Trường hợp options là mảng: Tìm giá thấp nhất trong danh sách
        // Map ra danh sách giá -> Dùng Math.min để lấy số nhỏ nhất
        const prices = options.map((opt: any) => Number(opt.price) || 0);
        priceToShow = Math.min(...prices);
    } else {
        // Trường hợp options là object đơn lẻ (hoặc fallback)
        // @ts-ignore (nếu TS báo lỗi)
        priceToShow = Number(options?.price) || 0;
    }

    // Determine price display
    const displayPrice = hasOptions
        ? `Từ ${formatCurrency(priceToShow)}`
        : formatCurrency(priceToShow);

    // --------------- options END--------------

    // Lấy toàn bộ data features
    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const res = await fetch(`/api/product_features?product_id=${product.id}`); // gọi API
                const data = await res.json();
                setFeatures(data);
            } catch (err) {
                console.error("Failed to fetch features:", err);
            }
        };
        fetchFeatures();
    }, []); // chỉ chạy 1 lần khi component mount

    return (
        <>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full relative">

                {/* ⭐ Dùng Link của Next.js */}
                <Link href={`/product/${product.id}`} className="relative h-32 overflow-hidden block">
                    <img
                        ref={imgRef}
                        src={product.thumbnail}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-indigo-900 uppercase tracking-wider shadow-sm">
                        {String(product.category)}
                    </div>
                </Link>

                <div className="p-3 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                        <Link
                            href={`/product/${product.id}`}
                            className="font-bold text-sm text-gray-900 leading-tight line-clamp-2 min-h-[2.5rem] hover:text-indigo-600 transition-colors"
                            title={product.name}
                        >
                            {product.name}
                        </Link>
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-2">
                        <span className="text-base font-bold text-indigo-600">{displayPrice}</span>

                        {options && options.original_price && !hasOptions && (
                            <span className="text-[10px] text-gray-400 line-through">
                                {formatCurrency(options.original_price)}
                            </span>
                        )}
                    </div>

                    <div className="space-y-1 mb-3 flex-1">
                        {features.slice(0, 2).map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-500">
                                <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <span className="truncate">{feat.feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-2">
                        <button
                            onClick={handleOpenModal}
                            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 rounded-lg shadow-md shadow-indigo-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <ShoppingCart className="w-3.5 h-3.5" /> Mua
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ProductOptionModal
                product={product}
                isOpen={showOptionModal}
                onClose={() => setShowOptionModal(false)}
            />
        </>
    );
};
