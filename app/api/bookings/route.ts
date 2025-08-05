import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
const bookings: Array<{
  id: number
  userId: number
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  total: number
  status: "pending" | "confirmed" | "delivered"
  date: string
}> = [
  {
    id: 1,
    userId: 1,
    items: [
      { name: "Rice (5kg)", quantity: 1, price: 200 },
      { name: "Cooking Oil (1L)", quantity: 2, price: 120 },
    ],
    total: 440,
    status: "delivered",
    date: "2024-01-10",
  },
]

let nextBookingId = 2

export async function GET(request: NextRequest) {
  // In production, extract user ID from JWT token
  const userId = 1 // Demo user ID

  const userBookings = bookings.filter((booking) => booking.userId === userId)

  return NextResponse.json(userBookings)
}

export async function POST(request: NextRequest) {
  try {
    const { items, total } = await request.json()

    // In production, extract user ID from JWT token
    const userId = 1 // Demo user ID

    // Validate required fields
    if (!items || !total) {
      return NextResponse.json({ message: "Items and total are required" }, { status: 400 })
    }

    // Create new booking
    const newBooking = {
      id: nextBookingId++,
      userId,
      items,
      total,
      status: "pending" as const,
      date: new Date().toLocaleDateString(),
    }

    bookings.push(newBooking)

    return NextResponse.json({
      message: "Order placed successfully",
      booking: newBooking,
    })
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
