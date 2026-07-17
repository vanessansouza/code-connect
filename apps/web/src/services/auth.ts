import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  timeout: 10000,
})

interface RegisterPayload {
  name: string
  email: string
  password: string
}

interface LoginPayload {
  email: string
  password: string
}

interface AuthResponse {
  accessToken: string
}

interface UserResponse {
  id: string
  name: string
  email: string
}

export async function registerUser(payload: RegisterPayload) {
  const response = await api.post<AuthResponse>('/auth/register', payload)
  return response.data
}

export async function loginUser(payload: LoginPayload) {
  const response = await api.post<AuthResponse>('/auth/login', payload)
  return response.data
}

export async function getCurrentUser(token: string) {
  const response = await api.get<UserResponse>('/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
