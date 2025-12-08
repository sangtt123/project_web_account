'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Product, Options, Feature } from '@/types';
import { formatCurrency } from '@/utils/format';
import { Check, ShoppingCart, XCircle } from 'lucide-react'; // Thêm icon XCircle
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

    // State lưu trữ số lượng tồn kho (Tổng toàn bộ các option)
    const [stockCount, setStockCount] = useState<number | null>(null);

    const handleOpenModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowOptionModal(true);
    };

    // 1. Fetch Options & Features
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [optRes, featRes] = await Promise.all([
                    fetch(`/api/product_option?product_id=${product.id}`),
                    fetch(`/api/product_features?product_id=${product.id}`)
                ]);

                const optData = await optRes.json();
                const featData = await featRes.json();

                setOptions(optData);
                setFeatures(featData);
            } catch (err) {
                console.error("Failed to fetch details:", err);
            }
        };
        fetchData();
    }, [product.id]);

    // 2. Fetch Stock Count (Kiểm tra tổng tồn kho của sản phẩm)
    // API này trả về tổng số account chưa bán của product_id này.
    // Nếu > 0 nghĩa là ít nhất 1 option còn hàng -> Cho phép mở Modal.
    useEffect(() => {
        const checkStock = async () => {
            try {
                const res = await fetch(`/api/products/check-stock?product_id=${product.id}`);
                const data = await res.json();
                setStockCount(data.count);
            } catch (error) {
                console.error("Failed to check stock:", error);
                setStockCount(0); // Nếu lỗi thì coi như hết hàng cho an toàn
            }
        }
        checkStock();
    }, [product.id]);

    // --- Logic hiển thị giá ---
    const hasOptions = Array.isArray(options) && options.length > 0;
    let priceToShow = 0;

    if (hasOptions) {
        const prices = options.map((opt: any) => Number(opt.price) || 0);
        priceToShow = Math.min(...prices);
    } else {
        // @ts-ignore 
        priceToShow = Number(options?.price) || 0;
    }

    const displayPrice = hasOptions
        ? `Từ ${formatCurrency(priceToShow)}`
        : formatCurrency(priceToShow);
    // --------------------------

    // Kiểm tra xem đã load xong stock chưa và có hàng không (Tổng kho = 0 mới disable nút ngoài)
    const isOutOfStock = stockCount !== null && stockCount === 0;

    return (
        <>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full relative">

                <Link href={`/product/${product.id}`} className="relative h-32 overflow-hidden block">
                    <img
                        ref={imgRef}
                        src={product.thumbnail}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-transform duration-500 ${isOutOfStock ? 'grayscale' : 'group-hover:scale-110'}`}
                    />
                    {/* Label Category */}
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-indigo-900 uppercase tracking-wider shadow-sm">
                        {String(product.category)}
                    </div>

                    {/* Label Hết Hàng đè lên ảnh - Chỉ hiện khi TOÀN BỘ options đều hết */}
                    {isOutOfStock && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg transform -rotate-12 border-2 border-white">
                                Hết hàng
                            </span>
                        </div>
                    )}
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
                        <span className={`text-base font-bold ${isOutOfStock ? 'text-gray-400' : 'text-indigo-600'}`}>
                            {displayPrice}
                        </span>

                        {options && (options as any).original_price && !hasOptions && (
                            <span className="text-[10px] text-gray-400 line-through">
                                {formatCurrency((options as any).original_price)}
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
                        {isOutOfStock ? (
                            // Nút khi hết hàng (Tổng kho = 0)
                            <button
                                disabled
                                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 text-xs font-bold py-2.5 rounded-lg cursor-not-allowed border border-gray-200"
                            >
                                <XCircle className="w-3.5 h-3.5" /> Tạm hết hàng
                            </button>
                        ) : (
                            // Nút mua bình thường - Mở Modal để chọn option và check stock chi tiết
                            <button
                                onClick={handleOpenModal}
                                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 rounded-lg shadow-md shadow-indigo-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <ShoppingCart className="w-3.5 h-3.5" /> Mua ngay
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal - Truyền options vào để Modal xử lý việc disable option hết hàng */}
            <ProductOptionModal
                product={product}
                // @ts-ignore
                options={options}
                isOpen={showOptionModal}
                onClose={() => setShowOptionModal(false)}
            />
        </>
    );
};