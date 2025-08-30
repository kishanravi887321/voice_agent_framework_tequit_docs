"use client"

import { useState } from "react"

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
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-500">{language}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Copy code to clipboard"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto border-t border-gray-200 p-4 text-sm leading-6 text-gray-900">
        <code>{code}</code>
      </pre>
    </div>
  )
}
