import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto — Not Another",
  description: "Ponte en contacto con nosotros para discutir tu próximo proyecto",
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-20 py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-widest text-[#5100fd] mb-4">Hagamos realidad tu proyecto</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-balance leading-[1.1] mb-6">
              Cuéntanos sobre tu proyecto
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Completa el formulario de abajo y nos pondremos en contacto dentro de 24 horas para discutir cómo podemos ayudarte a transformar tu idea en realidad.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-20 py-12 border-y border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-light mb-8">Información de contacto</h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Email</p>
                  <a
                    href="mailto:hola@notanother.dev"
                    className="text-lg text-white hover:text-[#5100fd] transition-colors duration-300"
                  >
                    hola@notanother.dev
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Ubicación</p>
                  <p className="text-lg text-zinc-300">
                    América Latina
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Redes sociales</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-800">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Tiempo de respuesta</p>
                  <p className="text-sm text-zinc-300">
                    Respondemos todos los mensajes dentro de 24 horas hábiles.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-20 py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-balance">Preguntas frecuentes</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                q: "¿Cuál es el presupuesto mínimo para un proyecto?",
                a: "Trabajamos con presupuestos desde $5,000 USD. Cada proyecto es único y ajustamos nuestros servicios según tus necesidades y recursos.",
              },
              {
                q: "¿Cuánto tiempo tarda un proyecto típico?",
                a: "Los proyectos varían desde 4-8 semanas para aplicaciones básicas hasta 3-6 meses para soluciones enterprise complejas.",
              },
              {
                q: "¿Ofrecen soporte después del lanzamiento?",
                a: "Sí, incluimos 30 días de soporte gratuito post-lanzamiento. También ofrecemos planes de mantenimiento continuo.",
              },
              {
                q: "¿Qué tecnologías utilizan?",
                a: "Utilizamos las mejores tecnologías del mercado: Next.js, React, TypeScript, Node.js, bases de datos modernas y herramientas de IA.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[#5100fd] pl-6">
                <h3 className="text-lg font-light text-white mb-3">{item.q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">¿Listo para comenzar?</h2>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Completa el formulario de arriba y comencemos a trabajar juntos en tu próximo proyecto.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
