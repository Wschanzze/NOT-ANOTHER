"use client"

import Link from "next/link"
import Image from "next/image"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Navbar } from "@/components/navbar"

interface CapabilidadLayoutProps {
  titulo: string
  subtitulo: string
  descripcion: string
  puntos: { titulo: string; descripcion: string }[]
  etiqueta: string
  children?: React.ReactNode
}

export function CapabilidadLayout({
  titulo,
  subtitulo,
  descripcion,
  puntos,
  etiqueta,
  children,
}: CapabilidadLayoutProps) {
  // Children support for page-specific extra sections
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Animated background lines */}
      <div className="fixed inset-0 z-0 w-screen h-screen pointer-events-none">
        <div className="bg-lines-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2269"
            height="2108"
            viewBox="0 0 2269 2108"
            fill="none"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M510.086 0.543457L507.556 840.047C506.058 1337.18 318.091 1803.4 1.875 2094.29"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-1"
            />
            <path
              d="M929.828 0.543457L927.328 829.877C925.809 1334 737.028 1807.4 418.435 2106"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-2"
            />
            <path
              d="M1341.9 0.543457L1344.4 829.876C1345.92 1334 1534.7 1807.4 1853.29 2106"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-3"
            />
            <path
              d="M1758.96 0.543457L1761.49 840.047C1762.99 1337.18 1950.96 1803.4 2267.17 2094.29"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-4"
            />
            <path opacity="0.2" d="M929.828 0.543457L927.328 829.877C925.809 1334 737.028 1807.4 418.435 2106" stroke="white" strokeWidth="1" strokeMiterlimit="10" />
            <path opacity="0.2" d="M510.086 0.543457L507.556 840.047C506.058 1337.18 318.091 1803.4 1.875 2094.29" stroke="white" strokeWidth="1" strokeMiterlimit="10" />
            <path opacity="0.2" d="M1758.96 0.543457L1761.49 840.047C1762.99 1337.18 1950.96 1803.4 2267.17 2094.29" stroke="white" strokeWidth="1" strokeMiterlimit="10" />
            <path opacity="0.2" d="M1341.9 0.543457L1344.4 829.876C1345.92 1334 1534.7 1807.4 1853.29 2106" stroke="white" strokeWidth="1" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-40 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5100fd]/50 bg-[#5100fd]/10 text-[#a78bfa] text-sm mb-8 animate-fade-in">
          {etiqueta}
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.1] animate-fade-in-up text-balance max-w-4xl">
          {titulo}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-6 animate-fade-in-up animation-delay-200 max-w-2xl">
          {subtitulo}
        </p>
        <p className="text-base text-zinc-500 mb-20 animate-fade-in-up animation-delay-400 max-w-2xl leading-relaxed">
          {descripcion}
        </p>

        {/* Detail cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {puntos.map((punto, i) => (
            <div key={i} className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-950 rounded-xl p-8">
                <div className="w-8 h-px bg-[#5100fd] mb-6" />
                <h3 className="text-xl font-light mb-3 text-white">{punto.titulo}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{punto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra page-specific sections */}
        {children}

        {/* CTA bottom */}
        <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50">
          <div className="flex-1">
            <h3 className="text-2xl font-light mb-2">¿Listo para empezar?</h3>
            <p className="text-zinc-400 text-sm">Hablemos sobre cómo podemos ayudarte a escalar tu negocio.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-full bg-[#5100fd] hover:bg-[#6610ff] text-white text-sm font-medium transition-all duration-500 hover:scale-105"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </main>
  )
}
