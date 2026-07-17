import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getCurrentUser } from '../services/auth'

interface AuthContextValue {
  user: { id: string; name: string; email: string } | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (token: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextValue['user']>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    if (!token) {
      setIsLoading(false)
      return
    }

    void (async () => {
      try {
        const currentUser = await getCurrentUser(token)
        setUser(currentUser)
      } catch {
        localStorage.removeItem('accessToken')
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  const login = async (token: string) => {
    localStorage.setItem('accessToken', token)
    const currentUser = await getCurrentUser(token)
    setUser(currentUser)
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    setUser(null)
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      logout,
    }),
    [user, isLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
