import { NextResponse } from "next/server"

const services = [
  {
    id: 1,
    name: "Home Delivery",
    description: "Fast and reliable delivery to your doorstep",
    category: "logistics",
  },
  {
    id: 2,
    name: "Healthcare Products",
    description: "Essential medicines and health supplies",
    category: "healthcare",
  },
  {
    id: 3,
    name: "Grocery Shopping",
    description: "Fresh groceries and daily essentials",
    category: "grocery",
  },
  {
    id: 4,
    name: "24/7 Support",
    description: "Round-the-clock customer assistance",
    category: "support",
  },
  {
    id: 5,
    name: "Community Network",
    description: "Connect with local suppliers and neighbors",
    category: "community",
  },
]

export async function GET() {
  return NextResponse.json(services)
}
