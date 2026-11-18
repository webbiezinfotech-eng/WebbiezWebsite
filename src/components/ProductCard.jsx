import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, Sparkles, ArrowUpRight, BellRing } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import TiltCard from './ui/TiltCard.jsx'
import ProductPreview from './ProductPreview.jsx'
import { scrollToSection } from '../lib/scroll.js'

export default function ProductCard({ product, index }) {
  const [open, setOpen] = useState(false)

  // "Notify me" -> jump to the early-access form with this product pre-selected
  const notify = (e) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('webbiez:pick-product', { detail: product.id }))
    scrollToSection('early-access')
  }

  return (
    <Reveal delay={(index % 2) * 0.09} direction="up" className="h-full">
      <TiltCard className="flex h-full flex-col overflow-hidden" intensity={6}>
        {/* accent header with live product UI preview */}
        <div className={`relative h-72 overflow-hidden rounded-t-3xl sm:h-64 bg-gradient-to-br ${product.accent}`}>
          <div className="absolute inset-0 grid-lines opacity-25" aria-hidden="true" />
          <div className="absolute inset-0 bg-ink-900/45" aria-hidden="true" />

          <div className="relative flex flex-wrap items-start justify-between gap-2 p-4 sm:p-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/70 px-3 py-1.5 backdrop-blur-md">
              <product.icon className="h-3.5 w-3.5 text-white" />
              <span className="font-display text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/90">
                {product.short}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/70 px-3 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-brand" />
              </span>
              <span className="font-display text-[10.5px] font-bold uppercase tracking-[0.18em] text-white">
                {product.eta}
              </span>
            </span>
          </div>

          <div className="absolute inset-x-4 bottom-4 top-[4.75rem] rounded-2xl sm:inset-x-5 sm:bottom-5 sm:top-[4.25rem] border border-white/10 bg-ink-900/55 p-3.5 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
            <ProductPreview id={product.id} />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="font-display text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-300/80">{product.tag}</p>
              <h3 className="mt-1.5 font-display text-[19px] font-bold leading-snug text-white">{product.name}</h3>
            </div>
            <span className="mt-1 shrink-0 font-display text-[11px] font-bold tracking-widest text-white/15">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <p className="mt-3 text-[14px] leading-relaxed text-brand-100/65">{product.pitch}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {product.useCases.slice(0, 3).map((u) => (
              <span
                key={u}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-display text-[11px] font-semibold text-brand-100/65"
              >
                {u}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
            <span className="font-display text-[11px] uppercase tracking-[0.16em] text-brand-100/45">
              {product.metric.k}
            </span>
            <span className="font-display text-[12.5px] font-bold text-brand-300">{product.metric.v}</span>
          </div>

          <div className="mt-5 flex-1" />

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 px-4 py-2.5 font-display text-[12.5px] font-bold text-brand-200 transition-colors hover:border-brand-300 hover:text-white"
            >
              {open ? 'Hide details' : 'See what it does'}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <a
              href="#early-access"
              onClick={notify}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2.5 font-display text-[12.5px] font-bold text-ink-900 transition-shadow hover:shadow-glow"
            >
              <BellRing className="h-3.5 w-3.5" />
              Notify me
            </a>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-5 border-t border-white/8 pt-5">
                  <p className="text-[13.5px] leading-relaxed text-brand-100/65">{product.description}</p>

                  <p className="mt-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand-300">
                    What’s inside
                  </p>
                  <ul className="mt-3 space-y-2">
                    {product.features.map((f, k) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: k * 0.04 }}
                        className="flex items-start gap-2.5 text-[13px] text-brand-100/70"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                        {f}
                      </motion.li>
                    ))}
                  </ul>

                  <p className="mt-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand-300">
                    Built for
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.useCases.map((u) => (
                      <span
                        key={u}
                        className="rounded-full border border-brand-400/20 bg-brand-500/10 px-3 py-1 font-display text-[11px] font-semibold text-brand-200"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </TiltCard>
    </Reveal>
  )
}
