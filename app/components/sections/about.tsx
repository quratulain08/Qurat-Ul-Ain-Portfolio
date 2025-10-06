"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
      >
        
          About Me
        
      </motion.h2>

      {/* Card Container */}
      <Card className="mt-10 border-border/60 bg-card/80 backdrop-blur">
        <CardContent className="p-8 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-pink-200 shadow-md">
                <img
                  src="/assets/myphoto.jpg"
                  alt="Quratulain Bangash"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                Hi 👋 I’m <span className="font-medium text-foreground">Quratulain Bangash</span>, a{" "}
                <strong>Full-Stack Web Developer</strong> and recent graduate who loves crafting modern, clean, and
                functional web applications. I’m passionate about turning ideas into smooth, interactive, and elegant
                user experiences that feel effortless to use.
              </motion.p>

              <p className="text-muted-foreground leading-relaxed">
                I specialize in building full-stack solutions with{" "}
                <strong>React, Next.js, Node.js, Express, and PostgreSQL/MongoDB</strong>.  
                My approach is simple -design with empathy, develop with precision, and deliver products that are fast,
                accessible, and visually pleasing.  
                I enjoy every part of the process, from designing UIs to integrating APIs and deploying production-ready
                apps.
              </p>

              {/* Skills List */}
              <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  Responsive and accessible UI with ShadCN & TailwindCSS
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  RESTful APIs and server-side logic with Node & Express
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  Data modeling and persistence with PostgreSQL & MongoDB
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  Deployed and optimized projects on Vercel & Render
                </li>
              </ul>

              {/* CV Button */}
              <div className="pt-4">
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300">
                  <a href="/QURATULAIN-CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">
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
