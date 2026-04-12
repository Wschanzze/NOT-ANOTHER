import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tu Marca — Not Another",
  description: "Servicios de branding y diseño. Estrategia de marca, identidad visual y posicionamiento para empresas en LATAM.",
  keywords: ["branding", "diseño", "identidad visual", "estrategia de marca"],
}

export default function TuMarcaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
