import { ArrowUp, Mail, Phone } from 'lucide-react'
import { nav, contact, socials, serviceIndex } from '../data/site.js'
import useSectionNav from '../hooks/useSectionNav.js'
import { scrollToTop } from '../lib/scroll.js'
import logo from '../assets/logoicon.png'

export default function Footer() {
  const year = new Date().getFullYear()
  const goToSection = useSectionNav()

  const handleNav = (item) => (e) => {
    e.preventDefault()
    if (item.type === 'route') window.location.hash = `#${item.to}`
    else goToSection(item.id)
  }

  return (
    <footer className="relative border-t border-white/8 bg-ink-800/40 pt-16">
      <div className="mx-auto max-w-[95%] px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#/"
              onClick={(e) => { e.preventDefault(); window.location.hash = '#/'; scrollToTop() }}
              className="flex items-center gap-3"
            >
              <img src={logo} alt="Webbiez Logo" className="h-12 w-12" />
              <span className="leading-none">
                <span className="block font-display text-[15px] font-extrabold tracking-[0.18em] text-white">WEBBIEZ</span>
                <span className="block font-display text-[10px] font-semibold tracking-[0.42em] text-brand-300">INFOTECH</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-brand-100/60">
              An AI automation company building agents, generated websites, graphics engines, sales CRM and voice
              automation — plus the web, mobile and design delivery that makes them usable.
            </p>
            <p className="mt-5 font-display text-[15px] font-bold text-gradient">Innovating the Innovation</p>
          </div>

          <div>
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-white">Navigate</p>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.type === 'route' ? `#${n.to}` : `#${n.id}`}
                    onClick={handleNav(n)}
                    className="text-[13.5px] text-brand-100/60 transition-colors hover:text-brand-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-white">Services</p>
            <ul className="mt-5 space-y-2.5">
              {serviceIndex.map((s) => (
                <li key={s.key}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); goToSection('services') }}
                    className="text-[13.5px] text-brand-100/60 transition-colors hover:text-brand-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.22em] text-white">Get in touch</p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all text-[13.5px] text-brand-100/70 transition-colors hover:text-brand-300">
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                  {contact.email}
                </a>
              </li>
              {contact.footerPhones.map((ph) => (
                <li key={ph.raw}>
                  <a href={`tel:${ph.raw}`} className="flex items-center gap-3 text-[13.5px] text-brand-100/70 transition-colors hover:text-brand-300">
                    <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                    {ph.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 font-display text-[11.5px] font-semibold text-brand-100/70 transition-colors hover:border-brand-400/40 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 py-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] text-center sm:mt-14 sm:flex-row sm:text-left">
          <p className="text-[12.5px] text-brand-100/45">
            © {year} Webbiez Infotech. All rights reserved. · {contact.site.replace('https://', '')} ·{' '}
            <a href="#/privacy-policy" className="underline transition-colors hover:text-brand-300">Privacy Policy</a>
          </p>
          <a
            href="#/"
            onClick={(e) => { e.preventDefault(); window.location.hash = '#/'; scrollToTop() }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-display text-[12.5px] font-semibold text-brand-100/70 transition-colors hover:border-brand-400/40 hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
