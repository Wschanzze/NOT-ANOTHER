import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Allow login page and API login route through
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next()
  }

  // Protect all /admin/* and /api/admin/* routes
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const token = req.cookies.get("admin_token")?.value
    const secret = process.env.ADMIN_SECRET

    if (!secret || token !== secret) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }
      const loginUrl = req.nextUrl.clone()
      loginUrl.pathname = "/admin/login"
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}
