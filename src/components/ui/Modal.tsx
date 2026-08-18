"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
  actionIcon?: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children, className, actionIcon }: ModalProps) {
  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className={cn("fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl border border-gray-100", className)}>
        {(title || actionIcon) && (
          <div className="flex items-center justify-between mb-4">
            {title && <h2 className="text-lg font-serif">{title}</h2>}
            <div className="flex items-center gap-2 ml-auto">
              {actionIcon}
              <button 
                onClick={onClose}
                className="rounded-full p-1.5 hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
        <div className="mt-2">{children}</div>
      </div>
    </>
  )
}
