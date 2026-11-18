import { motion } from 'framer-motion'
import {
  ShoppingCart, Heart, MessageCircle, MousePointer2, PenTool, Blocks, Wallet, Coins,
  Wand2, Globe, LineChart, PhoneCall, PackageCheck
} from 'lucide-react'

/* Illustrative UI previews for the Work section.
   They are drawn in code (no screenshots), so they stay crisp, load instantly and match the theme. */

const loop = (delay = 0, duration = 2.6) => ({ duration, delay, repeat: Infinity, ease: 'easeInOut' })

const tones = [
  'from-[#1E8975] to-[#2DD4BF]',
  'from-[#FCB045] to-[#FD1D1D]',
  'from-[#833AB4] to-[#2DD4BF]',
  'from-[#113B36] to-[#FCB045]'
]

function BrowserFrame({ url, children, className = '' }) {
  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/85 shadow-glow ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-rose-500/80" />
        <span className="h-2 w-2 rounded-full bg-amber-brand/80" />
        <span className="h-2 w-2 rounded-full bg-brand-400/80" />
        <span className="ml-2 flex-1 truncate rounded-md bg-white/[0.05] px-2.5 py-1 text-[10px] text-brand-100/50">{url}</span>
      </div>
      <div className="relative min-h-0 flex-1 p-3.5 sm:p-4">{children}</div>
    </div>
  )
}

/* 01 — wholesale storefront + admin panel */
function WholesaleMock() {
  const bars = [40, 70, 55, 85, 62, 92]
  return (
    <div className="relative h-full">
      <BrowserFrame url="wholesale-partner/catalogue">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-24 rounded-full bg-white/15" />
          <div className="flex items-center gap-3">
            <div className="hidden h-2 w-14 rounded-full bg-white/10 sm:block" />
            <div className="relative">
              <ShoppingCart className="h-4 w-4 text-brand-200" />
              <motion.span animate={{ scale: [1, 1.5, 1] }} transition={loop(0, 2)} className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 rounded-full bg-amber-brand" />
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-2"
            >
              <div className={`aspect-[5/3] rounded-lg bg-gradient-to-br ${tones[i % 4]} opacity-90`} />
              <div className="mt-2 h-1.5 w-4/5 rounded-full bg-white/20" />
              <div className="mt-1.5 flex items-center justify-between">
                <div className="h-1.5 w-1/3 rounded-full bg-brand-300/60" />
                <span className="rounded-md bg-brand-500/25 px-1.5 py-px text-[8px] font-bold text-brand-200">BULK</span>
              </div>
            </motion.div>
          ))}
        </div>
      </BrowserFrame>

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={loop(0.4, 5)}
        className="absolute -bottom-3 -right-1 w-[10.5rem] rounded-xl border border-brand-400/30 bg-ink-800/95 p-3 shadow-glow backdrop-blur sm:-right-4 sm:w-48"
      >
        <div className="flex items-center justify-between">
          <p className="font-display text-[9.5px] font-bold uppercase tracking-[0.2em] text-brand-300">Admin · Orders</p>
          <PackageCheck className="h-3.5 w-3.5 text-amber-brand" />
        </div>
        <div className="mt-2.5 flex h-12 items-end gap-1.5">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              animate={{ height: [`${h * 0.55}%`, `${h}%`, `${h * 0.55}%`] }}
              transition={loop(i * 0.15, 3)}
              className="flex-1 rounded-t bg-brand-gradient"
            />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[9px] text-brand-100/60">
          <span className="rounded-full bg-amber-brand/20 px-1.5 py-px font-semibold text-amber-brand">Low stock</span>
          <span>inventory sync</span>
        </div>
      </motion.div>
    </div>
  )
}

/* 02 — e-commerce store + social presence */
function EcommerceMock() {
  return (
    <div className="relative h-full">
      <div className="h-full w-[78%] sm:w-[72%]">
        <BrowserFrame url="yourstore.in">
          <motion.div
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            className="h-20 rounded-xl bg-[length:200%_200%] bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] sm:h-24"
          >
            <div className="p-3">
              <div className="h-2.5 w-2/5 rounded-full bg-white/100" />
              <div className="mt-2 h-1.5 w-1/4 rounded-full bg-white/50" />
              <div className="mt-3 h-4 w-14 rounded-full bg-white/90" />
            </div>
          </motion.div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-white/[0.03] p-1.5">
                <div className={`aspect-square rounded-md bg-gradient-to-br ${tones[(i + 1) % 4]}`} />
                <div className="mt-1.5 h-1 w-3/4 rounded-full bg-white/20" />
                <div className="mt-1 h-1 w-1/3 rounded-full bg-amber-brand/70" />
              </div>
            ))}
          </div>
        </BrowserFrame>
      </div>

      <motion.div
        animate={{ y: [0, -9, 0], rotate: [3, 1, 3] }}
        transition={loop(0, 6)}
        className="absolute right-0 top-3 w-[38%] max-w-[10rem] rounded-[1.5rem] border-2 border-white/25 bg-ink-900 p-2 shadow-glow sm:right-2"
      >
        <div className="mx-auto h-1 w-8 rounded-full bg-white/25" />
        <div className="mt-2 flex items-center gap-1.5">
          <span className="h-5 w-5 rounded-full bg-insta-gradient" />
          <div className="space-y-1">
            <div className="h-1.5 w-12 rounded-full bg-white/30" />
            <div className="h-1 w-8 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={loop(i * 0.25, 3)}
              className={`aspect-square rounded bg-gradient-to-br ${tones[i % 4]}`}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center justify-around text-brand-100/70">
          <Heart className="h-3 w-3 text-rose-500" />
          <MessageCircle className="h-3 w-3" />
          <ShoppingCart className="h-3 w-3 text-amber-brand" />
        </div>
      </motion.div>
    </div>
  )
}

/* 03 — developer portfolio */
function DevFolioMock() {
  const chips = ['React.js', 'PHP', 'Laravel', 'MySQL']
  return (
    <BrowserFrame url="pooja-portfolio.webbiezinfotech.in">
      <div className="flex items-center justify-between">
        <span className="font-display text-[12px] font-extrabold text-white">PD<span className="text-amber-brand">.</span></span>
        <div className="flex items-center gap-3">
          {['About', 'Work', 'Journey'].map((x) => <span key={x} className="hidden text-[9px] text-brand-100/50 sm:block">{x}</span>)}
          <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[8px] font-bold text-ink-900">Hire me</span>
        </div>
      </div>
      <div className="mt-3 grid items-center gap-4 sm:mt-4 sm:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="font-display text-[8.5px] font-semibold uppercase tracking-[0.26em] text-brand-300">Hello, I am</p>
          <motion.div animate={{ width: ['45%', '90%', '45%'] }} transition={loop(0, 6)} className="mt-2 h-4 rounded-full bg-white/90" />
          <div className="mt-2 h-3 w-3/5 rounded-full bg-brand-gradient" />
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chips.map((c, i) => (
              <motion.span
                key={c}
                animate={{ y: [0, -3, 0] }}
                transition={loop(i * 0.25, 3.4)}
                className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[8.5px] font-semibold text-brand-100/80"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto hidden h-24 w-24 place-items-center sm:grid">
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-brand-400/40" />
          <motion.div animate={{ scale: [1, 1.06, 1] }} transition={loop(0, 4)} className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient font-display text-lg font-extrabold text-ink-900 shadow-glow">
            PD
          </motion.div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -4, 0] }}
            transition={loop(i * 0.3, 4)}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2"
          >
            <div className={`h-9 rounded-md bg-gradient-to-br ${tones[i % 4]}`} />
            <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/25" />
            <div className="mt-1.5 h-1 w-1/2 rounded-full bg-white/12" />
          </motion.div>
        ))}
      </div>
    </BrowserFrame>
  )
}

/* 04 — designer portfolio */
function DesignFolioMock() {
  const swatches = ['#07191B', '#833AB4', '#2DD4BF', '#FCB045', '#FD1D1D']
  return (
    <BrowserFrame url="aaruuportfolio.netlify.app">
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-2 sm:gap-3">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#2a1140] via-[#1a1030] to-[#0B2724] p-3">
          <p className="font-display text-[8.5px] font-semibold uppercase tracking-[0.24em] text-brand-300">Case study</p>
          <div className="mx-auto mt-3 w-[4.75rem] rounded-[1.1rem] sm:w-[5.5rem] border-2 border-white/25 bg-ink-900 p-1.5">
            <div className="h-2 w-7 rounded-full bg-white/25" />
            <div className="mt-1.5 h-10 rounded-lg bg-gradient-to-br from-[#833AB4] to-[#2DD4BF]" />
            <div className="mt-1.5 grid grid-cols-2 gap-1">
              <div className="h-5 rounded bg-white/12" />
              <div className="h-5 rounded bg-white/12" />
            </div>
            <div className="mt-1.5 h-2.5 rounded-full bg-brand-gradient" />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-[3.55rem] h-[3.9rem] w-[4.9rem] -translate-x-1/2">
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.96, 1.03, 0.96] }}
              transition={loop(0, 3)}
              className="h-full w-full rounded-md border border-dashed border-amber-brand"
            />
          </div>
          <motion.div
            animate={{ x: [0, 38, 8, 0], y: [0, 18, 34, 0] }}
            transition={loop(0, 6)}
            className="absolute left-[55%] top-[4.2rem] text-white"
          >
            <MousePointer2 className="h-4 w-4 fill-white" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="font-display text-[8.5px] font-semibold uppercase tracking-[0.24em] text-brand-300">Palette</p>
            <div className="mt-2 flex gap-1.5">
              {swatches.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="h-8 flex-1 rounded-md border border-white/10"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:gap-3 sm:p-3">
            <span className="font-display text-3xl font-extrabold leading-none text-white sm:text-4xl">Aa</span>
            <div className="space-y-1.5">
              <div className="h-1.5 w-9 rounded-full bg-white/30 sm:w-14" />
              <div className="h-1.5 w-6 rounded-full bg-white/15 sm:w-9" />
            </div>
            <PenTool className="ml-auto hidden h-4 w-4 text-[#C084FC] sm:block" />
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* 05 — blockchain web app */
function BlockchainMock() {
  const hashes = ['0x7a…f3', '0x2c…19', '0x9e…b0', '0x41…d7']
  return (
    <BrowserFrame url="blockchain.webbiezinfotech.in">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-display text-[10px] font-bold text-white">
          <Blocks className="h-3.5 w-3.5 text-[#38BDF8]" /> Chain
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[9px] font-semibold text-brand-100/80">
          <Wallet className="h-3 w-3 text-amber-brand" />
          0x7a…f3
          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={loop(0, 1.6)} className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
      </div>
      <div className="mt-4 flex items-center">
        {hashes.map((h, i) => (
          <div key={h} className="flex flex-1 items-center">
            <motion.div
              animate={{ y: [0, -4, 0], borderColor: ['rgba(255,255,255,0.12)', 'rgba(56,189,248,0.7)', 'rgba(255,255,255,0.12)'] }}
              transition={loop(i * 0.4, 3.2)}
              className="w-full rounded-lg border bg-white/[0.04] p-2"
            >
              <p className="whitespace-nowrap font-display text-[8px] font-bold uppercase tracking-[0.18em] text-[#38BDF8]">
                <span className="hidden sm:inline">Block </span>#{i + 1}
              </p>
              <p className="mt-1 hidden whitespace-nowrap text-[9px] text-brand-100/60 sm:block">{h}</p>
              <div className="mt-1.5 h-1 w-3/4 rounded-full bg-white/15" />
            </motion.div>
            {i < hashes.length - 1 && (
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={loop(i * 0.4, 1.6)}
                className="h-px w-3 shrink-0 bg-[#38BDF8]"
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <div className="flex items-center justify-between">
          <p className="font-display text-[8.5px] font-semibold uppercase tracking-[0.24em] text-brand-300">Network activity</p>
          <Coins className="h-3.5 w-3.5 text-amber-brand" />
        </div>
        <svg viewBox="0 0 300 70" className="mt-2 h-14 w-full" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d="M0 55 C30 50 40 20 70 28 S120 60 150 38 S210 8 240 22 S280 40 300 12"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.85, 1] }}
          />
          <path d="M0 55 C30 50 40 20 70 28 S120 60 150 38 S210 8 240 22 S280 40 300 12 L300 70 L0 70 Z" fill="#38BDF8" fillOpacity="0.08" />
        </svg>
      </div>
    </BrowserFrame>
  )
}

/* 05 — AI product suite (orbit) */
function AiMock() {
  const sats = [
    { icon: Wand2, label: 'Graphics', style: { left: '6%', top: '8%' }, c: '#2DD4BF' },
    { icon: Globe, label: 'Websites', style: { right: '6%', top: '8%' }, c: '#FCB045' },
    { icon: LineChart, label: 'Sales CRM', style: { left: '6%', bottom: '8%' }, c: '#833AB4' },
    { icon: PhoneCall, label: 'Voice AI', style: { right: '6%', bottom: '8%' }, c: '#FD1D1D' }
  ]
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900/85">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="none" fill="none" aria-hidden="true">
        {[[90, 50], [310, 50], [90, 230], [310, 230]].map(([x, y], i) => (
          <motion.path
            key={i}
            d={`M200 140 L${x} ${y}`}
            stroke="#2DD4BF"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-brand-400/30" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.07, 1] }}
          transition={loop(0, 3)}
          className="grid h-full w-full place-items-center rounded-full bg-brand-gradient font-display text-xl font-extrabold text-ink-900 shadow-glow-lg"
        >
          AI
        </motion.div>
      </div>
      {sats.map((s, i) => (
        <motion.div
          key={s.label}
          style={s.style}
          animate={{ y: [0, -5, 0] }}
          transition={loop(i * 0.35, 4)}
          className="absolute flex items-center gap-2 rounded-xl border border-white/12 bg-ink-800/95 px-3 py-2 backdrop-blur"
        >
          <s.icon className="h-3.5 w-3.5" style={{ color: s.c }} />
          <span className="font-display text-[11px] font-semibold text-white">{s.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

export const mocks = {
  wholesale: WholesaleMock,
  ecommerce: EcommerceMock,
  devfolio: DevFolioMock,
  designfolio: DesignFolioMock,
  blockchain: BlockchainMock,
  ai: AiMock
}
