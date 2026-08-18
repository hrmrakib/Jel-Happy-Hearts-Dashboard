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

export type OrderStatus = "Delivered" | "Processing" | "Shipped" | "Pending" | "Canceled";

export interface Order {
  id: string;
  orderId: string;
  user: {
    name: string;
    avatarUrl: string;
    id: string; // The #12345 ID string
  };
  productName: string;
  amount: number;
  status: OrderStatus;
  date: string;
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
