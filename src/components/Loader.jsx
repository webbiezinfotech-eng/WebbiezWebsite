import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../assets/wilogoD.png'

export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1150)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, filter: 'blur(14px)' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9800] grid place-items-center bg-ink-900"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid h-16 w-16 place-items-center rounded-2xl bg-white font-display text-2xl font-extrabold text-ink-900 shadow-glow-lg"
            >
              <img src={logo} alt="Webbiez Logo" className="h-full w-full object-contain" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 font-display text-[15px] font-extrabold tracking-[0.3em] text-white"
            >
              WEBBIEZ
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              className="mt-1.5 font-display text-[10px] font-semibold tracking-[0.52em] text-brand-300"
            >
              INFOTECH
            </motion.p>
            <div className="mt-8 h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.05, ease: 'easeInOut' }}
                className="h-full w-full bg-brand-gradient"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
