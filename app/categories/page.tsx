"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/app-store/header"
import { Sidebar } from "@/components/app-store/sidebar"
import { AppSection } from "@/components/app-store/app-section"
import { AppDetailModal } from "@/components/app-store/app-detail-modal"
import { AppCard } from "@/components/app-store/app-card"
import { SeeAllModal } from "@/components/app-store/see-all-modal"
import { 
  allCategories, 
  categoryHeroCards,
  editorsChoiceApps,
  macEssentialsApps,
  topFreeAppsCategories,
  topPaidAppsCategories
} from "@/lib/category-data"
import type { App } from "@/lib/app-data"
import { Toaster } from "@/components/ui/sonner"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Building2,
  Code2,
  GraduationCap,
  Tv,
  DollarSign,
  Gamepad2,
  Palette,
  Heart,
  Sparkles,
  Stethoscope,
  Music,
  Newspaper,
  Camera,
  FileSpreadsheet,
  BookOpen,
  Users,
  Wrench,
  Cloud,
  LayoutGrid
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-6 w-6" />,
  Code2: <Code2 className="h-6 w-6" />,
  GraduationCap: <GraduationCap className="h-6 w-6" />,
  Tv: <Tv className="h-6 w-6" />,
  DollarSign: <DollarSign className="h-6 w-6" />,
  Gamepad2: <Gamepad2 className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Stethoscope: <Stethoscope className="h-6 w-6" />,
  Music: <Music className="h-6 w-6" />,
  Newspaper: <Newspaper className="h-6 w-6" />,
  Camera: <Camera className="h-6 w-6" />,
  FileSpreadsheet: <FileSpreadsheet className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Wrench: <Wrench className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
}

export default function CategoriesPage() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [heroIndex, setHeroIndex] = useState(0)
  const [editorsChoiceModalOpen, setEditorsChoiceModalOpen] = useState(false)
  const [macEssentialsModalOpen, setMacEssentialsModalOpen] = useState(false)

  const goToPrevious = () => {
    setHeroIndex((prev) => (prev === 0 ? categoryHeroCards.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setHeroIndex((prev) => (prev === categoryHeroCards.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex items-center gap-3 mb-6">
              <LayoutGrid className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Categories</h1>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {allCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border hover:bg-accent/50 transition-colors"
                >
                  <div className="text-primary">
                    {iconMap[category.icon]}
                  </div>
                  <span className="font-medium text-sm">{category.name}</span>
                </Link>
              ))}
            </div>

            {/* Editors' Choice Section */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{"Editors' Choice: Top Apps for Every Task"}</h2>
                <Button variant="link" className="text-primary gap-1" onClick={() => setEditorsChoiceModalOpen(true)}>
                  See All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-5 pb-4">
                  {editorsChoiceApps.map((app) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      layout="horizontal"
                      onClick={() => setSelectedApp(app)}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>

            {/* New to Mac Section */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">New to Mac? Try These Mac Essentials</h2>
                <Button variant="link" className="text-primary gap-1" onClick={() => setMacEssentialsModalOpen(true)}>
                  See All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-5 pb-4">
                  {macEssentialsApps.map((app) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      layout="horizontal"
                      onClick={() => setSelectedApp(app)}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>

            {/* Discover Amazing Apps - Hero Cards */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4">Discover Amazing Apps</h2>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${heroIndex * 100}%)` }}
                  >
                    {categoryHeroCards.map((card) => (
                      <button
                        key={card.id}
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
                  {categoryHeroCards.map((_, index) => (
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
              </div>
            </section>

            {/* Top Free Apps */}
            <AppSection
              title="Top Free Apps"
              apps={topFreeAppsCategories}
              layout="list"
              onAppClick={setSelectedApp}
            />

            <div className="h-12" />

            {/* Top Paid Apps */}
            <AppSection
              title="Top Paid Apps"
              apps={topPaidAppsCategories}
              layout="list"
              onAppClick={setSelectedApp}
            />
          </div>
        </main>
      </div>

      <AppDetailModal
        app={selectedApp}
        open={!!selectedApp}
        onClose={() => setSelectedApp(null)}
      />

      <SeeAllModal
        open={editorsChoiceModalOpen}
        onClose={() => setEditorsChoiceModalOpen(false)}
        title="Editors' Choice: Top Apps for Every Task"
        apps={editorsChoiceApps}
        onAppClick={setSelectedApp}
      />

      <SeeAllModal
        open={macEssentialsModalOpen}
        onClose={() => setMacEssentialsModalOpen(false)}
        title="New to Mac? Try These Mac Essentials"
        apps={macEssentialsApps}
        onAppClick={setSelectedApp}
      />
    </div>
  )
}
