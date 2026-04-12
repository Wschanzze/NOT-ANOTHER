import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuestro Equipo — Not Another",
  description: "Conoce al equipo de expertos detrás de Not Another. Profesionales apasionados por la tecnología y la innovación.",
  keywords: ["equipo", "expertos", "desarrolladores", "diseñadores"],
}

export default function EquipoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
