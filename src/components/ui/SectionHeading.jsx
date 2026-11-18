import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'mx-auto w-full max-w-3xl text-center' : 'w-full max-w-3xl'}>
      {eyebrow && (
        <Reveal direction="up">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3.5 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-300 sm:px-4 sm:text-[11px] sm:tracking-[0.28em]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-glow" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.07} direction="up">
        <h2
          className={`mt-5 font-display text-[1.7rem] font-bold leading-[1.15] tracking-tight min-[400px]:text-3xl sm:text-4xl lg:text-[2.9rem] ${
            light ? 'text-ink-900' : 'text-white'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.14} direction="up">
          <p className={`mt-5 text-base leading-relaxed sm:text-[17px] ${light ? 'text-ink-800/70' : 'text-brand-100/65'}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
