import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { mockLowStockAlerts } from "@/lib/mock-data"

export function LowStockAlert() {
  return (
    <Card className="rounded-2xl border-none shadow-sm overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <CardTitle className="text-base font-semibold">Low Stock Alert</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-6 mt-4">
          {mockLowStockAlerts.map((item) => {
            const percentage = Math.max(10, (item.left / item.min) * 100)
            const isVeryLow = item.left <= 3
            
            return (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${isVeryLow ? 'text-red-500' : 'text-orange-500'}`}>
                      {item.left} left
                    </p>
                    <p className="text-xs text-gray-500">min {item.min}</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${isVeryLow ? 'bg-red-500' : 'bg-orange-400'}`} 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
