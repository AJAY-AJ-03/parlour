import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gold text-dark font-semibold hover:bg-gold-light shadow-[0_4px_20px_rgba(201,162,39,0.25)] hover:shadow-[0_6px_24px_rgba(201,162,39,0.4)]',
  dark:
    'bg-dark text-text-light hover:bg-dark-card border border-gold/30 hover:border-gold',
  outline:
    'border border-gold/50 text-gold hover:border-gold hover:bg-gold hover:text-dark',
  outlineLight:
    'border border-white/40 text-text-light hover:border-gold hover:bg-gold hover:text-dark',
  ghost:
    'text-gold hover:text-gold-light',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-soft rounded-full cursor-pointer'
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

