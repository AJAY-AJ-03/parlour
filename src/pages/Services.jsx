import usePageTitle from '../hooks/usePageTitle'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import { services, whatsappLink } from '../data/salonData'

export default function Services() {
  usePageTitle('Services & Pricing | Glow Beauty Studio')

  return (
    <>
      {/* HEADER BANNER (Dark #0B0B0B) */}
      <section className="bg-dark text-text-light py-16 sm:py-24 border-b border-gold/15">
        <div className="container-page flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-gold" />
              <p className="label-eyebrow text-gold">The Menu</p>
            </div>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-text-light">
              Services &amp; Rituals
            </h1>
          </div>
          <p className="text-text-light/75 max-w-md text-base sm:text-lg leading-relaxed">
            Ten bespoke treatments, each tailored during a personal consultation.
            Prices shown are starting prices based on customization.
          </p>
        </div>
      </section>

      {/* SERVICES LIST (Dark #171717) */}
      <section className="bg-dark-card text-text-light py-12 sm:py-20 border-b border-white/10">
        <div className="container-page">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              reversed={i % 2 === 1}
              theme="dark"
            />
          ))}
        </div>
      </section>

      {/* CONSULTATION CTA BANNER (Light #FAF6F0) */}
      <section className="bg-ivory text-text-dark py-16 sm:py-24">
        <div className="container-page flex flex-col items-center text-center gap-6">
          <p className="label-eyebrow text-gold">Not Sure What You Need?</p>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            Message us and we'll guide your choice.
          </h2>
          <p className="text-text-muted max-w-md text-lg">
            Our team will recommend the ideal treatment based on your hair length, skin type and occasion.
          </p>
          <div className="mt-2">
            <Button
              href={whatsappLink('Hi Glow Beauty Studio, I need help choosing the right service.')}
              variant="primary"
            >
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
