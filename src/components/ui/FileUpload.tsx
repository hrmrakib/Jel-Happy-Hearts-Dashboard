"use client"

import * as React from "react"
import { CloudUpload } from "lucide-react"

interface FileUploadProps {
  onFileSelect?: (file: File) => void
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const [isDragging, setIsDragging] = React.useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelect?.(e.dataTransfer.files[0])
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer
        ${isDragging ? 'border-primary bg-primary/5' : 'border-primary/20 bg-primary-50/50 hover:bg-primary-50'}
      `}
    >
      <div className="flex justify-center mb-2 text-primary">
        <div className="bg-white p-2 rounded-full shadow-sm">
          <CloudUpload className="h-5 w-5" />
        </div>
      </div>
      <p className="text-sm font-medium text-primary mb-1">Click to upload or drag and drop</p>
      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
      <input type="file" className="hidden" accept="image/*" onChange={(e) => e.target.files && onFileSelect?.(e.target.files[0])} />
    </div>
  )
}
