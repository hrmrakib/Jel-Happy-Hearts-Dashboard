import * as React from "react"
import { Video } from "lucide-react"

export function VideoUploadBlock() {
  return (
    <div className="border-2 border-dashed border-primary/40 bg-white/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/80 transition-colors cursor-pointer h-full min-h-[160px]">
      <Video className="h-8 w-8 text-primary mb-3" />
      <h4 className="text-sm font-medium text-gray-800 mb-1">Upload Video</h4>
      <p className="text-[11px] text-gray-500 max-w-[200px] leading-relaxed">
        Upload your reference video. Upload only MP4 and MOV Videos. File size {'<'} 100 MB, Resolution {'>'} 720p.
      </p>
    </div>
  )
}
