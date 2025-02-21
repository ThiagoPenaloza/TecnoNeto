import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TecnoNeto - Assistência Técnica em Informática",
  description:
    "TecnoNeto - Assistência técnica especializada em computadores, formatação, instalação do Windows e montagem de PCs",
  keywords: "assistência técnica, computadores, formatação, windows, montagem de pc",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

