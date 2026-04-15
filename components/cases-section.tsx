import { readJSON } from "@/lib/data"
import { CasesSectionClient } from "./cases-section-client"

interface Case {
  id: string
  tag: string
  title: string
  description: string
  metrics: string[]
}

export function CasesSection() {
  const cases = readJSON<Case[]>("cases.json")
  return <CasesSectionClient cases={cases} />
}
