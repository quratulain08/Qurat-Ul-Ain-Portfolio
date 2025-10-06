"use client"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"
import { ScrollTop } from "@/components/sections/scroll-top"

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <BackgroundDecor />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollTop />
    </main>
  )
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft pastel radial gradient using design tokens */}
      <div
        className="absolute -top-20 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--color-primary) 0%, transparent 60%)",
          opacity: 0.35,
        }}
      />
      <div
        className="absolute bottom-[-15rem] right-[-10rem] h-[35rem] w-[35rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--color-accent) 0%, transparent 60%)",
          opacity: 0.28,
        }}
      />
    </div>
  )
}
