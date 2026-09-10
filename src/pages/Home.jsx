import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import HeroSlider from '../components/HeroSlider'
import GalleryItem from '../components/GalleryItem'
import {
  business,
  stats,
  services,
  galleryImages,
  testimonials,
  teamPhilosophy,
  whatsappLink,
} from '../data/salonData'

export default function Home() {
  usePageTitle('Glow Beauty Studio | Premium Salon in Tirunelveli')
  const featured = services.slice(0, 3)
  const previewImages = galleryImages.slice(0, 5)

  return (
    <>
      {/* 1. HERO SECTION WITH FULL-WIDTH AUTO SLIDER & CENTERED TYPOGRAPHY (MATCHING USER SCREENSHOT) */}
      <HeroSlider>
        <div className="container-page flex flex-col items-center text-center max-w-4xl px-6 py-8 animate-rise">
          <p className="label-eyebrow text-gold text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold mb-4">
            GLOW BEAUTY STUDIO
          </p>
          <h1 className="heading-display text-5xl sm:text-7xl lg:text-8xl text-text-light font-normal leading-[1.06] tracking-tight">
            Where Beauty
            <br />
            Meets Confidence.
          </h1>
          <p className="text-text-light/85 text-base sm:text-lg lg:text-xl max-w-xl my-6 sm:my-8 leading-relaxed font-sans">
            Personalized beauty experiences designed to make you feel
            confident, radiant and unforgettable.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
            <Button href={whatsappLink()} variant="primary">
              Book an Appointment
            </Button>
            <Button to="/services" variant="outlineLight">
              Explore Services
            </Button>
          </div>
        </div>
      </HeroSlider>

      {/* 2. BRAND INTRODUCTION (Light Section #F7F4EE) */}
      <section className="bg-ivory text-text-dark border-b border-dark/10">
        <div className="container-page py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Studio"
              title="A studio built around how you want to feel."
              theme="light"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-6">
            <p className="text-text-muted text-lg leading-relaxed">
              {business.name} was founded on a simple idea — that great
              beauty care should feel personal, unhurried and genuinely
              suited to you. Every service is shaped around your hair, skin
              and the occasion ahead, delivered by a team that treats
              technique as seriously as hospitality.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-deep transition-colors w-fit border-b border-gold pb-0.5"
            >
              <span>Learn our story</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (Dark Section #171717) */}
      <section className="bg-dark-card text-text-light border-b border-white/10">
        <div className="container-page py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <SectionHeading
              eyebrow="What We Do"
              title="Signature services"
              description="A selection of what clients book most — our menu covers customized treatments."
              theme="dark"
            />
            <Button to="/services" variant="outline" className="w-fit">
              View All Services
            </Button>
          </div>
          <div>
            {featured.map((service, i) => (
              <ServiceCard key={service.slug} service={service} reversed={i % 2 === 1} theme="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL BRIDAL FEATURE (Dark Split Banner #0B0B0B) */}
      <section className="bg-dark text-text-light border-b border-gold/15">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-[4/3] lg:aspect-auto min-h-[380px]">
            <img
              src={teamPhilosophy.storyImage}
              alt="Bridal makeup artistry at Glow Beauty Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center bg-dark text-text-light">
            <div className="px-8 sm:px-14 lg:px-16 py-16 sm:py-20 max-w-xl">
              <p className="label-eyebrow text-gold mb-3">Bridal &amp; Occasion</p>
              <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-text-light mt-2">
                For the day you'll remember forever.
              </h2>
              <p className="text-text-light/75 text-lg leading-relaxed mt-6">
                From the first trial to the final touch-up before you walk
                out the door, our bridal team plans around your timeline so
                nothing feels rushed on your special day.
              </p>
              <div className="mt-8">
                <Button
                  href={whatsappLink('Hi Glow Beauty Studio, I would like to enquire about bridal packages.')}
                  variant="primary"
                >
                  Enquire About Bridal Packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US & STATS (Light Section #EFE9DE) */}
      <section className="bg-cream text-text-dark border-b border-dark/10">
        <div className="container-page py-16 sm:py-24">
          <SectionHeading
            eyebrow="Why Clients Choose Us"
            title="Care that shows in the details"
            align="left"
            theme="light"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 mt-14">
            {[
              {
                title: 'Trained Professionals',
                copy: 'A team trained across modern cutting, colour and bridal techniques, refreshed every season.',
              },
              {
                title: 'Premium Products',
                copy: 'We use professional-grade, skin-friendly formulas suited to Indian hair and skin types.',
              },
              {
                title: 'Personalized Consultations',
                copy: 'Every visit starts with a dedicated consultation, so the service actually fits what you need.',
              },
            ].map((item, i) => (
              <div key={item.title} className="flex flex-col gap-4 bg-ivory p-8 rounded-2xl border border-dark/5 shadow-sm">
                <span className="font-serif text-xl font-bold text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl text-text-dark">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-dark/10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-serif text-3xl sm:text-5xl text-text-dark font-medium">
                  {s.value}
                </span>
                <span className="text-xs sm:text-sm text-text-muted uppercase tracking-wider font-semibold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO SHOWCASE (Dark Section #0B0B0B) */}
      <section className="bg-dark text-text-light border-b border-white/10">
        <div className="container-page py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Portfolio"
              title="A glimpse of our work"
              theme="dark"
            />
            <Button to="/gallery" variant="outline" className="w-fit">
              View Full Gallery
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[minmax(160px,auto)] gap-4 sm:gap-6">
            {previewImages.map((imgItem) => (
              <GalleryItem key={imgItem.id} image={imgItem} onOpen={() => window.location.assign('/gallery')} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT STORIES (Light Section #F7F4EE) */}
      <section className="bg-ivory text-text-dark border-b border-dark/10">
        <div className="container-page py-16 sm:py-24">
          <SectionHeading eyebrow="Client Stories" title="In their words" theme="light" />
          <div className="mt-4 divide-y divide-dark/10">
            {testimonials.slice(0, 2).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} theme="light" />
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-deep transition-colors border-b border-gold pb-0.5"
            >
              <span>Read all client testimonials</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT CTA BANNER (Dark #0B0B0B) */}
      <section className="bg-dark text-text-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" />
        <div className="container-page py-20 sm:py-28 flex flex-col items-center text-center gap-6 relative z-10">
          <p className="label-eyebrow text-gold">Ready When You Are</p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-text-light max-w-2xl">
            Let's plan your next appointment.
          </h2>
          <p className="text-text-light/70 text-lg max-w-md">
            Message us on WhatsApp for the fastest response, or call the
            studio directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Button href={whatsappLink()} variant="primary">
              Book on WhatsApp
            </Button>
            <Button to="/contact" variant="outline">
              Contact Studio
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
