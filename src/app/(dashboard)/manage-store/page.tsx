import * as React from "react"
import { Header } from "@/components/layout/Header"
import { StoreSummaryCards } from "@/components/store/StoreSummaryCards"
import { QuickActions } from "@/components/store/QuickActions"
import { SalesChart } from "@/components/charts/SalesChart"
import { OrdersChart } from "@/components/charts/OrdersChart"
import { LowStockAlert } from "@/components/store/LowStockAlert"
import { TopSellingProducts } from "@/components/store/TopSellingProducts"
import { RecentOrdersTable } from "@/components/store/RecentOrdersTable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export default function ManageStorePage() {
  const currentDate = "Wednesday, August 13, 2026"

  return (
    <div className="container mx-auto flex flex-col min-h-full pb-8">
      <Header 
        title="Manage Store" 
        description={currentDate} 
      />
      
      <main className="flex-1 space-y-6 mt-2">
        <StoreSummaryCards />
        
        <QuickActions />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 px-6">
          <SalesChart />
          <OrdersChart />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 px-6">
          <LowStockAlert />
          <TopSellingProducts />
        </div>

        <div className="px-6">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Recent Order</h3>
          <Card className="rounded-2xl border-none shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <RecentOrdersTable />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
