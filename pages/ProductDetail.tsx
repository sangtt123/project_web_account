import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { formatCurrency } from '../services/mockBackend';
import { cartService } from '../services/cartService';
import { ArrowLeft, CheckCircle, Shield, CreditCard, Clock, ShoppingCart, Plus, Package, PlayCircle, BookOpen, AlertCircle, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ProductOption } from '../types';

export const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const product = PRODUCTS.find(p => p.id === id);
    const imgRef = useRef<HTMLImageElement>(null);

    // State for selected option
    const [selectedOption, setSelectedOption] = useState<ProductOption | null>(null);

    useEffect(() => {
        // Cuộn lên đầu trang khi vào chi tiết
        window.scrollTo(0, 0);

        if (product && product.options && product.options.length > 0) {
            setSelectedOption(product.options[0]);
        }
    }, [product]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Không tìm thấy sản phẩm</h2>
                <Link to="/" className="text-indigo-600 hover:underline">Quay lại trang chủ</Link>
            </div>
        );
    }

    const currentPrice = selectedOption ? selectedOption.price : product.price;
    const currentOriginalPrice = selectedOption ? selectedOption.originalPrice : product.originalPrice;

    const triggerAnimation = () => {
        if (imgRef.current) {
            const rect = imgRef.current.getBoundingClientRect();
            const event = new CustomEvent('animate-cart-add', {
                detail: {
                    src: product.thumbnail,
                    startRect: rect
                }
            });
            window.dispatchEvent(event);
        }
    };

    const handleAddToCart = () => {
        triggerAnimation();
        cartService.addToCart(product, 1, selectedOption || undefined);
    };

    const handleBuyNow = () => {
        triggerAnimation();
        cartService.addToCart(product, 1, selectedOption || undefined);
        setTimeout(() => {
            navigate('/cart');
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại cửa hàng
                </button>

                {/* HERO SECTION: Product Info */}
                <ScrollReveal animation="fade-up">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Image Side */}
                            <div className="bg-gray-100 relative h-72 md:h-auto group overflow-hidden">
                                <img
                                    ref={imgRef}
                                    src={product.thumbnail}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-8">
                                    <div className="text-white">
                                        <span className="bg-indigo-600 px-3 py-1 rounded-md text-xs font-bold tracking-wider mb-2 inline-block uppercase shadow-sm">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Info Side */}
                            <div className="p-6 md:p-10 flex flex-col justify-center">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

                                {/* Dynamic Price Display */}
                                <div className="flex items-end gap-3 mb-6">
                                    <span className="text-3xl md:text-4xl font-bold text-indigo-600">{formatCurrency(currentPrice)}</span>
                                    {currentOriginalPrice && (
                                        <span className="text-lg text-gray-400 line-through mb-1.5">{formatCurrency(currentOriginalPrice)}</span>
                                    )}
                                    {currentOriginalPrice && (
                                        <span className="mb-2 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-lg">
                                            -{Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100)}%
                                        </span>
                                    )}
                                </div>

                                <p className="text-gray-600 text-base leading-relaxed mb-6 border-l-4 border-indigo-200 pl-4">
                                    {product.description}
                                </p>

                                {/* OPTION SELECTOR */}
                                {product.options && product.options.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="text-sm font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                                            <Package className="w-4 h-4 text-indigo-600" /> Chọn gói dịch vụ:
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {product.options.map(opt => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => setSelectedOption(opt)}
                                                    className={`p-3 rounded-xl border text-left transition-all relative ${selectedOption?.id === opt.id
                                                        ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600 shadow-sm'
                                                        : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    <div className="font-bold text-sm text-gray-900">{opt.name}</div>
                                                    <div className="text-xs text-indigo-600 font-semibold">{formatCurrency(opt.price)}</div>
                                                    {selectedOption?.id === opt.id && (
                                                        <div className="absolute top-2 right-2 text-indigo-600">
                                                            <CheckCircle className="w-4 h-4 fill-indigo-600 text-white" />
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-4 mt-auto">
                                    <button
                                        onClick={handleAddToCart}
                                        className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 font-bold text-lg py-3.5 rounded-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                                    >
                                        <Plus className="w-5 h-5" /> Thêm giỏ hàng
                                    </button>
                                    <button
                                        onClick={handleBuyNow}
                                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                                    >
                                        <ShoppingCart className="w-5 h-5" /> Mua Ngay
                                    </button>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4 mt-6 flex justify-between gap-2 text-xs text-gray-500 font-medium">
                                    <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-indigo-500" /> Giao tự động 5s</div>
                                    <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-500" /> Bảo hành uy tín</div>
                                    <div className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-blue-500" /> PayOS an toàn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* DETAILED CONTENT SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Description & Video */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* 1. Video Review */}
                        {product.youtubeVideoId && (
                            <ScrollReveal animation="fade-up" delay={100}>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <PlayCircle className="w-6 h-6 text-red-500" /> Video giới thiệu
                                    </h2>
                                    <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden bg-gray-100">
                                        <iframe
                                            className="absolute top-0 left-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${product.youtubeVideoId}`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </ScrollReveal>
                        )}

                        {/* 2. Detailed Description */}
                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                                    <BookOpen className="w-6 h-6 text-indigo-600" /> Mô tả chi tiết
                                </h2>

                                {product.longDescription ? (
                                    <div
                                        className="prose prose-indigo max-w-none text-gray-600 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: product.longDescription }}
                                    />
                                ) : (
                                    <p className="text-gray-500 italic">Đang cập nhật nội dung chi tiết cho sản phẩm này...</p>
                                )}

                                {/* Features List Recap */}
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Tính năng nổi bật</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {product.features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-indigo-50/50 p-3 rounded-lg border border-indigo-100">
                                                <div className="bg-white p-1 rounded-full shadow-sm text-green-500">
                                                    <CheckCircle className="w-4 h-4" />
                                                </div>
                                                <span className="text-gray-800 font-medium text-sm">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Sidebar Guides */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* User Guide Box */}
                        <ScrollReveal animation="fade-left" delay={300}>
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 -m-6 mb-6 p-4 rounded-t-2xl">
                                    <h3 className="text-white font-bold flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" /> Hướng dẫn sử dụng
                                    </h3>
                                </div>

                                {product.guideSteps && product.guideSteps.length > 0 ? (
                                    <div className="space-y-6 relative">
                                        {/* Vertical Line */}
                                        <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-gray-100"></div>

                                        {product.guideSteps.map((step, idx) => (
                                            <div key={idx} className="relative flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 border-2 border-indigo-500 text-indigo-700 font-bold flex items-center justify-center text-sm z-10">
                                                    {idx + 1}
                                                </div>
                                                <div className="pt-1">
                                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{step}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-500">
                                        Sau khi thanh toán, hệ thống sẽ gửi tài khoản và hướng dẫn chi tiết qua email của bạn.
                                    </p>
                                )}

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-sm mb-3">Hỗ trợ kỹ thuật</h4>
                                    <p className="text-xs text-gray-500 mb-2">
                                        Gặp khó khăn khi kích hoạt? Liên hệ ngay với chúng tôi:
                                    </p>
                                    <a href="https://zalo.me/0339548321" target="_blank" rel="noreferrer" className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded-lg text-sm transition-colors">
                                        Chat Zalo Support
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Trust Badges Sidebar */}
                        <ScrollReveal animation="fade-left" delay={400}>
                            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 text-center">
                                <h4 className="font-bold text-indigo-900 mb-2">Cam kết chất lượng</h4>
                                <p className="text-xs text-indigo-700 mb-4">Uy tín tạo nên thương hiệu AutoKey</p>
                                <div className="flex justify-center gap-4 opacity-70">
                                    <ShieldCheck className="w-8 h-8 text-indigo-600" />
                                    <Clock className="w-8 h-8 text-indigo-600" />
                                    <CreditCard className="w-8 h-8 text-indigo-600" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
};