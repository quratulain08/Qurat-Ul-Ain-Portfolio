import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="mt-14s border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4  py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} • Built with Next.js + shadcn/ui</p>
        <nav className="flex items-center gap-4" aria-label="Footer">
          <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>
        {/* <div className="flex items-center gap-3">
          <a
            aria-label="Email me"
            href="mailto:you@example.com"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div> */}
      </div>
    </footer>
  )
}
