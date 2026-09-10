export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'md',
  theme = 'light',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  const titleSize =
    size === 'lg'
      ? 'text-4xl sm:text-5xl lg:text-6xl'
      : size === 'sm'
      ? 'text-2xl sm:text-3xl'
      : 'text-3xl sm:text-4xl lg:text-5xl'

  const isDarkTheme = theme === 'dark'

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && <p className="label-eyebrow">{eyebrow}</p>}
      <h2
        className={`heading-display ${titleSize} ${
          isDarkTheme ? 'text-text-light' : 'text-text-dark'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDarkTheme ? 'text-text-light/70' : 'text-text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

