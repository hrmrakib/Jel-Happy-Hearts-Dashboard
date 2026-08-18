import * as React from "react"
import { DollarSign, Users, Package, AlertTriangle } from "lucide-react"
import { mockProducts } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/Card"

export function ProductSummaryCards() {
  const totalProduct = mockProducts.length
  const activeProduct = mockProducts.filter(p => p.status === "Active").length
  const outOfStock = mockProducts.filter(p => p.status === "Out of Stock").length
  const lowStock = mockProducts.filter(p => p.status === "Low Stock").length

  const cards = [
    {
      title: "Total Product",
      value: 5180, // from mock image
      icon: DollarSign,
    },
    {
      title: "Active Product",
      value: 725, // from mock image
      icon: Users,
    },
    {
      title: "Out of Stock",
      value: 25, // from mock image
      icon: Users,
    },
    {
      title: "Low Stock",
      value: 725, // from mock image
      icon: Users,
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
