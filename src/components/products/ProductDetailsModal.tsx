"use client"

import * as React from "react"
import Image from "next/image"
import { Pencil } from "lucide-react"
import { Modal } from "@/components/ui/Modal"
import { Product } from "@/types"

interface ProductDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product | null
}

export function ProductDetailsModal({ isOpen, onClose, product }: ProductDetailsModalProps) {
  if (!product) return null

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Active": return "text-green-600"
      case "Out of Stock": return "text-red-600"
      case "Low Stock": return "text-orange-600"
      default: return "text-gray-600"
    }
  }

  const actionIcon = (
    <button className="rounded-full p-1.5 hover:bg-gray-100 text-gray-500 transition-colors">
      <Pencil className="h-4 w-4" />
    </button>
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Product Details" actionIcon={actionIcon}>
      <div className="space-y-4">
        {product.image && (
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gray-100 shadow-sm mx-auto sm:mx-0">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover"
            />
          </div>
        )}
        
        <div>
          <h3 className="text-lg font-serif font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mt-1">
            High-filtration N95 particulate respirator mask designed for professional medical environments. Features a comfortable, ergonomic fit with dual...
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 bg-primary-50/50 p-4 rounded-xl">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Price</p>
            <p className="text-sm font-medium text-gray-900">${product.price}</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Total Revenue</p>
            <p className="text-sm font-medium text-gray-900">${product.totalRevenue || 0}</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Total Unit Sold</p>
            <p className="text-sm font-medium text-gray-900">{product.totalUnitSold || 0}</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Previous Stock</p>
            <p className="text-sm font-medium text-gray-900">{product.previousStock || 0}</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Current Stock</p>
            <p className="text-sm font-medium text-gray-900">{String(product.stock).padStart(2, '0')}</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Status</p>
            <p className={`text-sm font-medium ${getStatusColor(product.status)}`}>{product.status}</p>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button 
            className="flex-1 py-2 text-primary bg-white border-b-2 border-primary rounded-xl text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors"
          >
            Delete Item
          </button>
          <button 
            className="flex-1 py-2 text-primary bg-white border border-primary/20 rounded-xl text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors"
          >
            Out of Stock
          </button>
          <button 
            className="flex-1 py-2 bg-primary text-white rounded-xl text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
          >
            Re-Stock Now
          </button>
        </div>
      </div>
    </Modal>
  )
}
