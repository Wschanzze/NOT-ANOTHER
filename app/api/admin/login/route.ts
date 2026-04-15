import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD
  const adminSecret = process.env.ADMIN_SECRET

  if (!adminEmail || !adminPassword || !adminSecret) {
    return NextResponse.json(
      { error: "Admin credentials not configured. Please set ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_SECRET environment variables." },
      { status: 500 }
    )
  }

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set("admin_token", adminSecret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  })
  return response
}
