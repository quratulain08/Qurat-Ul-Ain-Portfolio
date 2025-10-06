import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, DM_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { SiteNavbar } from "@/components/site-navbar"
import ScrollProgress from "@/components/scroll-progress"
import { SiteFooter } from "@/components/site-footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans", // maps to --font-sans in globals.css
})
const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono", // maps to --font-mono in globals.css
})

export const metadata: Metadata = {
  title: "Quratulain Bangash — Portfolio",
  description: "A modern, elegant portfolio built with React, TailwindCSS, ShadCN/UI, and Framer Motion.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
      <body className="font-sans">
        <ScrollProgress />
        <SiteNavbar />
        <Suspense fallback={null}>{children}</Suspense>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
