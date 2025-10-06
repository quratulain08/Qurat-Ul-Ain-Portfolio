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
  title: {
    default: "Quratulain Bangash - Full Stack Developer",
    template: "%s | Quratulain Bangash"
  },
  description: "Full‑stack developer focused on building elegant, accessible, and performant experiences with React, Next.js, and modern tooling. Specializing in MERN Stack, Next.js, and AWS.",
  keywords: [
    "Full Stack Developer",
    "React Developer", 
    "Next.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "AWS Developer",
    "MongoDB Developer",
    "Node.js Developer"
  ],
  authors: [{ name: "Quratulain Bangash", url: "https://anniebangash497@gmail.com" }],
  creator: "Quratulain Bangash",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Quratulain Bangash Portfolio",
    title: "Quratulain Bangash - Full Stack Developer",
    description: "Full‑stack developer focused on building elegant, accessible, and performant experiences with React, Next.js, and modern tooling.",
    images: [
      {
        url: "/assets/myphoto.jpg",
        width: 1200,
        height: 630,
        alt: "Quratulain Bangash - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quratulain Bangash - Full Stack Developer",
    description: "Full‑stack developer focused on building elegant, accessible, and performant experiences with React, Next.js, and modern tooling.",
    images: ["/assets/myphoto.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          defaultTheme="light"
          enableSystem={false}
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