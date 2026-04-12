import { CapabilidadLayout } from "@/components/capacidad-layout"

export default function SolucionesContables() {
  return (
    <CapabilidadLayout
      etiqueta="Gestión — Soluciones Contables"
      titulo="Tu contabilidad en orden, siempre"
      subtitulo="Organizamos, digitalizamos y automatizamos tus procesos contables para que tomes decisiones con información real y oportuna."
      descripcion="Una contabilidad desordenada no solo genera problemas con el fisco, sino que te deja sin visibilidad real de tu negocio. Implementamos sistemas y procesos contables claros, trazables y eficientes, adaptados al tamaño y complejidad de tu empresa."
      puntos={[
        {
          titulo: "Organización y registro contable",
          descripcion:
            "Estructuramos el plan de cuentas, clasificamos transacciones y aseguramos que cada movimiento quede correctamente documentado y trazable, eliminando errores y duplicaciones.",
        },
        {
          titulo: "Automatización de procesos contables",
          descripcion:
            "Conectamos tus herramientas de facturación, bancos y operaciones al sistema contable para reducir la carga manual, minimizar errores y tener registros actualizados en tiempo real.",
        },
        {
          titulo: "Reportes y estados financieros",
          descripcion:
            "Generamos balances, estados de resultados y reportes de gestión periódicos que te permiten entender la salud financiera de tu empresa y cumplir con las obligaciones legales.",
        },
        {
          titulo: "Cumplimiento y auditoría",
          descripcion:
            "Aseguramos que tu contabilidad esté alineada con la normativa vigente, preparamos la documentación para auditorías y minimizamos el riesgo de contingencias fiscales.",
        },
      ]}
    />
  )
}
