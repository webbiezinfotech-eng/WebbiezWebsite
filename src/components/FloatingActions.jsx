import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Mail } from 'lucide-react'
import { contact } from '../data/site.js'
import useSectionNav from '../hooks/useSectionNav.js'

export default function FloatingActions() {
  const [show, setShow] = useState(false)
  const goToSection = useSectionNav()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[9200] flex flex-col items-end gap-3 sm:right-5"
        >
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email Webbiez Infotech"
            className="grid h-11 w-11 place-items-center rounded-full glass text-brand-200 transition-colors hover:text-white"
          >
            <Mail className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
          </a>
          <a
            href="#/contact"
            onClick={(e) => { e.preventDefault(); goToSection('contact') }}
            aria-label="Contact Webbiez Infotech"
            className="grid h-11 w-11 place-items-center rounded-full glass text-brand-200 transition-colors hover:text-white"
          >
            <Phone className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 sm:px-5 sm:py-3.5 font-display text-[13px] font-bold text-[#06301a] shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
