"use client"

import { CategoryPageLayout } from "@/components/app-store/category-page-layout"
import { musicData } from "@/lib/category-data"
import { Music } from "lucide-react"

export default function MusicPage() {
  return (
    <CategoryPageLayout
      title="Music"
      icon={<Music className="h-8 w-8 text-primary" />}
      heroCards={musicData.heroCards}
      sections={musicData.sections}
    />
  )
}
