"use client"

import Image from "next/image"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos en profundidad tu negocio, procesos actuales y objetivos estratégicos para identificar oportunidades de mejora y puntos de fricción.",
    image: "/images/methodology-diagnostico.jpg",
  },
  {
    number: "02",
    title: "Diseño de Solución",
    description:
      "Diseñamos una arquitectura tecnológica y un plan de acción adaptados a tu realidad operativa, priorizando el impacto y la viabilidad.",
    image: "/images/methodology-diseno.jpg",
  },
  {
    number: "03",
    title: "Implementación Ágil",
    description:
      "Ejecutamos el proyecto en sprints cortos con entregas continuas, permitiéndote ver resultados desde las primeras semanas.",
    image: "/images/methodology-implementacion.jpg",
  },
  {
    number: "04",
    title: "Medición y Escala",
    description:
      "Medimos el impacto real con métricas claras y escalamos las soluciones que funcionan, asegurando retorno sostenido en el tiempo.",
    image: "/images/methodology-medicion.jpg",
  },
]

export function MethodologySection() {
  return (
    <section className="relative z-20 py-32">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#5100fd]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 animate-text-shimmer">Nuestra Metodología</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance">
              Un proceso probado para resultados reales
            </h2>
          </div>
          <p className="md:max-w-sm text-zinc-400 leading-relaxed text-sm md:pb-2">
            Cada compromiso sigue un proceso estructurado que minimiza el riesgo y maximiza el valor entregado a tu organización.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
              <GlowingEffect
                blur={0}
                borderWidth={1}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col">
                {/* Image with black/violet blurred overlay */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Black gradient bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-zinc-950" />
                  {/* Violet color tint */}
                  <div className="absolute inset-0 bg-[#5100fd]/20 mix-blend-multiply" />
                </div>
                {/* Content */}
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <span className="text-6xl font-light tracking-tight animate-text-shimmer" style={{ color: '#3f3f46' }}>{step.number}</span>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">{step.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
