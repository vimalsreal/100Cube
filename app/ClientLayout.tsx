"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Add SF Pro Display font configuration
const sfProDisplay = {
  fontFamily: [
    "SF Pro Display",
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ].join(","),
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <style jsx global>{`
          .sf-pro-display {
            font-family: ${sfProDisplay.fontFamily};
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}
