"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const testimonials = [
  {
    quote:
      "Not Another transformó completamente nuestra operación. Lo que antes tomaba semanas de trabajo manual, ahora se procesa en horas.",
    author: "Carlos Mendez",
    role: "CEO",
    company: "FinTech Solutions",
    logo: "FS",
  },
  {
    quote:
      "Su equipo entiende profundamente lo que necesitaban nuestros usuarios. La atención al detalle en cada aspecto fue excepcional.",
    author: "María González",
    role: "Product Manager",
    company: "E-commerce Plus",
    logo: "EC",
  },
  {
    quote:
      "Trabajar con Not Another fue como tener un equipo técnico interno de clase mundial. Altamente recomendados para cualquier proyecto ambicioso.",
    author: "Juan López",
    role: "Founder",
    company: "TechStartup",
    logo: "TS",
  },
  {
    quote:
      "La calidad del código, la documentación y el soporte post-lanzamiento fueron impecables. Un partner confiable para el crecimiento.",
    author: "Ana Silva",
    role: "CTO",
    company: "Logistics Co",
    logo: "LC",
  },
]

export function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="relative z-20 py-32 border-t border-zinc-800/60"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#5100fd]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 animate-text-shimmer">Testimonios</p>
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance flex-1">
            Lo que dicen nuestros clientes
          </h2>
          <p className="md:max-w-sm text-zinc-400 leading-relaxed text-sm md:pb-2">
            Empresas de todos los tamaños confían en nosotros para transformar sus ideas en soluciones excepcionales.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border border-zinc-800/60 p-8 bg-zinc-950/80 backdrop-blur-sm transition-all duration-700 card-lift ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Large decorative quote mark */}
              <div className="absolute top-6 right-8 text-8xl font-serif text-[#5100fd]/10 leading-none select-none">
                "
              </div>

              {/* Quote */}
              <div className="mb-6 flex gap-1 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-[#a3e635]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-zinc-300 leading-relaxed mb-8 text-base italic relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/60 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5100fd] to-[#8855ff] flex items-center justify-center text-sm font-semibold text-white shadow-lg shadow-[#5100fd]/20">
                  {testimonial.logo}
                </div>
                <div>
                  <p className="text-sm font-light text-white">{testimonial.author}</p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
