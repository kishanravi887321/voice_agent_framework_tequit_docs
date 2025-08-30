"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export type TocItem = { id: string; title: string }

export function SideNav({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [items])

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-20 hidden h-[calc(100dvh-5rem)] w-64 shrink-0 overflow-auto pr-2 md:block"
    >
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className={cn(
                "block rounded-md px-2 py-1.5 text-sm transition-colors",
                active === item.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
