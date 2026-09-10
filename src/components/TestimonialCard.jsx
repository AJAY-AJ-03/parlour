function Stars({ rating }) {
  return (
    <div className="flex gap-1.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < rating ? 'fill-gold text-gold' : 'fill-gold/20 text-gold/20'}`}
        >
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({ testimonial, index, theme = 'light' }) {
  const isDark = theme === 'dark'
  const isEven = index % 2 === 0

  return (
    <figure
      className={`flex flex-col gap-6 py-10 sm:py-14 transition-all ${
        isEven ? '' : 'sm:pl-10 lg:pl-16'
      }`}
    >
      <span className="font-serif text-6xl sm:text-7xl text-gold/40 leading-none select-none">
        &ldquo;
      </span>
      <blockquote
        className={`heading-display text-xl sm:text-2xl lg:text-3xl -mt-8 sm:-mt-10 max-w-2xl leading-snug ${
          isDark ? 'text-text-light' : 'text-text-dark'
        }`}
      >
        {testimonial.quote}
      </blockquote>
      <figcaption className="flex items-center gap-4 mt-2">
        <div className="flex flex-col">
          <span className={`text-sm font-semibold ${isDark ? 'text-text-light' : 'text-text-dark'}`}>
            {testimonial.name}
          </span>
          <span className={`text-xs ${isDark ? 'text-gold-light/80' : 'text-text-muted'}`}>
            {testimonial.service}
          </span>
        </div>
        <span className={`w-px h-8 ${isDark ? 'bg-white/10' : 'bg-dark/10'}`} />
        <Stars rating={testimonial.rating} />
      </figcaption>
    </figure>
  )
}

