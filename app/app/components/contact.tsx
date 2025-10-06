"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // Placeholder: Integrate a backend or action later.
    setTimeout(() => setSubmitting(false), 900)
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-balance text-2xl font-semibold md:text-3xl"
      >
        Contact
      </motion.h2>

      <Card className="mt-6 border-border/60 bg-card/80 backdrop-blur">
        <CardContent className="p-6">
          <p className="text-pretty text-muted-foreground">Let’s create something amazing together {"\u2728"}</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="md:col-span-2 grid gap-2">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <Textarea id="message" name="message" placeholder="Tell me about your project..." required />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" disabled={submitting} className="bg-primary text-primary-foreground">
                {submitting ? "Sending…" : "Send Message"}
              </Button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SocialLink href="#" label="LinkedIn">
              <Linkedin className="size-4" aria-hidden />
            </SocialLink>
            <SocialLink href="#" label="GitHub">
              <Github className="size-4" aria-hidden />
            </SocialLink>
            <SocialLink href="mailto:hello@example.com" label="Email">
              <Mail className="size-4" aria-hidden />
            </SocialLink>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ y: -2 }}
      className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-secondary px-3 py-2 text-sm text-foreground"
    >
      {children}
      <span className="sr-only">{label}</span>
      <span aria-hidden className="text-xs">
        {label}
      </span>
    </motion.a>
  )
}
