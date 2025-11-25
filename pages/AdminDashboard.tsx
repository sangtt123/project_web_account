
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiAdminAddStock, apiAdminGetOrders, apiAdminGetStats, apiAdminGetStock } from '../services/mockBackend';
import { logger } from '../services/logger';
import { adminAuthService } from '../services/adminAuthService'; // Import Admin Auth
import { Order, StockItem, LogEntry } from '../types';
import { LayoutDashboard, Package, ShoppingCart, Terminal, Plus, RefreshCw, LogOut, User } from 'lucide-react';
import { PRODUCTS } from '../constants';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'stock' | 'logs'>('overview');
  const [stats, setStats] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [stock, setStock] = useState<StockItem[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Stock Form State
  const [newStockProduct, setNewStockProduct] = useState(PRODUCTS[0].id);
  const [newStockUser, setNewStockUser] = useState('');
  const [newStockPass, setNewStockPass] = useState('');

  // AUTH GUARD CHECK
  useEffect(() => {
    if (!adminAuthService.isAuthenticated()) {
        navigate('/admin/login');
    } else {
        fetchData();
    }
  }, [navigate]);

  const handleLogout = () => {
    adminAuthService.logout();
    navigate('/admin/login');
  };

  const fetchData = async () => {
    setLoading(true);
    const s = await apiAdminGetStats();
    const o = await apiAdminGetOrders();
    const st = await apiAdminGetStock();
    const l = logger.getAllLogs();
    
    setStats(s);
    setOrders(o);
    setStock(st);
    setLogs(l);
    setLoading(false);
  };

  const handleAddStock = async (e: React.FormEvent) => {
    e.preventDefault();
    await apiAdminAddStock({
        productId: newStockProduct,
        username: newStockUser,
        password: newStockPass
    });
    setNewStockUser('');
    setNewStockPass('');
    alert('Đã thêm tài khoản vào kho!');
    fetchData();
  };

  // Prevent flash of content before redirect
  if (!adminAuthService.isAuthenticated()) return null;

  if (loading) return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-indigo-600 font-bold animate-pulse">Đang tải dữ liệu quản trị...</div>
    </div>
  );

  const currentUser = adminAuthService.getCurrentUser();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-indigo-100 flex flex-col fixed h-full shadow-xl z-10">
        <div className="p-6 border-b border-indigo-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <div className="bg-indigo-500 p-1.5 rounded-lg">
                    <User className="w-5 h-5 text-white" />
                </div>
                Quản Trị Viên
            </h2>
            <p className="text-xs text-indigo-400 mt-2">Xin chào, <span className="text-white font-bold">{currentUser}</span></p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
            <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-indigo-700 text-white shadow-lg' : 'hover:bg-indigo-800'}`}>
                <LayoutDashboard className="w-5 h-5" /> Tổng quan
            </button>
            <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'orders' ? 'bg-indigo-700 text-white shadow-lg' : 'hover:bg-indigo-800'}`}>
                <ShoppingCart className="w-5 h-5" /> Đơn hàng
            </button>
            <button onClick={() => setActiveTab('stock')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'stock' ? 'bg-indigo-700 text-white shadow-lg' : 'hover:bg-indigo-800'}`}>
                <Package className="w-5 h-5" /> Kho tài khoản
            </button>
            <button onClick={() => setActiveTab('logs')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'logs' ? 'bg-indigo-700 text-white shadow-lg' : 'hover:bg-indigo-800'}`}>
                <Terminal className="w-5 h-5" /> System Logs
            </button>
        </nav>
        <div className="p-4 border-t border-indigo-800">
            <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600/20 hover:text-red-400 transition-colors text-indigo-200 mb-2"
            >
                <LogOut className="w-5 h-5" /> Đăng xuất
            </button>
            <Link to="/" className="w-full flex items-center justify-center text-xs text-indigo-400 hover:text-white mt-2">
                &larr; Về trang cửa hàng
            </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8 overflow-auto h-screen">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 capitalize">
                {activeTab === 'overview' ? 'Tổng quan' : 
                 activeTab === 'orders' ? 'Danh sách đơn hàng' :
                 activeTab === 'stock' ? 'Quản lý kho' : 'Nhật ký hệ thống'}
            </h1>
            <button onClick={fetchData} className="p-2 bg-white rounded-full shadow hover:bg-gray-50 text-gray-600 transition-transform hover:rotate-180 duration-500">
                <RefreshCw className="w-5 h-5" />
            </button>
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && stats && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-in fade-in duration-500">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Doanh thu</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">{new Intl.NumberFormat('vi-VN').format(stats.totalRevenue)} đ</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Tổng đơn</p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Đã bán</p>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.soldStock}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Tồn kho</p>
                    <p className="text-3xl font-bold text-orange-600 mt-2">{stats.availableStock}</p>
                </div>
            </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase font-bold">
                            <th className="p-4">Mã Đơn</th>
                            <th className="p-4">Email Khách Hàng</th>
                            <th className="p-4">Sản Phẩm (SL)</th>
                            <th className="p-4">Trạng Thái</th>
                            <th className="p-4 text-right">Giá Trị</th>
                            <th className="p-4 text-right">Thời Gian</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {orders.map(order => (
                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-xs font-mono font-bold text-indigo-600">{order.id}</td>
                                <td className="p-4 text-sm text-gray-700">{order.userEmail}</td>
                                <td className="p-4 text-sm font-medium text-gray-800">
                                    {order.items.map(i => `${i.productName} (x${i.quantity})`).join(', ')}
                                </td>
                                <td className="p-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${order.status === 'PAID' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-yellow-100 text-yellow-700 border border-yellow-200'}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm font-bold text-gray-900 text-right">{order.totalAmount.toLocaleString()} đ</td>
                                <td className="p-4 text-xs text-gray-500 text-right">{new Date(order.createdAt).toLocaleString('vi-VN')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}

        {/* STOCK TAB */}
        {activeTab === 'stock' && (
            <div className="space-y-6 animate-in slide-in-from-bottom-5 duration-300">
                {/* Add Stock Form */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold mb-4 flex items-center gap-2 text-gray-800"><Plus className="w-5 h-5 text-indigo-600" /> Nhập kho tài khoản thủ công</h3>
                    <form onSubmit={handleAddStock} className="flex gap-4 items-end flex-wrap">
                        <div className="flex-1 min-w-[200px]">
                            <label className="text-xs text-gray-500 font-bold uppercase block mb-1.5">Sản phẩm</label>
                            <div className="relative">
                                <select 
                                    value={newStockProduct} 
                                    onChange={e => setNewStockProduct(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                >
                                    {PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <label className="text-xs text-gray-500 font-bold uppercase block mb-1.5">Tài khoản / Email</label>
                            <input 
                                type="text" 
                                required
                                value={newStockUser}
                                onChange={e => setNewStockUser(e.target.value)}
                                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <label className="text-xs text-gray-500 font-bold uppercase block mb-1.5">Mật khẩu / Key</label>
                            <input 
                                type="text" 
                                required
                                value={newStockPass}
                                onChange={e => setNewStockPass(e.target.value)}
                                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="secret123"
                            />
                        </div>
                        <button type="submit" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">
                            Thêm vào kho
                        </button>
                    </form>
                </div>

                {/* Stock List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase font-bold">
                            <tr className="text-left">
                                <th className="p-4">Sản Phẩm (ID)</th>
                                <th className="p-4">Tài khoản</th>
                                <th className="p-4">Mật khẩu</th>
                                <th className="p-4">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {stock.map(item => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 text-sm font-medium text-gray-700">
                                        {PRODUCTS.find(p => p.id === item.productId)?.name || item.productId}
                                    </td>
                                    <td className="p-4 text-sm text-gray-600 font-mono">{item.username}</td>
                                    <td className="p-4 text-sm text-gray-400 font-mono">••••••</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${item.isSold ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                            {item.isSold ? 'ĐÃ BÁN' : 'SẴN SÀNG'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}

        {/* LOGS TAB */}
        {activeTab === 'logs' && (
            <div className="bg-gray-900 text-gray-300 rounded-xl overflow-hidden font-mono text-sm shadow-xl h-[600px] overflow-y-auto p-4 animate-in slide-in-from-bottom-5 duration-300">
                {logs.length === 0 && <div className="text-center py-10 text-gray-500">No logs found.</div>}
                {logs.map(log => (
                    <div key={log.id} className="mb-2 border-b border-gray-800 pb-2 last:border-0 hover:bg-gray-800/50 p-2 rounded transition-colors">
                        <div className="flex gap-3 mb-1">
                            <span className="text-gray-500 select-none">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                            <span className={`${
                                log.level === 'INFO' ? 'text-blue-400' : 
                                log.level === 'WARN' ? 'text-yellow-400' : 'text-red-500'
                            } font-bold w-12`}>
                                {log.level}
                            </span>
                            <span className="text-white font-semibold">{log.event}</span>
                        </div>
                        {log.details && (
                            <pre className="text-xs text-gray-500 ml-[120px] whitespace-pre-wrap overflow-x-auto">
                                {typeof log.details === 'object' ? JSON.stringify(log.details, null, 2) : log.details}
                            </pre>
                        )}
                    </div>
                ))}
            </div>
        )}
      </main>
    </div>
  );
};
