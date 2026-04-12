"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Button } from "@/components/ui/button"
import { CircleArrowRight, Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Mateo Rodríguez",
    role: "CEO & Fundador",
    description:
      "Visionario detrás de Not Another. Con más de 10 años de experiencia liderando transformaciones digitales en empresas de LATAM, Mateo combina visión estratégica con ejecución tecnológica para construir soluciones que realmente impactan.",
    skills: ["Estrategia de Negocio", "Liderazgo Ejecutivo", "Transformación Digital", "IA Aplicada"],
    image: "/images/team-ceo.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Lucas Fernández",
    role: "CTO & Arquitecto de Soluciones",
    description:
      "El cerebro técnico del equipo. Lucas diseña arquitecturas escalables y supervisa el desarrollo de todas las soluciones digitales. Especialista en sistemas distribuidos, automatizaciones y modelos de IA a medida.",
    skills: ["Arquitectura de Software", "IA & Machine Learning", "DevOps", "Cloud Infrastructure"],
    image: "/images/team-cto.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Valentina Torres",
    role: "Directora Creativa & Brand Lead",
    description:
      "Valentina transforma ideas en identidades visuales memorables. Con formación en diseño y branding estratégico, lidera todos los proyectos de identidad y comunicación visual asegurando coherencia y diferenciación en cada pieza.",
    skills: ["Branding Estratégico", "Diseño UI/UX", "Identidad Visual", "Dirección de Arte"],
    image: "/images/team-design.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sofía Méndez",
    role: "Estratega de Negocios & Consultora Senior",
    description:
      "Sofía conecta los puntos entre los datos, el mercado y las personas. Experta en análisis competitivo y diseño de estrategias go-to-market, acompaña a los clientes desde el diagnóstico hasta la implementación.",
    skills: ["Consultoría Estratégica", "Análisis de Mercado", "Go-to-Market", "Gestión de Proyectos"],
    image: "/images/team-strategy.jpg",
    linkedin: "#",
    twitter: "#",
  },
]

const values = [
  {
    title: "Impacto sobre proceso",
    description: "No nos enamoramos de los frameworks. Nos enamoramos de los resultados. Cada decisión que tomamos está orientada a crear valor real y medible.",
  },
  {
    title: "Transparencia radical",
    description: "Comunicamos lo que funciona y lo que no. Nuestros clientes siempre saben exactamente en qué etapa están y qué viene después.",
  },
  {
    title: "Velocidad con criterio",
    description: "Somos rápidos, pero no impulsivos. Ejecutamos con agilidad sin sacrificar calidad ni coherencia estratégica.",
  },
]

export default function Equipo() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 pt-40 sm:pt-48 pb-24 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(81,0,253,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center gap-6 sm:gap-8">
          <span className="text-xs uppercase tracking-widest text-zinc-500 border border-zinc-800 px-4 py-2 rounded-full">
            Quiénes somos
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-balance max-w-5xl leading-[1.0]">
            El equipo detrás de lo que no es ordinario
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-balance">
            Somos un equipo multidisciplinario de tecnólogos, estrategas y creativos con una obsesión en común: construir soluciones que realmente transformen negocios.
          </p>
        </div>
      </section>

      {/* Vision section */}
      <section className="relative z-10 py-24 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col gap-8">
              <p className="text-xs uppercase tracking-widest text-zinc-500">Nuestra Visión</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-balance leading-tight">
                Ser la consultora de referencia para empresas que no quieren ser otra más
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Vivimos en una era donde la tecnología avanza más rápido que la mayoría de las organizaciones. Nuestra misión es cerrar esa brecha: ayudar a empresas reales a adoptar tecnología real de manera inteligente, ágil y con foco en el negocio.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                No creemos en soluciones genéricas. Cada cliente tiene una realidad distinta, y eso exige un equipo que escuche antes de proponer, que entienda antes de ejecutar y que mida antes de declarar éxito.
              </p>
              <Link href="/contact">
                <Button className="group bg-[#5100fd] hover:bg-[#6610ff] text-white px-8 py-6 text-base rounded-full transition-all duration-500 hover:scale-[1.02] w-fit">
                  Trabajemos juntos
                  <CircleArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:rotate-90" />
                </Button>
              </Link>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4">
              {values.map((value) => (
                <div key={value.title} className="relative rounded-2xl border border-zinc-800 p-3">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-zinc-950 rounded-xl p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#5100fd] shrink-0" />
                      <h3 className="text-base font-medium text-white">{value.title}</h3>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed pl-5">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="relative z-10 py-24 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">El Equipo</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-balance">
                Personas que hacen posible lo extraordinario
              </h2>
            </div>
            <p className="md:max-w-sm text-zinc-400 leading-relaxed text-sm md:pb-2">
              Cada integrante aporta una perspectiva única. Juntos formamos un equipo complementario, ágil y comprometido con el éxito de cada proyecto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="relative rounded-2xl border border-zinc-800 p-3 group">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-950 rounded-xl overflow-hidden flex flex-col h-full">
                  {/* Avatar image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-zinc-950" />
                    <div className="absolute inset-0 bg-[#5100fd]/10 mix-blend-multiply" />
                    {/* Social icons overlay on hover */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={member.linkedin} className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm border border-zinc-700 flex items-center justify-center hover:border-[#5100fd] transition-colors">
                        <Linkedin className="w-3.5 h-3.5 text-white" />
                      </a>
                      <a href={member.twitter} className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm border border-zinc-700 flex items-center justify-center hover:border-[#5100fd] transition-colors">
                        <Twitter className="w-3.5 h-3.5 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div>
                      <h3 className="text-lg font-medium text-white leading-tight">{member.name}</h3>
                      <p className="text-[#a78bfa] text-sm mt-1">{member.role}</p>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed">{member.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-full border border-zinc-800 text-zinc-400 bg-zinc-900/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-32 border-t border-zinc-800 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(81,0,253,0.18) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center gap-8">
          <p className="text-xs uppercase tracking-widest text-zinc-500">Sumate</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white text-balance max-w-4xl">
            ¿Queres ser parte de algo diferente?
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed">
            Siempre estamos buscando personas que compartan nuestra mentalidad. Si sos apasionado por la tecnología y querés trabajar en proyectos que importen, hablemos.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="group bg-[#5100fd] hover:bg-[#6610ff] text-white px-8 py-6 text-base rounded-full transition-all duration-500 hover:scale-[1.02]"
            >
              Contactanos
              <CircleArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:rotate-90" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
