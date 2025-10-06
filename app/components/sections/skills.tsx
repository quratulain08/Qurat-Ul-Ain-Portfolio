"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckCircle2, Sparkles } from "lucide-react"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "TailwindCSS",
  "Git",
  "REST APIs",
]

type CategoryKey = "Frontend" | "Backend" | "Tools"

type SkillItem = {
  name: string
  level: number // 0-100
  tag?: string
}

const SKILLS: Record<CategoryKey, SkillItem[]> = {
  Frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS / Tailwind", level: 92, tag: "utility-first" },
    { name: "JavaScript (ESNext)", level: 90 },
    { name: "TypeScript", level: 82 },
    { name: "React", level: 90 },
    { name: "Next.js (App Router)", level: 86 },
  
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 78 },
    { name: "REST APIs", level: 84 },
    { name: "Auth (Sessions/JWT)", level: 72 },
    { name: "MongoDB", level: 70 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 88 },
    { name: "Vercel", level: 82 },
    { name: "Testing (Jest/RTL)", level: 60 },
    { name: "Design Systems", level: 72 },
  ],
}

function EnhancedSkills() {
  const [active, setActive] = useState<CategoryKey>("Frontend")
  const items = SKILLS[active]

  return (
    <Card className="mt-6 border-border/60 bg-card/80 backdrop-blur">
      <CardContent className="p-4 md:p-6">
        {/* category selector */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div 
            className="inline-flex rounded-lg border border-border/60 bg-muted/40 p-1"
            role="tablist"
            aria-label="Skill categories"
          >
            <CategoryButton label="Frontend" active={active} onClick={() => setActive("Frontend")} />
            <CategoryButton label="Backend" active={active} onClick={() => setActive("Backend")} />
            <CategoryButton label="Tools" active={active} onClick={() => setActive("Tools")} />
          </div>
          <p className="text-sm text-muted-foreground">Tap a category to explore proficiency and highlights.</p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Highlights panel */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-border/60 bg-popover p-4"
            aria-label={`${active} highlights`}
          >
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              Highlights
            </h3>

            {/* dynamic badges */}
            <div className="mt-3 flex flex-wrap gap-2">
              {active === "Frontend" && (
                <>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    SPA & App Router
                  </span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    Framer Motion polish
                  </span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    Design systems
                  </span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    Responsive by default
                  </span>
                </>
              )}
              {active === "Backend" && (
                <>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    RESTful APIs
                  </span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    Auth & Sessions
                  </span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">SQL & NoSQL</span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    Predictable errors
                  </span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    Simple caching
                  </span>
                </>
              )}
              {active === "Tools" && (
                <>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    Git discipline
                  </span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">CI basics</span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    Tokens & theming
                  </span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    Testing mindset
                  </span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">Docs-first</span>
                </>
              )}
            </div>

            {/* supportive copy */}
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
              {active === "Frontend" && (
                <>
                  <p>Reusable component patterns using Tailwind utilities and shadcn/ui primitives.</p>
                  <p>Keyboard navigation, visible focus states, and strong color contrast baked in.</p>
                </>
              )}
              {active === "Backend" && (
                <>
                  <p>Clean, versioned REST endpoints with validation and clear error semantics.</p>
                  <p>Pragmatic data modeling in Postgres/Mongo with caching where it matters.</p>
                </>
              )}
              {active === "Tools" && (
                <>
                  <p>Clear Git history and PRs, lightweight CI checks, and documented components.</p>
                  <p>Design tokens for consistency and faster iteration across the UI.</p>
                </>
              )}
            </div>

            {/* checklist */}
            <ul className="mt-4 grid gap-2 text-sm">
              {active === "Frontend" && (
                <>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Accessible forms, dialogs, and navigation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    SWR data patterns without useEffect fetches
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Motion as a usability aid, not decoration
                  </li>
                </>
              )}
              {active === "Backend" && (
                <>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Auth flows with sessions/JWT and secure cookies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Rate-limited endpoints and clear 4xx/5xx responses
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Observability via logs and simple metrics
                  </li>
                </>
              )}
              {active === "Tools" && (
                <>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Conventional commits and tidy branches
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Token-driven themes with Tailwind v4
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Unit + integration tests where valuable
                  </li>
                </>
              )}
            </ul>

            {/* toolbox chips */}
            <div className="mt-4">
              <p className="text-xs font-medium text-muted-foreground">Toolbox</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {active === "Frontend" && (
                  <>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">React</span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">Next.js</span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">
                      TypeScript
                    </span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">Tailwind</span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">
                      shadcn/ui
                    </span>
                  </>
                )}
                {active === "Backend" && (
                  <>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">Node.js</span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">Express</span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">
                      PostgreSQL
                    </span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">MongoDB</span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">Auth</span>
                  </>
                )}
                {active === "Tools" && (
                  <>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">
                      Git/GitHub
                    </span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">CI</span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">Testing</span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">
                      Design tokens
                    </span>
                    <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs">Docs</span>
                  </>
                )}
              </div>
            </div>

            {/* quick stats */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md border border-border/60 bg-muted/30 p-2">
                <div className="text-xs text-muted-foreground">Experience</div>
                <div className="text-sm font-semibold text-foreground">2+ yrs</div>
              </div>
              <div className="rounded-md border border-border/60 bg-muted/30 p-2">
                <div className="text-xs text-muted-foreground">Projects</div>
                <div className="text-sm font-semibold text-foreground">15+</div>
              </div>
              <div className="rounded-md border border-border/60 bg-muted/30 p-2">
                <div className="text-xs text-muted-foreground">Focus</div>
                <div className="text-sm font-semibold text-foreground">
                  {active === "Frontend" ? "UI/UX" : active === "Backend" ? "APIs" : "DX"}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skill rows */}
          <div className="grid gap-3">
            {items.map((s, i) => (
              <motion.div
                key={`${s.name}-${i}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="rounded-lg border border-border/60 bg-muted/30 p-3"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <ProgressRow percent={s.level} className="mt-2" />
                {s.tag ? (
                  <span className="mt-2 inline-flex rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    {s.tag}
                  </span>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CategoryButton({
  label,
  active,
  onClick,
}: {
  label: CategoryKey
  active: CategoryKey
  onClick: () => void
}) {
  const isActive = active === label
  return (
    <Button
      type="button"
      onClick={onClick}
      variant={isActive ? "default" : "secondary"}
      className={cn(
        "rounded-md px-3 py-1 text-sm transition-all duration-200 hover:scale-105", 
        !isActive && "bg-transparent text-foreground hover:bg-muted"
      )}
      role="tab"
      aria-selected={isActive}
      aria-controls={`${label.toLowerCase()}-skills`}
      tabIndex={isActive ? 0 : -1}
      aria-label={`Show ${label} skills`}
    >
      {label}
    </Button>
  )
}

function ProgressRow({ percent, className }: { percent: number; className?: string }) {
  return (
    <div
      className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Skill level"
    >
      <div className="h-full bg-primary" style={{ width: `${Math.max(0, Math.min(100, percent))}%` }} />
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-balance text-2xl font-semibold md:text-3xl"
      >
        Skills
      </motion.h2>

      <EnhancedSkills />
    </section>
  )
}
