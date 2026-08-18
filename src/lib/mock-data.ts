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
