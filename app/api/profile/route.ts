import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
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

export async function PUT(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json()

    // In production, extract user ID from JWT token
    const userId = 1 // Demo user ID

    // Find user
    const userIndex = users.findIndex((user) => user.id === userId)

    if (userIndex === -1) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Update user
    users[userIndex] = {
      ...users[userIndex],
      name,
      email,
      phone,
    }

    // Return updated user without password
    const { password: _, ...userWithoutPassword } = users[userIndex]

    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
