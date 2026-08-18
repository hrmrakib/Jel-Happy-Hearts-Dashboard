"use client"

import * as React from "react"
import { Eye } from "lucide-react"
import { Order } from "@/types"
import { Badge } from "@/components/ui/Badge"
import { mockOrders } from "@/lib/mock-data"
import Image from "next/image"

export function RecentOrdersTable() {
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Delivered": return "success"
      case "Processing": return "purple"
      case "Shipped": return "warning" // Using warning/orange for shipped as per design
      case "Pending": return "warning" // Also orange/yellow
      case "Canceled": return "destructive"
      default: return "default"
    }
  }

  return (
    <div className="w-full overflow-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary-50/50 text-gray-500">
          <tr>
            <th className="px-6 py-4 font-medium rounded-tl-xl w-10">
              <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
            </th>
            <th className="px-6 py-4 font-medium">Users</th>
            <th className="px-6 py-4 font-medium">Order Id</th>
            <th className="px-6 py-4 font-medium">Product Name</th>
            <th className="px-6 py-4 font-medium">Amount</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium">Date</th>
            <th className="px-6 py-4 font-medium rounded-tr-xl">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 bg-white">
          {mockOrders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-100">
                    <Image
                      src={order.user.avatarUrl}
                      alt={order.user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{order.user.name}</div>
                    <div className="text-xs text-gray-500">{order.user.id}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-500">{order.orderId}</td>
              <td className="px-6 py-4 text-gray-900">{order.productName}</td>
              <td className="px-6 py-4 text-gray-900 font-medium">${order.amount}</td>
              <td className="px-6 py-4">
                <Badge variant={getStatusBadgeVariant(order.status) as any}>
                  {order.status}
                </Badge>
              </td>
              <td className="px-6 py-4 text-gray-500">{order.date}</td>
              <td className="px-6 py-4">
                <button className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
