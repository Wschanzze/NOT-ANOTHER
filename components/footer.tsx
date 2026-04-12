import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Navegación: [
    { label: "Inicio", href: "/" },
    { label: "IT", href: "/#it" },
    { label: "Metodología", href: "/#metodologia" },
    { label: "Capacidades", href: "/#capacidades" },
  ],
  Servicios: [
    { label: "Soluciones Full-Stack", href: "/capacidades/soluciones-full-stack" },
    { label: "Flujos de IA", href: "/capacidades/flujos-ia" },
    { label: "Marketing", href: "/tu-marca" },
    { label: "Estrategia de Marca", href: "/tu-marca#estrategia" },
  ],
  Empresa: [
    { label: "Equipo", href: "/equipo" },
    { label: "Nuestra Visión", href: "/equipo#vision" },
    { label: "Casos de Éxito", href: "/#casos" },
    { label: "Contacto", href: "/contact" },
  ],
}

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-zinc-800/60 bg-black">

      {/* CTA Strip */}
      <div className="border-b border-zinc-800/60">
        <div className="container mx-auto px-6 lg:px-12 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2 animate-text-shimmer">¿Listo para crecer?</p>
            <h3 className="text-2xl md:text-3xl font-light text-white">Hablemos de tu proyecto</h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#84cc16]/60 bg-[#84cc16]/15 text-[#a3e635] text-sm font-medium hover:bg-[#84cc16]/25 hover:border-[#84cc16] transition-all duration-300 group shrink-0"
          >
            Agendar llamada
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/logo.png"
                alt="Not Another"
                width={140}
                height={36}
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
              Consultoría tecnológica para organizaciones que quieren crecer de forma inteligente.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-zinc-500 text-xs">Abiertos a nuevos clientes</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest text-zinc-500">{category}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            &copy; {currentYear} Not Another. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacidad" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Términos
            </Link>
            <Link href="/cookies" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
