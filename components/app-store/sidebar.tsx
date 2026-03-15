"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Compass, 
  Sparkles, 
  Palette,
  Briefcase,
  Gamepad2, 
  Code2,
  LayoutGrid,
  FileSpreadsheet,
  Wrench,
  Camera,
  Dices,
  Building2,
  GraduationCap,
  Music,
  Users
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
}

const mainNavItems: NavItem[] = [
  { id: "discover", label: "Discover", icon: <Compass className="h-5 w-5" />, href: "/" },
  { id: "arcade", label: "Arcade", icon: <Sparkles className="h-5 w-5" />, href: "/arcade" },
  { id: "create", label: "Create", icon: <Palette className="h-5 w-5" />, href: "/create" },
  { id: "work", label: "Work", icon: <Briefcase className="h-5 w-5" />, href: "/work" },
  { id: "play", label: "Play", icon: <Gamepad2 className="h-5 w-5" />, href: "/play" },
  { id: "develop", label: "Develop", icon: <Code2 className="h-5 w-5" />, href: "/develop" },
  { id: "categories", label: "Categories", icon: <LayoutGrid className="h-5 w-5" />, href: "/categories" },
]

const categoryItems: NavItem[] = [
  { id: "productivity", label: "Productivity", icon: <FileSpreadsheet className="h-4 w-4" />, href: "/categories/productivity" },
  { id: "utilities", label: "Utilities", icon: <Wrench className="h-4 w-4" />, href: "/categories/utilities" },
  { id: "photo-video", label: "Photo & Video", icon: <Camera className="h-4 w-4" />, href: "/categories/photo-video" },
  { id: "games", label: "Games", icon: <Dices className="h-4 w-4" />, href: "/categories/games" },
  { id: "business", label: "Business", icon: <Building2 className="h-4 w-4" />, href: "/categories/business" },
  { id: "education", label: "Education", icon: <GraduationCap className="h-4 w-4" />, href: "/categories/education" },
  { id: "music", label: "Music", icon: <Music className="h-4 w-4" />, href: "/categories/music" },
  { id: "social-networking", label: "Social Networking", icon: <Users className="h-4 w-4" />, href: "/categories/social-networking" },
]

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <aside className="w-56 border-r border-border/40 bg-muted/30 flex-shrink-0 hidden md:block">
      <nav className="flex flex-col p-4 gap-1">
        <div className="mb-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
            Discover
          </span>
        </div>
        {mainNavItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              isActive(item.href) && "bg-accent text-accent-foreground"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}

        <div className="mt-6 mb-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
            Categories
          </span>
        </div>
        {categoryItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              isActive(item.href) && "bg-accent text-accent-foreground"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
