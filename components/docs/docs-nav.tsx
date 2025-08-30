"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { href: "#overview", label: "Overview" },
  { href: "#prereqs", label: "Prerequisites" },
  { href: "#install", label: "1. Installation" },
  { href: "#env", label: "2. Environment setup" },
  { href: "#voice-agent", label: "3. Use VoiceAgent" },
  { href: "#train-agent", label: "4. TrainVoiceAgent" },
  { href: "#realtime", label: "5. Speech-to-speech (optional)" },
  { href: "#full-example", label: "6. Full example" },
  { href: "#reference", label: "API reference" },
  { href: "#troubleshooting", label: "Troubleshooting" },
]

export default function DocsNav() {
  const pathname = usePathname()
  return (
    <nav
      aria-label="Docs navigation"
      className="px-6 py-8"
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">Voice Agent SDK</h2>
        <p className="text-sm text-muted-foreground">Complete documentation</p>
      </div>
      
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={`${pathname}${item.href}`}
              className="flex items-center rounded-lg px-4 py-3 text-sm text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-accent-foreground mr-3 transition-colors"></span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="mt-8 pt-6 border-t">
        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-xs text-muted-foreground">
            Need help? Check our troubleshooting section or contact support.
          </p>
        </div>
      </div>
    </nav>
  )
}
