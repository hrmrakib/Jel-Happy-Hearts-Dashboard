"use client"

import * as React from "react"
import { ContentManagerLayout } from "@/components/layout/ContentManagerLayout"
import { mockHappySmileData } from "@/lib/mock-data"

export default function HappySmilePage() {
  return (
    <ContentManagerLayout 
      pageTitle="Happy Smile"
      data={mockHappySmileData}
      themeClass="bg-[#F09F5A]"
      lightThemeClass="bg-[#FFF4EC]"
      hoverThemeClass="hover:bg-[#ffe3cc]"
      contentWrapperClass="bg-transparent"
      blockBgClass="bg-white"
    />
  )
}
