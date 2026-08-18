import * as React from "react"
import { Pencil, Trash2, Plus } from "lucide-react"
import { ContentBlockData } from "@/types"

interface ContentBlockProps {
  block: ContentBlockData
  isEditing?: boolean
  onChange?: (id: string, newContent: string) => void
  themeClass?: string
  lightThemeClass?: string
}

export function ContentBlock({ 
  block, 
  isEditing, 
  onChange,
  themeClass = "bg-[#549E7C]",
  lightThemeClass = "bg-[#EBF7F2]" 
}: ContentBlockProps) {
  return (
    <div className="mb-4">
      {/* Section Title (Optional) */}
      {block.sectionTitle && (
        <h3 className="text-white text-base font-medium mb-3 px-2">
          {block.sectionTitle}
        </h3>
      )}
      
      <div className={`${lightThemeClass} rounded-2xl p-5 group relative`}>
        {/* Block Header with Title and Actions */}
        <div className="flex justify-between items-start mb-3">
        {block.title && (
          <h4 className="text-[15px] font-medium text-gray-800">{block.title}</h4>
        )}
        
        {/* Actions (visible only on hover in view mode, or always in edit mode?) 
            Actually, the mockups show them on the block itself. Let's make them visible on hover. */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-1 text-gray-500 hover:text-gray-900 transition-colors">
            <Pencil className="h-4 w-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-red-600 transition-colors">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Content Area */}
      {block.type === "options" ? (
        <div className="space-y-2">
          {block.options?.map((option, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 text-sm text-gray-600">
              {option}
            </div>
          ))}
          <button className="mt-3 w-10 h-10 rounded-full border border-dashed border-gray-400 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-600 transition-colors bg-white/50">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      ) : isEditing ? (
        <textarea
          className="w-full bg-white rounded-xl p-4 text-sm text-gray-600 outline-none border border-transparent focus:border-primary/30 min-h-[100px] resize-none"
          value={block.content}
          onChange={(e) => onChange?.(block.id, e.target.value)}
        />
      ) : (
        <div className="bg-white rounded-xl p-4 text-sm text-gray-600 leading-relaxed whitespace-pre-wrap font-light">
          {block.content}
        </div>
      )}
      </div>
    </div>
  )
}
