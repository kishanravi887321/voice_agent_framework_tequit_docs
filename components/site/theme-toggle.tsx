"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

// Small, accessible theme toggle that works with components/theme-provider.tsx
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = (theme ?? resolvedTheme) === "dark"
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-8 w-8"
    >
      {!mounted ? <Sun className="h-4 w-4" /> : isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
