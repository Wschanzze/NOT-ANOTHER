import { CapabilidadLayout } from "@/components/capacidad-layout"
import { Metadata } from "next"
import Image from "next/image"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export const metadata: Metadata = {
  title: "Automatización con IA y Flujos de Trabajo — Not Another",
  description: "Automatiza procesos complejos con inteligencia artificial. Integramos GPT, Claude, Gemini y crean agentes de IA personalizados para tu negocio.",
  keywords: ["automatización con IA", "flujos de trabajo", "inteligencia artificial", "agentes de IA"],
}

const n8nFeatures = [
  { title: "500+ integraciones nativas", desc: "Conecta con cualquier servicio: Slack, Gmail, HubSpot, Notion, bases de datos, APIs REST y mucho más, sin escribir código." },
  { title: "Lógica avanzada y condicionales", desc: "Construye flujos con bifurcaciones, loops, manejo de errores y lógica compleja que ninguna herramienta no-code puede igualar." },
  { title: "IA embebida en cada nodo", desc: "Incorpora modelos de lenguaje, clasificadores y agentes directamente dentro del flujo para decisiones inteligentes en tiempo real." },
  { title: "Self-hosted o cloud", desc: "Deploya n8n en tu propia infraestructura para control total sobre tus datos, o usa la versión cloud para arrancar en minutos." },
]

export default function FlujosIA() {
  return (
    <CapabilidadLayout
      etiqueta="Automatización — Flujos de Trabajo con IA"
      titulo="Deja que la IA haga el trabajo pesado"
      subtitulo="Automatizamos flujos complejos usando modelos de lenguaje, visión y procesamiento de datos."
      descripcion="La inteligencia artificial ya no es solo para grandes corporaciones. Integramos modelos como GPT, Claude y Gemini directamente en tus procesos para que tu equipo se enfoque en lo que realmente importa, mientras la IA maneja las tareas repetitivas y complejas."
      puntos={[
        {
          titulo: "Agentes inteligentes personalizados",
          descripcion:
            "Diseñamos agentes de IA que pueden tomar decisiones, ejecutar tareas y comunicarse con otros sistemas de forma autónoma, adaptados al contexto específico de tu negocio.",
        },
        {
          titulo: "Procesamiento de documentos y datos",
          descripcion:
            "Automatizamos la lectura, clasificación y extracción de información de documentos, correos, facturas y cualquier fuente de datos no estructurada.",
        },
        {
          titulo: "Integración con modelos líderes",
          descripcion:
            "Conectamos tu flujo de trabajo con los modelos de IA más avanzados del mercado: OpenAI, Anthropic, Google Gemini y modelos open-source, según lo que mejor se adapte a tu caso.",
        },
        {
          titulo: "Monitoreo y mejora continua",
          descripcion:
            "Implementamos dashboards para que puedas ver cómo rinde tu IA, identificar errores y mejorar los resultados con el tiempo sin intervención manual constante.",
        },
      ]}
    >
      {/* n8n Section */}
      <section className="mt-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 text-xs uppercase tracking-widest mb-6">
              Herramienta principal
            </div>
            <h2 className="text-4xl md:text-5xl font-light leading-[1.1] text-balance max-w-xl">
              Construimos tus flujos con n8n
            </h2>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm md:mb-1">
            n8n es la plataforma de automatización open-source más potente del mercado. La usamos como columna vertebral para orquestar cualquier proceso, desde los más simples hasta pipelines de IA de alta complejidad.
          </p>
        </div>

        {/* n8n logo card + features */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Logo card */}
          <div className="lg:col-span-2 relative rounded-2xl border border-zinc-800 p-3">
            <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative bg-zinc-950 rounded-xl h-full min-h-[280px] flex flex-col items-center justify-center gap-8 p-10">
              {/* Logo + wordmark */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-2xl bg-[#ea4b71]/10 border border-[#ea4b71]/20 flex items-center justify-center">
                  <Image
                    src="/images/n8n-logo.png"
                    alt="n8n logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light tracking-tight text-white">n8n</p>
                  <p className="text-zinc-500 text-xs mt-1 tracking-widest uppercase">Workflow Automation</p>
                </div>
              </div>
              {/* Divider */}
              <div className="w-full h-px bg-zinc-800" />
              {/* Stats row */}
              <div className="flex items-center justify-center gap-8 w-full">
                <div className="text-center">
                  <p className="text-xl font-light text-white">500+</p>
                  <p className="text-zinc-600 text-xs mt-0.5">integraciones</p>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div className="text-center">
                  <p className="text-xl font-light text-white">open</p>
                  <p className="text-zinc-600 text-xs mt-0.5">source</p>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div className="text-center">
                  <p className="text-xl font-light text-white">self</p>
                  <p className="text-zinc-600 text-xs mt-0.5">hosted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {n8nFeatures.map((f, i) => (
              <div key={i} className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={60} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-950 rounded-xl p-6 h-full">
                  <div className="w-6 h-px bg-[#ea4b71] mb-5" />
                  <h4 className="text-sm font-medium text-white mb-2">{f.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CapabilidadLayout>
  )
}
