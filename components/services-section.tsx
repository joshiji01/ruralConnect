import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Heart, ShoppingCart, Phone, Users, MapPin } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Home Delivery",
    description: "Fast and reliable delivery to your doorstep",
    icon: Truck,
  },
  {
    id: 2,
    name: "Healthcare Products",
    description: "Essential medicines and health supplies",
    icon: Heart,
  },
  {
    id: 3,
    name: "Grocery Shopping",
    description: "Fresh groceries and daily essentials",
    icon: ShoppingCart,
  },
  {
    id: 4,
    name: "24/7 Support",
    description: "Round-the-clock customer assistance",
    icon: Phone,
  },
  {
    id: 5,
    name: "Community Network",
    description: "Connect with local suppliers and neighbors",
    icon: Users,
  },
  {
    id: 6,
    name: "Location Services",
    description: "Find nearest stores and service centers",
    icon: MapPin,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed specifically for rural communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
