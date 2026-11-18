import { motion } from 'framer-motion'
import { Wand2, Globe, PhoneCall, TrendingUp, Mic, CalendarCheck } from 'lucide-react'

/* Small live UI mockups for each upcoming product. Pure HTML/Tailwind so they
   stay crisp at any size and animate without any image assets. */

const loop = (d = 0, dur = 2.4) => ({ duration: dur, delay: d, repeat: Infinity, ease: 'easeInOut' })

function GraphicsPreview() {
  const tiles = [
    'from-[#833AB4] to-[#FD1D1D]',
    'from-[#FD1D1D] to-[#FCB045]',
    'from-[#1E8975] to-[#FCB045]',
    'from-[#833AB4] to-[#2DD4BF]'
  ]
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-ink-900/70 px-3 py-2">
        <Wand2 className="h-3.5 w-3.5 shrink-0 text-amber-brand" />
        <span className="truncate font-mono text-[11px] text-brand-100/80">“Diwali sale post, 30% off, our brand kit”</span>
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={loop(0, 1)} className="ml-auto h-3 w-[2px] bg-brand-300" />
      </div>
      <div className="grid flex-1 grid-cols-4 gap-2">
        {tiles.map((t, i) => (
          <motion.div
            key={t}
            animate={{ opacity: [0.35, 1, 1, 0.35], scale: [0.94, 1, 1, 0.94] }}
            transition={loop(i * 0.35, 3.2)}
            className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${t}`}
          >
            <span className="absolute left-1.5 top-1.5 h-1.5 w-6 rounded-full bg-white/70" />
            <span className="absolute bottom-1.5 left-1.5 h-1 w-8 rounded-full bg-white/40" />
            <span className="absolute bottom-1.5 right-1.5 h-2.5 w-2.5 rounded bg-ink-900/60" />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between font-mono text-[10px] text-brand-100/55">
        <span>4 variants · 1080×1080</span>
        <span className="text-brand-300">brand-kit locked ✓</span>
      </div>
    </div>
  )
}

function WebsitePreview() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-ink-900/70">
      <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-brand/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-brand/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400/70" />
        <span className="ml-2 flex items-center gap-1 rounded bg-white/5 px-2 py-0.5 font-mono text-[9.5px] text-brand-100/60">
          <Globe className="h-2.5 w-2.5" /> yourbusiness.in
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        {[
          { w: '55%', h: 'h-2.5', c: 'bg-white/80' },
          { w: '80%', h: 'h-1.5', c: 'bg-white/25' },
          { w: '30%', h: 'h-3.5', c: 'bg-brand-gradient rounded-full' }
        ].map((b, i) => (
          <motion.span
            key={i}
            initial={{ width: 0 }}
            animate={{ width: [0, b.w, b.w, 0] }}
            transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, times: [0, 0.3, 0.9, 1] }}
            className={`block rounded ${b.h} ${b.c}`}
          />
        ))}
        <div className="mt-auto grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, 8] }}
              transition={{ duration: 4, delay: 0.9 + i * 0.2, repeat: Infinity, times: [0, 0.25, 0.9, 1] }}
              className="h-8 rounded-md border border-white/10 bg-white/[0.06]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function CrmPreview() {
  const cols = [
    { k: 'New', leads: ['Rohit · Web', 'Anaya · Ads'] },
    { k: 'Follow-up', leads: ['Mehta Realty'] },
    { k: 'Won', leads: ['Kapoor & Co'] }
  ]
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-brand-100/55">Pipeline</span>
        <span className="flex items-center gap-1 whitespace-nowrap font-mono text-[10px] text-brand-300">
          <TrendingUp className="h-3 w-3" /> auto follow-ups on
        </span>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {cols.map((c, ci) => (
          <div key={c.k} className="flex flex-col gap-1.5 rounded-lg border border-white/8 bg-ink-900/60 p-2">
            <span className="font-display text-[9.5px] font-bold uppercase tracking-wider text-brand-100/50">{c.k}</span>
            {c.leads.map((l, li) => (
              <motion.span
                key={l}
                animate={ci === 0 && li === 0 ? { x: [0, 0, 6, 0], borderColor: ['rgba(255,255,255,.1)', 'rgba(252,176,69,.7)', 'rgba(252,176,69,.7)', 'rgba(255,255,255,.1)'] } : {}}
                transition={loop(0, 3)}
                className="flex items-center gap-1.5 truncate rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-1 text-[9.5px] text-brand-100/80"
              >
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${ci === 2 ? 'bg-brand-400' : ci === 1 ? 'bg-amber-brand' : 'bg-violet-brand'}`} />
                {l}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function CallingPreview() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-ink-900/70 px-3 py-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500/30">
          <PhoneCall className="h-3.5 w-3.5 text-brand-200" />
        </span>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[11px] font-semibold text-white">Incoming · +91 98•••• 210</p>
          <p className="font-mono text-[9.5px] text-brand-300">AI agent answering · 00:42</p>
        </div>
        <div className="ml-auto hidden h-6 items-center gap-[3px] min-[420px]:flex">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.span
              key={i}
              animate={{ height: ['30%', '100%', '45%', '80%', '30%'] }}
              transition={{ duration: 1.1, delay: i * 0.09, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[3px] rounded-full bg-brand-300"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-1.5">
        <span className="max-w-[80%] self-start rounded-xl rounded-bl-sm bg-white/[0.07] px-2.5 py-1.5 text-[10.5px] text-brand-100/80">
          <Mic className="mr-1 inline h-2.5 w-2.5" />Is there a slot tomorrow evening?
        </span>
        <motion.span
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.9, 1] }}
          className="max-w-[85%] self-end rounded-xl rounded-br-sm bg-brand-500/35 px-2.5 py-1.5 text-[10.5px] text-white"
        >
          <CalendarCheck className="mr-1 inline h-2.5 w-2.5" />Booked for 6:30 PM — confirmation sent on WhatsApp.
        </motion.span>
      </div>
    </div>
  )
}

const map = {
  'ai-graphics-generator': GraphicsPreview,
  'ai-website-generator': WebsitePreview,
  'ai-sales-crm': CrmPreview,
  'ai-calling-agent': CallingPreview
}

export default function ProductPreview({ id }) {
  const C = map[id]
  return C ? <C /> : null
}
