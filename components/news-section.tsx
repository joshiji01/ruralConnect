"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ExternalLink } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  description: string
  date: string
  category: string
}

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await fetch("/api/news")
      const data = await response.json()
      setNews(data)
    } catch (error) {
      console.error("Error fetching news:", error)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News & Updates</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments in rural communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-600 font-medium">{item.category}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-green-600 transition-colors">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{item.description}</CardDescription>
                <div className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                  <span className="text-sm font-medium">Read more</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
