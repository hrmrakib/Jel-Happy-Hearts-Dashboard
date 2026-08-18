import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { mockTopSellingProducts } from "@/lib/mock-data"
import { Headphones, Tv, Keyboard, Monitor } from "lucide-react"

export function TopSellingProducts() {
  const getIconForIndex = (index: number) => {
    switch (index) {
      case 0: return <Headphones className="h-5 w-5 text-gray-500" />
      case 1: return <Tv className="h-5 w-5 text-gray-500" />
      case 2: return <Keyboard className="h-5 w-5 text-gray-500" />
      case 3: return <Monitor className="h-5 w-5 text-gray-500" />
      default: return <Package className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <Card className="rounded-2xl border-none shadow-sm overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <CardTitle className="text-base font-semibold">Top Selling Products</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 mt-4">
          {mockTopSellingProducts.map((product, index) => {
            const isPositive = product.trend > 0
            return (
              <div key={product.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-400 w-4">
                    0{index + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                    {getIconForIndex(index)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                    <p className="text-xs text-gray-500">{product.unitsSold.toLocaleString()} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    ${(product.revenue / 1000).toFixed(1)}k
                  </p>
                  <p className={`text-xs font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {isPositive ? '+' : ''}{product.trend}%
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

import { Package } from "lucide-react"
