"use client"

import * as React from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

const data = [
  { name: "Mon", completed: 40, pending: 15 },
  { name: "Tue", completed: 50, pending: 20 },
  { name: "Wed", completed: 45, pending: 10 },
  { name: "Thu", completed: 70, pending: 25 },
  { name: "Fri", completed: 85, pending: 30 },
  { name: "Sat", completed: 90, pending: 15 },
  { name: "Sun", completed: 60, pending: 10 },
]

export function OrdersChart() {
  return (
    <Card className="rounded-2xl border-none shadow-sm overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <CardTitle className="text-base font-semibold">Orders Overview</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
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
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                cursor={{ fill: 'transparent' }}
              />
              <Bar 
                dataKey="completed" 
                fill="#6366f1" 
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
              <Bar 
                dataKey="pending" 
                fill="#f59e0b" 
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-center items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-indigo-500" />
            <span className="text-xs text-gray-500 font-medium">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-amber-500" />
            <span className="text-xs text-gray-500 font-medium">Pending</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
