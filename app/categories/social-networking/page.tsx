"use client"

import { CategoryPageLayout } from "@/components/app-store/category-page-layout"
import { socialNetworkingData } from "@/lib/category-data"
import { Users } from "lucide-react"

export default function SocialNetworkingPage() {
  return (
    <CategoryPageLayout
      title="Social Networking"
      icon={<Users className="h-8 w-8 text-primary" />}
      heroCards={socialNetworkingData.heroCards}
      sections={socialNetworkingData.sections}
    />
  )
}
