"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, ShoppingCart, Package, Settings, Calendar } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { ProfileEdit } from "@/components/profile-edit"

interface Booking {
  id: number
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  total: number
  status: "pending" | "confirmed" | "delivered"
  date: string
}

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const { cart, clearCart } = useCart()
  const [bookings, setBookings] = useState<Booking[]>([])
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      fetchBookings()
    }
  }, [user])

  const fetchBookings = async () => {
    try {
      const response = await fetch("/api/bookings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        setBookings(data)
      }
    } catch (error) {
      console.error("Error fetching bookings:", error)
    }
  }

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }),
      })

      if (response.ok) {
        clearCart()
        fetchBookings()
      }
    } catch (error) {
      console.error("Error placing order:", error)
    }
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!user) {
    return null
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Manage your orders and profile from your dashboard</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="cart" className="flex items-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Cart ({cart.length})</span>
            </TabsTrigger>
            <TabsTrigger value="bookings" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>My Orders</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{bookings.length}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cart Items</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{cart.length}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{bookings.filter((b) => b.status === "pending").length}</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest orders and activities</CardDescription>
              </CardHeader>
              <CardContent>
                {bookings.slice(0, 3).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    <div>
                      <p className="font-medium">Order #{booking.id}</p>
                      <p className="text-sm text-gray-500">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{booking.total}</p>
                      <Badge
                        variant={
                          booking.status === "delivered"
                            ? "default"
                            : booking.status === "confirmed"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {booking.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cart" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shopping Cart</CardTitle>
                <CardDescription>Review your items before placing an order</CardDescription>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-medium">₹{item.price * item.quantity}</p>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <p className="text-lg font-bold">Total: ₹{cartTotal}</p>
                      <Button onClick={handlePlaceOrder} className="bg-green-600 hover:bg-green-700">
                        Place Order
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Orders</CardTitle>
                <CardDescription>Track all your orders and their status</CardDescription>
              </CardHeader>
              <CardContent>
                {bookings.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No orders yet</p>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <Card key={booking.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <p className="font-medium">Order #{booking.id}</p>
                              <p className="text-sm text-gray-500">{booking.date}</p>
                            </div>
                            <Badge
                              variant={
                                booking.status === "delivered"
                                  ? "default"
                                  : booking.status === "confirmed"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            {booking.items.map((item, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span>
                                  {item.name} x {item.quantity}
                                </span>
                                <span>₹{item.price * item.quantity}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between font-medium pt-2 border-t">
                            <span>Total</span>
                            <span>₹{booking.total}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <ProfileEdit user={user} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
