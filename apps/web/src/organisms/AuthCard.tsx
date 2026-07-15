import type { AuthField } from '../molecules/AuthForm'
import { AuthForm } from '../molecules/AuthForm'
import { AuthBanner } from './AuthBanner'
import { SocialButton } from '../atoms/SocialButton'

interface AuthCardProps {
  bannerSrc: string
  headline: string
  description: string
  fields: AuthField[]
  buttonLabel: string
  socialLinks: Array<{ label: string; iconSrc: string; href: string }>
}

export function AuthCard({
  bannerSrc,
  headline,
  description,
  fields,
  buttonLabel,
  socialLinks,
}: AuthCardProps) {
  return (
    <section className="auth-card">
      <aside className="auth-card__aside">
        <AuthBanner
          bannerSrc={bannerSrc}
          title={headline}
          subtitle={description}
        />
      </aside>
      <div className="auth-card__content">
        <div className="auth-card__header">
          <span className="auth-card__label">Login</span>
          <h1 className="auth-card__heading">Boas-vindas! Faça seu login.</h1>
        </div>

        <AuthForm
          fields={fields}
          buttonLabel={buttonLabel}
          onForgotPassword={() => undefined}
        />

        <div className="auth-card__divider">
          <span>ou entre com outras contas</span>
        </div>

        <div className="auth-card__social-grid">
          {socialLinks.map((link) => (
            <SocialButton
              key={link.label}
              label={link.label}
              iconSrc={link.iconSrc}
              href={link.href}
            />
          ))}
        </div>

        <p className="auth-card__footer">
          Ainda não tem conta? <a href="#">Crie seu cadastro!</a>
        </p>
      </div>
    </section>
  )
}
