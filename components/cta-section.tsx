"use client"

import { Button } from "@/components/ui/button"
import { CircleArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative z-20 py-40 border-t border-zinc-800/60 overflow-hidden">
      {/* Dramatic radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(81,0,253,0.2) 0%, rgba(132,204,22,0.1) 40%, transparent 70%)",
        }}
      />

      {/* Animated particles or subtle gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(132,204,22,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8">
        <p className="text-xs uppercase tracking-widest text-zinc-500 animate-text-shimmer">Hablemos</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white text-balance max-w-4xl leading-tight">
          ¿Listo para transformar tu negocio con tecnología?
        </h2>
        <p className="text-zinc-400 max-w-xl leading-relaxed text-lg">
          Agenda una sesión gratuita de diagnóstico. Sin compromisos, sin ventas agresivas, solo una conversación honesta sobre cómo podemos ayudarte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            size="lg"
            className="group bg-[#5100fd] hover:bg-[#6610ff] text-white px-10 py-7 text-base rounded-full transition-all duration-[650ms] hover:scale-[1.02] shadow-lg shadow-[#5100fd]/25"
          >
            Agendar diagnóstico gratuito
            <CircleArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:rotate-90" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 text-white bg-transparent hover:bg-zinc-900 px-10 py-7 text-base rounded-full transition-all duration-300 hover:border-zinc-600"
          >
            Ver capacidades
          </Button>
        </div>
      </div>
    </section>
  )
}
