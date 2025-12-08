"use client";
import { Product, Feature, Options, Guides } from '@/types';
import { useRef, useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { formatCurrency } from '@/utils/format';
import { cartService } from '@/services/cartService';
import { ArrowLeft, CheckCircle, Shield, CreditCard, Clock, ShoppingCart, Plus, Package, PlayCircle, BookOpen, AlertCircle, ShieldCheck, XCircle, Loader2 } from 'lucide-react'; // Import thêm icon
import { ScrollReveal } from '@/components/ScrollReveal';
import { ProductOption } from '@/types';

const ProductDetail = () => {
    const params = useParams();
    const id = params?.id; // id string
    const router = useRouter();
    const imgRef = useRef<HTMLImageElement>(null);

    const [selectedOption, setSelectedOption] = useState<ProductOption | null>(null);
    const [stockCount, setStockCount] = useState<number | null>(null); // State tồn kho
    const [isCheckingStock, setIsCheckingStock] = useState(false); // State loading kho

    // --------------------- product -----------------------
    const [products, setProducts] = useState<Product[]>([]);

    // Lấy toàn bộ data product
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/products"); // gọi API
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Failed to fetch products:", err);
            }
        };
        fetchProducts();
    }, []); // chỉ chạy 1 lần khi component mount

    const product = products.find(p => (Array.isArray(id) ? id[0] : id) === p.id);

    //----------------------------- END -----------------------------

    // ---------------------------- options--------------------------
    const [options, setOptions] = useState<Options[]>([]);

    // Lấy toàn bộ data options
    useEffect(() => {
        if (!product) return;
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
    }, [product]); // chỉ chạy 1 lần khi component mount

    //----------------------------- END -----------------------------

    // ---------------------------- features--------------------------
    const [features, setFeatures] = useState<Feature[]>([]);

    // Lấy toàn bộ data features
    useEffect(() => {
        if (!product) return;
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
    }, [product]);

    //----------------------------- END -----------------------------

    // ---------------------------- guides--------------------------
    const [guides, setGuides] = useState<Guides[]>([]);

    // Lấy toàn bộ data guides
    useEffect(() => {
        if (!product) return;
        const fetchGuides = async () => {
            try {
                const res = await fetch(`/api/product_guides?product_id=${product.id}`); // gọi API
                const data = await res.json();
                setGuides(data);
            } catch (err) {
                console.error("Failed to fetch Guides:", err);
            }
        };
        fetchGuides();
    }, [product]);

    //----------------------------- END -----------------------------

    // Auto select option đầu tiên khi load xong
    useEffect(() => {
        window.scrollTo(0, 0);
        if (product && options && options.length > 0 && !selectedOption) {
            setSelectedOption(options[0]);
        }
    }, [product, options]); // Thêm options vào dep để đảm bảo chạy khi options load xong


    // --- LOGIC CHECK STOCK (MỚI) ---
    useEffect(() => {
        if (!product) return;

        // Nếu có options mà chưa chọn (đang load) thì chưa check
        if (options.length > 0 && !selectedOption) return;

        const checkStock = async () => {
            setIsCheckingStock(true);
            setStockCount(null);
            try {
                let url = `/api/products/check-stock?product_id=${product.id}`;
                if (selectedOption) {
                    url += `&option_id=${selectedOption.id}`;
                }

                const res = await fetch(url);
                const data = await res.json();
                setStockCount(Number(data.count));
            } catch (error) {
                console.error("Failed to check stock:", error);
                setStockCount(0);
            } finally {
                setIsCheckingStock(false);
            }
        };

        checkStock();
    }, [product, selectedOption, options.length]);
    // -------------------------------


    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Không tìm thấy sản phẩm</h2>
                <button onClick={() => router.push('/')} className="text-indigo-600 hover:underline">
                    Quay lại trang chủ
                </button>
            </div>
        );
    }

    const currentPrice = selectedOption ? selectedOption.price : product.price;
    const currentOriginalPrice = selectedOption ? selectedOption.original_price : product.original_price;

    // Xác định trạng thái hết hàng
    const isOutOfStock = !isCheckingStock && stockCount !== null && stockCount <= 0;

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
        if (isOutOfStock) return;
        triggerAnimation();
        cartService.addToCart(product, 1, selectedOption || undefined);
    };

    const handleBuyNow = () => {
        if (isOutOfStock) return;
        triggerAnimation();
        cartService.addToCart(product, 1, selectedOption || undefined);
        setTimeout(() => {
            router.push('/cart');
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" /> Quay lại cửa hàng
                </button>

                {/* HERO SECTION */}
                <ScrollReveal animation="fade-up">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Image Side */}
                            <div className="bg-gray-100 relative h-72 md:h-auto group overflow-hidden">
                                <img
                                    ref={imgRef}
                                    src={product.thumbnail}
                                    alt={product.name}
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isOutOfStock ? 'grayscale' : ''}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-8">
                                    <div className="text-white">
                                        <span className="bg-indigo-600 px-3 py-1 rounded-md text-xs font-bold tracking-wider mb-2 inline-block uppercase shadow-sm">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                                {/* Badge Hết hàng */}
                                {isOutOfStock && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                        <span className="bg-red-600 text-white px-6 py-2 rounded-full text-lg font-bold uppercase shadow-xl transform -rotate-12 border-2 border-white">
                                            Hết hàng
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Info Side */}
                            <div className="p-6 md:p-10 flex flex-col justify-center">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

                                <div className="flex items-end gap-3 mb-6">
                                    <span className={`text-3xl md:text-4xl font-bold ${isOutOfStock ? 'text-gray-400' : 'text-indigo-600'}`}>
                                        {formatCurrency(currentPrice)}
                                    </span>
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
                                {options && options.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="text-sm font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                                            <Package className="w-4 h-4 text-indigo-600" /> Chọn gói dịch vụ:
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {options.map(opt => (
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

                                {/* ACTION BUTTONS */}
                                {isCheckingStock ? (
                                    // Loading State
                                    <div className="mt-auto pt-2">
                                        <button disabled className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-500 font-bold py-3.5 rounded-xl cursor-wait">
                                            <Loader2 className="w-5 h-5 animate-spin" /> Đang kiểm tra kho...
                                        </button>
                                    </div>
                                ) : isOutOfStock ? (
                                    // Out of Stock State
                                    <div className="mt-auto pt-2">
                                        <button disabled className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 border-2 border-gray-200 font-bold py-3.5 rounded-xl cursor-not-allowed">
                                            <XCircle className="w-5 h-5" /> Sản phẩm này đang tạm hết hàng
                                        </button>
                                        {/* Gợi ý: Có thể thêm form đăng ký nhận tin khi có hàng ở đây */}
                                    </div>
                                ) : (
                                    // Normal State
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
                                )}

                                {/* Stock Info (Optional) */}
                                {stockCount !== null && stockCount > 0 && stockCount < 5 && !isCheckingStock && (
                                    <p className="text-xs text-red-500 mt-3 font-medium animate-pulse flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" /> Chỉ còn {stockCount} tài khoản!
                                    </p>
                                )}

                                <div className="bg-gray-50 rounded-xl p-4 mt-6 flex justify-between gap-2 text-xs text-gray-500 font-medium">
                                    <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-indigo-500" /> Giao tự động 5s</div>
                                    <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-500" /> Bảo hành uy tín</div>
                                    <div className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-blue-500" /> PayOS an toàn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* DETAILED CONTENT & SIDEBAR */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Description & Video */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* 1. Video Review */}
                        {product.youtube_video_id && (
                            <ScrollReveal animation="fade-up" delay={100}>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <PlayCircle className="w-6 h-6 text-red-500" /> Video giới thiệu
                                    </h2>
                                    <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden bg-gray-100">
                                        <iframe
                                            className="absolute top-0 left-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${product.youtube_video_id}`}
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

                                {product.long_description ? (
                                    <div
                                        className="prose prose-indigo max-w-none text-gray-600 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: product.long_description }}
                                    />
                                ) : (
                                    <p className="text-gray-500 italic">Đang cập nhật nội dung chi tiết cho sản phẩm này...</p>
                                )}

                                {/* Features List Recap */}
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Tính năng nổi bật</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-indigo-50/50 p-3 rounded-lg border border-indigo-100">
                                                <div className="bg-white p-1 rounded-full shadow-sm text-green-500">
                                                    <CheckCircle className="w-4 h-4" />
                                                </div>
                                                <span className="text-gray-800 font-medium text-sm">{feat.feature}</span>
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

                                {guides && guides.length > 0 ? (
                                    <div className="space-y-6 relative">
                                        {/* Vertical Line */}
                                        <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-gray-100"></div>

                                        {guides.map((step, idx) => (
                                            <div key={idx} className="relative flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 border-2 border-indigo-500 text-indigo-700 font-bold flex items-center justify-center text-sm z-10">
                                                    {idx + 1}
                                                </div>
                                                <div className="pt-1">
                                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{step.step_text}</p>
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
                                    <a href={`https://zalo.me/${process.env.NEXT_PUBLIC_ZALO_LINK || "0000000000"}`} target="_blank" rel="noreferrer" className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded-lg text-sm transition-colors">
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

export default ProductDetail;