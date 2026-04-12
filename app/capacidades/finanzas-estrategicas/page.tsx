import { CapabilidadLayout } from "@/components/capacidad-layout"

export default function FinanzasEstrategicas() {
  return (
    <CapabilidadLayout
      etiqueta="Gestión — Finanzas Estratégicas"
      titulo="Decisiones financieras con respaldo real"
      subtitulo="Analizamos el flujo de caja de tu negocio y valuamos tus proyectos para que cada decisión de inversión esté fundamentada en números."
      descripcion="Las finanzas estratégicas van más allá de la contabilidad: se trata de usar los datos financieros para anticipar escenarios, evaluar oportunidades y maximizar el retorno de cada peso invertido. Trabajamos junto a tu equipo para construir modelos financieros sólidos que soporten el crecimiento de tu empresa."
      puntos={[
        {
          titulo: "Gestión y proyección de flujo de caja",
          descripcion:
            "Modelamos los ingresos y egresos futuros de tu empresa bajo distintos escenarios, identificando brechas de liquidez con anticipación para que nunca te tome por sorpresa una crisis de caja.",
        },
        {
          titulo: "Valuación de proyectos e inversiones",
          descripcion:
            "Aplicamos metodologías como VPN, TIR y payback period para evaluar la viabilidad y rentabilidad de nuevos proyectos, expansiones o inversiones, dándote una visión objetiva del riesgo y retorno esperado.",
        },
        {
          titulo: "Estructura de capital y financiamiento",
          descripcion:
            "Analizamos las opciones de financiamiento disponibles — deuda, equity, subsidios — y te ayudamos a estructurar la combinación óptima que minimice el costo de capital y mantenga la salud financiera del negocio.",
        },
        {
          titulo: "Planificación financiera y presupuestos",
          descripcion:
            "Construimos el presupuesto anual, el plan financiero a mediano plazo y los KPIs de seguimiento para que cada área tenga metas claras y puedas medir el desvío respecto al plan en tiempo real.",
        },
      ]}
    />
  )
}
