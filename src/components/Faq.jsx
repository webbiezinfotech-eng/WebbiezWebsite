import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { faqs } from '../data/site.js'
import useSectionNav from '../hooks/useSectionNav.js'

export default function Faq() {
  const [open, setOpen] = useState(0)
  const goToSection = useSectionNav()

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="FAQs"
              title="Questions we get asked before every project"
              subtitle="Still unsure about something? Contact or WhatsApp us — you’ll talk to someone who actually builds the work."
            />
            <Reveal delay={0.2}>
              <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                <p className="font-display text-[13px] font-bold uppercase tracking-[0.2em] text-brand-300">Prefer talking?</p>
                <p className="mt-2 text-[14px] leading-relaxed text-brand-100/65">
                  A 20-minute call is usually enough to tell you whether we’re the right fit — and what a realistic
                  timeline and budget looks like for your idea.
                </p>
                <a
                  href="#/contact"
                  onClick={(e) => { e.preventDefault(); goToSection('contact') }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-400/30 px-5 py-3 font-display text-[13px] font-bold text-brand-200 transition-colors hover:border-brand-300 hover:text-white"
                >
                  Book that call
                </a>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <Reveal key={f.q} delay={i * 0.05} direction="left">
                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                      isOpen ? 'border-brand-400/35 bg-white/[0.055]' : 'border-white/8 bg-white/[0.025] hover:border-white/15'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="font-display text-[14.5px] font-semibold leading-snug text-white sm:text-[15.5px]">{f.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                          isOpen ? 'bg-brand-gradient text-ink-900' : 'bg-white/8 text-brand-200'
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-5 text-[14px] leading-relaxed text-brand-100/70 sm:px-6 sm:pb-6 sm:text-[14.5px]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
