import { useState } from 'react'
import { Phone, MapPin, Mail, Clock } from 'lucide-react'
import site from '../content/site.json'
import services from '../content/services.json'

const serviceHints: Record<string, string> = {
  'bath-brush': 'Helpful to mention: breed, coat length, any skin sensitivities.',
  'full-groom': 'Helpful to mention: breed, preferred cut style, when they were last groomed.',
  'nail-trim': 'Walk-ins are welcome for nail trims. Call ahead to skip the wait.',
  'de-shedding': 'Helpful to mention: breed and how heavy the shedding has been.',
  'puppy-first': 'Helpful to mention: puppy age, breed, and any fears or anxieties.',
  'teeth-brushing': 'This is an add-on service. Let us know which main service to pair it with.',
}

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedService, setSelectedService] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const honeypot = (form.elements.namedItem('company_website') as HTMLInputElement)?.value
    if (honeypot) return

    // In production, this would POST to a Cloudflare Worker
    setFormState('success')
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-fg mb-4">
            BOOK YOUR DOG IN.
          </h1>
          <p className="text-lg text-fg-muted max-w-2xl">
            Call for the fastest booking. Or fill out the form and we will get back to you within the hour.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info + Map */}
            <div>
              <h2 className="text-2xl font-bold text-fg mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                <a
                  href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-fg group-hover:text-navy transition-colors">{site.phone}</p>
                    <p className="text-sm text-fg-muted">Call or text</p>
                  </div>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 group"
                >
                  <Mail className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-fg group-hover:text-navy transition-colors">{site.email}</p>
                    <p className="text-sm text-fg-muted">Email us anytime</p>
                  </div>
                </a>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-fg group-hover:text-navy transition-colors">
                      {site.address.street}
                    </p>
                    <p className="text-sm text-fg-muted">
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-fg">Mon - Sat: 8am - 6pm</p>
                    <p className="text-sm text-fg-muted">Closed Sunday</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-card overflow-hidden aspect-[16/9] border border-cream-dark">
                <iframe
                  title="Affordable Grooming location"
                  src="https://maps.google.com/maps?q=6520+Iron+Bridge+Rd+suite+d+Richmond+VA+23234&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Booking placeholder */}
              <div className="mt-6 bg-cream rounded-card p-5 border border-cream-dark">
                <p className="text-sm font-semibold text-fg mb-1">Online Booking Coming Soon</p>
                <p className="text-sm text-fg-muted">
                  We are setting up online booking. For now, call or use the form to schedule.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-fg mb-6">Send Us a Message</h2>

              <div role="status" aria-live="polite">
                {formState === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-card p-4 mb-6">
                    <p className="text-green-800 font-semibold">Message sent.</p>
                    <p className="text-green-700 text-sm mt-1">
                      We will get back to you within the hour during business hours.
                    </p>
                  </div>
                )}
                {formState === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-card p-4 mb-6">
                    <p className="text-red-800 font-semibold">Something went wrong.</p>
                    <p className="text-red-700 text-sm mt-1">
                      Please call us at {site.phone} instead.
                    </p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute -left-[9999px] opacity-0 h-0 w-0"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-fg mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-card border border-cream-dark bg-cream focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-fg mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-card border border-cream-dark bg-cream focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                    placeholder="(804) 555-0100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-fg mb-1">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-card border border-cream-dark bg-cream focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-fg mb-1">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-card border border-cream-dark bg-cream focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {services.map((svc) => (
                      <option key={svc.id} value={svc.id}>
                        {svc.name} ({svc.price})
                      </option>
                    ))}
                    <option value="not-sure">Not sure yet</option>
                  </select>
                  {selectedService && serviceHints[selectedService] && (
                    <p className="text-xs text-navy mt-2 bg-cream-dark px-3 py-2 rounded-card">
                      {serviceHints[selectedService]}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="dog-info" className="block text-sm font-medium text-fg mb-1">
                    Tell Us About Your Dog
                  </label>
                  <textarea
                    id="dog-info"
                    name="dog-info"
                    rows={4}
                    className="w-full px-4 py-3 rounded-card border border-cream-dark bg-cream focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors resize-none"
                    placeholder="Breed, age, weight, any special needs or behavioral notes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-white font-semibold py-3.5 rounded-card hover:bg-navy-dark transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-fg-muted text-center">
                  We respond within the hour during business hours. No spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
