
import React, { useRef, useState } from 'react';
import { Product } from '../types';
import { formatCurrency } from '../services/mockBackend';
import { Check, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductOptionModal } from './ProductOptionModal';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [showOptionModal, setShowOptionModal] = useState(false);
  const hasOptions = product.options && product.options.length > 0;

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowOptionModal(true);
  };

  // Determine price display
  const displayPrice = hasOptions 
    ? `Từ ${formatCurrency(product.price)}` 
    : formatCurrency(product.price);

  return (
    <>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full relative">
        <Link to={`/product/${product.id}`} className="relative h-32 overflow-hidden block">
            <img 
            ref={imgRef}
            src={product.thumbnail} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-indigo-900 uppercase tracking-wider shadow-sm">
            {product.category}
            </div>
        </Link>
        
        <div className="p-3 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-1">
            <Link to={`/product/${product.id}`} className="font-bold text-sm text-gray-900 leading-tight line-clamp-2 min-h-[2.5rem] hover:text-indigo-600 transition-colors" title={product.name}>
                {product.name}
            </Link>
            </div>
            
            <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-base font-bold text-indigo-600">{displayPrice}</span>
            {product.originalPrice && !hasOptions && (
                <span className="text-[10px] text-gray-400 line-through">{formatCurrency(product.originalPrice)}</span>
            )}
            </div>

            <div className="space-y-1 mb-3 flex-1">
                {product.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
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

        <ProductOptionModal 
            product={product} 
            isOpen={showOptionModal} 
            onClose={() => setShowOptionModal(false)} 
        />
    </>
  );
};
