"use client"

import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { Toaster } from "sonner"

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      <Toaster position="bottom-right" />
    </div>
  )
}
