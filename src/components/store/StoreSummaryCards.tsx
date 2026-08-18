import * as React from "react"
import { DollarSign, CheckCircle, Clock, Package, TrendingUp } from "lucide-react"
import { storeSummaryData } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/Card"

export function StoreSummaryCards() {
  const cards = [
    {
      title: "Total Income",
      value: `$${storeSummaryData.totalIncome}`,
      icon: DollarSign,
    },
    {
      title: "Total Completed Order",
      value: storeSummaryData.totalCompletedOrder,
      icon: CheckCircle,
    },
    {
      title: "Pending Order",
      value: storeSummaryData.pendingOrder,
      icon: Clock,
    },
    {
      title: "Total Product",
      value: storeSummaryData.totalProduct,
      icon: Package,
    },
    {
      title: "Today's Sales",
      value: storeSummaryData.todaysSales,
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5 px-6">
      {cards.map((card) => (
        <Card key={card.title} className="rounded-2xl border-none shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-1">{card.title}</p>
                <h2 className="text-3xl font-serif text-gray-900">{card.value}</h2>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50">
                <card.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
