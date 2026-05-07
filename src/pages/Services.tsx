import { Link } from 'react-router-dom'
import { Phone, Clock, ChevronRight } from 'lucide-react'
import site from '../content/site.json'
import services from '../content/services.json'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-fg mb-4">
            EVERY BREED. EVERY SIZE. ONE STANDARD.
          </h1>
          <p className="text-lg text-fg-muted max-w-2xl">
            From a 15-minute nail trim to a 2-hour full groom, every service uses breed-appropriate
            products and techniques. Prices are upfront. No hidden fees.
          </p>
        </div>
      </section>

      {/* Service quick nav */}
      <div className="sticky top-16 md:top-20 z-20 bg-white border-b border-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="text-sm font-medium px-4 py-2 rounded-card border border-cream-dark text-fg-muted hover:border-navy hover:text-navy transition-colors whitespace-nowrap"
              >
                {svc.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {services.map((svc, idx) => (
            <article
              key={svc.id}
              id={svc.id}
              className="scroll-mt-32 bg-white rounded-card overflow-hidden border border-cream-dark hover:border-navy/20 transition-colors"
            >
              <div className={`grid md:grid-cols-2 ${idx % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                <div className={`aspect-[16/10] md:aspect-auto overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={svc.image}
                    alt={svc.imageAlt}
                    className="w-full h-full object-cover"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div className={`p-6 md:p-10 flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-navy/10">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl font-bold text-fg">{svc.name}</h2>
                  </div>
                  <p className="text-fg-muted leading-relaxed mb-4">{svc.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy">
                      {svc.price}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-fg-muted">
                      <Clock className="w-4 h-4" />
                      {svc.duration}
                    </span>
                  </div>
                  <p className="text-xs text-navy font-medium bg-cream px-3 py-2 rounded-card inline-block">
                    Ideal for: {svc.idealFor}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NOT SURE WHICH SERVICE?
          </h2>
          <p className="text-white/70 mb-8">
            Call us and describe your dog. We will recommend the right service and give you an exact price before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-navy font-semibold px-8 py-4 rounded-card hover:bg-cream transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {site.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-card hover:bg-white/10 transition-colors"
            >
              Send a Message
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
