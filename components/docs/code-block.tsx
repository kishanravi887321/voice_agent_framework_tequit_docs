"use client"

import { useState } from "react"
import { Copy, CheckCircle } from "lucide-react"

type CodeBlockProps = {
  language?: "bash" | "python" | "env"
  code: string
}

export default function CodeBlock({ language = "bash", code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // ignore
    }
  }

  return (
    <div className="group rounded-xl border bg-card shadow-sm overflow-hidden">
      <div className="flex items-center justify-between border-b bg-muted/30 px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <CheckCircle className="mr-1.5 h-3 w-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-1.5 h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-6 text-sm leading-7 text-foreground bg-gradient-to-br from-card to-card/80">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  )
}
