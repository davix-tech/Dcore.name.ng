'use client'

import { ReactNode, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#050816] overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Runtime Grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
              bg-[size:72px_72px]
            "
          />
        </div>

        {/* Runtime Loader */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.4,
              ease: 'easeInOut',
            }}
            className="
              w-20 h-20
              rounded-full
              border border-blue-500/30
              bg-blue-500/10
              backdrop-blur-xl
              flex items-center justify-center
              shadow-[0_0_80px_rgba(37,99,235,0.35)]
            "
          >
            <div className="w-4 h-4 rounded-full bg-blue-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="
              mt-8
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/50
            "
          >
            Initializing Runtime Environment
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: 8,
          filter: 'blur(8px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }}
        exit={{
          opacity: 0,
          y: -8,
          filter: 'blur(8px)',
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
          }
