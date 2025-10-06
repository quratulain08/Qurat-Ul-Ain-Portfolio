"use client"

import * as React from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100
      setProgress(Number.isFinite(scrolled) ? scrolled : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-50 h-1 bg-transparent"
      style={{ contain: "strict" }}
    >
      <div
        className="h-full origin-left bg-primary transition-[width] duration-150 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
export { ScrollProgress }