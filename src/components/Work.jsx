import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion, useInView } from 'framer-motion'
import { Check, Send, Sparkles, Bot, Globe, ShoppingCart, LayoutDashboard, Smartphone, Palette } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { mocks } from './ProjectMocks.jsx'
import { portfolio } from '../data/site.js'
import { scrollToSection } from '../lib/scroll.js'

const capIcons = {
  bot: Bot,
  globe: Globe,
  cart: ShoppingCart,
  dashboard: LayoutDashboard,
  phone: Smartphone,
  palette: Palette
}

const AUTOPLAY_MS = 7000

export default function Work() {
  const { projects, capabilities } = portfolio
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [stopped, setStopped] = useState(false) // true once the visitor picks a project themselves
  const [dir, setDir] = useState(1)
  const reduce = useReducedMotion()
  const stageRef = useRef(null)
  const inView = useInView(stageRef, { amount: 0.35 })

  const running = !reduce && inView && !paused && !stopped

  useEffect(() => {
    if (!running) return undefined
    const t = setTimeout(() => {
      setDir(1)
      setActive((a) => (a + 1) % projects.length)
    }, AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [running, active, projects.length])

  const pick = (i) => {
    setDir(i >= active ? 1 : -1)
    setActive(i)
    setStopped(true)
  }

  const p = projects[active]
  const Mock = mocks[p.id]

  const onCta = () => {
    if (p.cta) window.location.hash = `#${p.cta.to}`
    else window.location.hash = '#/contact'
  }

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-40 h-[30rem] w-[44rem] max-w-full -translate-x-1/2 rounded-full bg-brand-500/10 blur-[140px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects we've worked on"
          title="Real builds, shipped and in use"
          subtitle="From responsive websites to complex business portals — the engineering foundation our AI automation now runs on. ReactJS, PHP, Node.js, Flutter and Figma, built for scalability, design precision and high performance."
        />

        {/* project slider */}
        <div
          ref={stageRef}
          className="mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') pick((active + 1) % projects.length)
            if (e.key === 'ArrowLeft') pick((active - 1 + projects.length) % projects.length)
          }}
        >
          <Reveal>
            <div
              className="ring-gradient relative overflow-hidden rounded-[1.5rem] glass-deep sm:rounded-[2rem]"
              role="region"
              aria-roledescription="carousel"
              aria-label="Projects"
              tabIndex={0}
            >
              <motion.div
                key={`glow-${p.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pointer-events-none absolute -right-24 -top-24 h-[16rem] w-[16rem] rounded-full blur-[100px] sm:h-[24rem] sm:w-[24rem] sm:blur-[120px]"
                style={{ background: `${p.accent}33` }}
                aria-hidden="true"
              />

              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.div
                  key={p.id}
                  custom={dir}
                  variants={{
                    enter: (d) => ({ opacity: 0, x: d * 70 }),
                    center: { opacity: 1, x: 0 },
                    exit: (d) => ({ opacity: 0, x: d * -70 })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragDirectionLock
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70) pick((active + 1) % projects.length)
                    else if (info.offset.x > 70) pick((active - 1 + projects.length) % projects.length)
                  }}
                  style={{ touchAction: 'pan-y' }}
                  className="relative grid cursor-grab gap-2 active:cursor-grabbing lg:min-h-[31rem] lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
                  aria-label={`Project ${active + 1} of ${projects.length}`}
                >
                  <div className="min-w-0 px-4 pt-5 sm:px-8 sm:pt-6 lg:py-10 lg:pl-10 lg:pr-2">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-100/60">
                      <Sparkles className="h-3 w-3 text-amber-brand" />
                      Illustrative preview
                    </span>
                    <div className="h-[18rem] sm:h-[22rem] lg:h-[23rem]">
                      <Mock />
                    </div>
                  </div>

                  <div className="min-w-0 p-5 sm:p-8 lg:py-10 lg:pl-6 lg:pr-10">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[26px] font-extrabold leading-none" style={{ color: p.accent }}>
                        {p.no}
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="font-display text-[12px] font-bold tracking-[0.2em] text-brand-100/40">
                        {p.no} / {String(projects.length).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-5 font-display text-[11.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: p.accent }}>
                      {p.tag}
                    </p>
                    <h3 className="mt-2 font-display text-[1.4rem] font-extrabold leading-tight text-white sm:text-[1.8rem]">{p.name}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-brand-100/70">{p.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-display text-[11px] font-semibold text-brand-100/80">
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-5 grid gap-2.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-[13px] leading-snug text-brand-100/75">
                          <span className="mt-0.5 grid shrink-0 place-items-center rounded-full bg-brand-500/20" style={{ width: 18, height: 18 }}>
                            <Check className="h-3 w-3 text-brand-300" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onPointerDown={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-display text-[13px] font-bold text-ink-900 shadow-glow transition-shadow hover:shadow-glow-lg"
                        >
                          <Globe className="h-4 w-4" />
                          Visit live site
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={onCta}
                        onPointerDown={(e) => e.stopPropagation()}
                        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-[13px] font-bold transition-shadow ${
                          p.url
                            ? 'border border-white/20 text-white hover:border-brand-300/60'
                            : 'bg-brand-gradient text-ink-900 shadow-glow hover:shadow-glow-lg'
                        }`}
                      >
                        {p.cta ? <Sparkles className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                        {p.cta ? p.cta.label : 'Start a similar project'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* dots */}
          <div className="mt-7 flex items-center justify-center gap-2.5" role="tablist" aria-label="Choose project">
            {projects.map((pr, i) => {
              const on = i === active
              return (
                <button
                  key={pr.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-label={`Show project ${i + 1}: ${pr.name}`}
                  onClick={() => pick(i)}
                  className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-500 ${
                    on ? 'w-10 bg-white/15' : 'w-2.5 bg-white/25 hover:bg-white/45'
                  }`}
                >
                  {on && (
                    <motion.span
                      key={`${pr.id}-${running}`}
                      initial={{ width: running ? '0%' : '100%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: running ? AUTOPLAY_MS / 1000 : 0, ease: 'linear' }}
                      className="absolute left-0 top-0 block h-full rounded-full"
                      style={{ background: pr.accent }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <Reveal>
            <h3 className="font-display text-xl font-bold text-white">What we build, in short</h3>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Icon = capIcons[c.icon] || Sparkles
              return (
                <Reveal key={c.title} delay={(i % 3) * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-white/[0.05]">
                    <div className="flex items-center justify-between">
                      <span className="h-1.5 w-8 rounded-full bg-brand-gradient" />
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/15 text-brand-300 transition-colors duration-300 group-hover:bg-brand-500/25">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                    </div>
                    <p className="mt-5 font-display text-[15.5px] font-bold text-white">{c.title}</p>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-brand-100/60">{c.text}</p>
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
