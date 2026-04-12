import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LenisProvider } from "@/components/lenis-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Webrenew — Agencia de Desarrollo Full-Stack",
  description: "Construimos aplicaciones personalizadas, automatizaciones y flujos de trabajo impulsados por IA",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
