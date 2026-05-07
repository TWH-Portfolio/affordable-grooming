import { Link } from 'react-router-dom'
import { Phone, Star, Clock, Shield, Sparkles, ChevronRight } from 'lucide-react'
import site from '../content/site.json'
import services from '../content/services.json'
import testimonials from '../content/testimonials.json'

const processSteps = [
  { num: '01', label: 'Book', desc: 'Call or fill out the form. We confirm same-day.' },
  { num: '02', label: 'Drop Off', desc: 'Bring your pup in. Quick health check at the door.' },
  { num: '03', label: 'The Affordable Touch', desc: 'Bath, groom, or trim. Breed-appropriate every time.' },
  { num: '04', label: 'Pick Up', desc: 'Clean dog, happy tail, fair receipt.' },
]

export default function Home() {
  const topServices = services.slice(0, 3)

  return (
    <>
      {/* Hero Section - Split layout */}
      <section className="relative pt-20 md:pt-0 min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Column */}
            <div className="order-2 md:order-1 pb-8 md:pb-0">
              <p className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                Richmond, VA Dog Grooming
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-fg leading-tight text-balance mb-6">
                54 REVIEWS.<br />
                ZERO UNHAPPY PUPS.
              </h1>
              <p className="text-lg text-fg-muted leading-relaxed max-w-lg mb-8">
                Professional grooming on Iron Bridge Road. Bath and brush, full breed cuts,
                nail trims, de-shedding. Every dog leaves clean, calm, and looking their best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-6 py-3.5 rounded-card hover:bg-navy-dark transition-colors text-base"
                >
                  <Phone className="w-5 h-5" />
                  Call {site.phone}
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3.5 rounded-card hover:bg-navy hover:text-white transition-colors text-base"
                >
                  View Services
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Photo Column */}
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-card overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?w=800&q=80"
                  alt="Dog being professionally groomed at Affordable Grooming salon"
                  className="w-full h-full object-cover"
                  width={800}
                  height={1000}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              {/* Floating trust badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-card shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-fg text-lg">{site.googleRating}</span>
                </div>
                <div className="w-px h-8 bg-cream-dark" />
                <div className="text-sm">
                  <p className="font-semibold text-fg">{site.reviewCount} Reviews</p>
                  <p className="text-fg-muted text-xs">on Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-y border-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <Star className="w-5 h-5 text-navy mb-1" />
              <span className="font-bold text-2xl text-fg">4.7</span>
              <span className="text-xs text-fg-muted">Google Rating</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-5 h-5 text-navy mb-1" />
              <span className="font-bold text-2xl text-fg">54</span>
              <span className="text-xs text-fg-muted">Five-Star Reviews</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-5 h-5 text-navy mb-1" />
              <span className="font-bold text-2xl text-fg">Same Day</span>
              <span className="text-xs text-fg-muted">Appointments Available</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Sparkles className="w-5 h-5 text-navy mb-1" />
              <span className="font-bold text-2xl text-fg">6,520+</span>
              <span className="text-xs text-fg-muted">Happy Pups Groomed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-fg">
              BATH. GROOM. TRIM. REPEAT.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {topServices.map((svc) => (
              <Link
                key={svc.id}
                to={`/services#${svc.id}`}
                className="group bg-white rounded-card overflow-hidden border border-transparent hover:border-navy/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={600}
                    height={375}
                    loading="lazy"
                  />
                </div>
                <div className="p-6 border-l-4 border-transparent group-hover:border-navy transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-fg">{svc.name}</h3>
                    <span className="text-sm font-semibold text-navy">{svc.price}</span>
                  </div>
                  <p className="text-sm text-fg-muted leading-relaxed line-clamp-2">{svc.description}</p>
                  <p className="text-xs text-navy font-medium mt-3">
                    Ideal for: {svc.idealFor}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors"
            >
              See All Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Affordable Touch - Process */}
      <section className="py-16 md:py-24 bg-navy-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">THE AFFORDABLE TOUCH</h2>
            <p className="text-white/60 mt-3 max-w-lg mx-auto">
              Four steps. Every visit. No surprises on the receipt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="relative">
                <span className="text-5xl font-bold text-white/10 block mb-3">{step.num}</span>
                <h3 className="text-lg font-bold text-white mb-2">{step.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fg">
              {site.reviewCount} REVIEWS. REAL DOGS. REAL OWNERS.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-cream rounded-card p-6 md:p-8 border border-cream-dark"
              >
                <p className="text-sm font-bold text-navy mb-3">{t.headline}</p>
                <p className="text-fg leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-fg">{t.name}</p>
                    <p className="text-xs text-fg-muted">{t.role}</p>
                  </div>
                  <span className="text-xs text-fg-muted">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer CTA Band */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            YOUR DOG DESERVES A GOOD GROOMER.
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Walk-ins welcome. Appointments preferred. Call us and we will get your pup on the schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-navy font-semibold px-8 py-4 rounded-card hover:bg-cream transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              Call {site.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-card hover:bg-white/10 transition-colors text-base"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
