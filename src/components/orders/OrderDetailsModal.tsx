"use client"

import * as React from "react"
import Image from "next/image"
import { Modal } from "@/components/ui/Modal"
import { OrderProgressTracker } from "@/components/orders/OrderProgressTracker"
import { Order } from "@/types"
import { Mail, Phone } from "lucide-react"

interface OrderDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  order: Order | null
}

export function OrderDetailsModal({ isOpen, onClose, order }: OrderDetailsModalProps) {
  if (!order) return null

  const steps = ["Cancel", "Received", "Confirmed", "Processing", "Packed", "Shipped", "Delivered"]

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Order Details" className="max-w-3xl">
      <div className="space-y-6">
        {/* Progress Tracker */}
        <div className="px-4 pb-4">
          <OrderProgressTracker currentStatus={order.status} />
        </div>

        {/* Order Info */}
        <div>
          <h3 className="text-xl font-serif font-bold text-gray-900">Order {order.orderId}</h3>
          <p className="text-sm text-gray-500">Placed: {order.placedTime || "Oct 24, 2023, 10:42 AM"}</p>
        </div>

        {/* Customer Info */}
        <div className="bg-primary-50/50 rounded-2xl p-5 border border-primary/10">
          <h4 className="text-sm text-gray-500 mb-3">Customer Info</h4>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3">
              {order.user.avatarUrl ? (
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white shadow-sm">
                  <Image src={order.user.avatarUrl} alt={order.user.name} fill className="object-cover" />
                </div>
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-medium">
                  {order.user.initials || "U"}
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900">{order.user.name}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {order.user.email}</span>
                  <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {order.user.phone}</span>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px bg-gray-200"></div>
            
            <div>
              <p className="font-medium text-gray-900 text-sm">Shipping Address</p>
              <p className="text-xs text-gray-500 mt-1 whitespace-pre-line leading-relaxed">
                {order.user.address}
              </p>
            </div>
          </div>
        </div>

        {/* Order Items & Summary */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Summary */}
          <div className="md:col-span-2 order-2 md:order-1 border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h4 className="text-sm text-gray-500 mb-4">Order Summary</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal ({order.items?.length || 0} items)</span>
                <span className="font-medium text-gray-900">${order.summary?.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Discount</span>
                <span className="font-medium text-red-500">-${order.summary?.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium text-gray-900">${order.summary?.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax</span>
                <span className="font-medium text-gray-900">${order.summary?.tax.toFixed(2)}</span>
              </div>
              
              <div className="pt-3 border-t border-gray-100 mt-2 flex justify-between">
                <span className="font-serif font-bold text-gray-900 text-base">Total</span>
                <span className="font-medium text-primary text-base">${order.summary?.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="md:col-span-3 order-1 md:order-2 border border-gray-100 rounded-2xl p-0 shadow-sm overflow-hidden flex flex-col">
            <div className="px-5 py-3 bg-primary-50/50 border-b border-primary/10 flex justify-between text-xs font-medium text-gray-500 uppercase tracking-wider">
              <span>Order Item</span>
            </div>
            
            <div className="flex-1 overflow-y-auto max-h-[220px]">
              <table className="w-full text-sm text-left">
                <thead className="bg-primary-50 text-xs text-gray-500 font-medium">
                  <tr>
                    <th className="px-4 py-2 uppercase">Product</th>
                    <th className="px-4 py-2 uppercase">Qty</th>
                    <th className="px-4 py-2 uppercase">Unit Price</th>
                    <th className="px-4 py-2 uppercase">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {order.items?.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-gray-100 bg-gray-50">
                            {item.product.image && (
                              <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-gray-900 truncate">{item.product.name}</p>
                            <p className="text-xs text-gray-500">ID: {item.product.sku}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-700">{item.quantity}</td>
                      <td className="px-4 py-3 text-gray-700">${item.unitPrice.toFixed(2)}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">${item.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Status Change Buttons */}
            <div className="px-4 py-4 bg-gray-50/50 border-t border-gray-100">
              <div className="flex flex-wrap justify-end gap-2">
                {steps.map((step) => (
                  <button
                    key={step}
                    className={`
                      px-4 py-1.5 rounded-full text-xs font-medium transition-colors border
                      ${order.status === step 
                        ? 'bg-primary text-white border-primary shadow-sm' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                      }
                    `}
                  >
                    {step}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
