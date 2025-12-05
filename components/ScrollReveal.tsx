'use client';
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
    delay?: number; // miliseconds
    className?: string;
    threshold?: number; // 0 to 1
    rootMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    className = '',
    threshold = 0, // Set to 0 to trigger as soon as 1px is visible
    rootMargin = '50px' // Positive margin to trigger BEFORE element enters viewport
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if browser supports IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add a small delay if requested
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);

                    // Once visible, stop observing (run animation only once)
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            {
                threshold: threshold,
                rootMargin: rootMargin
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.disconnect();
        };
    }, [delay, threshold, rootMargin]);

    const animationClass = `reveal-${animation}`;

    return (
        <div
            ref={ref}
            className={`reveal-on-scroll ${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};