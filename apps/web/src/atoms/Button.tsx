import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 font-semibold transition duration-200'
  const variantStyles =
    variant === 'secondary'
      ? 'bg-white/10 text-white hover:bg-white/20 shadow-sm shadow-black/20'
      : 'bg-[#81FE88] text-[#0f172a] shadow-[0_18px_35px_rgba(34,211,238,0.28)] hover:bg-[#6ee677]'

  return <button className={`${baseStyles} ${variantStyles} ${className}`} {...props} />
}
