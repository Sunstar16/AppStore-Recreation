"use client"

import { CategoryPageLayout } from "@/components/app-store/category-page-layout"
import { utilitiesData } from "@/lib/category-data"
import { Wrench } from "lucide-react"

export default function UtilitiesPage() {
  return (
    <CategoryPageLayout
      title="Utilities"
      icon={<Wrench className="h-8 w-8 text-primary" />}
      heroCards={utilitiesData.heroCards}
      sections={utilitiesData.sections}
    />
  )
}
