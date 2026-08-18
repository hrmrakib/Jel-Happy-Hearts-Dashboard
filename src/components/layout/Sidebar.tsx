"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  Heart, 
  Smile, 
  CreditCard, 
  FileText, 
  LogOut,
  Dumbbell,
  X,
  LifeBuoy
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Manage Users", href: "/manage-users", icon: Users },
  { name: "Manage Store", href: "/manage-store", icon: Store },
  { name: "Happy Bodies", href: "/happy-bodies", icon: Dumbbell },
  { name: "Happy Heart", href: "/happy-heart", icon: Heart },
  { name: "Happy Smile", href: "/happy-smile", icon: Smile },
  { name: "Subscription", href: "/subscription", icon: CreditCard },
  { name: "Support", href: "/support", icon: LifeBuoy },
  { name: "Legacy & Policy", href: "/legacy-policy", icon: FileText },
]

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r relative">
      {/* Mobile close button */}
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 lg:hidden text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      )}
      {/* Logo Area */}
      <div className="flex h-24 shrink-0 items-center justify-center px-6">
        <div className="flex flex-col items-center">
          <div className="relative flex h-12 w-20 items-end justify-center">
             {/* Mock Logo using CSS shapes/colors */}
             <div className="absolute w-16 h-8 rounded-t-full border-4 border-[#F2C272] border-b-0 top-0"></div>
             <div className="absolute w-12 h-6 rounded-t-full border-4 border-[#73C2C4] border-b-0 top-2"></div>
             <div className="absolute w-8 h-4 rounded-t-full border-4 border-[#F69288] border-b-0 top-4"></div>
             <Heart className="absolute -right-2 top-4 h-6 w-6 text-primary fill-primary" />
          </div>
          <span className="text-[10px] tracking-wider text-gray-500 font-medium mt-1">HAPPY HEART</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  isActive ? "text-white" : "text-gray-400 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">
        <button className="group flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium text-primary hover:bg-primary-50 transition-colors">
          <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
          Logout
        </button>
      </div>
    </div>
  )
}
