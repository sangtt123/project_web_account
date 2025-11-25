
import { Order, StockItem, OrderItem, AccountCredentials } from '../types';
import { MOCK_ACCOUNTS } from '../constants';
import { logger } from './logger';

const ORDERS_KEY = 'app_orders';
const STOCK_KEY = 'app_stock_v3'; // Increment version to clear old stock

// Initialize Stock if empty
const initializeStock = () => {
  if (!localStorage.getItem(STOCK_KEY)) {
    const initialStock: StockItem[] = [];
    // Convert MOCK_ACCOUNTS constant to StockItems
    Object.entries(MOCK_ACCOUNTS).forEach(([prodId, creds]) => {
      // Create 50 copies of each for demo
      for (let i = 0; i < 50; i++) {
        initialStock.push({
          id: `stock-${prodId}-${i}`,
          productId: prodId,
          username: i === 0 ? creds.u : `${prodId}-user-${i}@gmail.com`,
          password: creds.p,
          isSold: false,
          createdAt: new Date().toISOString()
        });
      }
    });
    localStorage.setItem(STOCK_KEY, JSON.stringify(initialStock));
  }
};

initializeStock();

// --- Order APIs ---

export const apiCreateOrder = async (items: OrderItem[], email: string, totalAmount: number): Promise<Order> => {
  logger.info('API: Create Order Request', { email, itemsCount: items.length });
  await new Promise(resolve => setTimeout(resolve, 800));

  const newOrder: Order = {
    id: `ORD-${Math.floor(Math.random() * 1000000)}`,
    userEmail: email,
    items: items,
    totalAmount: totalAmount,
    status: 'PENDING',
    createdAt: new Date().toISOString()
  };

  const orders = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
  orders.push(newOrder);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

  logger.info('API: Order Created', { orderId: newOrder.id });
  return newOrder;
};

export const apiCheckPaymentStatus = async (orderId: string): Promise<Order> => {
  // Simulate polling
  await new Promise(resolve => setTimeout(resolve, 1500));

  const orders: Order[] = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
  const orderIndex = orders.findIndex(o => o.id === orderId);

  if (orderIndex === -1) {
    logger.error('API: Order Not Found', { orderId });
    throw new Error("Order not found");
  }

  const order = orders[orderIndex];

  // If already paid, return
  if (order.status === 'PAID') return order;

  // --- MOCK PAYMENT SUCCESS LOGIC ---
  logger.info('Payment: Callback Received (PayOS)', { orderId });
  
  const stockItems: StockItem[] = JSON.parse(localStorage.getItem(STOCK_KEY) || '[]');
  const deliveredAccounts: { productId: string; productName: string; accounts: AccountCredentials[] }[] = [];

  // Process each item in the order
  for (const item of order.items) {
      const itemDelivery = {
          productId: item.productId,
          productName: item.productName,
          accounts: [] as AccountCredentials[]
      };

      // Find stock for this product
      // Note: In a real system, we would also filter by 'Option' (e.g. 1 month stock vs 1 year stock)
      // For this Mock, we share stock pool for the Product ID regardless of option
      let needed = item.quantity;
      
      for (const stock of stockItems) {
          if (needed === 0) break;
          if (stock.productId === item.productId && !stock.isSold) {
              stock.isSold = true;
              itemDelivery.accounts.push({
                  username: stock.username,
                  password: stock.password
              });
              needed--;
          }
      }

      // If still needed (Out of Stock fallback)
      while (needed > 0) {
          itemDelivery.accounts.push({
              username: "LIÊN_HỆ_SUPPORT",
              password: "HẾT_KHO_TẠM_THỜI"
          });
          logger.warn('Stock: Out of stock during delivery', { productId: item.productId });
          needed--;
      }

      deliveredAccounts.push(itemDelivery);
  }

  // Save updated stock
  localStorage.setItem(STOCK_KEY, JSON.stringify(stockItems));

  // Update Order
  order.status = 'PAID';
  order.deliveredAccounts = deliveredAccounts;
  orders[orderIndex] = order;
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

  return order;
};

// --- Admin APIs ---

export const apiAdminGetStats = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const orders: Order[] = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
  const stock: StockItem[] = JSON.parse(localStorage.getItem(STOCK_KEY) || '[]');
  
  return {
    totalRevenue: orders.filter(o => o.status === 'PAID').reduce((acc, curr) => acc + curr.totalAmount, 0),
    totalOrders: orders.length,
    soldStock: stock.filter(s => s.isSold).length,
    availableStock: stock.filter(s => !s.isSold).length
  };
};

export const apiAdminGetOrders = async (): Promise<Order[]> => {
  return JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]').reverse();
};

export const apiAdminGetStock = async (): Promise<StockItem[]> => {
  return JSON.parse(localStorage.getItem(STOCK_KEY) || '[]');
};

export const apiAdminAddStock = async (item: Omit<StockItem, 'id' | 'isSold' | 'createdAt'>) => {
  const stock: StockItem[] = JSON.parse(localStorage.getItem(STOCK_KEY) || '[]');
  const newItem: StockItem = {
    ...item,
    id: `stock-${Date.now()}`,
    isSold: false,
    createdAt: new Date().toISOString()
  };
  stock.push(newItem);
  localStorage.setItem(STOCK_KEY, JSON.stringify(stock));
  logger.info('Admin: Stock Added', { productId: item.productId });
  return newItem;
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};
