interface AuthBannerProps {
  bannerSrc: string
  title: string
  subtitle: string
}

export function AuthBanner({ bannerSrc, title, subtitle }: AuthBannerProps) {
  return (
    <div className="auth-banner">
      <img className="auth-banner__image" src={bannerSrc} alt="Banner" />
      <div className="auth-banner__overlay">
        <p className="auth-banner__eyebrow">code connect</p>
        <h2 className="auth-banner__title">{title}</h2>
        <p className="auth-banner__subtitle">{subtitle}</p>
      </div>
    </div>
  )
}
