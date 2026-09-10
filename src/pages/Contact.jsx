import usePageTitle from '../hooks/usePageTitle'
import ContactForm from '../components/ContactForm'
import { business, telLink, whatsappLink } from '../data/salonData'

export default function Contact() {
  usePageTitle('Contact & Book | Glow Beauty Studio')

  return (
    <>
      {/* HEADER BANNER (Dark #0B0B0B) */}
      <section className="bg-dark text-text-light py-16 sm:py-24 border-b border-gold/15">
        <div className="container-page">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gold" />
            <p className="label-eyebrow text-gold">Get In Touch</p>
          </div>
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-text-light max-w-3xl">
            Let's create your perfect beauty experience.
          </h1>
        </div>
      </section>

      {/* MAIN SPLIT SECTION (Light #F7F4EE background) */}
      <section className="bg-ivory text-text-dark py-14 sm:py-20 border-b border-dark/10">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Dark Info Panel */}
          <div className="lg:col-span-5 bg-dark text-text-light p-8 sm:p-12 rounded-3xl border border-gold/20 shadow-2xl flex flex-col gap-8">
            <div>
              <p className="label-eyebrow text-gold mb-2">Visit Studio</p>
              <h2 className="heading-display text-3xl text-text-light">
                Location &amp; Contact
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  &#128205;
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-1">Studio Address</p>
                  <address className="not-italic text-text-light/90 leading-relaxed">
                    {business.address}
                  </address>
                  <a
                    href={business.mapsLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold text-gold hover:text-gold-light underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  &#128222;
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-1">Phone Enquiries</p>
                  <a href={telLink} className="text-text-light/90 hover:text-gold transition-colors font-medium">
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  &#128172;
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-1">Instant WhatsApp</p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors font-medium"
                  >
                    Message us on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  &#128336;
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-1">Business Hours</p>
                  <div className="text-text-light/80 leading-relaxed">
                    {business.hours.map((h) => (
                      <p key={h.day}>
                        <span className="text-text-light font-medium">{h.day}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-text-light/60 uppercase tracking-wider">Follow Us</span>
                <div className="flex gap-4">
                  <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                    Instagram
                  </a>
                  <span className="text-white/20">|</span>
                  <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Light Form Panel */}
          <div className="lg:col-span-7 bg-cream rounded-3xl p-8 sm:p-12 border border-dark/10 shadow-lg">
            <p className="label-eyebrow text-gold mb-2">Book an Appointment</p>
            <h2 className="heading-display text-3xl sm:text-4xl text-text-dark mb-8">
              Tell us about your occasion
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-dark text-text-light border-t border-gold/15">
        <div className="w-full h-[420px] sm:h-[480px] relative">
          <iframe
            title="Glow Beauty Studio location"
            src={business.mapsEmbedUrl}
            className="w-full h-full border-0 filter grayscale contrast-125 brightness-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="absolute top-4 right-4 bg-dark/90 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 text-xs text-text-light pointer-events-none">
            <span className="text-gold font-semibold">&bull; Studio Location</span> {business.city}
          </div>
        </div>
      </section>
    </>
  )
}
