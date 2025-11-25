
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { apiCheckPaymentStatus } from '../services/mockBackend';
import { Order } from '../types';
import { CheckCircle, Copy, Loader2, AlertTriangle, Home, Package } from 'lucide-react';

export const OrderSuccess: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;

    const fetchOrder = async () => {
      try {
        const data = await apiCheckPaymentStatus(orderId);
        setOrder(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
            <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
            <p className="text-gray-600 font-medium">Đang xác thực giao dịch PayOS...</p>
        </div>
    );
  }

  if (!order || order.status !== 'PAID') {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
             <AlertTriangle className="w-12 h-12 text-red-500" />
             <h2 className="text-xl font-bold text-gray-900">Thanh toán thất bại hoặc đang chờ</h2>
             <Link to="/" className="text-indigo-600 hover:underline">Quay lại trang chủ</Link>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Thanh toán thành công!</h1>
            <p className="text-gray-500 mb-8 text-sm">Mã đơn hàng: {order.id}</p>

            {/* List of Delivered Products */}
            <div className="text-left space-y-6">
                {order.deliveredAccounts?.map((prod, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-4">
                            <Package className="w-5 h-5 text-indigo-600" />
                            {prod.productName}
                        </h3>
                        
                        <div className="grid gap-4">
                            {prod.accounts.map((acc, accIdx) => (
                                <div key={accIdx} className="bg-indigo-900 rounded-lg p-4 relative overflow-hidden group">
                                     <div className="absolute top-0 right-0 p-20 bg-indigo-800 rounded-full -mr-10 -mt-10 opacity-30 blur-xl"></div>
                                     <div className="relative z-10">
                                         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                             <div className="space-y-1">
                                                <div className="text-indigo-300 text-xs">Tài khoản {accIdx + 1}</div>
                                                <div className="text-white font-mono text-sm">{acc.username}</div>
                                                <div className="text-indigo-300 text-xs mt-1">Mật khẩu</div>
                                                <div className="text-white font-mono text-sm">{acc.password}</div>
                                             </div>
                                             <button 
                                                onClick={() => navigator.clipboard.writeText(`${acc.username}|${acc.password}`)}
                                                className="self-start md:self-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded transition-colors"
                                             >
                                                <Copy className="w-4 h-4 inline mr-1" /> Copy
                                             </button>
                                         </div>
                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-sm text-gray-500 mt-6">
                Toàn bộ thông tin trên cũng đã được gửi đến email <strong>{order.userEmail}</strong>.
            </p>
        </div>

        <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700">
                <Home className="w-4 h-4" />
                Tiếp tục mua sắm
            </Link>
        </div>
      </div>
    </div>
  );
};
