"use client"

import * as React from "react"
import { ContentManagerLayout } from "@/components/layout/ContentManagerLayout"
import { mockHappyHeartData } from "@/lib/mock-data"

export default function HappyHeartPage() {
  return (
    <ContentManagerLayout 
      pageTitle="Happy Heart"
      data={mockHappyHeartData}
      themeClass="bg-[#646BB6]"
      lightThemeClass="bg-[#F4F5FB]"
      hoverThemeClass="hover:bg-[#e8e9f5]"
    />
  )
}
