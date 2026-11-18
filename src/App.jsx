import { Routes, Route, Navigate } from 'react-router-dom'
import useLenis from './hooks/useLenis.js'
import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import ScrollToTopOnNav from './components/ScrollToTopOnNav.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import Home from './pages/Home.jsx'
import FutureScopes from './pages/FutureScopes.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

export default function App() {
  useLenis()

  return (
    <div className="noise-overlay relative min-h-screen w-full max-w-full overflow-x-clip bg-ink-900 selection:bg-brand-500">
      <Loader />
      <Cursor />
      <ScrollProgress />
      <ScrollToTopOnNav />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/future-scopes" element={<FutureScopes />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}
