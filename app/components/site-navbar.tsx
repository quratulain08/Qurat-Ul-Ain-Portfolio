"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, Sparkles } from "lucide-react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md"
      role="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <motion.a 
          href="#home" 
          className="flex items-center gap-2" 
          aria-label="Go to home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </motion.span>
          <span className="font-medium">Quratulain Bangash</span>
        </motion.a>

        {/* Desktop nav */}
        <motion.nav 
          className="hidden items-center gap-1 md:flex" 
          aria-label="Primary"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {links.slice(0, -1).map((l, index) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Button asChild variant="ghost" className="px-3 hover:scale-105 transition-transform duration-200">
                <a href={l.href}>{l.label}</a>
              </Button>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Button 
              asChild 
              className="ml-2 bg-primary text-primary-foreground hover:scale-105 transition-transform duration-200"
            >
              <a href="#contact">Contact</a>
            </Button>
          </motion.div>
        </motion.nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 grid gap-1" aria-label="Mobile primary">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a href={l.href} className="rounded-md px-3 py-2 text-foreground hover:bg-muted">
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
