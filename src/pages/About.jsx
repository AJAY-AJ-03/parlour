import usePageTitle from '../hooks/usePageTitle'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { business, stats, teamPhilosophy, whatsappLink } from '../data/salonData'

export default function About() {
  usePageTitle('About Us | Glow Beauty Studio')

  return (
    <>
      {/* HEADER BANNER (Dark #0B0B0B) */}
      <section className="bg-dark text-text-light py-16 sm:py-24 border-b border-gold/15">
        <div className="container-page">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gold" />
            <p className="label-eyebrow text-gold">About {business.name}</p>
          </div>
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-text-light max-w-3xl">
            Beauty is personal.
          </h1>
          <p className="text-text-light/70 text-lg sm:text-xl max-w-2xl mt-6 leading-relaxed">
            Crafting individualized, consultation-first hair, skin and bridal experiences in Tirunelveli.
          </p>
        </div>
      </section>

      {/* HERO STORY SECTION (Light #F7F4EE) */}
      <section className="bg-ivory text-text-dark border-b border-dark/10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 aspect-[4/3] lg:aspect-[5/4] relative">
            <img
              src={teamPhilosophy.storyImage}
              alt="Beauty professional styling a client's hair"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/20" />
          </div>
          <div className="lg:col-span-5 bg-cream flex items-center p-8 sm:p-14 lg:p-16">
            <div className="max-w-lg flex flex-col gap-6">
              <p className="label-eyebrow text-gold">Our Story</p>
              <h2 className="heading-display text-3xl sm:text-4xl text-text-dark">
                Founded on care, craft and hospitality.
              </h2>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                {business.name} opened in {business.city} with a dedicated team
                and a simple promise: every client leaves looking like the
                best version of themselves, not a generic trend.
              </p>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                Over the years, that promise has grown into a full-service salon
                offering precision hair styling, facial therapies, nail artistry and bridal consultations — shaped around your individual beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP (Dark #171717) */}
      <section className="bg-dark-card text-text-light py-14 border-b border-white/10">
        <div className="container-page grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 p-6 rounded-2xl bg-dark/50 border border-gold/15">
              <span className="font-serif text-4xl sm:text-5xl text-gold font-medium">
                {s.value}
              </span>
              <span className="text-xs sm:text-sm text-text-light/70 uppercase tracking-wider font-semibold">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY (Light #EFE9DE) */}
      <section className="bg-cream text-text-dark py-16 sm:py-24 border-b border-dark/10">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Technique first, trend second."
              description="We believe beauty services should feel unhurried, comfortable and completely tailored."
              theme="light"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
            {[
              {
                number: '01',
                title: 'Listen before we style',
                copy: 'Every appointment opens with a real conversation about what you want and what actually suits your hair, skin tone and lifestyle.',
              },
              {
                number: '02',
                title: 'Invest in ongoing training',
                copy: 'Our stylists and therapists regularly train on new techniques so the studio never falls behind current best practice.',
              },
              {
                number: '03',
                title: 'Use what we would use ourselves',
                copy: 'We only carry products we are comfortable putting on our own skin and hair — nothing harsh, nothing untested.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row gap-6 p-8 bg-ivory rounded-2xl border border-dark/5 shadow-sm"
              >
                <span className="font-serif text-2xl font-bold text-gold">{item.number}</span>
                <div>
                  <h3 className="font-serif text-2xl text-text-dark mb-2">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed max-w-lg">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER (Dark #0B0B0B) */}
      <section className="bg-dark text-text-light py-16 sm:py-20 border-t border-gold/15">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="heading-display text-3xl sm:text-4xl text-text-light">
              Come experience the studio for yourself.
            </h2>
            <p className="text-text-light/70 mt-2 text-base">
              Walk-ins welcome, appointments preferred for bridal &amp; chemical services.
            </p>
          </div>
          <Button href={whatsappLink()} variant="primary">
            Book an Appointment
          </Button>
        </div>
      </section>
    </>
  )
}
