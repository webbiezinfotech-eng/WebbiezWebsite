import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection, scrollToTop } from '../lib/scroll.js'

export default function ScrollToTopOnNav() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    const target = state && state.scrollTo
    // give the destination route a moment to mount and lay out before we scroll
    const id = setTimeout(() => {
      if (target && scrollToSection(target)) return
      scrollToTop(true)
    }, 80)
    return () => clearTimeout(id)
  }, [pathname, state])

  return null
}
