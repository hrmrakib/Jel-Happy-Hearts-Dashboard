"use client"

import * as React from "react"
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts"
import { revenueData } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { Button } from "../ui/Button"

export function RevenueChart() {
  const [timeframe, setTimeframe] = React.useState<"Yearly" | "Monthly">("Yearly")

  return (
    <Card className="rounded-2xl border-none shadow-sm h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-serif">Revenue Analytics</CardTitle>
        <div className="flex space-x-2">
          <Button 
            variant={timeframe === "Yearly" ? "secondary" : "ghost"} 
            size="sm"
            onClick={() => setTimeframe("Yearly")}
            className="rounded-full text-xs h-7"
          >
            Yearly
          </Button>
          <Button 
            variant={timeframe === "Monthly" ? "secondary" : "ghost"} 
            size="sm"
            onClick={() => setTimeframe("Monthly")}
            className="rounded-full text-xs h-7"
          >
            Monthly
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-4 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c55d3d" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#c55d3d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              dy={10}
            />
            <YAxis hide domain={['dataMin - 1000', 'dataMax + 2000']} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              labelStyle={{ color: '#6b7280', marginBottom: '4px' }}
              itemStyle={{ color: '#c55d3d', fontWeight: 600 }}
              formatter={(value: any) => [`$${value}`, 'Revenue']}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#c55d3d" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
              activeDot={{ r: 6, fill: "#c55d3d", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
