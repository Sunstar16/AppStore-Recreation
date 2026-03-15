"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { App } from "@/lib/app-data"

interface HeroCard {
  id: string
  title: string
  subtitle: string
  tagline: string
  gradient: string
  app: App
}

const heroCards: HeroCard[] = [
  {
    id: "1",
    title: "Baldur's Gate 3",
    subtitle: "Award-Winning RPG",
    tagline: "Gather your party",
    gradient: "from-amber-900 via-red-900 to-slate-900",
    app: {
      id: "baldurs-gate-3",
      name: "Baldur's Gate 3",
      developer: "Larian Studios",
      icon: "#FF9500",
      price: "$59.99",
      rating: 4.9,
      reviews: 125000,
      category: "Games",
      description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
      screenshots: [],
      size: "120 GB",
      age: "17+"
    }
  },
  {
    id: "2",
    title: "Adobe Lightroom",
    subtitle: "Photo editing redefined",
    tagline: "Professional photography tools",
    gradient: "from-sky-900 via-blue-900 to-indigo-900",
    app: {
      id: "adobe-lightroom",
      name: "Adobe Lightroom",
      developer: "Adobe Inc.",
      icon: "#007AFF",
      price: "Free",
      rating: 4.7,
      reviews: 85000,
      category: "Photo & Video",
      description: "Adobe Lightroom is a powerful photo editor and camera app that empowers your photography.",
      screenshots: [],
      inAppPurchases: true,
      size: "520 MB",
      age: "4+"
    }
  },
  {
    id: "3",
    title: "Pixelmator Pro",
    subtitle: "Image editing for everyone",
    tagline: "Design with ease",
    gradient: "from-fuchsia-900 via-purple-900 to-violet-900",
    app: {
      id: "pixelmator-pro",
      name: "Pixelmator Pro",
      developer: "Pixelmator Team",
      icon: "#AF52DE",
      price: "$49.99",
      rating: 4.8,
      reviews: 12500,
      category: "Graphics & Design",
      description: "Pixelmator Pro is an incredibly powerful, beautiful, and easy to use image editor designed exclusively for Mac.",
      screenshots: [],
      size: "440 MB",
      age: "4+"
    }
  },
  {
    id: "4",
    title: "Things 3",
    subtitle: "Get things done",
    tagline: "Award-winning task manager",
    gradient: "from-slate-800 via-zinc-800 to-neutral-900",
    app: {
      id: "things-3",
      name: "Things 3",
      developer: "Cultured Code",
      icon: "#5856D6",
      price: "$49.99",
      rating: 4.9,
      reviews: 8900,
      category: "Productivity",
      description: "Things is the award-winning personal task manager that helps you achieve your goals.",
      screenshots: [],
      size: "22 MB",
      age: "4+"
    }
  }
]

interface HeroSectionProps {
  onAppClick: (app: App) => void
}

export function HeroSection({ onAppClick }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroCards.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === heroCards.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative mb-8">
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onAppClick(card.app)}
              className={cn(
                "flex-shrink-0 w-full h-72 rounded-2xl p-8 flex flex-col justify-end text-left",
                "bg-gradient-to-br",
                card.gradient
              )}
            >
              <span className="text-sm font-medium text-white/70 uppercase tracking-wider mb-1">
                {card.tagline}
              </span>
              <h2 className="text-3xl font-bold text-white mb-2">
                {card.title}
              </h2>
              <p className="text-lg text-white/80">
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
        {heroCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              currentIndex === index ? "bg-primary" : "bg-muted-foreground/30"
            )}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
