"use client"

import { Search, User, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { toast } from "sonner"

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)

  const handleBack = () => {
    toast.info("Navigated back")
    setCanGoForward(true)
  }

  const handleForward = () => {
    toast.info("Navigated forward")
    setCanGoBack(true)
  }

  const handleSignIn = () => {
    toast.success("Sign In dialog would open here")
  }

  const handleCreateAccount = () => {
    toast.success("Create Account dialog would open here")
  }

  const handleAccountSettings = () => {
    toast.info("Opening Account Settings...")
  }

  const handleRedeemGiftCard = () => {
    toast.info("Redeem Gift Card dialog would open here")
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleBack}
            disabled={!canGoBack}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Go back</span>
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleForward}
            disabled={!canGoForward}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Go forward</span>
          </Button>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="w-full pl-9 bg-muted/50 border-0 focus-visible:ring-1"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onClick={handleSignIn}>
              Sign In
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleCreateAccount}>
              Create Apple ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleAccountSettings}>
              Account Settings...
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleRedeemGiftCard}>
              Redeem Gift Card or Code
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
