import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { process } from '../data/site.js'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 60%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A process with no surprises"
          subtitle="Five clear stages, each with a defined output. You always know what happens next, what we need from you and when it ships."
        />

        <div ref={ref} className="relative mt-14 pl-6 sm:mt-20 sm:pl-0">
          <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true">
            <motion.div style={{ height }} className="w-px bg-gradient-to-b from-brand-400 via-brand-300 to-amber-brand" />
          </div>

          <div className="space-y-12 sm:space-y-20">
            {process.map((p, i) => {
              const right = i % 2 === 1
              return (
                <div key={p.step} className="relative sm:grid sm:grid-cols-2 sm:items-center sm:gap-12">
                  <span
                    className="absolute -left-[22px] top-6 grid h-4 w-4 place-items-center rounded-full bg-ink-900 ring-2 ring-brand-400 sm:left-1/2 sm:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                  </span>

                  <div className={right ? 'sm:order-2 sm:pl-4' : 'sm:order-1 sm:pr-4 sm:text-right'}>
                    <Reveal direction={right ? 'left' : 'right'}>
                      <div className="inline-block w-full rounded-3xl glass-deep p-5 ring-gradient sm:p-7">
                        <span className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-amber-brand">
                          Step {p.step}
                        </span>
                        <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">{p.title}</h3>
                        <p className="mt-3 text-[14.5px] leading-relaxed text-brand-100/65">{p.text}</p>
                      </div>
                    </Reveal>
                  </div>

                  <div className={`hidden sm:block ${right ? 'sm:order-1' : 'sm:order-2'}`} aria-hidden="true">
                    <Reveal direction={right ? 'right' : 'left'} delay={0.08}>
                      <p
                        className={`font-display text-[6rem] font-extrabold leading-none text-white/[0.045] ${
                          right ? 'sm:text-right sm:pr-6' : 'sm:pl-6'
                        }`}
                      >
                        {p.step}
                      </p>
                    </Reveal>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
