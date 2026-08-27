"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { TiptapEditor } from "@/components/ui/TiptapEditor"

const TABS = ["About Happy Heart", "Privacy Policy", "Terms & Service"]

const DEFAULT_CONTENT: Record<string, string> = {
  "About Happy Heart": `<p>At Happy Heart, we believe that every child deserves the opportunity to grow with confidence, comfort, and a healthy smile. Our mission is to make the care journey easier, more engaging, and more connected for children, parents, caregivers, and clinicians. Happy Heart is designed to support families throughout their child's treatment journey by bringing important care information, guided activities, progress tracking, educational resources, and communication into one simple and user-friendly platform.</p>
<p>We understand that successful care does not happen only during clinic visits. It also depends on what happens at home, how consistently recommended activities are followed, and how well families understand their child's progress. That is why Happy Heart creates a continuous connection between clinical care and everyday routines.</p>
<p>Our goal is to transform what can sometimes feel like a complicated or overwhelming treatment process into a more positive and encouraging experience. Through thoughtful technology, personalized support, and easy-to-understand information, Happy Heart helps everyone involved stay informed, motivated, and connected.</p>
<p>At the heart of Happy Heart is a simple belief: better care starts with better connection. By bringing children, families, and clinicians closer together, we aim to create meaningful experiences that encourage consistency, celebrate progress, and support healthier outcomes—one step, one activity, and one happy smile at a time.</p>`,
  "Privacy Policy": `<p>Your privacy is important to us. This Privacy Policy explains how Happy Heart collects, uses, and safeguards your personal information when you use our platform.</p>
<p>We collect only the information necessary to provide you with our services, including account details, usage data, and care-related information. We do not sell or share your personal information with third parties without your explicit consent.</p>
<p>All data is stored securely using industry-standard encryption. You have the right to access, update, or delete your personal data at any time by contacting our support team.</p>`,
  "Terms & Service": `<p>By using Happy Heart, you agree to these Terms of Service. Please read them carefully before accessing or using our platform.</p>
<p>Happy Heart grants you a limited, non-exclusive, non-transferable license to use the platform for personal, non-commercial purposes. You are responsible for maintaining the confidentiality of your account credentials.</p>
<p>We reserve the right to update these terms at any time. Continued use of the platform after changes constitutes your acceptance of the revised terms. If you have questions, please contact us at support@happyheart.com.</p>`,
}

export default function LegacyPolicyPage() {
  const [activeTab, setActiveTab] = React.useState(TABS[0])
  const [contents, setContents] = React.useState(DEFAULT_CONTENT)

  const handleChange = (html: string) => {
    setContents((prev) => ({ ...prev, [activeTab]: html }))
  }

  const handleSave = () => {
    // TODO: persist to API
    alert(`"${activeTab}" saved!`)
  }

  return (
    <div className="flex flex-col min-h-full pb-8">
      <Header title="Legacy & Policy" />

      <main className="flex-1 flex flex-col mt-2 px-6 pb-4">
        <div className="flex-1 bg-[#C4602C] rounded-[32px] p-8 flex flex-col min-h-[600px] shadow-sm">

          {/* Tab bar + Save button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="flex flex-wrap gap-8">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-medium transition-colors ${
                    activeTab === tab
                      ? "text-white underline underline-offset-8 decoration-2"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button
              onClick={handleSave}
              className="bg-white text-gray-800 px-8 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm self-start md:self-auto"
            >
              Save Now
            </button>
          </div>

          {/* Tiptap Editor */}
          <div className="flex-1 flex flex-col">
            <TiptapEditor
              key={activeTab}
              content={contents[activeTab]}
              onChange={handleChange}
              placeholder={`Start writing ${activeTab} content...`}
            />
          </div>

        </div>
      </main>
    </div>
  )
}
