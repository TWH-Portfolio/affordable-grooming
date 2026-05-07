import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SkipLink from './components/SkipLink'
import CookieBanner from './components/CookieBanner'
import StickyMobileCTA from './components/StickyMobileCTA'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

const NAV_HIDDEN_ROUTES = ['/legal']

export default function App() {
  const location = useLocation()
  const showNav = !NAV_HIDDEN_ROUTES.includes(location.pathname)

  return (
    <>
      <SkipLink />
      <ScrollToTop />
      {showNav && <Nav />}
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showNav && <Footer />}
      {showNav && <StickyMobileCTA />}
      <CookieBanner />
    </>
  )
}
