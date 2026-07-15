import { AuthCard } from '../organisms/AuthCard'

const loginFields = [
  {
    name: 'email',
    label: 'Email ou usuário',
    type: 'text',
    placeholder: 'usuario123',
    autoComplete: 'username',
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    placeholder: '********',
    autoComplete: 'current-password',
  },
]

const socialLinks = [
  { label: 'Github', iconSrc: '/Github.png', href: 'https://github.com' },
  { label: 'Gmail', iconSrc: '/Gmail.png', href: 'https://mail.google.com' },
]

export function LoginPage() {
  return (
    <main className="page page--auth">
      <AuthCard
        bannerSrc="/banner.png"
        headline="Bem-vindas"
        description="Conecte-se com a sua próxima oportunidade de código."
        fields={loginFields}
        buttonLabel="Login"
        socialLinks={socialLinks}
      />
    </main>
  )
}
