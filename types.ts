
// Product Types
export interface ProductOption {
    id: string;
    name: string; // e.g., "1 Tháng", "1 Năm"
    price: number;
    original_price?: number;
}

export interface Product {
    category: string;
    created_at: string;
    description: string;
    id: string;
    long_description?: string; // HTML or Markdown-like text
    name: string;
    original_price?: number;
    price: number;
    thumbnail: string;
    youtube_video_id?: string;
    product_features: Feature[];
    product_guides: Guides[];
    product_options: ProductOption[]
}

export interface Category {
    id: number;
    category_name: string | null;
}

// Cart Types
export interface CartItem {
    product: Product;
    quantity: number;
    selectedOption?: ProductOption; // New: Track which option was selected
}

export interface Order {
    id: string;
    order_code: string;
    user_email: string;
    total_amount: number;
    status: string;
    created_at: string;
    updated_at: string;
    order_item: OrderItem[];
}

// Order Types
export interface OrderItem {
    id: number;
    order_id: string;
    product_id: string;
    productName: string;
    option_id: string;
    optionName: string;
    price: number;
    quantity: number;
}

export interface Options {
    id: string,
    product_id: string,
    option_code: string,
    name: string,
    price: number,
    original_price: number,
}

export interface Feature {
    id: string;
    product_id: string;
    feature: string;
}


export interface Guides {
    id: string,
    product_id: string,
    step_order: string,
    step_text: string,
}

export interface Slides {
    id: string,
    tag: string,
    title: string,
    highlight: string,
    description: string,
    bg_image: string,
    gradient: string,
    btn_color: string
}

export interface Account {
    id: number;
    product_id: string;
    option_id: string;
    username: string;
    password: string;
    is_sold: boolean;
    sold_at: Date | null;
    order_item_id: number | null;
    created_at: Date;
}

export interface HeroSlide {
    id: number;
    tag?: string | null;
    title?: string | null;
    highlight?: string | null;
    description?: string | null;
    bg_image?: string | null;
    gradient?: string | null;
    btn_color?: string | null;
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
