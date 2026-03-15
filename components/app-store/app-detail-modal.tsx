"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Share2, Heart, Flag, ChevronRight, Monitor, Info } from "lucide-react"
import type { App } from "@/lib/app-data"
import { toast } from "sonner"
import { useState } from "react"

interface AppDetailModalProps {
  app: App | null
  open: boolean
  onClose: () => void
}

export function AppDetailModal({ app, open, onClose }: AppDetailModalProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!app) return null

  const handleGetApp = () => {
    if (app.price === "Free" || app.price === "Arcade") {
      toast.success(`Installing ${app.name}...`)
    } else {
      toast.success(`Purchasing ${app.name} for ${app.price}`)
    }
  }

  const handleShare = () => {
    navigator.clipboard.writeText(`https://apps.apple.com/app/${app.id}`)
    toast.success("Link copied to clipboard!")
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast.success(isWishlisted ? `Removed ${app.name} from wishlist` : `Added ${app.name} to wishlist`)
  }

  const handleReport = () => {
    toast.info("Report a Problem dialog would open here")
  }

  const handleDeveloperClick = () => {
    toast.info(`Viewing all apps by ${app.developer}`)
  }

  const handlePrivacyClick = () => {
    toast.info("App Privacy details would open here")
  }

  const handleReviewsClick = () => {
    toast.info("All Ratings and Reviews would open here")
  }

  const handleWriteReview = () => {
    toast.info("Write a Review dialog would open here")
  }

  const getButtonLabel = () => {
    if (app.price === "Free") return "Get"
    if (app.price === "Arcade") return "Get"
    return app.price
  }

  const formatReviews = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex gap-5">
            <div
              className="w-28 h-28 rounded-[22px] flex items-center justify-center flex-shrink-0 shadow-lg"
              style={{ backgroundColor: app.icon }}
            >
              <span className="text-white text-4xl font-bold">
                {app.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-2xl font-bold mb-1">
                {app.name}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Details and information about {app.name} by {app.developer}
              </DialogDescription>
              <button 
                onClick={handleDeveloperClick}
                className="text-primary text-sm hover:underline"
              >
                {app.developer}
              </button>
              <p className="text-sm text-muted-foreground mt-1">{app.category}</p>
              <div className="flex items-center gap-4 mt-3">
                <Button
                  onClick={handleGetApp}
                  className="rounded-full px-8 font-semibold"
                >
                  {getButtonLabel()}
                </Button>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={handleShare}
                  >
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-full ${isWishlisted ? 'text-red-500' : ''}`}
                    onClick={handleWishlist}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                    <span className="sr-only">Add to Wishlist</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6">
          {/* Stats Row */}
          <div className="flex items-center justify-around py-4 border-y">
            <button onClick={handleReviewsClick} className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity">
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold">{app.rating}</span>
                <Star className="h-4 w-4 fill-current text-muted-foreground" />
              </div>
              <span className="text-xs text-muted-foreground">{formatReviews(app.reviews)} Ratings</span>
            </button>
            <Separator orientation="vertical" className="h-10" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg font-bold">{app.age || "4+"}</span>
              <span className="text-xs text-muted-foreground">Age</span>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div className="flex flex-col items-center gap-1">
              <Monitor className="h-5 w-5" />
              <span className="text-xs text-muted-foreground">Mac</span>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg font-bold">{app.size || "N/A"}</span>
              <span className="text-xs text-muted-foreground">Size</span>
            </div>
          </div>

          {/* What's New */}
          <div className="py-4 border-b">
            <h3 className="font-semibold mb-2">What's New</h3>
            <p className="text-sm text-muted-foreground">
              Bug fixes and performance improvements.
            </p>
          </div>

          {/* Description */}
          <div className="py-4 border-b">
            <p className="text-sm leading-relaxed">{app.description}</p>
          </div>

          {/* Ratings & Reviews */}
          <div className="py-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Ratings & Reviews</h3>
              <Button variant="link" className="text-primary gap-1" onClick={handleReviewsClick}>
                See All
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold">{app.rating}</div>
                <div className="text-sm text-muted-foreground">out of 5</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(app.rating)
                          ? "fill-current text-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatReviews(app.reviews)} Ratings
                </p>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4" onClick={handleWriteReview}>
              Write a Review
            </Button>
          </div>

          {/* Information */}
          <div className="py-4 border-b">
            <h3 className="font-semibold mb-4">Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Seller</p>
                <p>{app.developer}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Size</p>
                <p>{app.size || "N/A"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Category</p>
                <p>{app.category}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Age Rating</p>
                <p>{app.age || "4+"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Price</p>
                <p>{app.price}</p>
              </div>
              {app.inAppPurchases && (
                <div>
                  <p className="text-muted-foreground">In-App Purchases</p>
                  <p>Yes</p>
                </div>
              )}
            </div>
          </div>

          {/* App Privacy */}
          <button 
            onClick={handlePrivacyClick}
            className="w-full py-4 border-b flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg px-2 -mx-2"
          >
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-muted-foreground" />
              <div className="text-left">
                <h3 className="font-semibold">App Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  See how the developer handles your data
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Report */}
          <div className="pt-4 flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground gap-2"
              onClick={handleReport}
            >
              <Flag className="h-4 w-4" />
              Report a Problem
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
