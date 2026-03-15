"use client"

import { CategoryPageLayout } from "@/components/app-store/category-page-layout"
import { productivityData } from "@/lib/category-data"
import { FileSpreadsheet } from "lucide-react"

export default function ProductivityPage() {
  return (
    <CategoryPageLayout
      title="Productivity"
      icon={<FileSpreadsheet className="h-8 w-8 text-primary" />}
      heroCards={productivityData.heroCards}
      sections={productivityData.sections}
    />
  )
}
