
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, ShoppingCart, X, ChevronRight, Home, Package, ShieldCheck } from 'lucide-react';
import { APP_NAME } from '../constants';
import { cartService } from '../services/cartService';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [isBumped, setIsBumped] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initial count
    setCartCount(cartService.getTotalItems());

    // Subscribe to cart changes
    const unsubscribe = cartService.subscribe(() => {
        setCartCount(cartService.getTotalItems());
        // Add bump animation effect to cart badge
        setIsBumped(true);
        setTimeout(() => setIsBumped(false), 300);
    });

    return () => unsubscribe();
  }, []);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Đóng menu mobile khi chuyển trang
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Hide Navbar on Admin pages
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const handleScrollToProducts = () => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <nav 
        className={`sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className={`bg-indigo-600 rounded-lg group-hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center ${
                isScrolled ? 'p-1.5' : 'p-2'
              }`}>
                <ShoppingBag className={`text-white transition-all duration-300 ${
                    isScrolled ? 'w-5 h-5' : 'w-6 h-6'
                }`} />
              </div>
              <span className={`font-bold text-gray-900 tracking-tight transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>{APP_NAME}</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm">Trang Chủ</Link>
              <button onClick={handleScrollToProducts} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm">Sản Phẩm</button>
              <Link to="/admin" className="text-gray-400 hover:text-indigo-600 flex items-center gap-1 text-sm font-medium">
                   Admin
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button 
                onClick={() => {
                  const el = document.getElementById('product-search');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    el.focus();
                  } else {
                    navigate('/');
                    setTimeout(() => {
                      const el = document.getElementById('product-search');
                      if(el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                          el.focus();
                      }
                    }, 100);
                  }
                }}
                className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <Search className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
              </button>

              {/* Cart Button with ID for Animation Target */}
              <Link 
                id="cart-icon-container"
                to="/cart" 
                className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors group"
              >
                <ShoppingCart className={`transition-all duration-300 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'} ${isBumped ? 'scale-125 text-indigo-600' : ''}`} />
                {cartCount > 0 && (
                  <span className={`absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 rounded-full border-2 border-white transform translate-x-1 -translate-y-1 transition-transform ${isBumped ? 'scale-125' : 'scale-100'}`}>
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {/* Mobile Menu Toggle Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <Menu className={`transition-all duration-300 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer (Slide from Right) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden font-sans">
          <style>{`
             @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
             @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
             .anim-slide-in { animation: slideInRight 0.3s ease-out forwards; }
             .anim-fade-in { animation: fadeIn 0.3s ease-out forwards; }
          `}</style>

          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm anim-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col anim-slide-in">
            {/* Drawer Header */}
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <span className="font-bold text-lg text-gray-900">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-white rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium transition-all"
              >
                <Home className="w-5 h-5 text-gray-400" />
                Trang Chủ
              </Link>
              
              <button 
                onClick={handleScrollToProducts}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium transition-all text-left"
              >
                <Package className="w-5 h-5 text-gray-400" />
                Sản Phẩm
              </button>
              
              <Link 
                to="/admin" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium transition-all"
              >
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                Quản trị viên (Admin)
              </Link>

              <hr className="border-gray-100 my-2" />
              
              <div className="px-4 py-2">
                <p className="text-xs font-bold text-gray-400 uppercase mb-3">Danh mục nổi bật</p>
                <div className="space-y-3 pl-2">
                    <button onClick={() => { handleScrollToProducts(); setIsMobileMenuOpen(false); }} className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-indigo-600">
                        Netflix & Youtube <ChevronRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => { handleScrollToProducts(); setIsMobileMenuOpen(false); }} className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-indigo-600">
                        Spotify & Music <ChevronRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => { handleScrollToProducts(); setIsMobileMenuOpen(false); }} className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-indigo-600">
                        Office & Work <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-center text-gray-400">© 2024 {APP_NAME}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
