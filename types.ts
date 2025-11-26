
// Product Types
export interface ProductOption {
    id: string;
    name: string; // e.g., "1 Tháng", "1 Năm"
    price: number;
    originalPrice?: number;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number; // Base price or lowest price
    originalPrice?: number;
    thumbnail: string;
    category: Category;
    features: string[];
    options?: ProductOption[]; // New: List of available options

    // New detailed fields
    longDescription?: string; // HTML or Markdown-like text
    guideSteps?: string[]; // Array of step-by-step instructions
    youtubeVideoId?: string; // YouTube Video ID (e.g., "dQw4w9WgXcQ")
}

export enum Category {
    STREAMING = 'Streaming',
    WORK = 'Work Tools',
    GAMING = 'Gaming',
    VPN = 'VPN & Security'
}

// Cart Types
export interface CartItem {
    product: Product;
    quantity: number;
    selectedOption?: ProductOption; // New: Track which option was selected
}

// Order Types
export interface OrderItem {
    productId: string;
    productName: string; // Should include option name e.g. "Netflix (1 Tháng)"
    price: number;
    quantity: number;
    thumbnail: string;
    optionId?: string; // New
}

export interface Order {
    id: string;
    userEmail: string;
    items: OrderItem[];
    totalAmount: number;
    status: 'PENDING' | 'PAID' | 'FAILED';
    createdAt: string;
    deliveredAccounts?: {
        productId: string;
        productName: string;
        accounts: AccountCredentials[];
    }[];
}

export interface AccountCredentials {
    username?: string;
    password?: string;
    additionalInfo?: string;
}

// Stock/Inventory Types
export interface StockItem {
    id: string;
    productId: string;
    username: string;
    password?: string;
    additionalInfo?: string;
    isSold: boolean;
    createdAt: string;
}

// Logging Types
export interface LogEntry {
    id: string;
    timestamp: string;
    level: 'INFO' | 'WARN' | 'ERROR';
    event: string;
    details?: any;
}

// Chat/AI Types
export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
}

// Admin Auth Types
export interface AdminUser {
    username: string;
    password?: string;
}
