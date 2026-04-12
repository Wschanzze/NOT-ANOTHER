"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SolutionsDropdown } from "./solutions-dropdown"
import { BrandDropdown } from "./brand-dropdown"
import { GestionDropdown } from "./gestion-dropdown"
import { MobileMenu } from "./mobile-menu"
import { Users } from "lucide-react"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("up")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
        setScrollDirection("up")
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setScrollDirection("down")
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-40 px-6 w-full max-w-7xl transition-all duration-700 ease-in-out ${
        isVisible ? "top-8 opacity-100 pointer-events-auto" : "-top-24 opacity-0 pointer-events-none"
      }`}
    >
      {/* Decorative animated line behind navbar */}
      <div className="absolute -inset-1 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="bg-gradient-to-r from-black/60 via-black/70 to-black/60 backdrop-blur-[120px] rounded-full px-4 md:px-8 py-3 flex items-center gap-4 md:gap-8 shadow-2xl border border-white/15 w-full animate-navbar-glow hover:animate-border-shine relative">
        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5" />

        {/* Logo */}
        <div className="flex items-center relative z-10 flex-shrink-0 contrast-125">
          <Link href="/">
            <Image src="/logo.png" alt="Not Another" width={160} height={40} priority className="h-7 md:h-9 w-auto transition-transform duration-300 hover:scale-105 brightness-110" />
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center justify-end gap-0 flex-1 relative z-10">
          {/* IT Dropdown */}
          <SolutionsDropdown />
          
          {/* Marketing Dropdown */}
          <BrandDropdown />

          {/* Gestion Dropdown */}
          <GestionDropdown />
          
          {/* Team Link */}
          <Link
            href="/equipo"
            className="px-5 py-2.5 text-sm text-white hover:text-zinc-200 transition-colors duration-200 rounded-full font-medium"
          >
            Equipo
          </Link>
          
          {/* Theme Toggle and Contact */}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-zinc-700">
            <Link
              href="/contact"
              className="relative px-[18px] py-[10px] rounded-full border border-[#5100fd] bg-[#5100fd]/50 text-white font-medium hover:scale-105 transition-all duration-500 group animate-button-glow overflow-hidden"
            >
              {/* Shine effect on button */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Contacto</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center justify-end flex-1 relative z-[60]">
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
