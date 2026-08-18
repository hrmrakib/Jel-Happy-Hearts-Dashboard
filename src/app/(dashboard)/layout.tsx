"use client"

import * as React from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Menu, X } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-[#E6E6E6]!">
      {/* Mobile sidebar backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
      </div>

      <main className="flex-1 overflow-y-auto w-full">
        <div className="container mx-auto h-full flex flex-col relative">
          {/* Mobile menu button */}
          <div className="lg:hidden absolute top-10 left-8 z-30">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-md bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-gray-900"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
          
          {children}
        </div>
      </main>
    </div>
  )
}
