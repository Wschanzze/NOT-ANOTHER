import { NextRequest, NextResponse } from "next/server"
import { readJSON, writeJSON } from "@/lib/data"
import { cookies } from "next/headers"

export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  skills: string[]
  image: string
  linkedin: string
  twitter: string
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
  const team = readJSON<TeamMember[]>("team.json")
  return NextResponse.json(team)
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const body = await req.json()
  const team = readJSON<TeamMember[]>("team.json")
  const newMember: TeamMember = {
    ...body,
    id: Date.now().toString(),
  }
  team.push(newMember)
  writeJSON("team.json", team)
  return NextResponse.json(newMember, { status: 201 })
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const body: TeamMember = await req.json()
  const team = readJSON<TeamMember[]>("team.json")
  const idx = team.findIndex((m) => m.id === body.id)
  if (idx === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  team[idx] = body
  writeJSON("team.json", team)
  return NextResponse.json(body)
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const { id } = await req.json()
  const team = readJSON<TeamMember[]>("team.json")
  const filtered = team.filter((m) => m.id !== id)
  writeJSON("team.json", filtered)
  return NextResponse.json({ success: true })
}
