"use client"

import { useState } from "react"
import { Header } from "@/components/app-store/header"
import { Sidebar } from "@/components/app-store/sidebar"
import { HeroSection } from "@/components/app-store/hero-section"
import { AppSection } from "@/components/app-store/app-section"
import { AppDetailModal } from "@/components/app-store/app-detail-modal"
import { appData, type App } from "@/lib/app-data"
import { Toaster } from "@/components/ui/sonner"

export default function DiscoverPage() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSections = searchQuery
    ? appData.sections.map(section => ({
        ...section,
        apps: section.apps.filter(app =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.apps.length > 0)
    : appData.sections

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold mb-8">Discover</h1>
            
            {!searchQuery && <HeroSection onAppClick={setSelectedApp} />}
            
            <div className="flex flex-col gap-12 mt-8">
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
