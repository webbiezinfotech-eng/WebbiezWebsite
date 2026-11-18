import { ArrowUpRight, Sparkles } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import MagneticButton from './ui/MagneticButton.jsx'
import useSectionNav from '../hooks/useSectionNav.js'

export default function CtaBand() {
  const goToSection = useSectionNav()

  return (
    <section className="relative py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-brand-400/20 bg-ink-gradient p-6 sm:rounded-[2rem] sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-[24rem] w-[24rem] animate-aurora rounded-full bg-brand-500/30 blur-[120px]" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" aria-hidden="true" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="min-w-0 max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-200">
                  <Sparkles className="h-3.5 w-3.5 text-amber-brand" />
                  Let’s build
                </span>
                <h2 className="mt-5 font-display text-[1.65rem] font-extrabold leading-tight text-white min-[400px]:text-3xl sm:text-[2.6rem]">
                  Hand the repetitive work to AI — <span className="text-gradient">keep the decisions</span>.
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-100/65">
                  From one automated workflow to a full AI-powered platform — start with a free automation audit, leave with a plan.
                  Contact us or send us the brief.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                <MagneticButton href="#/contact" onClick={(e) => { e.preventDefault(); goToSection('contact') }}>
                  Get a free automation audit
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href="#/contact" onClick={(e) => { e.preventDefault(); goToSection('contact') }} variant="ghost">
                  Contact us
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
