# Copilot Tailwind Guidelines

## Cores do projeto
Use a paleta de cores do tema Tailwind definida no `apps/web/tailwind.config.js`.

- `code-bg`: `#080A12`
- `code-panel`: `#05070F`
- `code-surface`: `#0F141F`
- `code-text`: `#E5E7EB`
- `code-muted`: `#A1A9B3`
- `code-accent`: `#81FE88`
- `code-accentDark`: `#52DC6A`
- `code-outline`: `rgba(255, 255, 255, 0.12)`
- `code-border`: `rgba(255, 255, 255, 0.08)`

### Recomendações
- Use classes como `bg-[#081A2B]` apenas se o token não existir, mas prefira `bg-code-surface` e `text-code-text`.
- Para botões de destaque, use `bg-[#81FE88]` com `text-[#0f172a]`.
- Para linhas e divisores, use `bg-white/10` ou `bg-code-outline`.

## Tamanhos de fonte
Use os tokens Tailwind mais próximos em vez de valores customizados sempre que possível.

- Títulos grandes: `text-4xl`, `md:text-5xl`
- Texto de cabeçalho e subtítulo: `text-base`, `text-lg`
- Labels e detalhes: `text-sm`, `text-xs`
- Botões principais: `text-base`, `font-semibold`

### Recomendações
- Evite `text-[18px]` e `text-[15px]` a menos que seja estritamente necessário.
- Prefira `leading-tight` e `leading-relaxed` para controle de altura de linha em vez de valores CSS customizados.
- Use `tracking-[0.2em]` apenas para uppercase em labels de formulário.

## Layout e contraste
- Mantenha os containers com fundo escuro e bordas suaves: `bg-code-surface`, `rounded-[28px]`, `shadow-[0_40px_120px_rgba(0,0,0,0.25)]`.
- Para textos acionáveis, use `text-[#81FE88]` e `hover:text-[#A9FFB7]`.
- Para elementos de formulário, use `border border-white/10` e `bg-white/5` com `text-white`.
- Evite bordas brancas fortes ao redor de imagens e painéis; use apenas `overflow-hidden` e `object-cover`.

## Observações
- O Tailwind v4 usa `@import "tailwindcss"` em `apps/web/src/index.css`.
- A configuração do PostCSS deve usar `@tailwindcss/postcss`.
