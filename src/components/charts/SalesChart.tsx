"use client"

import * as React from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

const data = [
  { name: "Jan", current: 30000, previous: 20000 },
  { name: "Feb", current: 35000, previous: 22000 },
  { name: "Mar", current: 28000, previous: 18000 },
  { name: "Apr", current: 50000, previous: 35000 },
  { name: "May", current: 45000, previous: 30000 },
  { name: "Jun", current: 60000, previous: 40000 },
  { name: "Jul", current: 75000, previous: 50000 },
  { name: "Aug", current: 95000, previous: 65000 },
]

export function SalesChart() {
  return (
    <Card className="rounded-2xl border-none shadow-sm overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <CardTitle className="text-base font-semibold">Sales vs Previous Period</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#9ca3af' }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#9ca3af' }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#6366f1" 
                strokeWidth={3}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="previous" 
                stroke="#10b981" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-center items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-xs text-gray-500 font-medium">Current</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-500 font-medium">Previous</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
