"use client"

import * as React from "react"
import { Eye, Check, X, Trash2 } from "lucide-react"
import { Order } from "@/types"
import { Badge } from "@/components/ui/Badge"
import { Pagination } from "@/components/ui/Pagination"
import Image from "next/image"

interface OrdersTableProps {
  orders: Order[]
  onViewOrder: (order: Order) => void
}

export function OrdersTable({ orders, onViewOrder }: OrdersTableProps) {
  const [currentPage, setCurrentPage] = React.useState(1)

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Delivered": return "success"
      case "Completed": return "default" // gray
      case "Processing": return "purple"
      case "Shipped": return "warning" // orange
      case "Pending": return "warning" // light orange/yellow
      case "Canceled": return "destructive"
      default: return "default"
    }
  }

  return (
    <div className="w-full flex flex-col h-full min-h-[400px]">
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-primary-50 text-gray-700">
            <tr>
              <th className="px-6 py-4 font-medium rounded-tl-xl w-10">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
              </th>
              <th className="px-6 py-4 font-medium">Users</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Order Id</th>
              <th className="px-6 py-4 font-medium">Product Name</th>
              <th className="px-6 py-4 font-medium">Item</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium rounded-tr-xl">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 bg-white">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {order.user.avatarUrl ? (
                      <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-100">
                        <Image src={order.user.avatarUrl} alt={order.user.name} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
                        {order.user.initials || "U"}
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{order.user.name}</div>
                      <div className="text-xs text-gray-400">{order.user.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{order.date}</td>
                <td className="px-6 py-4 text-gray-900">{order.orderId}</td>
                <td className="px-6 py-4 text-gray-900">{order.productName}</td>
                <td className="px-6 py-4 text-gray-500">{order.itemCount}</td>
                <td className="px-6 py-4 text-gray-900 font-medium">${order.amount}</td>
                <td className="px-6 py-4">
                  <Badge variant={getStatusBadgeVariant(order.status) as any}>
                    {order.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onViewOrder(order)}
                      className="text-gray-400 hover:text-gray-900 transition-colors p-1"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    {order.status === "Pending" && (
                      <>
                        <button className="text-gray-400 hover:text-green-600 transition-colors p-1">
                          <Check className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-red-600 transition-colors p-1">
                          <X className="h-4 w-4" />
                        </button>
                      </>
                    )}
                    {order.status === "Completed" && (
                      <button className="text-gray-400 hover:text-red-600 transition-colors p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-gray-50 flex justify-center">
        <Pagination 
          currentPage={currentPage} 
          totalPages={10} 
          onPageChange={setCurrentPage} 
        />
      </div>
    </div>
  )
}
