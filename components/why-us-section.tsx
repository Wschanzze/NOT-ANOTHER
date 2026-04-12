"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Zap, Shield, BrainCircuit, Users } from "lucide-react"

const reasons = [
  {
    icon: BrainCircuit,
    title: "Expertos en IA aplicada",
    description:
      "No vendemos hype. Implementamos inteligencia artificial donde realmente genera valor, con casos de uso probados en industrias reales.",
    accent: "violet",
  },
  {
    icon: Zap,
    title: "Velocidad de ejecución",
    description:
      "Pasamos de diagnóstico a producción en semanas, no en meses. Nuestra metodología ágil elimina la burocracia sin sacrificar la calidad.",
    accent: "lime",
  },
  {
    icon: Shield,
    title: "Enfoque en resultados",
    description:
      "Definimos métricas de éxito desde el día uno. No cobramos por horas, entregamos por resultados medibles y verificables.",
    accent: "lime",
  },
  {
    icon: Users,
    title: "Alineación estratégica",
    description:
      "Trabajamos como una extensión de tu equipo, entendiendo el contexto empresarial antes de escribir una sola línea de código.",
    accent: "violet",
  },
]

const industries = [
  "Fintech", "Manufactura", "Logística", "Salud", "Retail",
  "Educación", "Inmobiliaria", "Legal", "Seguros", "Energía",
]

export function WhyUsSection() {
  return (
    <section className="relative z-20 py-32 border-t border-zinc-800/60">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#84cc16]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 animate-text-shimmer">Por qué elegirnos</p>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance flex-1">
            Tecnología que resuelve problemas de negocio reales
          </h2>
          <p className="lg:max-w-xs text-zinc-400 leading-relaxed text-sm lg:pb-2">
            Combinamos profundidad técnica con visión empresarial para entregar soluciones que importan.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason) => {
            const Icon = reason.icon
            const isLime = reason.accent === "lime"
            return (
              <div key={reason.title} className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
                <GlowingEffect
                  blur={0}
                  borderWidth={1}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8 flex gap-6">
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center border ${isLime ? "border-[#84cc16]/30 bg-[#84cc16]/5" : "border-[#5100fd]/30 bg-[#5100fd]/5"}`}>
                    <Icon className={`w-6 h-6 ${isLime ? "text-[#a3e635]" : "text-[#5100fd]"}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white mb-2">{reason.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Industry ticker */}
        <div className="border-t border-zinc-800/60 pt-12">
          <p className="text-xs uppercase tracking-widest text-zinc-600 mb-6">Industrias que atendemos</p>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full border border-zinc-800/60 text-sm text-zinc-400 hover:border-[#84cc16]/40 hover:text-[#a3e635] hover:bg-[#84cc16]/5 transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
