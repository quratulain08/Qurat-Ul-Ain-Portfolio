"use client"

import { motion } from "framer-motion"
import { Sparkles, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:py-24 overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 -left-4 h-72 w-72 rounded-full bg-gradient-to-r from-cyan-600/15 to-teal-600/15 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 -right-4 h-96 w-96 rounded-full bg-gradient-to-r from-teal-600/12 to-cyan-700/12 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-32 left-1/3 h-4 w-4 rounded-full bg-primary/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 h-6 w-6 rounded-full bg-cyan-400/20"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="order-2 md:order-1"
        >
          <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            {"Hi, I’m Qurat Ul Ain Bangash "}
            <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-border/60 bg-accent px-2 py-0.5 text-sm text-accent-foreground align-middle">
              <Sparkles className="h-4 w-4" aria-hidden />
              <span className="sr-only">Sparkles</span>
              Crafting clean web apps
            </span>
          </h1>
          
          <motion.p 
            className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full‑stack developer focused on building elegant, accessible, and performant experiences with React,
            Next.js, and modern tooling.
          </motion.p>
          
          <motion.div 
            className="mt-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              asChild 
              className="bg-primary text-primary-foreground hover:opacity-90 transform transition-all duration-200 hover:scale-105"
            >
              <a href="#contact">Let's Connect</a>
            </Button>
        
            <Button
              asChild
              variant="ghost"
              className="transform transition-all duration-200 hover:scale-105"
            >
              <a
                href="https://www.fiverr.com/quratulain_08/create-an-incredible-custom-website-with-interactive-features"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Hire me on Fiverr
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </Button>
          </motion.div>
          
          {/* Enhanced glass card for tech stack */}
          <motion.div 
            className="mt-6 rounded-xl border border-border/50 bg-card/70 p-4 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ y: -2 }}
          >
            <p className="text-sm text-muted-foreground">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              >
                React • Next.js • Node.js • TailwindCSS • HTML • MongoDB • Express • CSS • JavaScript • JWT
              </motion.span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <motion.div 
            className="relative h-48 w-48 overflow-hidden rounded-full border border-border/60 bg-card shadow-lg md:h-64 md:w-64"
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Animated ring around profile picture */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-1 rounded-full border border-teal-400/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            <img
              src="/assets/Qurat Ul Ain.png"
              alt="Portrait of Quratulain Bangash"
              className="h-full w-full object-cover relative z-10"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-ring/30 z-20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}