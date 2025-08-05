import { type NextRequest, NextResponse } from "next/server"

// In a real application, you would use a proper database
// This is a simplified in-memory storage for demonstration
const users: Array<{
  id: number
  name: string
  email: string
  phone: string
  password: string
}> = []

let nextUserId = 1

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, password } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email)
    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 400 })
    }

    // Create new user
    const newUser = {
      id: nextUserId++,
      name,
      email,
      phone,
      password, // In production, hash the password!
    }

    users.push(newUser)

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json({
      message: "User created successfully",
      user: userWithoutPassword,
    })
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
