"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { Pencil, Trash2, Plus, Check } from "lucide-react"
import { mockHappyBodiesData } from "@/lib/mock-data"
import { RichTextToolbar } from "@/components/ui/RichTextToolbar"
import { ContentBlock } from "@/components/ui/ContentBlock"
import { VideoUploadBlock } from "@/components/ui/VideoUploadBlock"
import { VideoPreviewCard } from "@/components/ui/VideoPreviewCard"
import { Category, CategoryItem } from "@/types"

export default function HappyBodiesPage() {
  const categories = Object.values(mockHappyBodiesData)
  
  const [activeTab, setActiveTab] = React.useState<string>(categories[0]?.id)
  const [activeSubTab, setActiveSubTab] = React.useState<string | null>(null)
  const [activeItemId, setActiveItemId] = React.useState<string | null>(null)
  const [isEditing, setIsEditing] = React.useState(false)

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0]
  
  // Set initial sub-tab and item when category changes
  React.useEffect(() => {
    if (activeCategory) {
      if (activeCategory.subTabs && activeCategory.subTabs.length > 0) {
        setActiveSubTab(activeCategory.subTabs[0])
      } else {
        setActiveSubTab(null)
      }
      if (activeCategory.items.length > 0) {
        setActiveItemId(activeCategory.items[0].id)
      } else {
        setActiveItemId(null)
      }
      setIsEditing(false)
    }
  }, [activeCategory])

  const activeItem = activeCategory?.items.find(i => i.id === activeItemId)

  return (
    <div className="container mx-auto flex flex-col min-h-full pb-8">
      <Header title="Happy bodies" />
      
      <main className="flex-1 flex flex-col mt-2 px-6">
        {/* Main Tabs */}
        <div className="flex border-b border-gray-100 mb-6 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`
                px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors
                ${activeTab === category.id 
                  ? 'border-primary text-gray-900' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
                }
              `}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Sub Tabs (if any) */}
        {activeCategory?.subTabs && (
          <div className="flex gap-2 mb-6">
            {activeCategory.subTabs.map(sub => (
              <button
                key={sub}
                onClick={() => setActiveSubTab(sub)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-medium transition-colors
                  ${activeSubTab === sub 
                    ? 'bg-[#549E7C] text-white' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 flex-1">
          {/* Left Column: List */}
          <div className="w-full lg:w-80 shrink-0 flex flex-col gap-3">
            {activeCategory?.items.map((item) => {
              const isActive = activeItemId === item.id
              return (
                <div 
                  key={item.id}
                  onClick={() => {
                    setActiveItemId(item.id)
                    setIsEditing(false)
                  }}
                  className={`
                    group flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors
                    ${isActive ? 'bg-[#549E7C] text-white shadow-sm' : 'bg-[#EBF7F2] text-gray-700 hover:bg-[#dff0e9]'}
                  `}
                >
                  <span className="font-medium text-sm">{item.title}</span>
                  <div className="flex items-center gap-3">
                    {item.completed && !isActive && (
                      <Check className="h-4 w-4 text-[#549E7C]" />
                    )}
                    <button className={`p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'text-white hover:bg-white/20' : 'text-gray-400 hover:text-gray-600'}`}>
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className={`p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'text-white hover:bg-white/20' : 'text-gray-400 hover:text-red-600'}`}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })}
            
            <button className="mt-2 w-12 h-12 mx-auto rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors">
              <Plus className="h-5 w-5" />
            </button>
          </div>

          {/* Right Column: Editor */}
          {activeItem && (
            <div className="flex-1 bg-[#549E7C] rounded-[32px] p-8 flex flex-col min-h-[600px] shadow-sm">
              {/* Editor Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-medium text-white">{activeItem.title}</h2>
                <div className="flex items-center gap-3">
                  {isEditing ? (
                    <>
                      <button 
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-2 rounded-full bg-white text-[#549E7C] text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
                      >
                        Save Changes
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Pencil className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Editor Content Area */}
              <div className="flex-1 bg-white rounded-2xl p-6 overflow-hidden flex flex-col relative">
                {isEditing && <RichTextToolbar />}
                
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  {activeItem.blocks.map((block) => (
                    <ContentBlock 
                      key={block.id} 
                      block={block} 
                      isEditing={isEditing} 
                    />
                  ))}

                  {/* Video Section */}
                  {(activeItem.video || isEditing) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {activeItem.video && (
                        <VideoPreviewCard video={activeItem.video} isEditing={isEditing} />
                      )}
                      {isEditing && (
                        <VideoUploadBlock />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #E2E8F0;
          border-radius: 20px;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
