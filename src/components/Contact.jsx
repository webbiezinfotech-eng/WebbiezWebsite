import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { contact, socials, serviceIndex } from '../data/site.js'
import { sendEnquiry } from '../lib/sendEnquiry.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: serviceIndex[0].title, message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      await sendEnquiry({
        subject: `New project enquiry — ${form.service}`,
        replyTo: form.email,
        name: form.name,
        fields: { phone: form.phone, service: form.service, message: form.message }
      })
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', service: serviceIndex[0].title, message: '' })
    } catch (err) {
      console.error('Enquiry failed:', err)
      setStatus('error')
    }
  }

  const details = [
    { icon: Mail, label: 'Email us', value: contact.email, href: `mailto:${contact.email}` }
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-10 h-[20rem] w-[20rem] sm:h-[30rem] sm:w-[30rem] rounded-full bg-brand-500/20 blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[18rem] w-[18rem] sm:h-[26rem] sm:w-[26rem] animate-aurora rounded-full bg-amber-brand/10 blur-[130px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact us"
          title="Have a project in mind? Let’s create something amazing together"
          subtitle="Tell us what you’re building. We’ll come back with a clear approach, a realistic timeline and a quote — no vague estimates."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0 space-y-5">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.07} direction="right">
                <a
                  href={d.href || undefined}
                  className={`group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 ${
                    d.href ? 'hover:-translate-y-0.5 hover:border-brand-400/35 hover:bg-white/[0.055]' : 'cursor-default'
                  }`}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 transition-colors group-hover:bg-brand-500/25">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-100/45">
                      {d.label}
                    </span>
                    <span className="mt-1 block truncate font-display text-[15px] font-semibold text-white">{d.value}</span>
                  </span>
                  {d.href && <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-brand-100/30 transition-colors group-hover:text-brand-300" />}
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.3} direction="right">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-100/45">Reach us on</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-3 font-display text-[12.5px] font-semibold text-brand-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                    >
                      <span className="h-2 w-2 rounded-full" style={{ background: s.tone }} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.36} direction="right">
              <div className="rounded-2xl border border-brand-400/20 bg-brand-500/[0.08] p-5">
                <p className="font-display text-[13px] font-bold text-white">Typical response time</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-brand-100/65">
                  Enquiries are answered within one business day — usually much sooner. Complex scopes get a written
                  proposal with milestones.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="ring-gradient min-w-0 rounded-[1.5rem] glass-deep p-5 sm:rounded-[2rem] sm:p-9">
              <h3 className="font-display text-xl font-bold text-white">Start your project</h3>
              <p className="mt-1.5 text-[13.5px] text-brand-100/60">
                Send the details below and they reach our team directly. We reply within one business day.
              </p>

              <form onSubmit={onSubmit} className="mt-7 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Your name">
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Full name"
                      className="w-full min-w-0 rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-[14px] text-white outline-none transition-colors placeholder:text-brand-100/30 focus:border-brand-400/60"
                    />
                  </Field>
                  <Field label="Email address">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                      className="w-full min-w-0 rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-[14px] text-white outline-none transition-colors placeholder:text-brand-100/30 focus:border-brand-400/60"
                    />
                  </Field>
                  <Field label="Phone / WhatsApp">
                    <input
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+91"
                      className="w-full min-w-0 rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-[14px] text-white outline-none transition-colors placeholder:text-brand-100/30 focus:border-brand-400/60"
                    />
                  </Field>
                  <Field label="Service needed">
                    <select
                      value={form.service}
                      onChange={update('service')}
                      className="w-full min-w-0 rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-[14px] text-white outline-none transition-colors focus:border-brand-400/60"
                    >
                      {serviceIndex.map((s) => (
                        <option key={s.key} value={s.title} className="bg-ink-900">
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Tell us about the project">
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Goals, features, timeline, budget range…"
                    className="w-full resize-none rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-[14px] text-white outline-none transition-colors placeholder:text-brand-100/30 focus:border-brand-400/60"
                  />
                </Field>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 font-display text-sm font-bold text-ink-900 shadow-glow transition-shadow hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {status === 'sending' ? 'Sending…' : 'Send project enquiry'}
                </motion.button>

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-[13px] text-brand-100/85"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    <span>
                      Sorry, we couldn’t send that right now. Please email us at{' '}
                      <a className="font-semibold text-brand-300 underline" href={`mailto:${contact.email}`}>{contact.email}</a>{' '}
                      or message us on{' '}
                      <a className="font-semibold text-brand-300 underline" href={contact.whatsapp} target="_blank" rel="noreferrer noopener">
                        WhatsApp
                      </a>
                      .
                    </span>
                  </motion.p>
                )}

                {status === 'sent' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-xl border border-brand-400/25 bg-brand-500/10 px-4 py-3 text-[13px] text-brand-100/80"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-300" />
                    Thank you! Your enquiry has been sent. We’ll get back to you within one business day.
                  </motion.p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block font-display text-[11.5px] font-semibold uppercase tracking-[0.18em] text-brand-100/50">
        {label}
      </span>
      {children}
    </label>
  )
}
