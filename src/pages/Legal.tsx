import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Legal() {
  return (
    <div className="min-h-screen bg-cream pt-12 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-navy hover:text-navy-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-fg mb-10">Privacy & Terms</h1>

        <div className="space-y-10 text-fg-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-fg mb-4">Privacy Policy</h2>
            <p className="mb-3">
              Affordable Grooming ("we," "us," or "our") respects your privacy. This
              policy explains how we collect, use, and protect your personal information
              when you use our website or contact us for grooming services.
            </p>
            <h3 className="font-semibold text-fg mb-2 mt-6">Information We Collect</h3>
            <p className="mb-3">
              We collect information you voluntarily provide: your name, phone number,
              email address, and details about your pet when you submit a contact form
              or call us. We do not sell or share this information with third parties.
            </p>
            <h3 className="font-semibold text-fg mb-2 mt-6">How We Use Your Information</h3>
            <p className="mb-3">
              Your contact information is used solely to respond to your inquiry, schedule
              grooming appointments, and communicate about your pet's care. We may use
              analytics tools (Google Analytics) to understand website traffic patterns.
              These tools collect anonymized data about page views and device types.
            </p>
            <h3 className="font-semibold text-fg mb-2 mt-6">Cookies</h3>
            <p className="mb-3">
              Our website uses cookies to remember your preferences (such as cookie
              consent) and, if enabled, for analytics purposes. You can disable cookies
              in your browser settings.
            </p>
            <h3 className="font-semibold text-fg mb-2 mt-6">Your Rights</h3>
            <p>
              You may request deletion of your personal information at any time by
              contacting us at (804) 592-9242 or info@affordablegroomingrichmond.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-4">Terms of Service</h2>
            <p className="mb-3">
              By using this website, you agree to these terms. This website is provided
              as an informational resource about Affordable Grooming's services.
            </p>
            <h3 className="font-semibold text-fg mb-2 mt-6">Service Pricing</h3>
            <p className="mb-3">
              Prices listed on this website are starting prices and may vary based on
              breed, size, coat condition, and specific service requirements. Final
              pricing is confirmed before each appointment.
            </p>
            <h3 className="font-semibold text-fg mb-2 mt-6">Liability</h3>
            <p className="mb-3">
              While we take every precaution to ensure the safety and comfort of your
              pet during grooming, Affordable Grooming is not liable for pre-existing
              conditions, skin sensitivities, or behavioral issues that may affect the
              grooming outcome.
            </p>
            <h3 className="font-semibold text-fg mb-2 mt-6">Changes</h3>
            <p>
              We reserve the right to update these terms and our privacy policy at any
              time. Changes will be reflected on this page.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-dark">
          <p className="text-sm text-fg-muted">
            Last updated: May 2026. Questions? Call (804) 592-9242.
          </p>
        </div>
      </div>
    </div>
  )
}
