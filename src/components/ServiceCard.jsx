import { whatsappLink } from '../data/salonData'

export default function ServiceCard({ service, reversed = false, theme = 'light' }) {
  const isDark = theme === 'dark'

  return (
    <article
      className={`group border-t py-10 sm:py-14 transition-all duration-300 ${
        isDark ? 'border-white/10' : 'border-dark/10'
      }`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          reversed ? 'lg:[direction:rtl]' : ''
        }`}
      >
        <div className={`lg:col-span-5 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg border border-gold/10">
            <img
              src={service.image}
              alt={service.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            <span className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md text-gold text-xs font-mono font-semibold px-3 py-1 rounded-full border border-gold/30">
              {service.number}
            </span>
          </div>
        </div>

        <div className={`lg:col-span-7 flex flex-col gap-4 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
          <div className="flex items-baseline justify-between gap-4">
            <h3
              className={`heading-display text-2xl sm:text-3xl lg:text-4xl ${
                isDark ? 'text-text-light' : 'text-text-dark'
              }`}
            >
              {service.name}
            </h3>
            <span className="font-serif text-xl sm:text-2xl text-gold font-medium whitespace-nowrap">
              {service.price}
            </span>
          </div>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-text-light/70' : 'text-text-muted'
            }`}
          >
            {service.description}
          </p>
          <div className="pt-2">
            <a
              href={whatsappLink(`Hi Glow Beauty Studio, I'd like to book "${service.name}". Please share the available timings.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors group/btn"
            >
              <span>Book this service</span>
              <span className="transform group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

