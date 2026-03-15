"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { App } from "@/lib/app-data"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SeeAllModalProps {
  open: boolean
  onClose: () => void
  title: string
  apps: App[]
  onAppClick: (app: App) => void
}

export function SeeAllModal({ open, onClose, title, apps, onAppClick }: SeeAllModalProps) {
  const handleAppClick = (app: App) => {
    onClose()
    onAppClick(app)
  }

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            Browse all {apps.length} apps in this collection
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(85vh-100px)]">
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {apps.map((app, index) => (
                <div
                  key={app.id}
                  onClick={() => handleAppClick(app)}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/50 transition-colors text-left cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleAppClick(app)}
                >
                  <span className="text-lg font-semibold text-muted-foreground w-6 text-right">
                    {index + 1}
                  </span>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: app.icon }}
                  >
                    <span className="text-white text-xl font-bold">
                      {app.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{app.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{app.subtitle}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(app.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {app.ratingsCount}
                      </span>
                    </div>
                  </div>
                  <Button size="sm" variant="secondary" className="rounded-full px-4 shrink-0">
                    {app.price === "Free" ? "Get" : app.price}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
