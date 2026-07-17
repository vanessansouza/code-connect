import { AuthCard } from '../organisms/AuthCard'

const registerFields = [
  {
    name: 'name',
    label: 'Nome',
    type: 'text',
    placeholder: 'Nome completo',
    autoComplete: 'name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Digite seu email',
    autoComplete: 'email',
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    placeholder: '********',
    autoComplete: 'new-password',
  },
]

const socialLinks = [
  { label: 'Github', iconSrc: '/Github.png', href: 'https://github.com' },
  { label: 'Gmail', iconSrc: '/Gmail.png', href: 'https://mail.google.com' },
]

export function RegisterPage() {
  return (
    <main className="page page--auth">
      <AuthCard
        bannerSrc="/icons.svg"
        fields={registerFields}
        buttonLabel="Cadastrar →"
        socialLinks={socialLinks}
        headerLabel="Cadastro"
        heading="Cadastro"
        subheading="Olá! Preencha seus dados."
        footerText="Já tem conta?"
        footerLinkLabel="Faça seu login! →"
        footerLinkHref="#"
        showRemember
        showForgotPassword={false}
        mode="register"
      />
    </main>
  )
}
