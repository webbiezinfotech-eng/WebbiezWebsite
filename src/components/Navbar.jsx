import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react'
import { nav } from '../data/site.js'
import useSectionNav from '../hooks/useSectionNav.js'
import { scrollToSection } from '../lib/scroll.js'
import logo from '../assets/logoicon.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('home')
  const { scrollY } = useScroll()
  const { pathname } = useLocation()
  const goToSection = useSectionNav()
  const isHome = pathname === '/'

  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 40))

  useEffect(() => {
    if (!isHome) {
      setActive('')
      return
    }
    // 'home' = hero section, so the Home link is only lit while the hero is on screen
    // 'contact' is watched too (it has no menu item) so the previous item un-highlights when you reach it
    const ids = ['home', ...nav.filter((n) => n.type === 'section').map((n) => n.id), 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleItem = (item) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (item.type === 'route') {
      if (pathname === item.to) scrollToSection('top', 0)
      else window.location.hash = `#${item.to}`
      return
    }
    goToSection(item.id)
  }

  const isActive = (item) => {
    if (item.type === 'route') {
      if (item.to === '/') return isHome && active === 'home'
      return pathname === item.to
    }
    return isHome && active === item.id
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[9000] transition-all duration-500 ${
          solid ? 'border-b border-white/5 bg-ink-900/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-3 px-4 py-3 sm:py-4 lg:px-7">
          <a href="#/" onClick={(e) => { e.preventDefault(); window.location.hash = '#/' }} className="group flex min-w-0 shrink items-center gap-2.5 sm:gap-3">
            <img src={logo} alt="Webbiez Logo" className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
              <span className="leading-none">
                <span className="block font-display text-[15px] font-extrabold tracking-[0.18em] text-white">WEBBIEZ</span>
                <span className="block font-display text-[10px] font-semibold tracking-[0.42em] text-brand-300">INFOTECH</span>
              </span>
          </a>

          <nav className="hidden items-center gap-0.5 rounded-full border border-white/8 bg-white/5 p-1.5 backdrop-blur-lg xl:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.type === 'route' ? `#${item.to}` : `#${item.id}`}
                onClick={handleItem(item)}
                className={`relative flex items-center gap-1.5 rounded-full px-3 py-2 font-display text-[12.5px] font-medium transition-colors ${
                  isActive(item) ? 'text-ink-900' : 'text-brand-100/75 hover:text-white'
                }`}
              >
                {isActive(item) && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-brand-300"
                  />
                )}
                {item.highlight && <Sparkles className={`h-3 w-3 ${isActive(item) ? 'text-ink-900' : 'text-amber-brand'}`} />}
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href="#/contact"
              aria-label="Contact us"
              title="Contact us"
              onClick={(e) => { e.preventDefault(); goToSection('contact') }}
              className="hidden h-10 w-10 place-items-center rounded-full border border-brand-400/30 text-brand-200 transition-colors hover:border-brand-300 hover:text-white lg:grid"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="#/contact"
              onClick={(e) => { e.preventDefault(); goToSection('contact') }}
              className="hidden items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 font-display text-[13px] font-bold text-ink-900 shadow-glow transition-shadow hover:shadow-glow-lg sm:inline-flex"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl glass text-white xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9500] overflow-y-auto overscroll-contain bg-ink-900/95 backdrop-blur-xl xl:hidden" data-lenis-prevent
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-sm font-extrabold tracking-[0.2em] text-white">WEBBIEZ INFOTECH</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-xl glass text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-col px-5 pb-[max(4rem,env(safe-area-inset-bottom))] sm:px-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.type === 'route' ? `#${item.to}` : `#${item.id}`}
                  onClick={handleItem(item)}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between border-b border-white/8 py-3.5 font-display text-[20px] font-semibold text-white sm:py-4 sm:text-[22px]"
                >
                  <span className="flex items-center gap-2.5">
                    {item.highlight && <Sparkles className="h-4 w-4 text-amber-brand" />}
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-brand-300" />
                </motion.a>
              ))}
              <motion.a
                href="#/contact"
                onClick={(e) => { e.preventDefault(); setOpen(false); goToSection('contact') }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-8 rounded-full bg-brand-gradient px-6 py-4 text-center font-display font-bold text-ink-900"
              >
                Start a project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
