import type React from "react"
type Props = {
  id: string
  title: string
  children: React.ReactNode
}

export default function DocSection({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <h2 id={`${id}-title`} className="mb-4 text-pretty text-2xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="space-y-4 text-muted-foreground">{children}</div>
    </section>
  )
}
