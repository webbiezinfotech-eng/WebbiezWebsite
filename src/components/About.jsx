import { motion } from 'framer-motion'
import { Bot, ShieldCheck, Gauge, Workflow } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import TiltCard from './ui/TiltCard.jsx'
import useCountUp from '../hooks/useCountUp.js'
import { stats, founders } from '../data/site.js'

const pillars = [
  { icon: Bot, title: 'Agent-first thinking', text: 'Before we design a screen, we ask what a machine should handle. Automation is the starting point, not an add-on.' },
  { icon: ShieldCheck, title: 'Human in the loop', text: 'Agents draft, humans decide. Every automation we ship has a review path and an escalation route built in.' },
  { icon: Gauge, title: 'Measured output', text: 'We track accuracy, response time and time saved — because automation only counts when the numbers move.' },
  { icon: Workflow, title: 'Wired into your stack', text: 'Agents plug into the CRM, site and tools you already run. No rip-and-replace, no data silos.' }
]

function Stat({ item, index }) {
  const hasValue = item.value != null
  const { ref, value } = useCountUp(item.value ?? 0, 1400)
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div ref={ref} className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:p-6">
        {hasValue ? (
          <>
            <p className="font-display text-3xl font-extrabold text-white sm:text-[2.1rem]">
              {value}
              <span className="text-gradient-teal">{item.suffix}</span>
            </p>
            <p className="mt-2 font-display text-[13.5px] font-semibold text-brand-100/85">{item.label}</p>
          </>
        ) : (
          <p className="font-display text-[1.35rem] font-extrabold leading-snug text-white">{item.label}</p>
        )}
        <p className="mt-1 text-[12px] text-brand-100/45">{item.note}</p>
      </div>
    </Reveal>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Who we are"
          title="An AI automation company with a studio's eye for design"
          subtitle="Webbiez Infotech began as a modern IT solutions company specializing in ReactJS websites, UI/UX design, graphic design, mobile applications and social media management. We are now evolving into an AI automation company — turning the same craft into products that run your business for you."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal direction="right">
            <div className="ring-gradient h-full rounded-3xl glass-deep p-5 sm:p-10">
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">From building software to building systems that build</h3>
              <p className="mt-4 text-[15.5px] leading-relaxed text-brand-100/70">
                In today’s AI-driven world, we focus on delivering secure, scalable and performance-driven solutions that
                not only look great but also help brands grow, engage users and stand out in the digital space.
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-brand-100/70">
                That has led us somewhere more interesting: instead of only delivering a website or an app, we now build
                the automation layer around it. Agents that generate your creatives, assemble your pages, work your
                pipeline and answer your calls — so your team spends its hours on judgement, not repetition.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pillars.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.07}>
                    <div className="group flex gap-3.5 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-brand-400/30">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 transition-colors group-hover:bg-brand-500/25">
                        <p.icon style={{ width: 18, height: 18 }} />
                      </span>
                      <div>
                        <p className="font-display text-[14px] font-semibold text-white">{p.title}</p>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-brand-100/60">{p.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((s, i) => (
              <Stat key={s.label} item={s} i={i} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { t: 'AI-led', d: 'Automation products in active build, launching soon.' },
            { t: 'Design-backed', d: 'UI/UX crafted in Figma before a single line of production code.' },
            { t: 'Accountable', d: 'Written scopes, clear timelines and honest status updates.' }
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.09}>
              <TiltCard className="h-full p-6" intensity={6}>
                <motion.span className="block h-1 w-10 rounded-full bg-brand-gradient" />
                <p className="mt-5 font-display text-lg font-bold text-white">{c.t}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-brand-100/65">{c.d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
