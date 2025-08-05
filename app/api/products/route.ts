import { NextResponse } from "next/server"

const products = [
  {
    id: 1,
    name: "Fresh Vegetables Bundle",
    price: 150,
    category: "Groceries",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 2,
    name: "Rice (5kg)",
    price: 200,
    category: "Groceries",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 3,
    name: "Basic Medicine Kit",
    price: 300,
    category: "Healthcare",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 4,
    name: "Wheat Flour (10kg)",
    price: 350,
    category: "Groceries",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 5,
    name: "Cooking Oil (1L)",
    price: 120,
    category: "Groceries",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 6,
    name: "Dairy Products Bundle",
    price: 180,
    category: "Groceries",
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
  },
  {
    id: 7,
    name: "Pulse & Lentils Mix",
    price: 250,
    category: "Groceries",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 8,
    name: "Hygiene Essentials",
    price: 200,
    category: "Personal Care",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
]

export async function GET() {
  return NextResponse.json(products)
}
