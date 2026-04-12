"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { createPortal } from "react-dom"

const links = [
  { label: "IT", href: "#it", isHash: true },
  { label: "Marketing", href: "/tu-marca", isHash: false },
  { label: "Gestión", href: "#gestion", isHash: true },
  { label: "Equipo", href: "/equipo", isHash: false },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const handleLinkClick = useCallback((link: { href: string; isHash: boolean }) => {
    setIsOpen(false)
    if (link.isHash) {
      // If already on home, just scroll. Otherwise navigate then scroll.
      if (pathname === "/") {
        setTimeout(() => {
          const el = document.querySelector(link.href)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else {
        router.push("/" + link.href)
        setTimeout(() => {
          const el = document.querySelector(link.href)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }, 400)
      }
    }
  }, [pathname, router])

  const overlay = isOpen ? (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800/60">
        <span className="text-zinc-400 text-sm uppercase tracking-widest">Menu</span>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 text-white"
          aria-label="Cerrar menú"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col flex-1 px-6 pt-4">
        {links.map((link) => (
          link.isHash ? (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link)}
              className="w-full text-left py-5 text-2xl font-light border-b border-zinc-800/60 text-zinc-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link)}
              className={`w-full text-left py-5 text-2xl font-light border-b border-zinc-800/60 transition-colors duration-200 ${
                pathname === link.href ? "text-white" : "text-zinc-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          )
        ))}
      </nav>

      {/* CTA */}
      <div className="px-6 pb-10 pt-6">
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center w-full py-4 rounded-full border border-[#5100fd] bg-[#5100fd]/30 text-white text-base font-medium hover:bg-[#5100fd]/50 transition-all duration-300"
        >
          Contacto
        </Link>
      </div>
    </div>
  ) : null

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:text-zinc-300 transition-colors"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  )
}
