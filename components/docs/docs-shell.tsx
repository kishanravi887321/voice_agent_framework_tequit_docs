import type React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/site/theme-toggle"
import { SideNav, type TocItem } from "./side-nav"

export default function DocsShell({
  children,
  toc,
}: {
  children: React.ReactNode
  toc: TocItem[]
}) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/docs" className="font-semibold tracking-tight">
            Voice Agent SDK
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
              Docs
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl gap-6 px-4 py-6">
        <SideNav items={toc} />
        <article className="min-w-0 flex-1 prose dark:prose-invert max-w-none">{children}</article>
      </main>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Voice Agent SDK
      </footer>
    </div>
  )
}
