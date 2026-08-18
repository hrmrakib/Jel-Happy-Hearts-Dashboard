"use client"

import * as React from "react"
import { Eye, Trash2 } from "lucide-react"
import { Product } from "@/types"
import { Badge } from "@/components/ui/Badge"
import { Pagination } from "@/components/ui/Pagination"

interface ProductsTableProps {
  products: Product[]
  onViewProduct: (product: Product) => void
}

export function ProductsTable({ products, onViewProduct }: ProductsTableProps) {
  const [currentPage, setCurrentPage] = React.useState(1)

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Active": return "success"
      case "Out of Stock": return "destructive"
      case "Low Stock": return "warning"
      default: return "default"
    }
  }

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-primary-50 text-gray-700">
            <tr>
              <th className="px-6 py-4 font-medium rounded-tl-xl w-10">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
              </th>
              <th className="px-6 py-4 font-medium">Product</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Price</th>
              <th className="px-6 py-4 font-medium">Stock</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium rounded-tr-xl">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 bg-white">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 border border-primary/20">
                      <span className="text-primary text-xs">🩺</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-400">{product.sku}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{product.category}</td>
                <td className="px-6 py-4 text-gray-900 font-medium">${product.price}</td>
                <td className="px-6 py-4 text-gray-500">{product.stock}</td>
                <td className="px-6 py-4">
                  <Badge variant={getStatusBadgeVariant(product.status) as any}>
                    {product.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onViewProduct(product)}
                      className="text-gray-400 hover:text-gray-900 transition-colors p-1"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600 transition-colors p-1">
                      <Trash2 className="h-4 w-4" />
                    </button>
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
