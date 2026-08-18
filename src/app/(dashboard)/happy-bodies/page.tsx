"use client"

import * as React from "react"
import { ContentManagerLayout } from "@/components/layout/ContentManagerLayout"
import { mockHappyBodiesData } from "@/lib/mock-data"

export default function HappyBodiesPage() {
  return (
    <ContentManagerLayout 
      pageTitle="Happy bodies"
      data={mockHappyBodiesData}
      themeClass="bg-[#549E7C]"
      lightThemeClass="bg-[#EBF7F2]"
      hoverThemeClass="hover:bg-[#dff0e9]"
    />
  )
}

