"use client"

import { CategoryPageLayout } from "@/components/app-store/category-page-layout"
import { businessData } from "@/lib/category-data"
import { Building2 } from "lucide-react"

export default function BusinessPage() {
  return (
    <CategoryPageLayout
      title="Business"
      icon={<Building2 className="h-8 w-8 text-primary" />}
      heroCards={businessData.heroCards}
      sections={businessData.sections}
    />
  )
}
