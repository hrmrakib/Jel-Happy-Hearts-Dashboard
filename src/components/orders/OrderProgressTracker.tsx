import * as React from "react"
import { Check } from "lucide-react"

export type ProgressStep = "Received" | "Confirmed" | "Processing" | "Packed" | "Shipped" | "Delivered"

interface OrderProgressTrackerProps {
  currentStatus: string
}

export function OrderProgressTracker({ currentStatus }: OrderProgressTrackerProps) {
  // Map "Delivery" or other synonyms to "Delivered" if needed, but we'll use a fixed array of steps
  const steps: ProgressStep[] = [
    "Received", 
    "Confirmed", 
    "Processing", 
    "Packed", 
    "Shipped", 
    "Delivered"
  ]

  // Map the current status to an index. If not found or if "Completed", default to the end.
  let currentIndex = steps.indexOf(currentStatus as ProgressStep)
  if (currentStatus === "Completed") currentIndex = steps.length
  if (currentIndex === -1) currentIndex = 0 // fallback for new/pending

  return (
    <div className="w-full py-6 px-4">
      <div className="relative flex justify-between items-center w-full">
        {/* Background Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-gray-200 z-0"></div>
        
        {/* Active Line */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary z-0 transition-all duration-300"
          style={{ width: `${(Math.max(0, currentIndex) / (steps.length - 1)) * 100}%` }}
        ></div>

        {/* Steps */}
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex
          const isActive = index === currentIndex
          const isPending = index > currentIndex

          return (
            <div key={step} className="relative z-10 flex flex-col items-center">
              <div 
                className={`
                  w-6 h-6 rounded-full flex items-center justify-center text-xs
                  transition-colors duration-300
                  ${isCompleted ? 'bg-primary text-white' : ''}
                  ${isActive ? 'bg-white border-2 border-primary text-primary' : ''}
                  ${isPending ? 'bg-gray-200 text-transparent' : ''}
                `}
              >
                {isCompleted && <Check className="h-3.5 w-3.5" />}
                {isActive && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <span className={`
                absolute top-8 text-[10px] font-medium whitespace-nowrap
                ${isCompleted || isActive ? 'text-gray-900' : 'text-gray-400'}
              `}>
                {step === "Delivered" ? "Delivery" : step}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
