import * as React from "react"
import { Users, DollarSign, ShoppingCart, Clock } from "lucide-react"
import { summaryData } from "@/lib/mock-data"
import { Card, CardContent } from "../ui/Card"

export function SummaryCards() {
  const cards = [
    {
      title: "Total Users",
      value: summaryData.totalUsers,
      icon: Users,
      iconColor: "text-primary",
    },
    {
      title: "Total Revenue",
      value: `$${summaryData.totalRevenue}`,
      icon: DollarSign,
      iconColor: "text-primary",
    },
    {
      title: "Total Order",
      value: summaryData.totalOrder,
      icon: ShoppingCart,
      iconColor: "text-primary",
    },
    {
      title: "Pending Order",
      value: summaryData.pendingOrder,
      icon: Clock,
      iconColor: "text-primary",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-6">
      {cards.map((card) => (
        <Card key={card.title} className="rounded-2xl border-none shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-1">{card.title}</p>
                <h2 className="text-3xl font-serif text-gray-900">{card.value}</h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
                <card.icon className={`h-5 w-5 ${card.iconColor}`} aria-hidden="true" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
