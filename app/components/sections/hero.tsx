"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="order-2 md:order-1"
        >
          <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            {"Hi, I’m Quratulain Bangash "}
            <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-border/60 bg-accent px-2 py-0.5 text-sm text-accent-foreground align-middle">
              <Sparkles className="h-4 w-4" aria-hidden />
              <span className="sr-only">Sparkles</span>
              Crafting clean web apps
            </span>
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Full‑stack developer focused on building elegant, accessible, and performant experiences with React,
            Next.js, and modern tooling.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
              <a href="#contact">Let’s Connect</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          {/* Soft glass card for tags */}
          <div className="mt-6 rounded-xl border border-border/50 bg-card/70 p-4 backdrop-blur-md">
            <p className="text-sm text-muted-foreground">
              React • Next.js • Node.js • TailwindCSS • HTML • MongoDB • Express • CSS • JavaScript • JWT
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative h-48 w-48 overflow-hidden rounded-full border border-border/60 bg-card shadow-sm md:h-64 md:w-64">
            <img
              src="/assets/myphoto.jpg"
              alt="Portrait of Quratulain Bangash"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-ring/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
