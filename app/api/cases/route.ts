import { NextResponse } from "next/server"
import { readJSON } from "@/lib/data"

interface Case {
  id: string
  tag: string
  title: string
  description: string
  metrics: string[]
}

export async function GET() {
  const cases = readJSON<Case[]>("cases.json")
  return NextResponse.json(cases)
}
