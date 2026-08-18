"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { ProductSummaryCards } from "@/components/products/ProductSummaryCards"
import { ProductsTable } from "@/components/products/ProductsTable"
import { AddProductModal } from "@/components/products/AddProductModal"
import { ProductDetailsModal } from "@/components/products/ProductDetailsModal"
import { mockProducts } from "@/lib/mock-data"
import { Card, CardContent, CardHeader } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Tabs } from "@/components/ui/Tabs"
import { Product } from "@/types"

const tabs = ["All", "Active", "Low Stock", "Out of Stock"]

export default function ProductsPage() {
  const [activeTab, setActiveTab] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null)

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeDetailsModal = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="container mx-auto flex flex-col min-h-full pb-8">
      <Header 
        title="Products" 
        description="Manage your medical supply inventory." 
      />
      
      <main className="flex-1 space-y-6 mt-2">
        <ProductSummaryCards />

        <div className="px-6">
          <Card className="rounded-2xl border-none shadow-sm overflow-hidden flex flex-col h-full min-h-[500px]">
            <CardHeader className="pb-0 pt-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-transparent">
                <Tabs 
                  tabs={tabs}
                  activeTab={activeTab}
                  onChange={setActiveTab}
                  className="w-full lg:w-auto"
                />
                
                <div className="flex w-full lg:w-auto items-center gap-4 pb-3 lg:pb-0">
                  <div className="w-full lg:w-64">
                    <Input 
                      placeholder="Search Product" 
                      icon={<Search className="h-4 w-4" />}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="rounded-full bg-white border border-gray-100 focus-visible:ring-primary/20 focus-visible:border-primary/50 shadow-sm"
                    />
                  </div>
                  <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="whitespace-nowrap px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-1 flex flex-col mt-4">
              <ProductsTable 
                products={mockProducts} 
                onViewProduct={handleViewProduct} 
              />
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Modals */}
      <AddProductModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
      
      <ProductDetailsModal 
        isOpen={!!selectedProduct} 
        onClose={closeDetailsModal} 
        product={selectedProduct}
      />
    </div>
  )
}
