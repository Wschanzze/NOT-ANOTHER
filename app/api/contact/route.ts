import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message, budget } = body

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send an email notification to your team
    // 2. Save the contact request to a database
    // 3. Create a record in a CRM system

    // For now, we'll just log it and return success
    console.log("[Contact Form]", {
      name,
      email,
      company,
      message,
      budget,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // TODO: Save to database (Supabase, MongoDB, etc.)

    return NextResponse.json(
      { success: true, message: "Contact request received" },
      { status: 200 }
    )
  } catch (error) {
    console.error("[Contact Form Error]", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
