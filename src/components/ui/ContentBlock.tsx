import * as React from "react"
import { ContentBlockData } from "@/types"

interface ContentBlockProps {
  block: ContentBlockData
  isEditing?: boolean
  onChange?: (id: string, newContent: string) => void
}

export function ContentBlock({ block, isEditing, onChange }: ContentBlockProps) {
  return (
    <div className="bg-[#EBF7F2] rounded-2xl p-6 mb-4">
      {block.title && (
        <h4 className="text-[15px] font-medium text-gray-800 mb-3">{block.title}</h4>
      )}
      
      {isEditing ? (
        <textarea
          className="w-full bg-white rounded-xl p-4 text-sm text-gray-600 outline-none border border-transparent focus:border-primary/30 min-h-[100px] resize-none"
          value={block.content}
          onChange={(e) => onChange?.(block.id, e.target.value)}
        />
      ) : (
        <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap font-light">
          {block.content}
        </div>
      )}
    </div>
  )
}
