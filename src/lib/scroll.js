export function scrollToSection(id, offset = -72) {
  if (typeof document === 'undefined') return false
  const el = document.getElementById(id)
  if (!el) return false
  if (window.__lenis) {
    // re-measure first: after a page switch Lenis may still hold the old page height
    if (typeof window.__lenis.resize === 'function') window.__lenis.resize()
    window.__lenis.scrollTo(el, { offset, duration: 1.25 })
    // Content above the target can change height while we scroll (e.g. the rotating reviews).
    // Once the scroll has finished, check the landing spot and nudge it if it drifted.
    const settle = (tries) => {
      setTimeout(() => {
        const l = window.__lenis
        if (!l) return
        l.resize?.()
        if (l.isScrolling) { // still moving (or the visitor took over) — don't fight it
          if (tries > 0) settle(tries - 1)
          return
        }
        const drift = el.getBoundingClientRect().top - -offset
        if (Math.abs(drift) > 6 && tries > 0) {
          l.scrollTo(el, { offset, duration: 0.5 })
          settle(tries - 1)
        }
      }, tries === 2 ? 1500 : 700)
    }
    settle(2)
  } else {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: 'smooth' })
  }
  return true
}

export function scrollToTop(immediate = true) {
  if (window.__lenis) window.__lenis.scrollTo(0, immediate ? { immediate: true } : { duration: 1 })
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
}
