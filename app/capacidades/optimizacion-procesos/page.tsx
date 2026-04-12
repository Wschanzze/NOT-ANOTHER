import { CapabilidadLayout } from "@/components/capacidad-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Optimización de Procesos y Automatización — Not Another",
  description: "Optimiza tus procesos operativos eliminando cuellos de botella. Automatización inteligente con herramientas líderes y retorno medible.",
  keywords: ["optimización de procesos", "automatización", "zapier", "make", "eficiencia operativa"],
}

export default function OptimizacionProcesos() {
  return (
    <CapabilidadLayout
      etiqueta="Automatización — Optimización de Procesos"
      titulo="Elimina los cuellos de botella de tu operación"
      subtitulo="Analizamos cómo trabajas hoy y construimos sistemas que lo hacen mejor, más rápido y con menos errores."
      descripcion="Los procesos manuales y las herramientas desconectadas cuestan tiempo y dinero cada día. Mapeamos tus flujos operativos actuales, identificamos las fricciones más costosas y diseñamos soluciones de automatización que se integran directamente en tu forma de trabajar."
      puntos={[
        {
          titulo: "Diagnóstico y mapeo de procesos",
          descripcion:
            "Comenzamos entendiendo a fondo cómo opera tu negocio hoy: qué tareas se hacen manualmente, dónde se pierde tiempo y dónde existen riesgos de error humano.",
        },
        {
          titulo: "Automatización con herramientas líderes",
          descripcion:
            "Conectamos tus aplicaciones usando plataformas como Zapier, Make, n8n o integraciones directas por API para que la información fluya sin intervención manual.",
        },
        {
          titulo: "Reducción de errores operativos",
          descripcion:
            "Los procesos automatizados son consistentes y auditables. Eliminamos las tareas repetitivas propensas a errores humanos y dejamos registro de cada acción ejecutada.",
        },
        {
          titulo: "Ahorro medible en tiempo y costos",
          descripcion:
            "Cada automatización que implementamos está pensada para generar un retorno claro. Medimos el impacto antes y después para que veas exactamente cuánto tiempo y dinero recuperas.",
        },
      ]}
    />
  )
}
