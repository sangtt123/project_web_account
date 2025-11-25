
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SocialFloatingButtons } from './components/SocialFloatingButtons';
import { CartFlyAnimation } from './components/CartFlyAnimation';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { Cart } from './pages/Cart';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminLogin } from './pages/admin/AdminLogin';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <CartFlyAnimation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout/:productId" element={<Checkout />} />
            <Route path="/success/:orderId" element={<OrderSuccess />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </main>
        <Footer />
        <SocialFloatingButtons />
      </div>
    </Router>
  );
}

export default App;
