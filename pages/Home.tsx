
import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, HERO_SLIDES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Category } from '../types';
import { Zap, Sparkles, Search, SlidersHorizontal, X, ShieldCheck, Truck, Headphones, ChevronDown, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from '../services/mockBackend';
import { ScrollReveal } from '../components/ScrollReveal';
import { productService } from "../services/productService";
interface Product {
    id: number;
    name: string;
    price: number;
    image?: string;
}
export const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [maxPrice, setMaxPrice] = useState<number>(5000000);
    const [visibleCount, setVisibleCount] = useState<number>(10);

    // Slider State
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play Slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000); // 5 seconds
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        productService.getAll()
            .then(data => {
                console.log("👉 Products fetched:", data);
                setProducts(data);
            })
            .catch(err => console.error("❌ Fetch error:", err));
    }, []);

    // Reset số lượng hiển thị về 10 khi bộ lọc thay đổi
    useEffect(() => {
        setVisibleCount(10);
    }, [activeCategory, searchQuery, maxPrice]);

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(p => {
            const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPrice = p.price <= maxPrice;

            return matchesCategory && matchesSearch && matchesPrice;
        });
    }, [activeCategory, searchQuery, maxPrice]);

    const maxProductPrice = 5000000;

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 10);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section & Intro Combined (Compact Slider Version) */}
            <section className="relative bg-indigo-950 text-white overflow-hidden pt-8 pb-8 lg:pt-12 lg:pb-12 min-h-[350px] lg:min-h-[420px] flex items-center transition-all duration-700">

                {/* Background Slider Images */}
                {HERO_SLIDES.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-20' : 'opacity-0'}`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
                            style={{ backgroundImage: `url('${slide.bgImage}')` }}
                        ></div>
                    </div>
                ))}

                {/* Animated Background Blobs (Static across slides) */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* Left Column: Dynamic Slider Content */}
                        <div className="max-w-2xl relative min-h-[220px] flex flex-col justify-center">
                            {HERO_SLIDES.map((slide, index) => {
                                if (index !== currentSlide) return null;
                                return (
                                    <div key={slide.id} className="animate-in slide-in-from-left duration-700 fade-in fill-mode-forwards">
                                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-indigo-100 text-[10px] font-medium mb-3">
                                            <Zap className="w-3 h-3 text-yellow-400" />
                                            <span>{slide.tag}</span>
                                        </div>
                                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
                                            {slide.title} <br />
                                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.gradient}`}>
                                                {slide.highlight}
                                            </span>
                                        </h1>
                                        <p className="text-sm text-gray-300 mb-5 leading-relaxed max-w-lg line-clamp-2">
                                            {slide.description}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button
                                                onClick={() => {
                                                    const el = document.getElementById('products');
                                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className={`bg-white ${slide.btnColor} font-bold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-all shadow-lg shadow-white/10 text-center text-sm flex items-center justify-center gap-2`}
                                            >
                                                Xem Ngay <ChevronDown className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Slider Indicators */}
                            <div className="flex gap-2 mt-6">
                                {HERO_SLIDES.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`h-1 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Static Intro Features (Compact Glassmorphism Cards) */}
                        <div className="hidden lg:flex flex-col gap-3">
                            {/* Feature 1 */}
                            <ScrollReveal animation="fade-left" delay={100}>
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl hover:bg-white/15 transition-colors flex items-center gap-3 group">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Truck className="w-5 h-5 text-blue-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-white">Giao hàng siêu tốc</h3>
                                        <p className="text-xs text-indigo-200">Nhận tài khoản sau 5 giây.</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Feature 2 */}
                            <ScrollReveal animation="fade-left" delay={200}>
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl hover:bg-white/15 transition-colors flex items-center gap-3 group">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <ShieldCheck className="w-5 h-5 text-green-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-white">Bảo hành uy tín 1-1</h3>
                                        <p className="text-xs text-indigo-200">Hoàn tiền nếu lỗi phát sinh.</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Feature 3 */}
                            <ScrollReveal animation="fade-left" delay={300}>
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl hover:bg-white/15 transition-colors flex items-center gap-3 group">
                                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Headphones className="w-5 h-5 text-purple-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-white">Hỗ trợ 24/7</h3>
                                        <p className="text-xs text-indigo-200">Support nhiệt tình từ A-Z.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </div>
            </section>

            {/* Product Section */}
            <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-6">
                {/* Removed ScrollReveal from this container to ensure filters are always visible */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-gray-900">Danh sách sản phẩm</h2>
                            <p className="text-sm text-gray-500">Các gói dịch vụ hot nhất hiện nay</p>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="bg-white p-3 rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-4 items-center sticky top-20 z-40">
                        {/* Search */}
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                id="product-search"
                                type="text"
                                placeholder="Tìm kiếm Netflix, Spotify..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <X className="w-3 h-3" />
                                </button>
                            )}
                        </div>

                        {/* Price Range */}
                        <div className="w-full md:w-56 px-2">
                            <div className="flex justify-between text-[10px] font-medium text-gray-500 mb-1">
                                <span>Giá tối đa:</span>
                                <span className="text-indigo-600">{formatCurrency(maxPrice)}</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max={maxProductPrice}
                                step="10000"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex overflow-x-auto pb-2 gap-2 w-full scrollbar-hide">
                        {['All', ...Object.values(Category)].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeCategory === cat
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {cat === 'All' ? 'Tất cả' : cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    {filteredProducts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {filteredProducts.slice(0, visibleCount).map((product, index) => {
                                    // Hiển thị ngay lập tức 5 sản phẩm đầu tiên (không dùng ScrollReveal)
                                    // Để tránh lỗi "bị ẩn" khi trang vừa load xong ở vị trí top
                                    if (index < 5) {
                                        return <ProductCard key={product.id} product={product} />;
                                    }
                                    return (
                                        <ScrollReveal key={product.id} animation="zoom-in" delay={index % 5 * 50}>
                                            <ProductCard product={product} />
                                        </ScrollReveal>
                                    );
                                })}
                            </div>

                            {/* Xem Thêm Button */}
                            {visibleCount < filteredProducts.length && (
                                <div className="mt-10 flex justify-center">
                                    <button
                                        onClick={handleShowMore}
                                        className="group flex items-center gap-2 bg-white text-gray-600 hover:text-indigo-600 border border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 font-medium py-3 px-8 rounded-full shadow-sm transition-all duration-300"
                                    >
                                        <span>Xem thêm sản phẩm</span>
                                        <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            )}

                            {/* Hiển thị text đã hết sản phẩm nếu đang xem hết */}
                            {visibleCount >= filteredProducts.length && filteredProducts.length > 10 && (
                                <div className="mt-10 text-center text-xs text-gray-400 italic">
                                    Đã hiển thị toàn bộ {filteredProducts.length} sản phẩm
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                            <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">
                                <SlidersHorizontal className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">Không tìm thấy sản phẩm</h3>
                            <p className="text-gray-500 mt-1">Vui lòng thử từ khóa hoặc bộ lọc khác.</p>
                            <button
                                onClick={() => { setActiveCategory('All'); setSearchQuery(''); setMaxPrice(maxProductPrice) }}
                                className="mt-4 text-indigo-600 font-medium hover:underline text-sm"
                            >
                                Xóa bộ lọc
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
