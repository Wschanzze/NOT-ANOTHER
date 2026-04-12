"use client"

import { useEffect, useRef, useState } from "react"

const metrics = [
  { value: 98, suffix: "%", label: "Tasa de satisfacción de clientes" },
  { value: 3, suffix: "x", label: "Más rápido que el desarrollo tradicional" },
  { value: 120, suffix: "+", label: "Proyectos entregados con éxito" },
  { value: 40, suffix: "%", label: "Reducción promedio de costos operativos" },
]

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])

  return count
}

function MetricCard({ value, suffix, label, active, index }: { value: number; suffix: string; label: string; active: boolean; index: number }) {
  const count = useCountUp(value, 1800, active)
  return (
    <div
      className="flex flex-col gap-3 px-8 py-12 border-r border-zinc-800/60 last:border-r-0 relative group transition-all duration-500"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5100fd]/0 to-[#5100fd]/0 group-hover:from-[#5100fd]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
      <div className="text-5xl md:text-7xl font-light text-white tracking-tight">
        {count}<span className="text-[#a3e635] ml-0.5">{suffix}</span>
      </div>
      <p className="text-zinc-500 text-sm leading-relaxed max-w-[160px]">{label}</p>
    </div>
  )
}

export function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative z-20 border-y border-zinc-800/60">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5100fd]/5 via-transparent to-[#84cc16]/5 pointer-events-none" />
      <div className="container mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
