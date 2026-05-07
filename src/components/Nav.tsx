import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, Scissors } from 'lucide-react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import site from '../content/site.json'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const scrolled = useScrollProgress(60)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
            <Scissors className="w-6 h-6 text-navy group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-lg text-fg">Affordable Grooming</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-navy'
                    : 'text-fg-muted hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-card hover:bg-navy-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              {site.phone}
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-fg"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 border-t border-cream-dark mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium px-3 py-2 rounded-card transition-colors ${
                    location.pathname === link.to
                      ? 'bg-cream-dark text-navy'
                      : 'text-fg-muted hover:bg-cream-dark hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-5 py-3 rounded-card mt-2"
              >
                <Phone className="w-4 h-4" />
                Call {site.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
