import * as React from "react"
import { Image as ImageIcon } from "lucide-react"

export function ImageUploadBlock() {
  return (
    <div className="border-2 border-dashed border-primary/40 bg-white/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/80 transition-colors cursor-pointer h-full min-h-[160px]">
      <div className="flex items-center gap-2 mb-2">
        <ImageIcon className="h-6 w-6 text-primary" />
        <h4 className="text-sm font-medium text-gray-800">Upload Image</h4>
      </div>
      <p className="text-[11px] text-gray-500 max-w-[200px] leading-relaxed">
        Upload your reference image. Upload only JPG and PNG images. File size {'<'} 10 MB, Dimension {'>'} 300px.
      </p>
    </div>
  )
}
