"use client"

import { CategoryPageLayout } from "@/components/app-store/category-page-layout"
import { photoVideoData } from "@/lib/category-data"
import { Camera } from "lucide-react"

export default function PhotoVideoPage() {
  return (
    <CategoryPageLayout
      title="Photo & Video"
      icon={<Camera className="h-8 w-8 text-primary" />}
      heroCards={photoVideoData.heroCards}
      sections={photoVideoData.sections}
    />
  )
}
