"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-balance text-2xl font-semibold md:text-3xl"
      >
        About Me
      </motion.h2>

      <Card className="mt-6 border-border/60 bg-card/80 backdrop-blur">
        <CardContent className="p-6">
          <div className="grid items-center gap-6 md:grid-cols-[auto,1fr]">
            <div className="flex justify-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border/60 bg-card">
                <img
                  src="/assets/myphoto.jpg"
                  alt="Quratulain Bangash headshot"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-pretty leading-relaxed text-muted-foreground"
              >
                I’m a 22-year-old web developer and recent graduate who loves designing elegant, minimal, and
                user-friendly web experiences. I enjoy building with modern technologies like React, Next.js, Node.js,
                and Tailwind.
              </motion.p>

              <p className="text-pretty leading-relaxed text-muted-foreground">
                I specialize in building end‑to‑end features with a keen eye for UI polish, accessibility, and
                performance. My toolkit includes React, Next.js (App Router), TailwindCSS, Node/Express, and
                relational/NoSQL databases. I love turning ideas into clean, reliable interfaces and shipping iterative
                improvements fast.
              </p>

              <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  Component-driven UIs with shadcn/ui and Tailwind
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  Accessible-by-default: semantic HTML, a11y checks
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  API design with Node/Express and REST best practices
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  Deploys on Vercel with sensible CI/CD hygiene
                </li>
              </ul>

              <div className="pt-2">
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                    <Download className="mr-2 h-4 w-4" aria-hidden />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
