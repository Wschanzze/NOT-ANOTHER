import { CapabilidadLayout } from "@/components/capacidad-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Desarrollo Full-Stack — Not Another",
  description: "Soluciones Full-Stack completas. Frontend con React y Next.js, backends robustos, bases de datos e infraestructura en la nube.",
  keywords: ["desarrollo full-stack", "react", "next.js", "backend", "desarrollo web"],
}

export default function SolucionesFullStack() {
  return (
    <CapabilidadLayout
      etiqueta="Desarrollo — Soluciones Full-Stack"
      titulo="De la interfaz al servidor, lo construimos todo"
      subtitulo="Un solo equipo para todo el stack: frontend, backend, base de datos e infraestructura."
      descripcion="Tener múltiples proveedores para el frontend y el backend genera fricción, retrasos y problemas de integración. Nosotros nos encargamos de toda la pila tecnológica para que todo funcione como un sistema unificado desde el primer día."
      puntos={[
        {
          titulo: "Frontend de alto rendimiento",
          descripcion:
            "Construimos interfaces rápidas, accesibles y visualmente pulidas usando React y Next.js, optimizadas para SEO y tiempos de carga mínimos.",
        },
        {
          titulo: "Backends robustos y seguros",
          descripcion:
            "Diseñamos APIs RESTful y GraphQL, gestionamos bases de datos relacionales y no relacionales, y aseguramos que tu lógica de negocio esté protegida y sea fiable.",
        },
        {
          titulo: "Infraestructura en la nube",
          descripcion:
            "Desplegamos en plataformas líderes como Vercel, AWS o Google Cloud, configurando pipelines de CI/CD para entregas rápidas y sin interrupciones.",
        },
        {
          titulo: "Arquitectura pensada para escalar",
          descripcion:
            "Desde el inicio, diseñamos la arquitectura para que pueda manejar más usuarios, más datos y más funcionalidades sin necesidad de reconstruir todo desde cero.",
        },
      ]}
    />
  )
}
