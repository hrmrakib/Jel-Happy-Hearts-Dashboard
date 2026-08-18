"use client"

import * as React from "react"
import { X, Check, Plus } from "lucide-react"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: {
    name: string
    price: string
  }
}

export function SubscriptionModal({ isOpen, onClose, initialData }: SubscriptionModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-[#C4602C] w-full max-w-xl rounded-[32px] p-8 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-medium text-white mb-8 border-b border-white/20 pb-4">
          {initialData ? "Edit Plan" : "Add New Plan"}
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">Plan name</label>
            <input 
              type="text" 
              defaultValue={initialData?.name}
              className="w-full bg-white rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="e.g. Monthly"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">Price</label>
            <input 
              type="text" 
              defaultValue={initialData?.price}
              className="w-full bg-white rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="e.g. $99.00"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">Add Description</label>
            <div className="bg-white rounded-xl p-4 space-y-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#C4602C] rounded-full p-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-600">Write here</span>
                </div>
              ))}
              
              <button className="mt-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button 
            onClick={onClose}
            className="flex-1 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="flex-1 py-3 rounded-full bg-white text-gray-800 text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
