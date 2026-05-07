import { Link } from 'react-router-dom'
import { Phone, Star, Heart, ChevronRight } from 'lucide-react'
import site from '../content/site.json'

const values = [
  {
    icon: Star,
    title: 'Fair Pricing',
    desc: 'We quote the exact price before the appointment. If your dog needs extra work, we call you first.',
  },
  {
    icon: Heart,
    title: 'Gentle Handling',
    desc: 'Anxious dogs get extra time and patience. Aggressive restraint is never used in this shop.',
  },
  {
    icon: Phone,
    title: 'Real People Answer',
    desc: 'When you call, a human picks up. We text back within the hour on busy days.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-fg mb-4">
            THE GROOMER WHO ANSWERS THE PHONE.
          </h1>
          <p className="text-lg text-fg-muted max-w-2xl">
            Affordable Grooming is a small, owner-operated grooming shop on Iron Bridge Road in
            Richmond. We groom dogs. That is the whole business.
          </p>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-card overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1597603413826-cd1c06b05222?w=800&q=80"
                alt="Inside the Affordable Grooming workspace"
                className="w-full h-full object-cover"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-fg mb-6">
                We started because grooming should not cost a fortune.
              </h2>
              <div className="space-y-4 text-fg-muted leading-relaxed">
                <p>
                  Dog grooming in Richmond used to mean choosing between cheap and
                  careless or expensive and fancy. We wanted a third option: skilled
                  groomers, clean shop, fair price.
                </p>
                <p>
                  Every groomer on our team has handled hundreds of breeds. We know that a
                  Goldendoodle and a Yorkshire Terrier need completely different cuts,
                  different shampoos, different drying techniques. We do not treat every
                  dog the same because they are not.
                </p>
                <p>
                  The shop is on Iron Bridge Road in Suite D. Parking is easy. Drop-off
                  takes about five minutes. We call you when your dog is ready. That is it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-fg text-center mb-10">HOW WE RUN THIS SHOP.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-card p-6 border border-cream-dark hover:border-navy/20 transition-colors"
              >
                <v.icon className="w-8 h-8 text-navy mb-4" />
                <h3 className="text-lg font-bold text-fg mb-2">{v.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-12 bg-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-3xl font-bold">{site.googleRating}</span>
              <p className="text-sm text-white/60 mt-1">Google Stars</p>
            </div>
            <div>
              <span className="text-3xl font-bold">{site.reviewCount}</span>
              <p className="text-sm text-white/60 mt-1">Reviews</p>
            </div>
            <div>
              <span className="text-3xl font-bold">6</span>
              <p className="text-sm text-white/60 mt-1">Services Offered</p>
            </div>
            <div>
              <span className="text-3xl font-bold">Suite D</span>
              <p className="text-sm text-white/60 mt-1">Iron Bridge Rd</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            COME SEE THE SHOP.
          </h2>
          <p className="text-white/70 mb-8">
            6520 Iron Bridge Rd, Suite D. Walk-ins welcome. Or call ahead so we are ready when you arrive.
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
              Get Directions
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
