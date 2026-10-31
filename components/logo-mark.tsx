export function LogoMark({ className = 'h-10 w-10' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <img
      src="/images/logo-mark-hd.png"
      alt="Centre Dentaire Dalil"
      className={`object-contain ${className}`}
    />
  )
}
