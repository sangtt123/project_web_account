'use client';
import React, { useEffect, useState } from 'react';

interface FlyingItem {
    id: number;
    src: string;
    start: { x: number; y: number; width: number; height: number };
    target: { x: number; y: number };
}
export const CartFlyAnimation: React.FC = () => {
    const [items, setItems] = useState<FlyingItem[]>([]);

    useEffect(() => {
        const handleAddToCartAnim = (e: any) => {
            const { src, startRect } = e.detail;
            const targetEl = document.getElementById('cart-icon-container');

            if (targetEl && startRect) {
                const targetRect = targetEl.getBoundingClientRect();

                const newItem: FlyingItem = {
                    id: Date.now(),
                    src,
                    start: {
                        x: startRect.left,
                        y: startRect.top,
                        width: startRect.width,
                        height: startRect.height
                    },
                    target: {
                        x: targetRect.left + targetRect.width / 2 - 16, // Center on icon
                        y: targetRect.top + targetRect.height / 2 - 16
                    }
                };

                setItems(prev => [...prev, newItem]);

                // Cleanup after animation
                setTimeout(() => {
                    setItems(prev => prev.filter(i => i.id !== newItem.id));
                }, 1000);
            }
        };

        window.addEventListener('animate-cart-add', handleAddToCartAnim);
        return () => window.removeEventListener('animate-cart-add', handleAddToCartAnim);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100]">
            {items.map(item => (
                <div
                    key={item.id}
                    className="absolute rounded-lg shadow-xl border-2 border-white object-cover animate-fly-to-cart"
                    style={{
                        '--start-x': `${item.start.x}px`,
                        '--start-y': `${item.start.y}px`,
                        '--start-w': `${item.start.width}px`,
                        '--start-h': `${item.start.height}px`,
                        '--target-x': `${item.target.x}px`,
                        '--target-y': `${item.target.y}px`,
                        backgroundImage: `url(${item.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    } as React.CSSProperties}
                />
            ))}
            <style>{`
        @keyframes flyToCart {
          0% {
            left: var(--start-x);
            top: var(--start-y);
            width: var(--start-w);
            height: var(--start-h);
            opacity: 1;
            transform: scale(1);
          }
          40% {
             transform: scale(0.6); 
             opacity: 0.8;
          }
          100% {
            left: var(--target-x);
            top: var(--target-y);
            width: 32px;
            height: 32px;
            opacity: 0;
            transform: scale(0.2);
          }
        }
        .animate-fly-to-cart {
          animation: flyToCart 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
        </div>
    );
};
