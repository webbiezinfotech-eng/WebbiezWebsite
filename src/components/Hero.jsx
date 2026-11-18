import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Sparkles, Play, Star, Bot, Zap } from 'lucide-react'
import MagneticButton from './ui/MagneticButton.jsx'
import Blobs from './ui/Blobs.jsx'
import WordCycle from './ui/WordCycle.jsx'
import { techStack, testimonials } from '../data/site.js'
import useSectionNav from '../hooks/useSectionNav.js'

export default function Hero() {
  const ref = useRef(null)
  const goToSection = useSectionNav()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  const handle = (id) => (e) => { e.preventDefault(); goToSection(id) }

  return (
    <section id="home" ref={ref} className="relative isolate overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-40 lg:pb-32">
      <span id="top" className="absolute -top-24" aria-hidden="true" />
      <Blobs />
      <div className="absolute inset-0 grid-lines mask-fade-y opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[24rem] w-[24rem] -translate-x-1/2 sm:h-[38rem] sm:w-[38rem] rounded-full border border-brand-400/10" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-40 hidden h-[26rem] w-[26rem] -translate-x-1/2 animate-spin-slow rounded-full border border-dashed border-brand-400/15 lg:block" aria-hidden="true" />

      <motion.div style={{ y, scale, opacity }} className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-brand" />
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-200">
                AI Automation Company
              </span>
            </motion.div>

            <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.05] tracking-tight text-white min-[400px]:text-[2.5rem] sm:mt-7 sm:text-[3.4rem] lg:text-[4.2rem]">
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mr-3 inline-block"
              >
                Innovating
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="mr-3 inline-block"
              >
                the
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.85, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient inline-block"
              >
                Innovation
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-brand-100/70 sm:mt-6 sm:text-[16.5px]"
            >
              Webbiez Infotech builds <span className="font-semibold text-brand-200">AI automation</span> that does the
              work — agents for{' '}
              <WordCycle
                words={['graphics generation', 'website building', 'sales follow-up', 'call handling']}
                className="font-semibold text-brand-200"
              />
              . We don’t just create technology — we create experiences that run while you sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.64 }}
              className="mt-8 flex flex-col items-stretch gap-3.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <MagneticButton href="#/contact" onClick={handle('contact')} className="w-full sm:w-auto">
                <Zap className="h-4 w-4" />
                Automate my business
              </MagneticButton>
              <a
                href="#/future-scopes"
                onClick={(e) => { e.preventDefault(); window.location.hash = '#/future-scopes' }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full glass px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors duration-300 hover:border-brand-400/50 sm:w-auto"
              >
                <Bot className="h-4 w-4 text-amber-brand" />
                Explore future scopes
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-12"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {['#1E8975', '#2DD4BF', '#FCB045', '#833AB4'].map((c) => (
                    <span
                      key={c}
                      className="h-8 w-8 rounded-full border-2 border-ink-900"
                      style={{ background: `linear-gradient(135deg, ${c}, rgba(255,255,255,0.12))` }}
                    />
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1 text-amber-brand">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-[12.5px] text-brand-100/60">Trusted by growing brands</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -12 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-w-0"
            style={{ transformPerspective: 1400 }}
          >
            <div className="ring-gradient relative rounded-[1.5rem] glass-deep p-4 shadow-glow sm:rounded-[2rem] sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-brand/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-brand/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-400/80" />
                </div>
                <span className="font-display text-[10px] uppercase tracking-[0.28em] text-brand-300/70">agent-console</span>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-white/8 bg-ink-900/60 p-4 font-mono text-[11.5px] leading-relaxed sm:mt-6 sm:p-5 sm:text-[12.5px]">
                <p className="text-brand-300/70">// hand the repetitive work to an agent</p>
                <p className="mt-3 text-brand-100/85">
                  <span className="text-violet-brand">const</span> agent <span className="text-brand-400">=</span> {'{'}
                </p>
                <p className="pl-4 text-brand-100/70">
                  skills: <span className="text-amber-brand">['graphics', 'websites']</span>,
                </p>
                <p className="pl-4 text-brand-100/70">
                  also: <span className="text-amber-brand">['sales-crm', 'voice-calls']</span>,
                </p>
                <p className="pl-4 text-brand-100/70">
                  guardrails: <span className="text-amber-brand">'human-in-the-loop'</span>,
                </p>
                <p className="pl-4 text-brand-100/70">
                  uptime: <span className="text-amber-brand">'24/7'</span>
                </p>
                <p className="text-brand-100/85">{'}'};</p>
                <p className="mt-3 flex items-center gap-2 text-brand-400">
                  <span className="inline-block h-1.5 w-3 animate-pulse bg-brand-400" />
                  agents running…
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
                {[
                  { k: 'Agents', v: 'Custom' },
                  { k: 'Stack', v: 'React · Python' },
                  { k: 'Voice AI', v: '24/7' }
                ].map((x, i) => (
                  <motion.div
                    key={x.k}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="min-w-0 rounded-xl border border-white/8 bg-white/5 px-1.5 py-3 text-center sm:px-3"
                  >
                    <p className="font-display text-[10px] uppercase tracking-wider text-brand-300/70 sm:text-[11px] sm:tracking-widest">{x.k}</p>
                    <p className="mt-1 font-display text-[12px] font-bold leading-snug text-white sm:text-[13px]">{x.v}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href="#/future-scopes"
              onClick={(e) => { e.preventDefault(); window.location.hash = '#/future-scopes' }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className=" absolute -bottom-12 -left-4 hidden max-w-[15rem] rounded-2xl glass p-4 shadow-glow transition-colors hover:border-2 hover:border-amber-brand/60 sm:block"
            >
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-amber-brand">Launching soon</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-white">AI products</p>
              <p className="mt-0.5 text-[11.5px] text-brand-100/60">graphics · websites · CRM · voice</p>
            </motion.a>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 -top-6 hidden max-w-[13rem] rounded-2xl glass p-4 lg:block"
            >
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-amber-brand">Client voice</p>
              <p className="mt-1 text-[12px] leading-snug text-brand-100/75">
                “The final product looked premium and worked flawlessly across devices.”
              </p>
              <p className="mt-2 text-[11px] font-semibold text-white">{testimonials[0].name}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative mt-16 border-y sm:mt-24 border-white/6 bg-white/[0.02] py-6">
        <div className="mask-fade-x flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={`${t}-${i}`} className="whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.24em] text-brand-100/40">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
