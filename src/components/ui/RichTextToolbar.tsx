import * as React from "react"
import { 
  Undo, 
  Redo, 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough, 
  Highlighter, 
  Link2,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent
} from "lucide-react"

export function RichTextToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-2 p-2 px-4 rounded-t-xl bg-white/95 border-b border-gray-100/50 sticky top-0 z-10 w-full mb-4">
      {/* Undo/Redo */}
      <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><Undo className="h-4 w-4" /></button>
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><Redo className="h-4 w-4" /></button>
      </div>

      {/* Zoom / Font */}
      <div className="flex items-center gap-2 border-r border-gray-200 pr-2">
        <select className="bg-transparent text-xs text-gray-600 outline-none border-none cursor-pointer">
          <option>100%</option>
          <option>75%</option>
          <option>50%</option>
        </select>
        
        <select className="bg-primary/90 text-white text-xs px-2 py-1 rounded-md outline-none cursor-pointer">
          <option>Arial</option>
          <option>Times New Roman</option>
          <option>Inter</option>
        </select>

        <div className="flex items-center bg-primary/90 text-white rounded-md overflow-hidden">
          <button className="px-2 py-1 text-xs hover:bg-black/10 transition-colors">-</button>
          <span className="text-xs px-1">00</span>
          <button className="px-2 py-1 text-xs hover:bg-black/10 transition-colors">+</button>
        </div>
      </div>

      {/* Formatting */}
      <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
        <button className="p-1.5 text-gray-700 font-medium rounded hover:bg-gray-100 transition-colors">B</button>
        <button className="p-1.5 text-gray-700 italic font-serif rounded hover:bg-gray-100 transition-colors">I</button>
        <button className="p-1.5 text-gray-700 underline rounded hover:bg-gray-100 transition-colors">U</button>
        <button className="p-1.5 text-gray-700 line-through rounded hover:bg-gray-100 transition-colors">S</button>
        <button className="p-1.5 text-blue-500 rounded hover:bg-gray-100 transition-colors"><Highlighter className="h-4 w-4" /></button>
        <button className="p-1.5 text-gray-700 rounded hover:bg-gray-100 transition-colors">A</button>
      </div>

      {/* Links & Alignment */}
      <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><Link2 className="h-4 w-4" /></button>
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><AlignLeft className="h-4 w-4" /></button>
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><AlignCenter className="h-4 w-4" /></button>
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><AlignRight className="h-4 w-4" /></button>
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><AlignJustify className="h-4 w-4" /></button>
      </div>

      {/* Lists & Indent */}
      <div className="flex items-center gap-1">
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><List className="h-4 w-4" /></button>
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><ListOrdered className="h-4 w-4" /></button>
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><Outdent className="h-4 w-4" /></button>
        <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"><Indent className="h-4 w-4" /></button>
      </div>
    </div>
  )
}
