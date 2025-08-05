import { NextResponse } from "next/server"

const news = [
  {
    id: 1,
    title: "New Agricultural Subsidies Announced for Rural Farmers",
    description:
      "Government announces increased subsidies and support programs for small-scale farmers in rural areas, including seed distribution and equipment loans.",
    date: "2024-01-15",
    category: "Agriculture",
  },
  {
    id: 2,
    title: "Mobile Health Clinics Expand to Remote Villages",
    description:
      "Healthcare initiative brings medical services directly to remote communities, providing essential health checkups and medicine distribution.",
    date: "2024-01-12",
    category: "Healthcare",
  },
  {
    id: 3,
    title: "Digital Literacy Program Launches in Rural Schools",
    description:
      "New educational initiative aims to bridge the digital divide by providing computer training and internet access to rural school children.",
    date: "2024-01-10",
    category: "Education",
  },
]

export async function GET() {
  return NextResponse.json(news)
}
