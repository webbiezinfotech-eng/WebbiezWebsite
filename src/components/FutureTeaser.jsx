import { ArrowUpRight } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { products } from '../data/products.js'

const go = (hash) => (e) => { e.preventDefault(); window.location.hash = hash }

export default function FutureTeaser() {
  return (
    <section id="launching" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Launching soon"
          title="Our own AI automation products"
          subtitle="Beyond client projects, we’re building four products that automate the most repetitive work in a growing business."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <a
                href="#/future-scopes"
                onClick={go('#/future-scopes')}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40"
              >
                <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${p.accent} opacity-25 blur-2xl transition-opacity group-hover:opacity-50`} aria-hidden="true" />
                <span className={`relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${p.accent}`}>
                  <p.icon className="h-5 w-5 text-white" />
                </span>
                <p className="relative mt-5 font-display text-[10.5px] font-bold uppercase tracking-[0.2em] text-amber-brand">{p.eta}</p>
                <h3 className="relative mt-2 font-display text-[17px] font-bold leading-snug text-white">{p.name}</h3>
                <p className="relative mt-2.5 flex-1 text-[13px] leading-relaxed text-brand-100/60">{p.metric.v}</p>
                <span className="relative mt-5 inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold text-brand-300 transition-colors group-hover:text-white">
                  Preview it
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
