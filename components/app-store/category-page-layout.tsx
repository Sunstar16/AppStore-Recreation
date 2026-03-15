"use client"

import { useState } from "react"
import { Header } from "@/components/app-store/header"
import { Sidebar } from "@/components/app-store/sidebar"
import { AppSection } from "@/components/app-store/app-section"
import { AppDetailModal } from "@/components/app-store/app-detail-modal"
import type { App, Section } from "@/lib/app-data"
import { Toaster } from "@/components/ui/sonner"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroCard {
  tag: string
  title: string
  subtitle: string
  gradient: string
  app: App
}

interface CategoryPageLayoutProps {
  title: string
  icon: React.ReactNode
  heroCards: HeroCard[]
  sections: Section[]
}

export function CategoryPageLayout({ title, icon, heroCards, sections }: CategoryPageLayoutProps) {
  const [selectedApp, setSelectedApp] = useState<App | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [heroIndex, setHeroIndex] = useState(0)

  const goToPrevious = () => {
    setHeroIndex((prev) => (prev === 0 ? heroCards.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setHeroIndex((prev) => (prev === heroCards.length - 1 ? 0 : prev + 1))
  }

  const filteredSections = searchQuery
    ? sections.map(section => ({
        ...section,
        apps: section.apps.filter(app =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.developer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.apps.length > 0)
    : sections

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex items-center gap-3 mb-6">
              {icon}
              <h1 className="text-3xl font-bold">{title}</h1>
            </div>

            {/* Hero Cards */}
            {heroCards.length > 0 && !searchQuery && (
              <div className="relative mb-10">
                <div className="overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${heroIndex * 100}%)` }}
                  >
                    {heroCards.map((card, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedApp(card.app)}
                        className={cn(
                          "flex-shrink-0 w-full h-56 rounded-2xl p-6 flex flex-col justify-end text-left",
                          "bg-gradient-to-br",
                          card.gradient
                        )}
                      >
                        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                          {card.tag}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {card.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          {card.subtitle}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {heroCards.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
                      onClick={goToPrevious}
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="sr-only">Previous</span>
                    </Button>

                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
                      onClick={goToNext}
                    >
                      <ChevronRight className="h-5 w-5" />
                      <span className="sr-only">Next</span>
                    </Button>

                    <div className="flex justify-center gap-2 mt-4">
                      {heroCards.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setHeroIndex(index)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-colors",
                            heroIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                          )}
                        >
                          <span className="sr-only">Go to slide {index + 1}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Sections */}
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
