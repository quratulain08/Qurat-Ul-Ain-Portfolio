import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { ScrollTop } from "@/components/sections/scroll-top"
import { ScrollProgress } from "@/components/scroll-progress"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quratulain Bangash - Full Stack Developer",
  description: "Full‑stack developer focused on building elegant, accessible, and performant experiences with React, Next.js, and modern tooling.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <SiteNavbar />
          <main className="min-h-screen">
            {children}
          </main>
          <SiteFooter />
          <ScrollTop />
        </ThemeProvider>
      </body>
    </html>
  )
}