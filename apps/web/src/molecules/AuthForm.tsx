import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../atoms/Button'
import { Checkbox } from '../atoms/Checkbox'
import { Input } from '../atoms/Input'
import { useAuth } from '../context/AuthContext'
import { loginUser, registerUser } from '../services/auth'

export interface AuthField {
  name: string
  label: string
  type: string
  placeholder: string
  autoComplete?: string
}

interface AuthFormProps {
  fields: AuthField[]
  buttonLabel: string
  showRemember?: boolean
  showForgotPassword?: boolean
  onForgotPassword?: () => void
  mode?: 'login' | 'register'
}

export function AuthForm({
  fields,
  buttonLabel,
  showRemember = true,
  showForgotPassword = true,
  onForgotPassword,
  mode = 'login',
}: AuthFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>

    try {
      if (mode === 'register') {
        await registerUser({
          name: payload.name ?? payload.username ?? '',
          email: payload.email ?? '',
          password: payload.password ?? '',
        })
        navigate('/login')
      } else {
        const result = await loginUser({
          email: payload.email ?? '',
          password: payload.password ?? '',
        })

        if (result.accessToken) {
          await login(result.accessToken)
          navigate('/dashboard')
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Falha ao autenticar.'
      setErrorMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2">
          <span className="text-sm text-code-muted">{field.label}</span>
          <Input
            className="w-full rounded-[14px] border border-code-outline bg-white/5 px-4 py-3 text-white placeholder:text-code-muted focus:border-code-accent focus:outline-none"
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            required
          />
        </label>
      ))}

      {(showRemember || showForgotPassword) && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          {showRemember && <Checkbox label="Lembrar-me" name="remember" className="text-sm text-code-muted" />}
          {showForgotPassword &&
            (onForgotPassword ? (
              <button type="button" className="text-sm text-code-accent underline" onClick={onForgotPassword}>
                Esqueci a senha
              </button>
            ) : (
              <span className="text-sm text-code-accent">Esqueci a senha</span>
            ))}
        </div>
      )}

      {errorMessage ? <p className="text-sm text-red-400">{errorMessage}</p> : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : buttonLabel}
      </Button>
    </form>
  )
}
