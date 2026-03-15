"use client"

import { CategoryPageLayout } from "@/components/app-store/category-page-layout"
import { educationData } from "@/lib/category-data"
import { GraduationCap } from "lucide-react"

export default function EducationPage() {
  return (
    <CategoryPageLayout
      title="Education"
      icon={<GraduationCap className="h-8 w-8 text-primary" />}
      heroCards={educationData.heroCards}
      sections={educationData.sections}
    />
  )
}
