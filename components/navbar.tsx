"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  // Debug log to see auth state
  console.log("Navbar - Current user:", user)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-gray-900">RuralConnect</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-green-600 transition-colors">
              Products
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <Button onClick={logout} variant="ghost">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Services
              </Link>
              <Link href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Products
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Contact
              </Link>

              {user ? (
                <div className="space-y-2 px-3 py-2">
                  <Link href="/dashboard">
                    <Button variant="outline" className="w-full bg-transparent">
                      Dashboard
                    </Button>
                  </Link>
                  <Button onClick={logout} variant="ghost" className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2 px-3 py-2">
                  <Link href="/login">
                    <Button variant="outline" className="w-full bg-transparent">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
