import { Github, ExternalLink, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-sm font-bold">VA</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Voice Agent SDK</h3>
                <p className="text-sm text-muted-foreground">Professional LLM Integration</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-6">
              A comprehensive Python SDK for seamless LLM and vector database integration. 
              Build voice-first applications with enterprise-grade reliability.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#overview" className="hover:text-foreground transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#install" className="hover:text-foreground transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#reference" className="hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#troubleshooting" className="hover:text-foreground transition-colors">
                  Troubleshooting
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>PyPI Package</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Voice Agent SDK. Built with precision and care.
          </p>
          <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-current" />
            <span>for developers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
