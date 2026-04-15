"use client"

import { ArrowRight } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface Case {
  id: string
  tag: string
  title: string
  description: string
  metrics: string[]
}

export function CasesSectionClient({ cases }: { cases: Case[] }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative z-20 py-32 border-t border-zinc-800/60">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 animate-text-shimmer">Casos de éxito</p>
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance flex-1">
            Impacto medible en cada proyecto
          </h2>
          <p className="md:max-w-sm text-zinc-400 leading-relaxed text-sm md:pb-2">
            Resultados reales de empresas que confiaron en nosotros para transformar sus operaciones.
          </p>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-8">
          {cases.map((c, i) => (
            <div
              key={c.id}
              className={`relative rounded-2xl border border-zinc-800/60 p-1 transition-all duration-700 card-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <GlowingEffect
                blur={0}
                borderWidth={1}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8 flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Left: tag */}
                <div className="shrink-0 lg:w-48 flex flex-col gap-3">
                  <span className="text-xs uppercase tracking-widest text-[#a3e635] border border-[#84cc16]/30 bg-[#84cc16]/5 px-3 py-1.5 rounded-full w-fit">
                    {c.tag}
                  </span>
                </div>

                {/* Center: content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-white mb-3">{c.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">{c.description}</p>
                </div>

                {/* Right: metrics */}
                <div className="shrink-0 flex flex-row lg:flex-col gap-3 lg:gap-2 lg:items-end">
                  {c.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs text-zinc-400 border border-zinc-800 bg-zinc-900/50 rounded-full px-4 py-1.5 whitespace-nowrap"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <ArrowRight className="shrink-0 w-5 h-5 text-zinc-600 hidden lg:block transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
