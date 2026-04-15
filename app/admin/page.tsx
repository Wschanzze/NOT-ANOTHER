import { readJSON } from "@/lib/data"
import Link from "next/link"
import { Users, Briefcase, ArrowRight } from "lucide-react"

interface TeamMember { id: string }
interface Case { id: string }

export default function AdminDashboard() {
  const team = readJSON<TeamMember[]>("team.json")
  const cases = readJSON<Case[]>("cases.json")

  const stats = [
    {
      label: "Miembros del equipo",
      value: team.length,
      icon: Users,
      href: "/admin/equipo",
      description: "Gestioná los perfiles del equipo",
    },
    {
      label: "Casos de estudio",
      value: cases.length,
      icon: Briefcase,
      href: "/admin/casos",
      description: "Editá y agregá casos de éxito",
    },
  ]

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Bienvenido</p>
        <h1 className="text-3xl font-light text-white">Panel de administración</h1>
        <p className="text-zinc-500 text-sm mt-2">
          Desde aquí podés editar el contenido de la página de forma rápida y sencilla.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {stats.map((stat) => (
          <Link
            key={stat.href}
            href={stat.href}
            className="group relative rounded-2xl border border-zinc-800 p-6 hover:border-zinc-600 bg-zinc-950 transition-colors flex flex-col gap-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#5100fd]/10 border border-[#5100fd]/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-[#a78bfa]" />
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <p className="text-3xl font-light text-white">{stat.value}</p>
              <p className="text-sm font-medium text-zinc-300 mt-1">{stat.label}</p>
              <p className="text-xs text-zinc-600 mt-0.5">{stat.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Accesos rápidos</p>
        <div className="flex flex-col gap-2">
          <Link
            href="/admin/equipo"
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-zinc-800/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-zinc-600" />
              <span className="text-sm text-zinc-300">Agregar nuevo miembro al equipo</span>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
          </Link>
          <Link
            href="/admin/casos"
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-zinc-800/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-zinc-600" />
              <span className="text-sm text-zinc-300">Agregar nuevo caso de estudio</span>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  )
}
