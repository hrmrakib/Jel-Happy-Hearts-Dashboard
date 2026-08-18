"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { SubscriptionModal } from "@/components/ui/SubscriptionModal"
import { Pencil, Trash2, ChevronDown } from "lucide-react"

const plans = [
  { id: 1, name: "Monthly", rate: "$4500", status: "Active" },
  { id: 2, name: "Weekly", rate: "$4500", status: "Inactive" },
  { id: 3, name: "One time", rate: "$4500", status: "Active" },
]

export default function SubscriptionPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [editingPlan, setEditingPlan] = React.useState<{name: string, price: string} | undefined>()
  const [openDropdownId, setOpenDropdownId] = React.useState<number | null>(null)

  const handleEdit = (plan: typeof plans[0]) => {
    setEditingPlan({ name: plan.name, price: plan.rate })
    setIsModalOpen(true)
  }

  const handleAddNew = () => {
    setEditingPlan(undefined)
    setIsModalOpen(true)
  }

  return (
    <div className="container mx-auto flex flex-col min-h-full pb-8">
      <Header title="Subscription Package" />
      
      <main className="flex-1 mt-2 px-6">
        <div className="bg-white rounded-3xl p-8 min-h-[600px] shadow-sm flex flex-col">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-medium text-[#C4602C] border-b-2 border-[#C4602C] pb-1">
              Subscription Package
            </h2>
            <button 
              onClick={handleAddNew}
              className="bg-[#C4602C] text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-[#b55828] transition-colors"
            >
              Add New Plan
            </button>
          </div>

          <div className="w-full rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-[#C4602C] text-white text-sm font-medium p-5">
              <div>Name</div>
              <div>Rate</div>
              <div>Status</div>
              <div>Action</div>
            </div>

            {/* Table Body */}
            <div>
              {plans.map((plan, idx) => (
                <div 
                  key={plan.id} 
                  className={`grid grid-cols-4 p-5 items-center text-sm ${
                    idx % 2 === 0 ? "bg-[#EBD5C5]" : "bg-[#F5EBE6]"
                  } text-gray-800`}
                >
                  <div className="font-medium">{plan.name}</div>
                  <div>{plan.rate}</div>
                  
                  {/* Status Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={() => setOpenDropdownId(openDropdownId === plan.id ? null : plan.id)}
                      className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        plan.status === "Active" 
                          ? "bg-[#C4602C] text-white hover:bg-[#b55828]" 
                          : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      {plan.status}
                      {plan.status === "Active" && <ChevronDown className="h-4 w-4" />}
                    </button>
                    
                    {openDropdownId === plan.id && (
                      <div className="absolute top-full left-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Active</button>
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Inactive</button>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleEdit(plan)}
                      className="p-1.5 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 text-gray-600 hover:text-red-600 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SubscriptionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialData={editingPlan}
      />
    </div>
  )
}
