import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 420, damping: 30, mass: 0.35 })
  const sy = useSpring(y, { stiffness: 420, damping: 30, mass: 0.35 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-none-desktop')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target.closest('a, button, [data-cursor]')
      setActive(Boolean(el))
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.classList.remove('cursor-none-desktop')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      >
        <motion.div
          animate={{ scale: active ? 2.4 : 1, opacity: active ? 0.35 : 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="-ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-brand-400 mix-blend-difference"
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
      >
        <motion.div
          animate={{ scale: active ? 1.7 : 1, borderColor: active ? 'rgba(252,176,69,0.75)' : 'rgba(45,212,191,0.4)' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="-ml-4 -mt-4 h-8 w-8 rounded-full border"
        />
      </motion.div>
    </>
  )
}
