"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { CircleArrowRight, ArrowRight } from "lucide-react"
import { useEffect, useState, Suspense, lazy } from "react"
import { Navbar } from "@/components/navbar"
import { MetricsSection } from "@/components/metrics-section"
import { MethodologySection } from "@/components/methodology-section"
import { CasesSection } from "@/components/cases-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import Link from "next/link"

const Spline = lazy(() => import("@splinetool/react-spline"))

const CYCLING_WORDS = ["empresa", "idea", "proyecto", "startup", "marca", "producto"]

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const progress = Math.min(scrollY / viewportHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length)
        setVisible(true)
      }, 300)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  // Calculate opacity and scale based on scroll
  const linesOpacity = 1 - scrollProgress
  const linesScale = 1 - scrollProgress * 0.3 // Scale from 1 to 0.7

  const scrollToCapabilities = () => {
    const capabilitiesSection = document.getElementById("capabilities")
    if (capabilitiesSection) {
      capabilitiesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative min-h-[200vh] bg-black text-white overflow-hidden">
      <Navbar />

      <div
        className="fixed inset-0 z-0 w-screen h-screen pointer-events-none transition-all duration-100"
        style={{
          opacity: linesOpacity,
          transform: `scale(${linesScale})`,
        }}
      >
        <div className="bg-lines-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2269"
            height="2108"
            viewBox="0 0 2269 2108"
            fill="none"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Animated Purple Lines */}
            <path
              d="M510.086 0.543457L507.556 840.047C506.058 1337.18 318.091 1803.4 1.875 2094.29"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-1"
            />
            <path
              d="M929.828 0.543457L927.328 829.877C925.809 1334 737.028 1807.4 418.435 2106"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-2"
            />
            <path
              d="M1341.9 0.543457L1344.4 829.876C1345.92 1334 1534.7 1807.4 1853.29 2106"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-3"
            />
            <path
              d="M1758.96 0.543457L1761.49 840.047C1762.99 1337.18 1950.96 1803.4 2267.17 2094.29"
              stroke="#4C00EC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-4"
            />

            {/* Lime accent line */}
            <path
              d="M1134.86 0.543457L1135.86 829.876C1136.38 1334 1230.08 1570 1380.29 1800"
              stroke="#84cc16"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="100px 99999px"
              className="animate-line-race-3"
              opacity="0.7"
            />

            {/* Static White Background Lines */}
            <path
              opacity="0.2"
              d="M929.828 0.543457L927.328 829.877C925.809 1334 737.028 1807.4 418.435 2106"
              stroke="white"
              strokeWidth="1"
              strokeMiterlimit="10"
            />
            <path
              opacity="0.2"
              d="M510.086 0.543457L507.556 840.047C506.058 1337.18 318.091 1803.4 1.875 2094.29"
              stroke="white"
              strokeWidth="1"
              strokeMiterlimit="10"
            />
            <path
              opacity="0.2"
              d="M1758.96 0.543457L1761.49 840.047C1762.99 1337.18 1950.96 1803.4 2267.17 2094.29"
              stroke="white"
              strokeWidth="1"
              strokeMiterlimit="10"
            />
            <path
              opacity="0.2"
              d="M1341.9 0.543457L1344.4 829.876C1345.92 1334 1534.7 1807.4 1853.29 2106"
              stroke="white"
              strokeWidth="1"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>

      {/* 3D Spline Viewer - Positioned Right */}
      <div
        className="hidden md:block fixed right-0 top-0 bottom-0 w-2/3 z-0 overflow-hidden"
        style={{
          opacity: linesOpacity,
          transform: `scale(${linesScale})`,
          clipPath: "inset(0 0 70px 0)",
        }}
      >
        <div className="track w-full h-full">
          <Suspense fallback={null}>
            <Spline
              scene="https://prod.spline.design/tf8yCcnSHWkvjvul/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </Suspense>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-24 sm:pb-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-8 leading-[1.05] animate-fade-in-up text-balance tracking-tight">
            Not Another
            <br />
            <span
              className={`animate-text-shimmer inline-block transition-all duration-500 font-normal ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              {CYCLING_WORDS[wordIndex]}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
            Construimos aplicaciones personalizadas, automatizaciones y flujos de trabajo impulsados por IA para empresas que quieren liderar.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={scrollToCapabilities}
              className="group bg-[#5100fd] hover:bg-[#6610ff] text-white px-10 py-7 text-base rounded-full transition-all duration-[650ms] hover:scale-[1.02] shadow-lg shadow-[#5100fd]/25"
            >
              Explorar Capacidades
              <CircleArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:rotate-90" />
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics strip */}
      <MetricsSection />

      {/* Capabilities section with tabs */}
      <section id="capabilities" className="relative z-20 py-32">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#5100fd]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container p-12 rounded-3xl z-50 bg-black/80 backdrop-blur-xl border border-zinc-800/60 mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">Capacidades</h2>

          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl">
            Estamos preparados para resolver desafíos empresariales complejos, con rapidez y precisión.
          </p>

          <Tabs defaultValue="desarrollo" className="w-full">
            <TabsList className="bg-zinc-950/80 border border-zinc-800/60 p-1.5 mb-10 rounded-full flex flex-wrap">
              <TabsTrigger
                value="desarrollo"
                className="text-zinc-500 data-[state=active]:bg-[#5100fd] data-[state=active]:text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Desarrollo
              </TabsTrigger>
              <TabsTrigger
                value="automatizacion"
                className="text-zinc-500 data-[state=active]:bg-[#5100fd] data-[state=active]:text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Automatización
              </TabsTrigger>
              <TabsTrigger
                value="marketing"
                className="text-zinc-500 data-[state=active]:bg-[#5100fd] data-[state=active]:text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Marketing
              </TabsTrigger>
              <TabsTrigger
                value="gestion"
                className="text-zinc-500 data-[state=active]:bg-[#5100fd] data-[state=active]:text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Gestión
              </TabsTrigger>
            </TabsList>

            <TabsContent value="desarrollo" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
                  <GlowingEffect
                    blur={0}
                    borderWidth={1}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-2xl font-light mb-4 text-white">Aplicaciones Personalizadas</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      Construimos aplicaciones web y móviles escalables y de alto rendimiento, adaptadas a las
                      necesidades específicas de tu negocio, usando frameworks modernos y buenas prácticas.
                    </p>
                    <Link
                      href="/capacidades/aplicaciones-personalizadas"
                      className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group"
                    >
                      <span className="underline">Saber más</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
                  <GlowingEffect
                    blur={0}
                    borderWidth={1}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-2xl font-light mb-4 text-white">Soluciones Full-Stack</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      Desde interfaces de usuario hasta infraestructura de backend, entregamos soluciones completas que
                      se integran perfectamente con tus sistemas existentes.
                    </p>
                    <Link
                      href="/capacidades/soluciones-full-stack"
                      className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group"
                    >
                      <span className="underline">Saber más</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="automatizacion" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
                  <GlowingEffect
                    blur={0}
                    borderWidth={1}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-2xl font-light mb-4 text-white">Flujos de Trabajo con IA</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      Aprovecha la tecnología de IA de vanguardia para automatizar procesos complejos, reducir el
                      trabajo manual y desbloquear nuevas capacidades para tu negocio.
                    </p>
                    <Link
                      href="/capacidades/flujos-ia"
                      className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group"
                    >
                      <span className="underline">Saber más</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
                  <GlowingEffect
                    blur={0}
                    borderWidth={1}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-2xl font-light mb-4 text-white">Optimización de Procesos</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      Optimiza tus operaciones con automatización inteligente que aprende y se adapta a los patrones
                      de tu negocio, ahorrando tiempo y recursos.
                    </p>
                    <Link
                      href="/capacidades/optimizacion-procesos"
                      className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group"
                    >
                      <span className="underline">Saber más</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
                  <GlowingEffect
                    blur={0}
                    borderWidth={1}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-2xl font-light mb-4 text-white">Estrategia de Marca</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      Definimos el posicionamiento, propuesta de valor y narrativa de tu marca para conectar de forma auténtica con tu audiencia y diferenciarte en el mercado.
                    </p>
                    <Link
                      href="/tu-marca#estrategia"
                      className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group"
                    >
                      <span className="underline">Saber más</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
                  <GlowingEffect
                    blur={0}
                    borderWidth={1}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-2xl font-light mb-4 text-white">Identidad Visual</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      Diseñamos sistemas visuales coherentes — logotipo, paleta, tipografía y guías de estilo — que expresan la esencia de tu marca en cada punto de contacto.
                    </p>
                    <Link
                      href="/tu-marca#identidad"
                      className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group"
                    >
                      <span className="underline">Saber más</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gestion" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
                  <GlowingEffect blur={0} borderWidth={1} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-2xl font-light mb-4 text-white">Soluciones Contables</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      Organizamos, digitalizamos y automatizamos tus procesos contables para que tengas control total sobre las finanzas de tu negocio y cumplas con todas las obligaciones legales.
                    </p>
                    <Link
                      href="/capacidades/soluciones-contables"
                      className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group"
                    >
                      <span className="underline">Saber más</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div className="relative rounded-2xl border border-zinc-800/60 p-1 card-lift transition-all duration-500">
                  <GlowingEffect blur={0} borderWidth={1} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-zinc-950/90 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-2xl font-light mb-4 text-white">Finanzas Estratégicas</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      Analizamos el flujo de caja, valuamos proyectos e inversiones y construimos modelos financieros sólidos para que cada decisión esté respaldada por números reales.
                    </p>
                    <Link
                      href="/capacidades/finanzas-estrategicas"
                      className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group"
                    >
                      <span className="underline">Saber más</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Methodology */}
      <MethodologySection />

      {/* Cases */}
      <CasesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Why us */}
      <WhyUsSection />

      {/* CTA */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
