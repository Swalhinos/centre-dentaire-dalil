export function LogoMark({ variant = 'light', className = 'h-10 w-10' }: { variant?: 'light' | 'dark'; className?: string }) {
  const id = variant === 'dark' ? 'dalil-tooth-dark' : 'dalil-tooth-light'
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#1A7A6B" />
          <stop offset="100%" stopColor="#14273D" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill={variant === 'dark' ? '#FFFFFF' : `url(#${id})`} opacity={variant === 'dark' ? 0.15 : 1} />
      <path d="M15 10c2.5-2 5.5-2 9 0 3.5-2 6.5-2 9 0 2 3 1.5 7-0.5 11-1 4-2 8-4.5 8-2 0-2.5-4-4.5-4-2 0-2.5 4-4.5 4-2.5 0-3.5-4-4.5-8-2-4-2.5-8-0.5-11Z" fill="#FFFFFF" />
    </svg>
  )
}
