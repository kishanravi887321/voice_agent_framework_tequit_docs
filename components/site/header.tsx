"use client"

import { ThemeToggle } from "./theme-toggle"
import { Copy, CheckCircle, Github, ExternalLink } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [copied, setCopied] = useState(false)
  const installCommand = "pip install voice-agent-tequity"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(installCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-lg font-bold">VA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Voice Agent SDK</h1>
              <p className="text-xs text-muted-foreground">Professional LLM Integration</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-2 rounded-lg border bg-muted/50 px-4 py-2">
            <code className="text-sm font-mono text-foreground">
              {installCommand}
            </code>
            <button
              onClick={copyToClipboard}
              className="ml-2 p-1.5 hover:bg-background rounded-md transition-colors"
              title="Copy install command"
            >
              {copied ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              )}
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="lg:hidden flex items-center space-x-2 rounded-lg border bg-muted/50 px-3 py-2">
            <code className="text-xs font-mono text-foreground">
              pip install...
            </code>
            <button
              onClick={copyToClipboard}
              className="p-1 hover:bg-background rounded transition-colors"
              title="Copy install command"
            >
              {copied ? (
                <CheckCircle className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3 text-muted-foreground hover:text-foreground" />
              )}
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="#"
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>PyPI</span>
            </a>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
