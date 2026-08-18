import { Notification, SummaryData, User } from "@/types";

export const summaryData: SummaryData = {
  totalUsers: 725,
  totalRevenue: 5180,
  totalOrder: 50,
  pendingOrder: 525,
};

export const mockUsers: User[] = [
  {
    id: "#12345",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Free",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: "#12346",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Free",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "#12347",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Premium",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Suspended",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  },
  {
    id: "#12348",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Premium",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
  },
  {
    id: "#12349",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Premium",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  },
  {
    id: "#12350",
    name: "Olivia Rhye",
    email: "olivia123@gmail.com",
    phone: "0175589484",
    subscription: "Free",
    role: "Job Seeker",
    joiningDate: "19 March, 2026",
    status: "Active",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  }
];

export const mockNotifications: Notification[] = Array(6).fill(null).map((_, i) => ({
  id: `notif-${i}`,
  title: "New user registered successfully",
  time: "2024-03-09 - 10:30 AM",
  read: false,
}));

export const revenueData = [
  { name: '2020', value: 1000 },
  { name: '2021', value: 3000 },
  { name: '2023', value: 2500 },
  { name: '2024', value: 8900 },
  { name: '2025', value: 4000 },
  { name: '2026', value: 7500 },
];

export const userGrowthData = [
  { name: 'Janu', value: 600 },
  { name: 'Feb', value: 500 },
  { name: 'Mar', value: 400 },
  { name: 'Apr', value: 300 },
  { name: 'May', value: 200 },
  { name: 'June', value: 500 },
  { name: 'Jul', value: 400 },
  { name: 'Aug', value: 340 },
];

import { Product, Order, StoreSummaryData, LowStockAlertItem, TopSellingProduct } from "@/types";

export const storeSummaryData: StoreSummaryData = {
  totalIncome: 5180,
  totalCompletedOrder: 725,
  pendingOrder: 25,
  totalProduct: 725,
  todaysSales: 725,
};

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12345",
    category: "0175589484",
    price: 124,
    stock: 120,
    status: "Active",
    totalRevenue: 125,
    totalUnitSold: 120,
    previousStock: 125,
    image: "https://images.unsplash.com/photo-1584982751601-97d880f6f9fa?w=400&q=80",
  },
  {
    id: "p2",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12346",
    category: "0175589484",
    price: 124,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "p3",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12347",
    category: "0175589484",
    price: 124,
    stock: 5,
    status: "Low Stock",
  },
  {
    id: "p4",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12348",
    category: "0175589484",
    price: 124,
    stock: 120,
    status: "Active",
  },
  {
    id: "p5",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12349",
    category: "0175589484",
    price: 124,
    stock: 120,
    status: "Active",
  },
  {
    id: "p6",
    name: "Stethoscope Premium Medical Equipment",
    sku: "#12350",
    category: "0175589484",
    price: 124,
    stock: 120,
    status: "Active",
  },
];

export const mockOrders: Order[] = [
  {
    id: "o1",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Delivered",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
  {
    id: "o2",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Processing",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
  {
    id: "o3",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Shipped",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
  {
    id: "o4",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Pending",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
  {
    id: "o5",
    orderId: "#ORD-8821",
    user: {
      name: "Olivia Rhye",
      id: "#12345",
      email: "olivia@example.com",
      phone: "+1 234 567 890",
      address: "124 Wellness Way\nSerenity City, CA 90210",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      initials: "OR"
    },
    productName: "Standing Desk Pro",
    itemCount: 3,
    amount: 212,
    status: "Completed",
    date: "19 March, 2026",
    placedTime: "Oct 24, 2023, 10:42 AM",
    summary: { subtotal: 61.00, discount: 5.00, shipping: 8.50, tax: 5.00, total: 69.50 },
    items: [
      { id: "i1", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 },
      { id: "i2", product: mockProducts[0], quantity: 2, unitPrice: 24.50, total: 49.00 }
    ]
  },
];

export const mockLowStockAlerts: LowStockAlertItem[] = [
  {
    id: "ls1",
    name: "USB-C Dock Station 12-in-1",
    sku: "SKU-00421",
    left: 3,
    min: 10,
  },
  {
    id: "ls2",
    name: "Monitor Light Bar Pro",
    sku: "SKU-00318",
    left: 7,
    min: 15,
  },
  {
    id: "ls3",
    name: "Laptop Stand Aluminum",
    sku: "SKU-00209",
    left: 2,
    min: 10,
  },
  {
    id: "ls4",
    name: "Mouse Pad XL Stitched",
    sku: "SKU-00512",
    left: 9,
    min: 20,
  },
];

export const mockTopSellingProducts: TopSellingProduct[] = [
  {
    id: "ts1",
    name: "Wireless ANC Headphones",
    unitsSold: 1842,
    revenue: 404400,
    trend: 18.4,
  },
  {
    id: "ts2",
    name: "Ergonomic Chair X3",
    unitsSold: 834,
    revenue: 456800,
    trend: 12.1,
  },
  {
    id: "ts3",
    name: "Mechanical Keyboard TKL",
    unitsSold: 2310,
    revenue: 389600,
    trend: 24.7,
  },
  {
    id: "ts4",
    name: "4K Webcam Ultra",
    unitsSold: 1120,
    revenue: 145600,
    trend: -9.3,
  },
];
