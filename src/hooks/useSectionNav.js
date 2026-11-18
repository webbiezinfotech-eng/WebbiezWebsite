import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection, scrollToTop } from '../lib/scroll.js'

/**
 * Section navigation that works from any route.
 * On the home route it smooth-scrolls; from another page it routes home first
 * and passes the target section through router state.
 */
export default function useSectionNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return useCallback(
    (id, extra = {}) => {
      if (id === 'contact') {
        // Contact is its own page now (/contact)
        if (pathname !== '/contact') navigate('/contact')
        else scrollToTop(false)
        return
      }
      if (pathname !== '/') {
        navigate('/', { state: { scrollTo: id, ...extra } })
        return
      }
      scrollToSection(id)
    },
    [navigate, pathname]
  )
}
