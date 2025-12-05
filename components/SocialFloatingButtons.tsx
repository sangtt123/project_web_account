'use client';
import React from 'react';
import { Facebook, Send } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const SocialFloatingButtons: React.FC = () => {
    const pathname = usePathname();

    // Ẩn khi vào admin
    if (pathname.startsWith('/admin')) return null;

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-5">

            {/* Zalo */}
            <div className="relative group flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-blue-500 opacity-75"></span>

                <a
                    href={`https://zalo.me/${process.env.NEXT_PUBLIC_ZALO_LINK || "0000000000"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full shadow-lg border-2 border-white/20 transition-transform transform group-hover:scale-110 group-hover:rotate-6"
                    title="Chat Zalo"
                >
                    <span className="absolute left-full ml-3 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap -translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-xl">
                        Chat Zalo ngay
                    </span>
                    <span className="font-black text-white text-sm tracking-tighter drop-shadow-md">Zalo</span>
                </a>
            </div>

            {/* Telegram */}
            <div className="relative group flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-sky-400 opacity-40 delay-300"></span>

                <a
                    href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_LINK || "@test"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-sky-600 to-sky-400 rounded-full shadow-lg border-2 border-white/20 transition-transform transform group-hover:scale-110"
                    title="Chat Telegram"
                >
                    <span className="absolute left-full ml-3 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap -translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-xl">
                        Telegram
                    </span>
                    <Send className="w-5 h-5 text-white -ml-0.5 mt-0.5 drop-shadow-sm" />
                </a>
            </div>

            {/* Facebook */}
            <div className="relative group flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-blue-700 opacity-40 delay-700"></span>

                <a
                    href={`${process.env.NEXT_PUBLIC_FACEBOOK_LINK}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-blue-800 to-blue-600 rounded-full shadow-lg border-2 border-white/20 transition-transform transform group-hover:scale-110"
                    title="Messenger"
                >
                    <span className="absolute left-full ml-3 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap -translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-xl">
                        Messenger
                    </span>
                    <Facebook className="w-6 h-6 text-white drop-shadow-sm" />
                </a>
            </div>

        </div>
    );
};
