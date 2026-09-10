import { Link } from 'react-router-dom'
import { business, navLinks, services, whatsappLink, telLink } from '../data/salonData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-text-light border-t border-gold/15">
      <div className="container-page py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col gap-5">
          <Link to="/" className="font-serif text-2xl text-text-light hover:text-gold transition-colors">
            {business.name}
          </Link>
          <p className="text-sm text-text-light/70 leading-relaxed max-w-xs">
            A premium beauty studio in {business.city} offering hair, skin and
            bridal services designed around you.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-text-light/70 hover:text-gold transition-colors text-sm tracking-wide"
            >
              Instagram
            </a>
            <span className="text-gold/40">/</span>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-text-light/70 hover:text-gold transition-colors text-sm tracking-wide"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <p className="label-eyebrow text-gold">Quick Links</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-text-light/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <p className="label-eyebrow text-gold">Services</p>
          <ul className="flex flex-col gap-3">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  className="text-sm text-text-light/70 hover:text-gold transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <p className="label-eyebrow text-gold">Visit Us</p>
          <address className="not-italic text-sm text-text-light/70 leading-relaxed">
            {business.address}
          </address>
          <a href={telLink} className="text-sm text-text-light/90 hover:text-gold transition-colors">
            {business.phone}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold hover:text-gold-light font-medium transition-colors"
          >
            WhatsApp us &rarr;
          </a>
          <div className="pt-2 text-xs text-text-light/50">
            {business.hours.map((h) => (
              <p key={h.day}>
                {h.day}: {h.time}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-dark-card">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-light/50">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p className="text-gold/80">{business.address.split(',').slice(-2).join(',').trim()}</p>
        </div>
      </div>
    </footer>
  )
}

