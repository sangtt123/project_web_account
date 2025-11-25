
import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { formatCurrency } from '../services/mockBackend';
import { cartService } from '../services/cartService';
import { ArrowLeft, CheckCircle, Shield, CreditCard, Clock, ShoppingCart, Plus, Package } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Quay lại cửa hàng
        </button>

        <ScrollReveal animation="fade-up">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Side */}
                    <div className="bg-gray-100 relative h-96 md:h-auto">
                        <img 
                            ref={imgRef}
                            src={product.thumbnail} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <span className="bg-indigo-600 px-3 py-1 rounded-md text-xs font-bold tracking-wider mb-2 inline-block uppercase">
                                    {product.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Info Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                        
                        {/* Dynamic Price Display */}
                        <div className="flex items-end gap-3 mb-6">
                            <span className="text-3xl font-bold text-indigo-600">{formatCurrency(currentPrice)}</span>
                            {currentOriginalPrice && (
                                <span className="text-lg text-gray-400 line-through mb-1">{formatCurrency(currentOriginalPrice)}</span>
                            )}
                        </div>
                        
                        <p className="text-gray-600 text-base leading-relaxed mb-6 border-l-4 border-indigo-200 pl-4">
                            {product.description}
                        </p>

                        {/* OPTION SELECTOR */}
                        {product.options && product.options.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                                    <Package className="w-4 h-4 text-indigo-600"/> Chọn gói dịch vụ:
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {product.options.map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setSelectedOption(opt)}
                                            className={`p-3 rounded-xl border text-left transition-all relative ${
                                                selectedOption?.id === opt.id 
                                                ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600' 
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

                        <div className="space-y-4 mb-10">
                            {product.features.map((feat, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-green-100 p-1 rounded-full text-green-600">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700 font-medium text-sm">{feat}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-3 gap-4 mb-8">
                             <div className="text-center">
                                <Clock className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                                <span className="text-xs text-gray-600 font-medium block">Tự động</span>
                             </div>
                             <div className="text-center border-l border-gray-200">
                                <Shield className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                                <span className="text-xs text-gray-600 font-medium block">Bảo hành</span>
                             </div>
                             <div className="text-center border-l border-gray-200">
                                <CreditCard className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                                <span className="text-xs text-gray-600 font-medium block">PayOS</span>
                             </div>
                        </div>

                        <div className="flex gap-4">
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 bg-white border border-indigo-600 text-indigo-600 font-bold text-lg py-4 rounded-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
                            >
                                <Plus className="w-5 h-5" /> Thêm vào giỏ
                            </button>
                            <button 
                                onClick={handleBuyNow}
                                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <ShoppingCart className="w-5 h-5" /> Mua Ngay
                            </button>
                        </div>
                        
                        <p className="text-center text-xs text-gray-400 mt-4">Hệ thống gửi tài khoản tự động qua email.</p>
                    </div>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
