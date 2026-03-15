"use client"

import { useState } from "react"
import { Header } from "@/components/app-store/header"
import { Sidebar } from "@/components/app-store/sidebar"
import { AppSection } from "@/components/app-store/app-section"
import { AppDetailModal } from "@/components/app-store/app-detail-modal"
import { developData } from "@/lib/page-data"
import type { App } from "@/lib/app-data"
import { Toaster } from "@/components/ui/sonner"
import { Code2 } from "lucide-react"

export default function DevelopPage() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSections = searchQuery
    ? developData.sections.map(section => ({
        ...section,
        apps: section.apps.filter(app =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.developer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.apps.length > 0)
    : developData.sections

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Develop</h1>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Essential tools for developers, including code editors, debugging tools, and design apps.
            </p>

            {/* Featured Developer Story */}
            <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Developer Spotlight</span>
              <h2 className="text-xl font-semibold mt-2 mb-2">Code Faster With Xcode Extensions</h2>
              <p className="text-sm text-muted-foreground">Enhance your coding capabilities with powerful extensions.</p>
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
