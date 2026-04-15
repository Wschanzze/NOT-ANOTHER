"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Users, Briefcase, LayoutDashboard, LogOut, ExternalLink } from "lucide-react"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/equipo", label: "Equipo", icon: Users, exact: false },
  { href: "/admin/casos", label: "Casos de Estudio", icon: Briefcase, exact: false },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <aside className="w-60 shrink-0 flex flex-col bg-zinc-950 border-r border-zinc-800 h-screen sticky top-0">
      {/* Brand */}
      <div className="px-6 py-6 border-b border-zinc-800">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Panel Admin</p>
        <p className="text-white font-medium">Not Another</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                isActive
                  ? "bg-[#5100fd]/15 text-white border border-[#5100fd]/30"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60"
              }`}
            >
              <item.icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#a78bfa]" : ""}`} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-zinc-800 flex flex-col gap-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors"
        >
          <ExternalLink className="w-4 h-4 shrink-0" />
          Ver sitio
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-500 hover:text-red-400 hover:bg-red-950/20 transition-colors w-full text-left"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}
