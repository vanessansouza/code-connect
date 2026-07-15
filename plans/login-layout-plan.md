# Plano de implementação do layout de login

## Objetivo
Criar a página de login com atomic design, usando o mesmo layout base para futura página de cadastro.

## Estrutura proposta

- `apps/web/src/atoms/`
  - `Button.tsx`
  - `Input.tsx`
  - `Checkbox.tsx`
  - `SocialButton.tsx`
- `apps/web/src/molecules/`
  - `AuthForm.tsx`
- `apps/web/src/organisms/`
  - `AuthBanner.tsx`
  - `AuthCard.tsx`
- `apps/web/src/pages/`
  - `LoginPage.tsx`

## Detalhes de implementação

1. `LoginPage` renderiza `AuthCard` com campos de login:
   - Email ou usuário
   - Senha
2. `AuthCard` combina `AuthBanner` e `AuthForm`.
3. `AuthBanner` usa `public/banner.png` como imagem de fundo.
4. `AuthForm` aceita `fields` para reuso em páginas de login e cadastro.
5. Social buttons usam `public/Github.png` e `public/Gmail.png`.

## Próximos passos planejados

- Criar `RegisterPage.tsx` com os mesmos componentes base.
- Reusar `AuthForm` passando outros campos e outro `bannerSrc`.
- Ajustar navegação entre login e cadastro quando for necessário.

## Observações

- O diretório `/plans` foi criado na raiz do projeto.
- O plano foi salvo em `plans/login-layout-plan.md`.
