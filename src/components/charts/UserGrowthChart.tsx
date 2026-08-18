"use client"

import * as React from "react"
import { 
  Bar, 
  BarChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis,
  Tooltip,
  Cell
} from "recharts"
import { userGrowthData } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"

export function UserGrowthChart() {
  return (
    <Card className="rounded-2xl border-none shadow-sm h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-serif">User Growth</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pt-4 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={userGrowthData} 
            layout="vertical" 
            margin={{ top: 0, right: 30, left: -20, bottom: 0 }}
            barSize={6}
          >
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 12 }} 
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            {/* Custom label for right side values */}
            <Bar dataKey="value" radius={[0, 4, 4, 0] as any} background={{ fill: '#f3f4f6', radius: [0, 4, 4, 0] as any }}>
              {userGrowthData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#c55d3d" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
