"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  name: string
  description: string
  stack: string[]
  image: string
  live?: string
  github?: string
}

const projects: Project[] = [
  {
    name: "Internship Log",
    description: "Comprehensive internship progress tracking system built with modern web technologies for seamless monitoring and reporting.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "/internship-progress-tracker-ui-mockup.jpg",
    live: "https://fyp-project-orpin.vercel.app/",
    github: "https://github.com/quratulain08/FYP-PROJECT",
  },
  {
    name: "Expense Tracker",
    description: "Full-stack MERN application for daily expense management with intuitive dashboard and comprehensive financial analytics.",
    stack: ["MongoDB", "Express", "React", "Node"],
    image: "/expense-tracker-dashboard.jpg",
    live: "https://track-the-expenses.vercel.app/login",
    github: "https://github.com/quratulain08/ExpenseTracker-Mern",
  },
  {
    name: "GlowCare",
    description: "AI-powered skincare recommendation platform providing personalized beauty solutions with modern user interface design.",
    stack: ["Next.js", "Tailwind", "REST"],
    image: "/skincare-recommendation-interface.jpg",
    live: "#",
    github: "#https://github.com/mahrukh-dev/glow-care-mern",
  },
  {
    name: "Furnivo E-Commerce",
    description: "Modern furniture e-commerce platform featuring product catalog, shopping cart, and secure payment integration.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "/furniture-ecommerce-product-grid.jpg",
    live: "https://furnivo-ecommerce.vercel.app/",
    github: "https://github.com/quratulain08/Ecommerce-Nextjs",
  },
  {
    name: "InfinityTechLabs",
    description: "Professional corporate landing page showcasing technology services with responsive design and modern aesthetics.",
    stack: ["React", "Tailwind"],
    image: "/tech-company-landing-page-hero.jpg",
    live: "https://infinitytechlabs.org/",
    github: "https://github.com/FaseehHayat21/Industry-tech-labs-4.0",
  },
  {
    name: "Vix Commerce",
    description: "End-to-end Amazon management platform providing sustainable growth solutions with expert teams and comprehensive analytics.",
    stack: ["Next.js", "AWS", "Analytics", "SEO"],
    image: "/vix-commerce-dashboard.jpg",
    live: "https://www.vixcommerce.com/",
    github: "https://github.com/quratulain08/vixecommerce",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-balance text-2xl font-semibold md:text-3xl"
      >
        Projects
      </motion.h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="group h-full overflow-hidden border-border/60 bg-card/80 backdrop-blur">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.name} preview`}
                    className="h-40 w-full object-cover md:h-48"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="outline" className="border-border/70">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-4 pt-0">
                <Button asChild size="sm" className="bg-primary text-primary-foreground">
                  <a href={p.live || "#"} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="secondary">
                  <a href={p.github || "#"} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
