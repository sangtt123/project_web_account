
import { CartItem, Product, ProductOption } from '../types';

const CART_KEY = 'app_cart';

class CartService {
  private listeners: (() => void)[] = [];

  getCart(): CartItem[] {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  addToCart(product: Product, quantity: number = 1, option?: ProductOption) {
    const cart = this.getCart();
    
    // Find existing item based on Product ID AND Option ID (if applicable)
    const existingItem = cart.find(item => {
        const sameProduct = item.product.id === product.id;
        const sameOption = option ? item.selectedOption?.id === option.id : !item.selectedOption;
        return sameProduct && sameOption;
    });

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity, selectedOption: option });
    }

    this.saveCart(cart);
  }

  removeFromCart(productId: string, optionId?: string) {
    let cart = this.getCart();
    cart = cart.filter(item => {
        if (item.product.id !== productId) return true;
        // If IDs match, check options
        const itemOptionId = item.selectedOption?.id;
        // If we are deleting a specific option variant
        if (optionId) {
            return itemOptionId !== optionId;
        }
        // If no optionId passed (legacy), remove all of that product (or just first? safer to match strict)
        return false; 
    });
    this.saveCart(cart);
  }

  updateQuantity(productId: string, quantity: number, optionId?: string) {
    const cart = this.getCart();
    const item = cart.find(item => {
        const sameProduct = item.product.id === productId;
        const sameOption = optionId ? item.selectedOption?.id === optionId : !item.selectedOption;
        return sameProduct && sameOption;
    });

    if (item) {
      item.quantity = quantity > 0 ? quantity : 1;
      this.saveCart(cart);
    }
  }

  clearCart() {
    this.saveCart([]);
  }

  getTotalItems(): number {
    const cart = this.getCart();
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  getTotalPrice(): number {
    const cart = this.getCart();
    return cart.reduce((acc, item) => {
        const price = item.selectedOption ? item.selectedOption.price : item.product.price;
        return acc + (price * item.quantity);
    }, 0);
  }

  private saveCart(cart: CartItem[]) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    this.notifyListeners();
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(l => l());
  }
}

export const cartService = new CartService();
