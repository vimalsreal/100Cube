import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "100Cube",
  description:
    "We help 3 legendary, idea-stage founders hit $1M ARR each year. Get a world-class execution team of Designer, Developer, GTM Hacker for a simple monthly fee + 5% equity, only after $1M is achieved.",
  keywords:
    "startup accelerator, Y Combinator alternative, bootstrapped founders, pre-seed funding, startup studio, SaaS accelerator, fintech startup, edtech accelerator, healthtech startup, India startup program, Singapore startup accelerator, Europe startup studio, non-technical founders, $1M ARR",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'