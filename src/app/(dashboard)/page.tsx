import * as React from "react"
import { Header } from "@/components/layout/Header"
import { SummaryCards } from "@/components/shared/SummaryCards"
import { RevenueChart } from "@/components/charts/RevenueChart"
import { UserGrowthChart } from "@/components/charts/UserGrowthChart"
import { UserTable } from "@/components/shared/UserTable"
import { mockUsers } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export default function OverviewPage() {
  return (
    <div className="flex flex-col min-h-full pb-8">
      <Header 
        title="Overview" 
        description="Real-time monetization and user acquisition insights" 
      />
      
      <main className="flex-1 space-y-6">
        <SummaryCards />
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 px-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <UserGrowthChart />
          </div>
        </div>

        <div className="px-6">
          <Card className="rounded-2xl border-none shadow-sm overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle className="text-lg font-serif">Recent Users</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <UserTable users={mockUsers.slice(0, 5)} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
