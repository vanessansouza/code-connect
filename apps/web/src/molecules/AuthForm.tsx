import { FormEvent } from 'react'
import { Button } from '../atoms/Button'
import { Checkbox } from '../atoms/Checkbox'
import { Input } from '../atoms/Input'

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
  onForgotPassword?: () => void
}

export function AuthForm({
  fields,
  buttonLabel,
  showRemember = true,
  onForgotPassword,
}: AuthFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <label key={field.name} className="auth-form__field">
          <span className="auth-form__label">{field.label}</span>
          <Input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            required
          />
        </label>
      ))}

      <div className="auth-form__controls">
        {showRemember && <Checkbox label="Lembrar-me" name="remember" />}
        {onForgotPassword ? (
          <button type="button" className="auth-form__link" onClick={onForgotPassword}>
            Esqueci a senha
          </button>
        ) : (
          <span className="auth-form__link">Esqueci a senha</span>
        )}
      </div>

      <Button type="submit" className="auth-form__submit">
        {buttonLabel}
      </Button>
    </form>
  )
}
