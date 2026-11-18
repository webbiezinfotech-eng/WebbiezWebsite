import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot, Code2, PenTool, TrendingUp, Palette, ShoppingCart, Megaphone, Smartphone, ArrowUpRight, Check
} from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import TiltCard from './ui/TiltCard.jsx'
import useSectionNav from '../hooks/useSectionNav.js'

const services = [
  {
    icon: Bot,
    title: 'AI Automation & Agents',
    tag: 'LLM agents · RAG · Voice AI',
    text: 'Custom AI agents that take repetitive work off your team — lead follow-ups, content and creative generation, catalogue updates, call handling and reporting — wired into the tools you already use.',
    points: ['Workflow audit: what to automate first', 'Custom GPT / LLM agents on your data', 'WhatsApp, CRM & calendar integrations', 'Human-review guardrails and monitoring']
  },
  {
    icon: Code2,
    title: 'Web Development',
    tag: 'React.js · Node.js · PHP',
    text: 'Custom websites and web applications engineered for speed, accessibility and growth. Component-driven React front-ends, robust APIs and clean, maintainable codebases you actually own.',
    points: ['Responsive marketing & corporate sites', 'Web apps and customer dashboards', 'REST API & third-party integrations', 'Performance and Core Web Vitals tuning']
  },
  {
    icon: PenTool,
    title: 'UI/UX Designing',
    tag: 'Figma · Prototyping',
    text: 'Research-informed interfaces that feel effortless. We map user journeys, build wireframes, then refine high-fidelity screens you can click through before development begins.',
    points: ['User flows & information architecture', 'Wireframes to high-fidelity UI', 'Interactive clickable prototypes', 'Design systems & component libraries']
  },
  {
    icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    tag: 'Organic growth · Ads',
    text: 'Get discovered by the people already searching for you. Technical SEO groundwork, content structure and measurable campaigns that compound instead of burning budget.',
    points: ['Technical & on-page SEO', 'Keyword and competitor research', 'Content strategy & landing pages', 'Paid campaign setup and tracking']
  },
  {
    icon: Palette,
    title: 'Branding & Creativity',
    tag: 'Identity · Graphic design',
    text: 'A brand is more than a logo. We build cohesive identity systems — marks, colour, type, tone and templates — so every touchpoint looks unmistakably yours.',
    points: ['Logo & visual identity design', 'Brand guidelines and colour systems', 'Social media creatives & templates', 'Print, packaging and collateral']
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Business Portals',
    tag: 'Storefronts · Admin panels',
    text: 'Sell online or run your operations digitally. From wholesale storefronts to internal portals with role-based dashboards, we build the systems your business runs on.',
    points: ['Retail & wholesale storefronts', 'Inventory, order & customer management', 'Admin panels and reporting dashboards', 'Payment gateway integration']
  },
  {
    icon: Megaphone,
    title: 'PR (Public Relations)',
    tag: 'Visibility · Reputation',
    text: 'Build the narrative around your brand. Announcements, media outreach and social presence handled with the same care as your product, so the market hears about you correctly.',
    points: ['Brand narrative & messaging', 'Launch and announcement campaigns', 'Social media management', 'Reputation and community handling']
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    tag: 'Flutter · Cross-platform',
    text: 'Carry your product into your customers’ pockets. Cross-platform Flutter builds ship to Android and iOS from one codebase, without compromising the native feel.',
    points: ['Cross-platform Flutter apps', 'App store submission support', 'Push notifications & analytics', 'Backend & API integration']
  }
]

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0)
  const goToSection = useSectionNav()

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/[0.04] to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services we offer"
          title="AI automation first — backed by full digital delivery"
          subtitle="Eight services, one accountable team. Automate the repetitive work with AI agents, and get the websites, apps and brand that put that automation in front of customers."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} direction="up">
              <TiltCard
                className="flex h-full flex-col p-5 sm:p-7"
                intensity={7}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-ink-900 shadow-glow">
                    <s.icon className="h-5.5 w-5.5" style={{ width: 22, height: 22 }} />
                  </span>
                  <span className="font-display text-[11px] font-bold tracking-widest text-white/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-1 font-display text-[11.5px] font-semibold uppercase tracking-[0.18em] text-brand-300/80">{s.tag}</p>
                <p className="mt-4 flex-1 text-[14px] leading-relaxed text-brand-100/65">{s.text}</p>

                <button
                  type="button"
                  onClick={() => setActiveIdx(activeIdx === i ? -1 : i)}
                  className="mt-5 inline-flex items-center gap-1.5 self-start font-display text-[12.5px] font-semibold text-brand-300 transition-colors hover:text-amber-brand"
                >
                  {activeIdx === i ? 'Hide details' : 'What’s included'}
                  <ArrowUpRight className={`h-3.5 w-3.5 transition-transform ${activeIdx === i ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {activeIdx === i && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-4 space-y-2 overflow-hidden border-t border-white/8 pt-4"
                    >
                      {s.points.map((p, k) => (
                        <motion.li
                          key={p}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: k * 0.05 }}
                          className="flex items-start gap-2 text-[13px] text-brand-100/70"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                          {p}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="ring-gradient flex flex-col items-center justify-between gap-6 rounded-3xl glass-deep p-6 text-center sm:flex-row sm:p-8 sm:text-left">
            <div>
              <p className="font-display text-lg font-bold text-white">Not sure which service you need?</p>
              <p className="mt-1.5 text-[14px] text-brand-100/60">
                Tell us the goal and we’ll recommend the smallest scope that gets you there.
              </p>
            </div>
            <a
              href="#/contact"
              onClick={(e) => { e.preventDefault(); goToSection('contact') }}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 font-display text-sm font-bold text-ink-900 shadow-glow transition-shadow hover:shadow-glow-lg sm:w-auto"
            >
              Book a free consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
