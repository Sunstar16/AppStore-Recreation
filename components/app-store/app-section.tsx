"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { AppCard } from "./app-card"
import { SeeAllModal } from "./see-all-modal"
import type { App } from "@/lib/app-data"
import { cn } from "@/lib/utils"

interface AppSectionProps {
  title: string
  subtitle?: string
  apps: App[]
  layout: "horizontal" | "grid" | "list" | "featured"
  onAppClick: (app: App) => void
}

export function AppSection({ title, subtitle, apps, layout, onAppClick }: AppSectionProps) {
  const [seeAllOpen, setSeeAllOpen] = useState(false)

  const handleSeeAll = () => {
    setSeeAllOpen(true)
  }

  const renderContent = () => {
    if (layout === "horizontal") {
      return (
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-5 pb-4">
            {apps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                layout={layout}
                onClick={() => onAppClick(app)}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )
    }

    if (layout === "list") {
      return (
        <div className="bg-card rounded-xl border divide-y">
          {apps.slice(0, 6).map((app, index) => (
            <AppCard
              key={app.id}
              app={app}
              layout={layout}
              onClick={() => onAppClick(app)}
              rank={index + 1}
            />
          ))}
        </div>
      )
    }

    if (layout === "grid") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-card rounded-xl border p-2">
          {apps.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              layout={layout}
              onClick={() => onAppClick(app)}
            />
          ))}
        </div>
      )
    }

    // Featured layout
    return (
      <ScrollArea className="w-full">
        <div className="flex gap-4 pb-4">
          {apps.map((app) => (
            <div key={app.id} className={cn("flex-shrink-0", app.featured ? "w-80" : "w-60")}>
              <AppCard
                app={app}
                layout={layout}
                onClick={() => onAppClick(app)}
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    )
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <Button variant="link" className="text-primary gap-1" onClick={handleSeeAll}>
          See All
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      {renderContent()}
      <SeeAllModal
        open={seeAllOpen}
        onClose={() => setSeeAllOpen(false)}
        title={title}
        apps={apps}
        onAppClick={onAppClick}
      />
    </section>
  )
}
