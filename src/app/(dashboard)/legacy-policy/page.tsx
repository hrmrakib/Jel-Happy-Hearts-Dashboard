"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { RichTextToolbar } from "@/components/ui/RichTextToolbar"

const TABS = ["About Happy Heart", "Privacy Policy", "Terms & Service"]

export default function LegacyPolicyPage() {
  const [activeTab, setActiveTab] = React.useState(TABS[0])

  return (
    <div className="container mx-auto flex flex-col min-h-full pb-8">
      <Header title="Legacy & Policy" />
      
      <main className="flex-1 flex flex-col mt-2 px-6">
        <div className="flex-1 bg-[#C4602C] rounded-[32px] p-8 flex flex-col min-h-[600px] shadow-sm relative">
          
          {/* Header area inside the card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex flex-wrap gap-8">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-medium transition-colors ${
                    activeTab === tab ? "text-white underline underline-offset-8 decoration-2" : "text-white/70 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <button className="bg-white text-gray-800 px-8 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm self-start md:self-auto">
              Save Now
            </button>
          </div>

          {/* Editor Area */}
          <div className="flex-1 bg-white rounded-2xl p-6 flex flex-col overflow-hidden">
            <RichTextToolbar />
            
            <div className="flex-1 overflow-y-auto custom-scrollbar px-2 mt-2">
              <div className="text-gray-600 space-y-6 text-[15px] leading-relaxed">
                {activeTab === "About Happy Heart" && (
                  <>
                    <p>
                      At Happy Heart, we believe that every child deserves the opportunity to grow with confidence, comfort, and a healthy smile. Our mission is to make the care journey easier, more engaging, and more connected for children, parents, caregivers, and clinicians. Happy Heart is designed to support families throughout their child's treatment journey by bringing important care information, guided activities, progress tracking, educational resources, and communication into one simple and user-friendly platform.
                    </p>
                    <p>
                      We understand that successful care does not happen only during clinic visits. It also depends on what happens at home, how consistently recommended activities are followed, and how well families understand their child's progress. That is why Happy Heart creates a continuous connection between clinical care and everyday routines. Children can stay engaged with their recommended activities, while parents can better understand progress and support their child along the way. Clinicians can also monitor relevant information and provide guidance based on the child's ongoing journey.
                    </p>
                    <p>
                      Our goal is to transform what can sometimes feel like a complicated or overwhelming treatment process into a more positive and encouraging experience. Through thoughtful technology, personalized support, and easy-to-understand information, Happy Heart helps everyone involved stay informed, motivated, and connected. We are committed to building a platform where care feels less like a routine and more like a journey that families and clinicians can confidently take together.
                    </p>
                    <p>
                      At the heart of Happy Heart is a simple belief: better care starts with better connection. By bringing children, families, and clinicians closer together, we aim to create meaningful experiences that encourage consistency, celebrate progress, and support healthier outcomes—one step, one activity, and one happy smile at a time.
                    </p>
                  </>
                )}
                
                {activeTab === "Privacy Policy" && (
                  <p>Privacy Policy content goes here...</p>
                )}
                
                {activeTab === "Terms & Service" && (
                  <p>Terms and Service content goes here...</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
