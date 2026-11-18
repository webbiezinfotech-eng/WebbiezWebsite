import { motion, useReducedMotion } from 'framer-motion'

const offsets = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  none: { x: 0, y: 0 }
}

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  amount = 0.3,
  duration = 0.75,
  once = true
}) {
  const reduce = useReducedMotion()
  const offset = offsets[direction] || offsets.up

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)', ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
