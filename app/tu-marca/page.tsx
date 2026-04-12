"use client"

import Link from "next/link"
import Image from "next/image"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CircleArrowRight, Target, Palette, TrendingUp, Layers, CheckCircle2 } from "lucide-react"
import { SplineScene } from "@/components/spline-scene"

export default function TuMarca() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 pt-48 pb-32 overflow-hidden">
        {/* Radial glow background */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(81,0,253,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8">
          <span className="text-xs uppercase tracking-widest text-zinc-500 border border-zinc-800 px-4 py-2 rounded-full">
            Consultoría de Marca
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-balance max-w-5xl leading-[0.95]">
            Tu marca es tu activo más valioso
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed text-balance">
            Potenciamos marcas que quieren ser recordadas. Estrategia, identidad y marketing alineados para que tu marca transmita exactamente lo que eres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="group bg-[#5100fd] hover:bg-[#6610ff] text-white px-8 py-6 text-base rounded-full transition-all duration-[650ms] hover:scale-[1.02]"
            >
              Potencia tu marca
              <CircleArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:rotate-90" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-white bg-transparent hover:bg-zinc-900 px-8 py-6 text-base rounded-full transition-all duration-300"
            >
              Ver casos de éxito
            </Button>
          </div>
        </div>
      </section>

      {/* Spline 3D brand section */}
      <section className="relative z-10 container mx-auto px-6 lg:px-12 mb-24">
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800" style={{ height: "60vh" }}>
          <SplineScene
            scene="https://prod.spline.design/qflZm3CuXBKJXdIQ/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>

      {/* Services grid */}
      <section id="estrategia" className="relative z-10 py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Lo que hacemos</p>
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance flex-1">
              Servicios diseñados para hacer crecer tu marca
            </h2>
            <p className="md:max-w-sm text-zinc-400 leading-relaxed text-sm md:pb-2">
              Cada servicio está pensado para construir una marca coherente, diferenciada y que genera confianza en cada punto de contacto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div id="estrategia" className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative bg-zinc-950 rounded-xl p-8 flex flex-col gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#5100fd]/10 border border-[#5100fd]/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <h3 className="text-2xl font-light text-white">Estrategia de Marca</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Definimos el posicionamiento, la propuesta de valor única y el territorio de marca que te diferencia de la competencia. Una estrategia sólida es la base de todo lo que sigue.
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                  {["Análisis competitivo", "Propuesta de valor", "Arquetipos de marca", "Mapa de posicionamiento"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#5100fd] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div id="rebranding" className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative bg-zinc-950 rounded-xl p-8 flex flex-col gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#5100fd]/10 border border-[#5100fd]/20 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <h3 className="text-2xl font-light text-white">Rebranding</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Evolucionamos tu marca sin perder su esencia. Ya sea una actualización visual o una transformación completa, garantizamos coherencia y continuidad en el proceso.
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                  {["Auditoría de marca", "Rediseño de identidad", "Guía de voz y tono", "Plan de transición"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#5100fd] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div id="marketing" className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative bg-zinc-950 rounded-xl p-8 flex flex-col gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#5100fd]/10 border border-[#5100fd]/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <h3 className="text-2xl font-light text-white">Marketing Estratégico</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Diseñamos planes de marketing que nacen desde el ADN de tu marca. Cada campaña y canal seleccionado responde a un objetivo claro y medible.
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                  {["Plan de contenidos", "Estrategia de canales", "Campañas integradas", "KPIs y medición"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#5100fd] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div id="identidad" className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative bg-zinc-950 rounded-xl p-8 flex flex-col gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#5100fd]/10 border border-[#5100fd]/20 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <h3 className="text-2xl font-light text-white">Identidad Visual</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Creamos sistemas visuales completos que comunican con precisión quién eres. Desde el logo hasta el manual de marca, todo pensado para escalar.
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                  {["Logo y variantes", "Paleta y tipografía", "Sistema de íconos", "Manual de marca"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#5100fd] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="relative z-10 py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 h-[400px]">
              <Image
                src="/images/marca-filosofia.jpg"
                alt="Una marca que transmite"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
              <div className="absolute inset-0 bg-[#5100fd]/20 mix-blend-multiply" />
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-xs uppercase tracking-widest text-zinc-500">Nuestra filosofía</p>
              <h2 className="text-4xl md:text-5xl font-light text-balance leading-tight">
                Una marca que transmite es una marca que vende
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-zinc-400 leading-relaxed">
                  Creemos que el branding no es decoración. Es la diferencia entre una empresa que sobrevive y una que lidera. Cada decisión visual, cada palabra y cada experiencia construye —o destruye— la percepción de tu marca.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Trabajamos con un enfoque estratégico primero: entendemos tu negocio, tu mercado y tu cliente antes de diseñar una sola pieza. El resultado es una marca coherente, auténtica y construida para durar.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { value: "3x", label: "Mayor reconocimiento de marca" },
                  { value: "68%", label: "Más conversión post-rebranding" },
                  { value: "40+", label: "Marcas transformadas" },
                  { value: "100%", label: "Alineación estratégica" },
                ].map((stat) => (
                  <div key={stat.label} className="border border-zinc-800 rounded-xl p-4">
                    <p className="text-3xl font-light text-white mb-1">{stat.value}</p>
                    <p className="text-zinc-600 text-xs leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Proceso</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance mb-16 max-w-2xl">
            De la estrategia a la identidad en 4 pasos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Descubrimiento", desc: "Inmersión profunda en tu negocio, competencia y audiencia para entender dónde estás y a dónde quieres ir.", image: "/images/marca-descubrimiento.jpg" },
              { num: "02", title: "Estrategia", desc: "Definimos el posicionamiento, la personalidad de marca y los mensajes clave que guiarán todas las decisiones creativas.", image: "/images/marca-estrategia.jpg" },
              { num: "03", title: "Identidad", desc: "Traducimos la estrategia en un sistema visual y verbal coherente: logo, colores, tipografía, voz y tono.", image: "/images/marca-identidad.jpg" },
              { num: "04", title: "Activación", desc: "Implementamos la marca en todos los puntos de contacto y te entregamos las herramientas para mantenerla viva.", image: "/images/marca-activacion.jpg" },
            ].map((step) => (
              <div key={step.num} className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-950 rounded-xl overflow-hidden h-full flex flex-col">
                  {/* Image with gradient overlay — same style as methodology section */}
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-zinc-950" />
                    <div className="absolute inset-0 bg-[#5100fd]/20 mix-blend-multiply" />
                  </div>
                  {/* Content */}
                  <div className="p-8 flex flex-col gap-6 flex-1">
                    <span className="text-5xl font-light text-zinc-800">{step.num}</span>
                    <div>
                      <h3 className="text-xl font-light text-white mb-3">{step.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
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
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8">
          <p className="text-xs uppercase tracking-widest text-zinc-500">Hablemos</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white text-balance max-w-4xl">
            ¿Listo para que tu marca sea inolvidable?
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed">
            Agenda una sesión de diagnóstico gratuita. Analizamos tu marca actual y te mostramos las oportunidades de mejora más importantes.
          </p>
          <Button
            size="lg"
            className="group bg-[#5100fd] hover:bg-[#6610ff] text-white px-8 py-6 text-base rounded-full transition-all duration-[650ms] hover:scale-[1.02]"
          >
            Agendar sesión gratuita
            <CircleArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:rotate-90" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
