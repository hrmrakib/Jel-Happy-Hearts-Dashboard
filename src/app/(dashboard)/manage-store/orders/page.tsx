"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { StoreSummaryCards } from "@/components/store/StoreSummaryCards"
import { QuickActions } from "@/components/store/QuickActions"
import { OrdersTable } from "@/components/orders/OrdersTable"
import { OrderDetailsModal } from "@/components/orders/OrderDetailsModal"
import { mockOrders } from "@/lib/mock-data"
import { Card, CardContent, CardHeader } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Tabs } from "@/components/ui/Tabs"
import { Order } from "@/types"

const tabs = ["All", "New", "Processing", "Packed", "Shipped", "Delivered", "Completed"]

export default function OrdersPage() {
  const currentDate = "Wednesday, August 13, 2026"
  const [activeTab, setActiveTab] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedOrder, setSelectedOrder] = React.useState<Order | null>(null)

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order)
  }

  const closeDetailsModal = () => {
    setSelectedOrder(null)
  }

  return (
    <div className="container mx-auto flex flex-col min-h-full pb-8">
      <Header 
        title="Pending Order" 
        description={currentDate} 
      />
      
      <main className="flex-1 space-y-6 mt-2">
        <StoreSummaryCards />
        
        <QuickActions />

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
                      placeholder="Search order..." 
                      icon={<Search className="h-4 w-4" />}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="rounded-full bg-white border border-gray-100 focus-visible:ring-primary/20 focus-visible:border-primary/50 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-1 flex flex-col mt-4">
              <OrdersTable 
                orders={mockOrders} 
                onViewOrder={handleViewOrder} 
              />
            </CardContent>
          </Card>
        </div>
      </main>

      <OrderDetailsModal 
        isOpen={!!selectedOrder} 
        onClose={closeDetailsModal} 
        order={selectedOrder}
      />
    </div>
  )
}
