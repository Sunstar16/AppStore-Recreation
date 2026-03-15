"use client"

import { useState } from "react"
import { Header } from "@/components/app-store/header"
import { Sidebar } from "@/components/app-store/sidebar"
import { AppSection } from "@/components/app-store/app-section"
import { AppDetailModal } from "@/components/app-store/app-detail-modal"
import { workData } from "@/lib/page-data"
import type { App } from "@/lib/app-data"
import { Toaster } from "@/components/ui/sonner"
import { Briefcase } from "lucide-react"

export default function WorkPage() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSections = searchQuery
    ? workData.sections.map(section => ({
        ...section,
        apps: section.apps.filter(app =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.developer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.apps.length > 0)
    : workData.sections

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Work</h1>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Stay productive with the best apps for task management, note-taking, scheduling, and collaboration.
            </p>
            
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
