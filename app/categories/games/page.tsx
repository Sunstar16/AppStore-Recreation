"use client"

import { CategoryPageLayout } from "@/components/app-store/category-page-layout"
import { gamesData } from "@/lib/category-data"
import { Dices } from "lucide-react"

export default function GamesPage() {
  return (
    <CategoryPageLayout
      title="Games"
      icon={<Dices className="h-8 w-8 text-primary" />}
      heroCards={gamesData.heroCards}
      sections={gamesData.sections}
    />
  )
}
