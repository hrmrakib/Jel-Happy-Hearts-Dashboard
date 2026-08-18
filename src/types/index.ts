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
