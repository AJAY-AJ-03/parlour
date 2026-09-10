import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import TestimonialCard from '../components/TestimonialCard'
import Button from '../components/Button'
import { testimonials, whatsappLink } from '../data/salonData'

const categories = ['All', 'Bridal', 'Hair Care', 'Facial & Skin', 'Party Glam']

export default function Testimonials() {
  usePageTitle('Client Testimonials | Glow Beauty Studio')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTestimonials =
    selectedCategory === 'All'
      ? testimonials
      : testimonials.filter(
          (t) => t.category.toLowerCase() === selectedCategory.toLowerCase()
        )

  return (
    <>
      {/* HEADER BANNER (Dark #0B0B0B) */}
      <section className="bg-dark text-text-light py-16 sm:py-24 border-b border-gold/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-gold" />
                <p className="label-eyebrow text-gold">Client Stories &amp; Reviews</p>
              </div>
              <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-text-light leading-none">
                In Their Own Words.
              </h1>
              <p className="text-text-light/75 text-lg sm:text-xl mt-6 leading-relaxed">
                Read authentic feedback from women who trust Glow Beauty Studio for their wedding days, hair renewals, and skincare rituals.
              </p>
            </div>

            {/* Rating Summary Card */}
            <div className="bg-dark-card p-6 sm:p-8 rounded-3xl border border-gold/25 shadow-2xl flex flex-col items-center text-center shrink-0">
              <div className="flex items-center gap-1 text-gold text-2xl font-bold mb-1">
                <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <span className="font-serif text-4xl text-text-light font-normal">4.9 / 5.0</span>
              <span className="text-xs uppercase tracking-widest text-gold mt-1 font-semibold">
                Verified Client Rating
              </span>
              <span className="text-xs text-text-light/50 mt-1">Based on 1,000+ appointments</span>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-12 pt-8 border-t border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gold text-dark shadow-[0_4px_15px_rgba(201,162,39,0.4)]'
                    : 'bg-dark-card text-text-light/70 hover:text-text-light border border-white/10 hover:border-gold/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STATS HIGHLIGHT STRIP */}
      <section className="bg-dark-card text-text-light py-10 border-b border-white/10">
        <div className="container-page grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="font-serif text-3xl sm:text-4xl text-gold font-medium">99%</span>
            <p className="text-xs text-text-light/60 uppercase tracking-wider mt-1">Satisfaction Rate</p>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl text-gold font-medium">1000+</span>
            <p className="text-xs text-text-light/60 uppercase tracking-wider mt-1">Happy Clients</p>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl text-gold font-medium">100%</span>
            <p className="text-xs text-text-light/60 uppercase tracking-wider mt-1">Verified Reviews</p>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl text-gold font-medium">5+ Yrs</span>
            <p className="text-xs text-text-light/60 uppercase tracking-wider mt-1">In Tirunelveli</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS MASONRY GRID (Alternating Contrast Cards) */}
      <section className="bg-ivory text-text-dark py-16 sm:py-24 border-b border-dark/10">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {filteredTestimonials.map((t, i) => (
              <div
                key={t.id}
                className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${
                  i % 2 === 0
                    ? 'bg-cream text-text-dark border-dark/10'
                    : 'bg-dark text-text-light border-gold/25 shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  {/* Category Pill */}
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    i % 2 === 0 ? 'bg-gold/20 text-gold-deep border border-gold/30' : 'bg-gold/20 text-gold border border-gold/40'
                  }`}>
                    {t.category}
                  </span>

                  {/* Verified Badge */}
                  {t.verified && (
                    <span className="text-xs font-semibold text-gold inline-flex items-center gap-1">
                      <span>&#10003;</span> Verified Client
                    </span>
                  )}
                </div>

                <TestimonialCard
                  testimonial={t}
                  index={i}
                  theme={i % 2 === 0 ? 'light' : 'dark'}
                />

                <div className={`pt-4 border-t ${i % 2 === 0 ? 'border-dark/10' : 'border-white/10'} flex items-center justify-between text-xs`}>
                  <span className={i % 2 === 0 ? 'text-text-muted' : 'text-text-light/60'}>
                    Location: {t.location}
                  </span>
                  <span className={i % 2 === 0 ? 'text-text-muted' : 'text-text-light/60'}>
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER (Dark #0B0B0B) */}
      <section className="bg-dark text-text-light py-20 sm:py-28 border-t border-gold/15">
        <div className="container-page flex flex-col items-center text-center gap-6">
          <p className="label-eyebrow text-gold">Ready to Experience It Yourself?</p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-text-light max-w-2xl">
            Book your consultation today.
          </h2>
          <p className="text-text-light/75 max-w-md text-lg leading-relaxed">
            Message us on WhatsApp (+91 93613 68600) to reserve your slot or ask any questions about our bridal &amp; salon services.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Button href={whatsappLink('Hi Glow Beauty Studio, I would like to book an appointment.')} variant="primary">
              Book on WhatsApp
            </Button>
            <Button to="/contact" variant="outlineLight">
              Contact Studio
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
