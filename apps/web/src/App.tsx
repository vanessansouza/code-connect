import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { useAuth } from './context/AuthContext'

function DashboardPage() {
  const { logout } = useAuth()

  return (
    <main className="grid min-h-screen place-items-center bg-[#080A12] px-6 py-8 text-white">
      <div className="rounded-[28px] border border-white/10 bg-code-surface p-10 text-center">
        <h1 className="text-3xl font-semibold">Bem-vindo ao Code Connect</h1>
        <p className="mt-3 text-code-muted">Você entrou com sucesso.</p>
        <button
          className="mt-6 rounded-full bg-[#81FE88] px-6 py-3 font-semibold text-[#0f172a]"
          onClick={logout}
        >
          Sair
        </button>
      </div>
    </main>
  )
}

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />} />
    </Routes>
  )
}

export default App
