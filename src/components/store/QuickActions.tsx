"use client"

import * as React from "react"
import Link from "next/link"
import { Package, Clock, ShoppingBag } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Manage Product",
      icon: Package,
      href: "/manage-store/products",
      active: true,
    },
    {
      title: "Pending Order",
      icon: Clock,
      href: "#",
      active: false,
    },
    {
      title: "My Orders",
      icon: ShoppingBag,
      href: "#",
      active: false,
    },
  ]

  return (
    <div className="px-6">
      <h3 className="text-sm font-medium text-gray-500 mb-3">Quick Actions</h3>
      <div className="flex flex-wrap gap-4">
        {actions.map((action) => (
          <Link href={action.href} key={action.title}>
            <div className={`flex flex-col items-center justify-center p-4 rounded-xl min-w-[120px] transition-colors ${action.active ? 'bg-white shadow-sm border border-gray-100' : 'bg-white/50 hover:bg-white shadow-sm border border-transparent hover:border-gray-100 text-gray-500'}`}>
              <action.icon className={`h-6 w-6 mb-2 ${action.active ? 'text-primary' : 'text-gray-400'}`} />
              <span className={`text-xs font-medium ${action.active ? 'text-gray-900' : 'text-gray-500'}`}>{action.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
