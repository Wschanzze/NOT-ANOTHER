"use client"

import { ChevronDown, Calculator, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const items = [
  { href: "/capacidades/soluciones-contables", icon: Calculator, label: "Soluciones Contables", desc: "Organización, control y cumplimiento financiero" },
  { href: "/capacidades/finanzas-estrategicas", icon: TrendingUp, label: "Finanzas Estratégicas", desc: "Flujo de caja y valuación de proyectos" },
]

export function GestionDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-4 py-2 text-white hover:text-zinc-300 transition-colors flex items-center gap-2">
        Gestion
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-72 z-50">
          <div className="bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b border-zinc-800/60">
              <p className="text-xs uppercase tracking-widest text-zinc-600">Gestión Empresarial</p>
            </div>
            {/* Items */}
            {items.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#5100fd]/10 border border-[#5100fd]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#5100fd]/20 transition-colors">
                    <Icon className="w-4 h-4 text-[#a78bfa]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{item.label}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              )
            })}
            {/* Footer link */}
            <div className="border-t border-zinc-800/60 px-4 py-3">
              <Link
                href="/capacidades/soluciones-contables"
                className="text-xs text-[#a3e635] hover:text-[#84cc16] transition-colors flex items-center gap-1 group"
                onClick={() => setIsOpen(false)}
              >
                Ver servicios de gestión
                <ChevronDown className="w-3 h-3 -rotate-90 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
