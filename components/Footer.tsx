
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_NAME } from '../constants';
import { 
  ShieldCheck, CreditCard, Clock, 
  Facebook, Instagram, Youtube, 
  Phone, Mail, MapPin, 
  ChevronRight 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // Hoàn toàn ẩn Footer nếu đang ở trang Admin
  if (isAdmin) {
    return null;
  }

  return (
    <footer className="bg-white pt-10">
      {/* Top Features Section */}
      <div className="border-b border-gray-100 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollReveal animation="fade-up" delay={0}>
                        <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                            <div className="bg-indigo-600 p-3 rounded-full text-white shadow-lg shadow-indigo-200">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Giao Hàng Tự Động 24/7</h3>
                                <p className="text-xs text-gray-500 mt-1">Nhận tài khoản ngay sau 5s thanh toán.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal animation="fade-up" delay={150}>
                        <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                            <div className="bg-green-600 p-3 rounded-full text-white shadow-lg shadow-green-200">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Bảo Hành Uy Tín 1-1</h3>
                                <p className="text-xs text-gray-500 mt-1">Cam kết hoàn tiền nếu có lỗi phát sinh.</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={300}>
                        <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="bg-blue-600 p-3 rounded-full text-white shadow-lg shadow-blue-200">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Thanh Toán An Toàn</h3>
                                <p className="text-xs text-gray-500 mt-1">Hỗ trợ PayOS, QR Code, Banking.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900 text-gray-300 py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Column 1: Brand Info */}
            <ScrollReveal animation="fade-right">
                <div>
                  <h2 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                    {APP_NAME}
                  </h2>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    Chuyên cung cấp tài khoản bản quyền giá rẻ, uy tín hàng đầu Việt Nam. Giải pháp tiết kiệm cho nhu cầu giải trí và làm việc của bạn.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-indigo-600 transition-colors text-white">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors text-white">
                        <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors text-white">
                        <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
            </ScrollReveal>

            {/* Column 2: Quick Links (Products) */}
            <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Sản Phẩm</h3>
                  <ul className="space-y-3">
                    <li>
                        <Link to="/" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                            <ChevronRight className="w-4 h-4 text-indigo-500" /> Tài khoản Netflix, Youtube
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                            <ChevronRight className="w-4 h-4 text-indigo-500" /> Spotify, Apple Music
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                            <ChevronRight className="w-4 h-4 text-indigo-500" /> Canva, Office 365, GPT-4
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                            <ChevronRight className="w-4 h-4 text-indigo-500" /> VPN & Bảo Mật
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                            <ChevronRight className="w-4 h-4 text-indigo-500" /> Steam, Xbox Game Pass
                        </Link>
                    </li>
                  </ul>
                </div>
            </ScrollReveal>

            {/* Column 3: Support */}
            <ScrollReveal animation="fade-up" delay={200}>
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Hỗ Trợ Khách Hàng</h3>
                  <ul className="space-y-3">
                    <li>
                        <a href="#" className="text-sm hover:text-white transition-colors">Hướng dẫn mua hàng</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-white transition-colors">Chính sách bảo hành</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-white transition-colors">Câu hỏi thường gặp (FAQ)</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-white transition-colors">Điều khoản dịch vụ</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-white transition-colors">Chính sách bảo mật</a>
                    </li>
                  </ul>
                </div>
            </ScrollReveal>

            {/* Column 4: Contact Info */}
            <ScrollReveal animation="fade-left" delay={300}>
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Liên Hệ</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-indigo-500 mt-0.5" />
                        <div>
                            <span className="block text-xs text-gray-500 font-bold uppercase">Hotline / Zalo</span>
                            <span className="text-white font-medium">0339.548.321</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-indigo-500 mt-0.5" />
                        <div>
                            <span className="block text-xs text-gray-500 font-bold uppercase">Email Hỗ Trợ</span>
                            <span className="text-white font-medium">taikhoanbanquyen26@gmail.com</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-indigo-500 mt-0.5" />
                        <div>
                            <span className="block text-xs text-gray-500 font-bold uppercase">Địa chỉ</span>
                            <span className="text-sm">Tòa nhà Bitexco, Số 2 Hải Triều, Q.1, TP. Hồ Chí Minh</span>
                        </div>
                    </li>
                  </ul>
                </div>
            </ScrollReveal>

          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
                © 2024 {APP_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 mr-2">Chấp nhận thanh toán:</span>
                <div className="bg-white px-2 py-1 rounded text-xs font-bold text-blue-700">VISA</div>
                <div className="bg-white px-2 py-1 rounded text-xs font-bold text-pink-600">MOMO</div>
                <div className="bg-white px-2 py-1 rounded text-xs font-bold text-blue-500">VNPAY</div>
                <div className="bg-white px-2 py-1 rounded text-xs font-bold text-green-600">BANKING</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
