import { type NextRequest, NextResponse } from "next/server"

// This would typically come from your database
// For demo purposes, we'll use the same in-memory storage
const users: Array<{
  id: number
  name: string
  email: string
  phone: string
  password: string
}> = [
  {
    id: 1,
    name: "Demo User",
    email: "demo@example.com",
    phone: "+91 98765 43210",
    password: "password123",
  },
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    console.log("Login attempt:", { email, password }) // Debug log

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    // Find user
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      console.log("User not found or invalid credentials") // Debug log
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    // In production, generate a proper JWT token
    const token = `demo-token-${user.id}-${Date.now()}`

    // Return user without password
    const { password: _, ...userWithoutPassword } = user

    console.log("Login successful for user:", userWithoutPassword) // Debug log

    return NextResponse.json({
      message: "Login successful",
      user: userWithoutPassword,
      token,
    })
  } catch (error) {
    console.error("Login error:", error) // Debug log
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
