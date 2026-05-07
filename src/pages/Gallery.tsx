import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import site from '../content/site.json'

const galleryPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1527526029430-319f10814151?w=600&q=80',
    alt: 'Freshly groomed dog in the salon',
    label: 'Full Groom',
  },
  {
    src: 'https://images.unsplash.com/photo-1588269845464-8993565cac3a?w=600&q=80',
    alt: 'Dog being groomed with professional clippers',
    label: 'Breed Cut',
  },
  {
    src: 'https://images.unsplash.com/photo-1625321150203-cea4bee44b54?w=600&q=80',
    alt: 'Close-up of grooming session',
    label: 'Detail Work',
  },
  {
    src: 'https://images.unsplash.com/photo-1554830072-52d78d0d4c18?w=600&q=80',
    alt: 'Dog grooming in progress',
    label: 'Bath Time',
  },
  {
    src: 'https://images.unsplash.com/photo-1675430426271-d74b542f21e4?w=600&q=80',
    alt: 'Dog at the grooming salon',
    label: 'Blow Dry',
  },
  {
    src: 'https://images.unsplash.com/photo-1625277743460-43716b93507a?w=600&q=80',
    alt: 'Dog grooming session in progress',
    label: 'Ear Cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1582456891925-a53965520520?w=600&q=80',
    alt: 'Happy puppy after grooming visit',
    label: 'Puppy First Groom',
  },
  {
    src: 'https://images.unsplash.com/photo-1564424131516-c76a81dc5e41?w=600&q=80',
    alt: 'Cute puppy at the grooming shop',
    label: 'Happy Client',
  },
]

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold text-fg mb-4">
            BEFORE THE BATH. AFTER THE BRUSH.
          </h1>
          <p className="text-lg text-fg-muted max-w-2xl">
            Every dog that walks out of our shop looks and feels better than when they walked in.
            Here is the proof.
          </p>
        </div>
      </section>

      {/* Metrics strip */}
      <div className="bg-white border-y border-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap justify-center gap-8 text-center text-sm">
            <span className="text-fg-muted">
              <strong className="text-fg">6,520+</strong> dogs groomed
            </span>
            <span className="text-fg-muted">
              <strong className="text-fg">{site.reviewCount}</strong> Google reviews
            </span>
            <span className="text-fg-muted">
              <strong className="text-fg">{site.googleRating}</strong> star average
            </span>
            <span className="text-fg-muted">
              <strong className="text-fg">6</strong> services
            </span>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, idx) => (
              <figure
                key={idx}
                className="group relative rounded-card overflow-hidden aspect-square cursor-default"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={400}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                    {photo.label}
                  </span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            YOUR PUP COULD BE NEXT.
          </h2>
          <p className="text-white/70 mb-8">
            Book a grooming session and see the difference for yourself.
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
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
