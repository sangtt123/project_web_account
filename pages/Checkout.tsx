
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { cartService } from '../services/cartService';
import { apiCreateOrder, formatCurrency } from '../services/mockBackend';
import { Loader2, QrCode } from 'lucide-react';
import { OrderItem } from '../types';

export const Checkout: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const [itemsToCheckout, setItemsToCheckout] = useState<OrderItem[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [payOsStep, setPayOsStep] = useState(false);

  useEffect(() => {
    if (productId === 'cart') {
      // Load from Cart
      const cart = cartService.getCart();
      if (cart.length === 0) {
          navigate('/cart');
          return;
      }
      const items: OrderItem[] = cart.map(c => {
          const price = c.selectedOption ? c.selectedOption.price : c.product.price;
          const name = c.selectedOption ? `${c.product.name} (${c.selectedOption.name})` : c.product.name;
          
          return {
              productId: c.product.id,
              productName: name,
              price: price,
              quantity: c.quantity,
              thumbnail: c.product.thumbnail,
              optionId: c.selectedOption?.id
          };
      });
      setItemsToCheckout(items);
      setTotalAmount(cartService.getTotalPrice());
    } else {
      // Buy Now Single Product (Legacy direct link backup, though mostly handled via Cart now)
      const product = PRODUCTS.find(p => p.id === productId);
      if (product) {
          // If product has options, ideally we should have gone via ProductDetail -> Cart
          // But as a fallback, pick first option
          const firstOption = product.options?.[0];
          const price = firstOption ? firstOption.price : product.price;
          const name = firstOption ? `${product.name} (${firstOption.name})` : product.name;

          setItemsToCheckout([{
              productId: product.id,
              productName: name,
              price: price,
              quantity: 1,
              thumbnail: product.thumbnail,
              optionId: firstOption?.id
          }]);
          setTotalAmount(price);
      }
    }
  }, [productId, navigate]);

  if (itemsToCheckout.length === 0) return null;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // 1. Create Order
    const order = await apiCreateOrder(itemsToCheckout, email, totalAmount);
    
    // If from cart, clear cart now
    if (productId === 'cart') {
        cartService.clearCart();
    }

    // 2. Simulate PayOS
    setIsProcessing(false);
    setPayOsStep(true);

    // 3. Simulate User Payment
    setTimeout(() => {
        navigate(`/success/${order.id}`);
    }, 4000); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-gray-900 p-6 text-center">
            <h2 className="text-white font-bold text-xl">Thanh Toán An Toàn</h2>
            <p className="text-gray-400 text-sm mt-1">Cổng thanh toán PayOS</p>
        </div>

        {!payOsStep ? (
            <div className="p-8">
                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 max-h-40 overflow-y-auto">
                    {itemsToCheckout.map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-center mb-3 last:mb-0">
                            <img src={item.thumbnail} className="w-10 h-10 rounded bg-gray-200 object-cover" />
                            <div className="flex-1">
                                <p className="text-xs font-bold text-gray-900 truncate">{item.productName}</p>
                                <p className="text-xs text-gray-500">x{item.quantity}</p>
                            </div>
                            <span className="text-xs font-bold text-indigo-600">{formatCurrency(item.price * item.quantity)}</span>
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-between items-center mb-6 border-t border-gray-100 pt-4">
                    <span className="font-bold text-gray-700">Tổng thanh toán:</span>
                    <span className="font-bold text-xl text-indigo-600">{formatCurrency(totalAmount)}</span>
                </div>

                <form onSubmit={handleCheckout} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email nhận tài khoản</label>
                        <input 
                            type="email" 
                            required 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Nhập email của bạn..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            * Vui lòng nhập chính xác Email. Hệ thống sẽ gửi thông tin tài khoản (username/password) về địa chỉ này ngay sau khi thanh toán.
                        </p>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isProcessing}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2"
                    >
                        {isProcessing ? <Loader2 className="animate-spin w-5 h-5"/> : 'Tiếp tục thanh toán'}
                    </button>
                </form>
            </div>
        ) : (
            <div className="p-8 text-center">
                {/* Simulation of PayOS Gateway */}
                <div className="mb-6">
                    <div className="w-48 h-48 bg-gray-100 mx-auto rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 z-10 animate-pulse"></div>
                         <QrCode className="w-24 h-24 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Đang tạo mã VietQR...</p>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">Đang xử lý thanh toán</h3>
                <p className="text-gray-600 mb-6 text-sm">Vui lòng không tắt trình duyệt.</p>
                
                <div className="flex justify-center">
                    <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                </div>
            </div>
        )}
      </div>
    </div>
  );
};
