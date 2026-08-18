"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { SummaryCards } from "@/components/shared/SummaryCards"
import { UserTable } from "@/components/shared/UserTable"
import { mockUsers } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Pagination } from "@/components/ui/Pagination"
import { cn } from "@/lib/utils"

const tabs = ["All", "New", "Active", "Suspend"]

export default function ManageUsersPage() {
  const [activeTab, setActiveTab] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <div className="container mx-auto flex flex-col min-h-full pb-8">
      <Header title="Manage Users" />
      
      <main className="flex-1 space-y-6">
        <SummaryCards />

        <div className="px-6">
          <Card className="rounded-2xl border-none shadow-sm overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-serif mb-4">
                Total Users : <span className="font-sans font-bold">{mockUsers.length}</span>
              </CardTitle>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex space-x-6 border-b border-gray-100 w-full sm:w-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "pb-2 text-sm font-medium transition-colors relative",
                        activeTab === tab
                          ? "text-primary"
                          : "text-gray-500 hover:text-gray-900"
                      )}
                    >
                      {tab}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="w-full sm:w-64">
                  <Input 
                    placeholder="Search Users" 
                    icon={<Search className="h-4 w-4" />}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-full bg-gray-50 border-transparent focus-visible:ring-primary/20 focus-visible:border-primary/50"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <UserTable users={mockUsers} />
              
              <div className="px-6 py-2 border-t border-gray-50">
                <Pagination 
                  currentPage={currentPage} 
                  totalPages={10} 
                  onPageChange={setCurrentPage} 
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
