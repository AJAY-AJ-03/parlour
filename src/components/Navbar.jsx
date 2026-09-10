import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business, navLinks, whatsappLink } from '../data/salonData'
import Button from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-soft ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-md shadow-lg border-b border-gold/10 text-text-light'
          : 'bg-dark/80 backdrop-blur-sm border-b border-white/5 text-text-light'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl sm:text-2xl text-text-light tracking-tight group-hover:text-gold transition-colors duration-300">
            {business.name}
          </span>
          <span className="label-eyebrow mt-1 text-gold/80 group-hover:text-gold transition-colors">
            {business.city}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative text-sm tracking-wide py-2 transition-colors duration-300 ${
                  isActive
                    ? 'text-gold font-medium'
                    : 'text-text-light/80 hover:text-text-light'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ease-soft ${
                      isActive ? 'w-full shadow-[0_0_8px_rgba(201,162,39,0.8)]' : 'w-0'
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href={whatsappLink()} variant="primary">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-text-light focus:outline-none"
        >
          <span
            className={`block h-[2px] w-6 bg-gold transition-transform duration-300 ease-soft ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-gold transition-opacity duration-300 ease-soft ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-gold transition-transform duration-300 ease-soft ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-dark/95 backdrop-blur-xl transition-transform duration-500 ease-soft z-40 border-t border-gold/10 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-page flex flex-col h-full py-10">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `border-b border-gold/15 py-4 font-serif text-3xl transition-colors ${
                    isActive ? 'text-gold pl-2' : 'text-text-light/70 hover:text-text-light'
                  }`
                }
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4 pt-6">
            <Button href={whatsappLink()} variant="primary" className="w-full">
              Book Appointment
            </Button>
            <a
              href={`tel:${business.phoneRaw}`}
              className="text-center text-sm text-text-light/60 py-2 hover:text-gold transition-colors"
            >
              or call {business.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

