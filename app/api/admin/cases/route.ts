import { NextRequest, NextResponse } from "next/server"
import { readJSON, writeJSON } from "@/lib/data"
import { cookies } from "next/headers"

export interface Case {
  id: string
  tag: string
  title: string
  description: string
  metrics: string[]
}

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")?.value
  return token === process.env.ADMIN_SECRET
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const cases = readJSON<Case[]>("cases.json")
  return NextResponse.json(cases)
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const body = await req.json()
  const cases = readJSON<Case[]>("cases.json")
  const newCase: Case = {
    ...body,
    id: Date.now().toString(),
  }
  cases.push(newCase)
  writeJSON("cases.json", cases)
  return NextResponse.json(newCase, { status: 201 })
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const body: Case = await req.json()
  const cases = readJSON<Case[]>("cases.json")
  const idx = cases.findIndex((c) => c.id === body.id)
  if (idx === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  cases[idx] = body
  writeJSON("cases.json", cases)
  return NextResponse.json(body)
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const { id } = await req.json()
  const cases = readJSON<Case[]>("cases.json")
  const filtered = cases.filter((c) => c.id !== id)
  writeJSON("cases.json", filtered)
  return NextResponse.json({ success: true })
}
