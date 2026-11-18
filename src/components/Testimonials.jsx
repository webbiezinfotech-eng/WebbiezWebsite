import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 7000)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[26rem] -translate-y-1/2 bg-brand-500/[0.05] blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What our clients say"
          title="Trusted for creativity, delivery and professionalism"
          subtitle="Our clients appreciate how we turn ideas into impactful digital solutions that boost growth, visibility and business success."
        />

        <Reveal className="mt-14" direction="up">
          <div
            className="ring-gradient relative mx-auto max-w-4xl rounded-[1.5rem] glass-deep p-5 sm:rounded-[2rem] sm:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Quote className="h-9 w-9 text-brand-400/40" />
            {/* all quotes share one grid cell, so the card keeps the height of the tallest one
                and nothing below it jumps when the testimonial changes */}
            <div className="grid">
              {testimonials.map((tt, k) => (
                <motion.div
                  key={k}
                  aria-hidden={k !== i}
                  initial={false}
                  animate={
                    k === i
                      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                      : { opacity: 0, y: -14, filter: 'blur(8px)' }
                  }
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ gridArea: '1 / 1', pointerEvents: k === i ? 'auto' : 'none' }}
                >
                  <p className="mt-5 font-display text-[16px] font-medium leading-relaxed text-white sm:mt-6 sm:text-[22px] sm:leading-[1.6]">
                    “{tt.quote}”
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient font-display text-lg font-extrabold text-ink-900">
                        {tt.name.charAt(0)}
                      </span>
                      <div>
                        <p className="font-display text-[15px] font-bold text-white">{tt.name}</p>
                        <p className="text-[12.5px] text-brand-100/55">{tt.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-brand">
                      {[0, 1, 2, 3, 4].map((st) => (
                        <Star key={st} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/8 pt-5 sm:mt-9 sm:pt-6">
              <div className="flex items-center gap-2">
                {testimonials.map((_, k) => (
                  <button
                    key={k}
                    type="button"
                    aria-label={`Testimonial ${k + 1}`}
                    onClick={() => setI(k)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      k === i ? 'w-8 bg-brand-gradient' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
                  className="grid h-10 w-10 place-items-center rounded-full glass text-white transition-colors hover:border-brand-400/50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => setI((p) => (p + 1) % testimonials.length)}
                  className="grid h-10 w-10 place-items-center rounded-full glass text-white transition-colors hover:border-brand-400/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
