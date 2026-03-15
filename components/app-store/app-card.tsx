"use client"

import { Button } from "@/components/ui/button"
import type { App } from "@/lib/app-data"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface AppCardProps {
  app: App
  layout: "horizontal" | "grid" | "list" | "featured"
  onClick: () => void
  rank?: number
}

export function AppCard({ app, layout, onClick, rank }: AppCardProps) {
  const handleGetClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (app.price === "Free" || app.price === "Arcade") {
      toast.success(`Installing ${app.name}...`)
    } else {
      toast.success(`Purchasing ${app.name} for ${app.price}`)
    }
  }

  const getButtonLabel = () => {
    if (app.price === "Free") return "Get"
    if (app.price === "Arcade") return "Get"
    return app.price
  }

  if (layout === "list") {
    return (
      <div
        onClick={onClick}
        className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors w-full text-left cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      >
        {rank && (
          <span className="text-xl font-bold text-muted-foreground w-6 text-center">
            {rank}
          </span>
        )}
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{ backgroundColor: app.icon }}
        >
          <span className="text-white text-2xl font-bold">
            {app.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold truncate">{app.name}</h3>
          <p className="text-sm text-muted-foreground truncate">{app.category}</p>
          {app.inAppPurchases && (
            <p className="text-xs text-muted-foreground">In-App Purchases</p>
          )}
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full px-5 font-semibold"
          onClick={handleGetClick}
        >
          {getButtonLabel()}
        </Button>
      </div>
    )
  }

  if (layout === "horizontal") {
    return (
      <div
        onClick={onClick}
        className="flex flex-col gap-3 w-44 flex-shrink-0 text-left group cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      >
        <div
          className="w-44 h-44 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow"
          style={{ backgroundColor: app.icon }}
        >
          <span className="text-white text-5xl font-bold">
            {app.name.charAt(0)}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-sm truncate">{app.name}</h3>
          <p className="text-xs text-muted-foreground truncate">
            {app.subtitle || app.category}
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full px-5 font-semibold w-fit"
          onClick={handleGetClick}
        >
          {getButtonLabel()}
        </Button>
      </div>
    )
  }

  if (layout === "grid") {
    return (
      <div
        onClick={onClick}
        className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors text-left cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      >
        <div
          className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{ backgroundColor: app.icon }}
        >
          <span className="text-white text-2xl font-bold">
            {app.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm truncate">{app.name}</h3>
          <p className="text-xs text-muted-foreground truncate">{app.category}</p>
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full px-4 font-semibold mt-2"
            onClick={handleGetClick}
          >
            {getButtonLabel()}
          </Button>
        </div>
      </div>
    )
  }

  // Featured layout
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-2xl text-left group",
        app.featured ? "col-span-2 row-span-2" : ""
      )}
    >
      <div
        className="w-full h-48 flex items-center justify-center"
        style={{ backgroundColor: app.icon }}
      >
        <span className="text-white text-6xl font-bold">
          {app.name.charAt(0)}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-bold text-white text-lg">{app.name}</h3>
        <p className="text-sm text-white/80">{app.featuredTagline || app.category}</p>
      </div>
    </button>
  )
}
