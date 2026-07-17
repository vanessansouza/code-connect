interface SocialButtonProps {
  label: string
  iconSrc: string
  href: string
}

export function SocialButton({ label, iconSrc, href }: SocialButtonProps) {
  return (
    <a
      className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
      href={href}
    >
      <img className="h-5 w-5" src={iconSrc} alt="" aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}
