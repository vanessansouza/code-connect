interface AuthBannerProps {
  bannerSrc: string
  title?: string
  subtitle?: string
}

export function AuthBanner({ bannerSrc, title, subtitle }: AuthBannerProps) {
  const showOverlay = Boolean(title || subtitle)

  return (
    <div className="relative grid h-full min-h-[32rem] overflow-hidden bg-[#0B1220]">
      <img
        className="h-full w-full object-cover"
        src={bannerSrc}
        alt="Banner"
        width={1344}
        height={896}
        loading="eager"
        fetchPriority="high"
        style={{ aspectRatio: '3 / 2' }}
      />
      {showOverlay ? (
        <div className="absolute inset-6 flex flex-col justify-end gap-4 text-white">
          <p className="text-xs uppercase tracking-[0.25em] opacity-90">code connect</p>
          {title ? <h2 className="text-3xl font-semibold leading-tight">{title}</h2> : null}
          {subtitle ? <p className="max-w-xs text-sm opacity-90">{subtitle}</p> : null}
        </div>
      ) : null}
    </div>
  )
}
