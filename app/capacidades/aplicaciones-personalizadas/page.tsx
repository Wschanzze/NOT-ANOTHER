import { CapabilidadLayout } from "@/components/capacidad-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Desarrollo de Aplicaciones Personalizadas — Not Another",
  description: "Software personalizado hecho exactamente para tu negocio. Desarrollo Full-Stack con Next.js, React, Node.js y tecnologías modernas.",
  keywords: ["desarrollo de software", "aplicaciones personalizadas", "desarrollo web", "desarrollo full-stack"],
}

export default function AplicacionesPersonalizadas() {
  return (
    <CapabilidadLayout
      etiqueta="Desarrollo — Aplicaciones Personalizadas"
      titulo="Software hecho exactamente para ti"
      subtitulo="No vendemos plantillas. Construimos lo que tu negocio realmente necesita."
      descripcion="Cada negocio tiene procesos únicos y retos propios. Por eso desarrollamos aplicaciones a medida usando tecnologías modernas como Next.js, React, Node.js y más, asegurándonos de que cada pieza encaje perfectamente con tu operación."
      puntos={[
        {
          titulo: "Desarrollo centrado en el usuario",
          descripcion:
            "Diseñamos y construimos interfaces que priorizan la experiencia de quienes usarán la aplicación cada día, reduciendo fricción y aumentando la productividad.",
        },
        {
          titulo: "Tecnología moderna y escalable",
          descripcion:
            "Utilizamos frameworks de vanguardia como Next.js, React y TypeScript para construir aplicaciones que crecen contigo sin sacrificar rendimiento ni estabilidad.",
        },
        {
          titulo: "Integración con tus sistemas",
          descripcion:
            "Tu nueva aplicación se conecta sin problemas con las herramientas que ya usas: CRMs, ERPs, pasarelas de pago, APIs externas y cualquier sistema que necesites.",
        },
        {
          titulo: "Soporte y mantenimiento continuo",
          descripcion:
            "No te dejamos solo después del lanzamiento. Ofrecemos soporte técnico, actualizaciones y mejoras continuas para que tu aplicación siempre funcione a la perfección.",
        },
      ]}
    />
  )
}
