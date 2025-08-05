"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: number
  name: string
  email: string
  phone: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (user: User) => void
  logout: () => void
  updateUser: (user: User) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on mount
    try {
      const token = localStorage.getItem("token")
      const userData = localStorage.getItem("user")

      console.log("Checking stored auth:", { token: !!token, userData: !!userData }) // Debug log

      if (token && userData) {
        const parsedUser = JSON.parse(userData)
        console.log("Restoring user session:", parsedUser) // Debug log
        setUser(parsedUser)
      }
    } catch (error) {
      console.error("Error restoring auth:", error)
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    }

    setLoading(false)
  }, [])

  const login = (userData: User) => {
    console.log("Logging in user:", userData) // Debug log
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    console.log("Logging out user") // Debug log
    setUser(null)
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }

  const updateUser = (userData: User) => {
    console.log("Updating user:", userData) // Debug log
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  return <AuthContext.Provider value={{ user, loading, login, logout, updateUser }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
