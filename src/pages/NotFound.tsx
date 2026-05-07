import { Link } from 'react-router-dom'
import { ArrowLeft, Scissors } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <Scissors className="w-16 h-16 text-navy/20 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
        <p className="text-xl text-fg mb-2">Page not found.</p>
        <p className="text-fg-muted mb-8">
          This page does not exist. Maybe the dog ran off with it.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-card hover:bg-navy-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
