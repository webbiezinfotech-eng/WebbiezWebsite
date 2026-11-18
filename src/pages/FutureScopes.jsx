import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Rocket, Bot, Radar, Layers, ShieldCheck, Sparkles } from 'lucide-react'
import Blobs from '../components/ui/Blobs.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import EarlyAccessForm from '../components/EarlyAccessForm.jsx'
import { products, roadmap } from '../data/products.js'
import { scrollToSection } from '../lib/scroll.js'
import useSectionNav from '../hooks/useSectionNav.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

const principles = [
  { icon: Bot, t: 'Agents, not dashboards', d: 'Every product here takes work off a human desk — it does the task, not just reports on it.' },
  { icon: ShieldCheck, t: 'Guardrails first', d: 'Scoped data access, review steps and escalation paths are designed before the first prompt is written.' },
  { icon: Layers, t: 'One shared context', d: 'The products share your brand and data context, so output stays consistent across all of them.' },
  { icon: Radar, t: 'Tuned after launch', d: 'Accuracy is monitored and improved continuously. Shipping is the start of the work, not the end.' }
]

export default function FutureScopes() {
  useDocumentTitle(
    'Future Scopes — AI Products Launching Soon | Webbiez Infotech',
    'AI automation products in development at Webbiez Infotech: AI graphics generator, AI website generation, AI sales CRM for business and AI chatbot calling automation.'
  )
  // in-page anchors on this route (useSectionNav would route back to Home)
  const goToSection = (id) => scrollToSection(id)
  const toContact = useSectionNav() // routes back to Home, then scrolls to the contact form

  return (
    <div className="relative">
      {/* ── page hero ── */}
      <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-40">
        <Blobs />
        <div className="absolute inset-0 grid-lines mask-fade-y opacity-60" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <motion.a
            href="#/"
            onClick={(e) => { e.preventDefault(); window.location.hash = '#/' }}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-display text-[12.5px] font-semibold text-brand-100/60 transition-colors hover:text-brand-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </motion.a>

          <div className="mt-8 grid grid-cols-1 items-end gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-amber-brand/30 bg-amber-brand/10 px-3.5 py-2 sm:px-4"
              >
                <Rocket className="h-3.5 w-3.5 text-amber-brand" />
                <span className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-brand sm:text-[11px] sm:tracking-[0.22em]">
                  Future Scopes · Launching soon
                </span>
              </motion.div>

              <h1 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white min-[400px]:text-[2.4rem] sm:mt-7 sm:text-5xl lg:text-[3.8rem]">
                {['The AI products', 'we’re building', 'next'].map((line, i) => (
                  <motion.span
                    key={line}
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.85, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`mr-3 inline-block ${i === 2 ? 'text-gradient' : ''}`}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-brand-100/70 sm:mt-6 sm:text-[16.5px]"
              >
                Webbiez Infotech is becoming an AI automation company. Four products are in active development — a
                graphics generation model, website-generation automation, a sales CRM that runs its own pipeline, and a
                chatbot that handles calls. Each one exists to remove repetitive work from a real business process.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.62 }}
                className="mt-8 flex flex-col items-stretch gap-3.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              >
                <a
                  href="#early-access"
                  onClick={(e) => { e.preventDefault(); goToSection('early-access') }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 font-display text-sm font-bold text-ink-900 shadow-glow transition-shadow hover:shadow-glow-lg"
                >
                  Join the early-access list
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#products"
                  onClick={(e) => { e.preventDefault(); goToSection('products') }}
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:border-brand-400/50"
                >
                  See the products
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                { k: 'In development', v: '4 products' },
                { k: 'Category', v: 'AI automation' },
                { k: 'Built on', v: 'LLM agents' },
                { k: 'Early access', v: 'Open now' }
              ].map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="min-w-0 rounded-2xl border border-white/8 bg-white/[0.035] p-4 sm:p-5"
                >
                  <p className="font-display text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-100/45">{s.k}</p>
                  <p className="mt-2 font-display text-[15px] font-extrabold text-white sm:text-[17px]">{s.v}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── product cards ── */}
      <section id="products" className="relative scroll-mt-24 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-500/[0.05] to-transparent" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our new products"
            title="Four automations, each solving one expensive problem"
            subtitle="Every card below is a product in active build. Open one to see exactly what it will do, who it is for and what ships in the first release."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── principles ── */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="ring-gradient rounded-[1.5rem] glass-deep p-5 sm:rounded-[2rem] sm:p-10">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.24em] text-brand-300">
                    <Sparkles className="h-3.5 w-3.5 text-amber-brand" />
                    How we build them
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                    The same four rules behind every product
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                {principles.map((p, i) => (
                  <Reveal key={p.t} delay={i * 0.08}>
                    <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-brand-400/30">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                        <p.icon style={{ width: 19, height: 19 }} />
                      </span>
                      <p className="mt-4 font-display text-[14.5px] font-bold text-white">{p.t}</p>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-brand-100/60">{p.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── roadmap ── */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Roadmap"
            title="How the launch unfolds"
            subtitle="We release in phases so early users shape the product. Private beta first, public plans next, then the products connect into one automation layer."
          />

          <div className="relative mt-12 sm:mt-16">
            <div className="absolute left-0 right-0 top-[46px] hidden h-px bg-white/10 lg:block" aria-hidden="true">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-px origin-left bg-gradient-to-r from-brand-400 via-brand-300 to-amber-brand"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {roadmap.map((r, i) => (
                <Reveal key={r.phase} delay={i * 0.12}>
                  <div className="relative h-full rounded-3xl border border-white/8 bg-white/[0.03] p-5 sm:p-7">
                    <span className="absolute -top-[9px] left-7 hidden h-4 w-4 rounded-full bg-ink-900 ring-2 ring-brand-400 lg:block" aria-hidden="true">
                      <span className="absolute inset-1 rounded-full bg-brand-300" />
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-brand-300">
                        {r.phase}
                      </span>
                      <span className={`rounded-full px-3 py-1 font-display text-[10.5px] font-bold uppercase tracking-[0.16em] ${
                        i === 0 ? 'bg-brand-500/20 text-brand-200' : 'bg-white/6 text-brand-100/50'
                      }`}>
                        {r.state}
                      </span>
                    </div>
                    <p className="mt-5 font-display text-xl font-bold text-white">{r.title}</p>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-brand-100/65">{r.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── early access form ── */}
      <section id="early-access" className="relative scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="min-w-0 lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Early access"
              title="Be first in line when we launch"
              subtitle="Pick the products that fit your business. Early-access members join the private beta, shape the feature set and get preferential launch pricing."
            />
            <ul className="mt-8 space-y-3">
              {['Private beta invitation', 'Direct line to the product team', 'Founding-member pricing at launch'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[14px] text-brand-100/75">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-500/20 text-brand-300">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Reveal direction="up">
            <EarlyAccessForm />
          </Reveal>
        </div>
      </section>

      {/* ── closing CTA ── */}
      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-brand-400/20 bg-ink-gradient p-6 sm:rounded-[2rem] sm:p-14">
              <div className="pointer-events-none absolute -right-20 -top-24 h-[24rem] w-[24rem] animate-aurora rounded-full bg-brand-500/30 blur-[120px]" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" aria-hidden="true" />

              <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="font-display text-[1.65rem] font-extrabold leading-tight text-white min-[400px]:text-3xl sm:text-[2.5rem]">
                    Want to shape these products <span className="text-gradient">before launch</span>?
                  </h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-100/65">
                    Early-access users get direct input into the feature set and preferential pricing at launch. Tell us
                    which product fits your business — or ask us to build a custom automation now.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                  <a
                    href="#early-access"
                    onClick={(e) => { e.preventDefault(); goToSection('early-access') }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 font-display text-sm font-bold text-ink-900 shadow-glow transition-shadow hover:shadow-glow-lg"
                  >
                    Request early access
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#/contact"
                    onClick={(e) => { e.preventDefault(); toContact('contact') }}
                    className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:border-brand-400/50"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
