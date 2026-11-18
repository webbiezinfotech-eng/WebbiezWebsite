import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { products } from '../data/products.js'
import { sendEnquiry } from '../lib/sendEnquiry.js'

const sizes = ['Just me', '2–10 people', '11–50 people', '50+ people']

export default function EarlyAccessForm() {
  const [picked, setPicked] = useState([products[0].id])
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', size: sizes[1], note: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const on = (e) => setPicked([e.detail])
    window.addEventListener('webbiez:pick-product', on)
    return () => window.removeEventListener('webbiez:pick-product', on)
  }, [])

  const toggle = (id) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (sending) return
    if (!form.name.trim()) return setError('Please add your name.')
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError('Please add a valid email address.')
    if (picked.length === 0) return setError('Pick at least one product you want early access to.')
    setError('')
    const names = products.filter((p) => picked.includes(p.id)).map((p) => `• ${p.name}`).join('\n')
    setSending(true)
    try {
      await sendEnquiry({
        subject: 'Early access request — Webbiez AI products',
        replyTo: form.email,
        name: form.name,
        fields: {
          products: names,
          phone: form.phone || '—',
          company: form.company || '—',
          team_size: form.size,
          message: form.note || '—'
        }
      })
      setSent(true)
    } catch (err) {
      console.error('Early access request failed:', err)
      setError('Sorry, we couldn’t send that right now. Please try again, or email webbiezinfotech@gmail.com.')
    } finally {
      setSending(false)
    }
  }

  const field =
    'w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] text-white placeholder:text-brand-100/35 outline-none transition-colors focus:border-brand-400/60 focus:bg-white/[0.06]'
  const label = 'mb-2 block font-display text-[11px] font-bold uppercase tracking-[0.18em] text-brand-100/55'

  return (
    <form onSubmit={submit} noValidate className="ring-gradient relative min-w-0 rounded-[1.5rem] glass-deep p-4 min-[400px]:p-6 sm:rounded-[2rem] sm:p-9">
      <p className={label}>Which products interest you?</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {products.map((p) => {
          const on = picked.includes(p.id)
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => toggle(p.id)}
              aria-pressed={on}
              className={`flex items-center gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                on ? 'border-brand-400/60 bg-brand-500/15' : 'border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
            >
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${p.accent}`}>
                <p.icon className="h-4 w-4 text-white" />
              </span>
              <span className="flex-1 font-display text-[13px] font-semibold leading-snug text-white">{p.name}</span>
              <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors ${
                on ? 'border-brand-300 bg-brand-400 text-ink-900' : 'border-white/20'
              }`}>
                {on && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="ea-name">Name *</label>
          <input id="ea-name" className={field} value={form.name} onChange={update('name')} placeholder="Your full name" />
        </div>
        <div>
          <label className={label} htmlFor="ea-email">Email *</label>
          <input id="ea-email" type="email" className={field} value={form.email} onChange={update('email')} placeholder="you@company.com" />
        </div>
        <div>
          <label className={label} htmlFor="ea-phone">Phone</label>
          <input id="ea-phone" className={field} value={form.phone} onChange={update('phone')} placeholder="+91" />
        </div>
        <div>
          <label className={label} htmlFor="ea-company">Company</label>
          <input id="ea-company" className={field} value={form.company} onChange={update('company')} placeholder="Business name" />
        </div>
      </div>

      <p className={`${label} mt-6`}>Team size</p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setForm((f) => ({ ...f, size: s }))}
            className={`rounded-full border px-4 py-2 font-display text-[12px] font-semibold transition-colors ${
              form.size === s ? 'border-brand-400/60 bg-brand-500/20 text-white' : 'border-white/10 text-brand-100/60 hover:text-white'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <label className={label} htmlFor="ea-note">What would you automate first?</label>
        <textarea id="ea-note" rows={3} className={`${field} resize-none`} value={form.note} onChange={update('note')} placeholder="e.g. We miss calls after 7 PM and our leads go cold." />
      </div>

      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 text-[13px] font-medium text-rose-brand">
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="max-w-xs text-[12px] leading-relaxed text-brand-100/45">
          Sent straight to our team. No spam — only launch updates.
        </p>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 font-display text-sm font-bold text-ink-900 shadow-glow transition-shadow hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {sending ? 'Sending…' : 'Request early access'}
        </button>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 flex items-center gap-2.5 rounded-xl border border-brand-400/30 bg-brand-500/10 px-4 py-3 text-[13px] text-brand-100"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-300" />
            Thanks, {form.name.split(' ')[0]}! Your request is in — we’ll add you to the early-access list.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
