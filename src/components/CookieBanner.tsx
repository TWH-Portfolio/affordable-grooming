import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CONSENT_KEY = 'twh-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept(level: 'all' | 'necessary') {
    localStorage.setItem(CONSENT_KEY, level)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-cream-dark p-4 md:p-6 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-fg-muted flex-1">
          We use cookies to improve your experience. See our{' '}
          <Link to="/legal" className="underline text-navy hover:text-navy-light">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => accept('necessary')}
            className="text-sm px-4 py-2 border border-cream-dark rounded-card text-fg-muted hover:bg-cream-dark transition-colors"
          >
            Necessary Only
          </button>
          <button
            onClick={() => accept('all')}
            className="text-sm px-4 py-2 bg-navy text-white rounded-card hover:bg-navy-dark transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
