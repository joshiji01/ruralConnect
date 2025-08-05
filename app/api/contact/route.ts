import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
const contactSubmissions: Array<{
  id: number
  name: string
  email: string
  message: string
  date: string
}> = []

let nextSubmissionId = 1

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Create new submission
    const newSubmission = {
      id: nextSubmissionId++,
      name,
      email,
      message,
      date: new Date().toISOString(),
    }

    contactSubmissions.push(newSubmission)

    return NextResponse.json({
      message: "Message sent successfully",
      submission: newSubmission,
    })
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
