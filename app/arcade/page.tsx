"use client"

import { useState } from "react"
import { Header } from "@/components/app-store/header"
import { Sidebar } from "@/components/app-store/sidebar"
import { AppSection } from "@/components/app-store/app-section"
import { AppDetailModal } from "@/components/app-store/app-detail-modal"
import { arcadeData, arcadeCategories } from "@/lib/page-data"
import type { App } from "@/lib/app-data"
import { Toaster } from "@/components/ui/sonner"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function ArcadePage() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredSections = searchQuery
    ? arcadeData.sections.map(section => ({
        ...section,
        apps: section.apps.filter(app =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.developer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.apps.length > 0)
    : arcadeData.sections

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Arcade</h1>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Unlimited access to 200+ incredibly fun games, with more added every week.
            </p>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {arcadeCategories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10 transition-colors px-3 py-1"
                  onClick={() => setSelectedCategory(
                    selectedCategory === category ? null : category
                  )}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-col gap-12">
              {filteredSections.map((section) => (
                <AppSection
                  key={section.id}
                  title={section.title}
                  subtitle={section.subtitle}
                  apps={section.apps}
                  layout={section.layout}
                  onAppClick={setSelectedApp}
                />
              ))}
            </div>

            {/* Arcade Perks Section */}
            <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border">
              <h2 className="text-xl font-semibold mb-4">Discover the Perks of Arcade</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-medium mb-2">No Ads</h3>
                  <p className="text-sm text-muted-foreground">Play without interruptions or distractions.</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-medium mb-2">No In-App Purchases</h3>
                  <p className="text-sm text-muted-foreground">Get full access to every game.</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-medium mb-2">Play Offline</h3>
                  <p className="text-sm text-muted-foreground">Download and play anywhere.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <AppDetailModal
        app={selectedApp}
        open={!!selectedApp}
        onClose={() => setSelectedApp(null)}
      />
    </div>
  )
}
