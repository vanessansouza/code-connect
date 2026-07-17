import type { AuthField } from '../molecules/AuthForm'
import { AuthForm } from '../molecules/AuthForm'
import { AuthBanner } from './AuthBanner'
import { SocialButton } from '../atoms/SocialButton'

interface AuthCardProps {
  bannerSrc: string
  bannerTitle?: string
  bannerSubtitle?: string
  fields: AuthField[]
  buttonLabel: string
  socialLinks: Array<{ label: string; iconSrc: string; href: string }>
  headerLabel?: string
  heading?: string
  subheading?: string
  footerText?: string
  footerLinkLabel?: string
  footerLinkHref?: string
  showSocialLogin?: boolean
  dividerText?: string
  showRemember?: boolean
  showForgotPassword?: boolean
  onForgotPassword?: () => void
  mode?: 'login' | 'register'
}

export function AuthCard({
  bannerSrc,
  bannerTitle,
  bannerSubtitle,
  fields,
  buttonLabel,
  socialLinks,
  headerLabel = 'Login',
  heading = 'Boas-vindas! Faça seu login.',
  subheading,
  footerText = 'Ainda não tem conta?',
  footerLinkLabel = 'Crie seu cadastro!',
  footerLinkHref = '#',
  showSocialLogin = true,
  dividerText = 'ou entre com outras contas',
  showRemember = true,
  showForgotPassword = true,
  onForgotPassword,
  mode = 'login',
}: AuthCardProps) {
  return (
    <section className="grid max-w-[1120px] grid-cols-1 overflow-hidden rounded-[28px] bg-[#0F141F] shadow-[0_40px_120px_rgba(0,0,0,0.25)] md:grid-cols-[1fr_1fr]">
      <aside className="bg-[#05070F]">
        <AuthBanner bannerSrc={bannerSrc} title={bannerTitle} subtitle={bannerSubtitle} />
      </aside>

      <div className="flex flex-col justify-center gap-7 px-10 py-11 md:px-12 md:py-11">
        <div className="grid gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#81FE88]">{headerLabel}</span>
          <h1 className="text-4xl font-semibold leading-tight text-[#E5E7EB] md:text-5xl">{heading}</h1>
          {subheading ? <p className="max-w-xl text-base text-[#D1D5DB]">{subheading}</p> : null}
        </div>

        <AuthForm
          fields={fields}
          buttonLabel={buttonLabel}
          showRemember={showRemember}
          showForgotPassword={showForgotPassword}
          onForgotPassword={onForgotPassword}
          mode={mode}
        />

        {showSocialLogin && socialLinks.length > 0 && (
          <>
            <div className="flex items-center gap-3 text-sm text-[#D1D5DB]">
              <div className="h-px flex-1 bg-white/10" />
              <span>{dividerText}</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <SocialButton key={link.label} label={link.label} iconSrc={link.iconSrc} href={link.href} />
              ))}
            </div>
          </>
        )}

        <p className="text-sm text-[#D1D5DB]">
          {footerText}{' '}
          <a className="text-[#81FE88] hover:text-[#A9FFB7]" href={footerLinkHref}>
            {footerLinkLabel}
          </a>
        </p>
      </div>
    </section>
  )
}
