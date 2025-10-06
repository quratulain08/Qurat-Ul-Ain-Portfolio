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
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setMessage('')
    setMessageType('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon! ✨')
        setMessageType('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setMessage(result.error || 'Something went wrong. Please try again.')
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.')
      setMessageType('error')
    } finally {
      setSubmitting(false)
    }
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="mt-6 border-border/60 bg-card/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <motion.p 
              className="text-pretty text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Let's create something amazing together ✨
            </motion.p>

          {message && (
            <div
              className={`mt-4 rounded-lg border p-4 ${
                messageType === 'success'
                  ? 'border-green-200 bg-green-50 text-green-800'
                  : 'border-red-200 bg-red-50 text-red-800'
              }`}
            >
              {message}
            </div>
          )}

          <motion.form 
            onSubmit={onSubmit} 
            className="mt-6 grid gap-4 md:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="grid gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Your name" 
                required 
                className="transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
              />
            </motion.div>
            <motion.div 
              className="grid gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="you@example.com" 
                required 
                className="transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
              />
            </motion.div>
            <motion.div 
              className="md:col-span-2 grid gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Tell me about your project..." 
                required 
                className="min-h-[120px] transition-all duration-200 focus:scale-[1.01] focus:shadow-md"
              />
            </motion.div>
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button 
                type="submit" 
                disabled={submitting} 
                className="bg-primary text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Send Message"}
              </Button>
            </motion.div>
          </motion.form>

          <motion.div 
            className="mt-6 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <SocialLink href="https://www.linkedin.com/in/qurat-ul-ain-bangash-6b77b524a/" label="LinkedIn">
              <Linkedin className="size-4" aria-hidden />
            </SocialLink>
            <SocialLink href="https://github.com/quratulain08" label="GitHub">
              <Github className="size-4" aria-hidden />
            </SocialLink>
            <SocialLink href="mailto:anniebangash497@gmail.com" label="Email">
              <Mail className="size-4" aria-hidden />
            </SocialLink>
          </motion.div>
        </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ 
        y: -2,
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-secondary px-3 py-2 text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 shadow-sm hover:shadow-md"
    >
      {children}
      <span className="sr-only">{label}</span>
      <span aria-hidden className="text-xs">
        {label}
      </span>
    </motion.a>
  )
}