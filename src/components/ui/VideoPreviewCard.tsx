import * as React from "react"
import Image from "next/image"
import { Play, Trash2 } from "lucide-react"
import { VideoData } from "@/types"

interface VideoPreviewCardProps {
  video: VideoData
  isEditing?: boolean
}

export function VideoPreviewCard({ video, isEditing }: VideoPreviewCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden group h-full min-h-[160px] aspect-video sm:aspect-auto">
      {/* Thumbnail */}
      <div className="absolute inset-0">
        <Image 
          src={video.thumbnailUrl || "https://images.unsplash.com/photo-1590650046528-e4bf934dd95e?w=800&q=80"} 
          alt={video.title}
          fill
          className="object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Duration Badge */}
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        {video.duration || "2mnt"}
      </div>

      {/* Delete Button (only in edit mode) */}
      {isEditing && (
        <button className="absolute top-3 right-3 p-1.5 bg-black/40 hover:bg-red-500 text-white rounded-lg backdrop-blur-sm transition-colors">
          <Trash2 className="h-4 w-4" />
        </button>
      )}

      {/* Content & Play Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-4">
        <div className="flex-1">
          <h4 className="text-white font-medium text-sm mb-1 line-clamp-1">{video.title}</h4>
          {video.subtitle && (
            <p className="text-white/70 text-[10px] leading-tight line-clamp-2">
              {video.subtitle}
            </p>
          )}
        </div>
        
        <button className="h-10 w-10 shrink-0 bg-primary/90 hover:bg-primary text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors shadow-lg">
          <Play className="h-4 w-4 ml-0.5 fill-current" />
        </button>
      </div>
    </div>
  )
}
