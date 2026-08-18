"use client"

import * as React from "react"
import { Modal } from "@/components/ui/Modal"
import { FileUpload } from "@/components/ui/FileUpload"
import { Input } from "@/components/ui/Input"

interface AddProductModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Item">
      <div className="space-y-4 bg-primary-50/30 p-4 rounded-xl">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 ml-1">Item Name</label>
          <Input placeholder="e.g. Calming Lavender Essential Oil" className="bg-white border-none rounded-xl" />
        </div>
        
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 ml-1">Short Description</label>
          <textarea 
            placeholder="A brief summary for product cards..." 
            className="w-full min-h-[80px] bg-white border-none rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          />
        </div>
        
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 ml-1">Upload Image</label>
          <FileUpload />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 ml-1">Quantity</label>
          <Input placeholder="Total tock item" className="bg-white border-none rounded-xl" />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 ml-1">Pricing</label>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="$ Regular price" className="bg-white border-none rounded-xl" />
            <Input placeholder="$ Sale price" className="bg-white border-none rounded-xl" />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            onClick={onClose}
            className="flex-1 py-2.5 border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary/5 transition-colors"
          >
            Cancel
          </button>
          <button 
            className="flex-1 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Publish Item
          </button>
        </div>
      </div>
    </Modal>
  )
}
