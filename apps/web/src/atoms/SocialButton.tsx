interface SocialButtonProps {
  label: string
  iconSrc: string
  href: string
}

export function SocialButton({ label, iconSrc, href }: SocialButtonProps) {
  return (
    <a className="social-button" href={href}>
      <img className="social-button__icon" src={iconSrc} alt="" aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}
