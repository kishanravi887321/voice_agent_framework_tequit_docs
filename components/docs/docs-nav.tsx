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
      className="sticky top-20 hidden h-[calc(100svh-5rem)] w-64 shrink-0 overflow-auto rounded-lg border border-gray-200 bg-white p-4 md:block"
    >
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Voice Agent SDK</div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={`${pathname}${item.href}`}
              className="block rounded-md px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
