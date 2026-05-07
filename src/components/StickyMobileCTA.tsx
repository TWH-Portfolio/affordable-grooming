import { Phone } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useScrollProgress } from '../hooks/useScrollProgress'
import site from '../content/site.json'

export default function StickyMobileCTA() {
  const scrolled = useScrollProgress(600)
  const location = useLocation()

  if (location.pathname === '/contact') return null
  if (!scrolled) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-navy p-3 shadow-lg">
      <a
        href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
        className="flex items-center justify-center gap-2 text-white font-semibold text-base"
      >
        <Phone className="w-5 h-5" />
        Call Now: {site.phone}
      </a>
    </div>
  )
}
