export type UserStatus = "Active" | "Suspended";
export type SubscriptionType = "Free" | "Premium";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  subscription: SubscriptionType;
  role: string;
  joiningDate: string;
  status: UserStatus;
  avatarUrl: string;
}

export interface Notification {
  id: string;
  title: string;
  time: string;
  read: boolean;
}

export interface SummaryData {
  totalUsers: number;
  totalRevenue: number;
  totalOrder: number;
  pendingOrder: number;
}

export type ProductStatus = "Active" | "Out of Stock" | "Low Stock";

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: ProductStatus;
  image?: string;
  totalRevenue?: number;
  totalUnitSold?: number;
  previousStock?: number;
}

export type OrderStatus = "New" | "Pending" | "Received" | "Confirmed" | "Processing" | "Packed" | "Shipped" | "Delivered" | "Completed" | "Canceled";

export interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface OrderSummary {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}

export interface Order {
  id: string;
  orderId: string;
  user: {
    name: string;
    avatarUrl: string;
    id: string; // The #12345 ID string
    email?: string;
    phone?: string;
    address?: string;
    initials?: string;
  };
  productName: string; // Keep for the summary table
  itemCount: number;
  amount: number;
  status: OrderStatus;
  date: string;
  placedTime?: string;
  items?: OrderItem[];
  summary?: OrderSummary;
}

export interface StoreSummaryData {
  totalIncome: number;
  totalCompletedOrder: number;
  pendingOrder: number;
  totalProduct: number;
  todaysSales: number;
}

export interface LowStockAlertItem {
  id: string;
  name: string;
  sku: string;
  left: number;
  min: number;
}

export interface TopSellingProduct {
  id: string;
  name: string;
  unitsSold: number;
  revenue: number;
  trend: number; // percentage change
  image?: string;
}

// --- Happy Bodies Interfaces ---

export interface ContentBlockData {
  id: string;
  title: string;
  content: string; // HTML or plain text representing the content
  type?: "text" | "options"; // determines if we render options list or normal content
  options?: string[]; // for Happy Heart options list
}

export interface VideoData {
  id: string;
  title: string;
  subtitle?: string;
  duration?: string;
  thumbnailUrl?: string;
  videoUrl?: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  blocks: ContentBlockData[];
  video?: VideoData;
  completed?: boolean;
}

export interface Category {
  id: string;
  title: string;
  subTabs?: string[];
  items: CategoryItem[];
}
