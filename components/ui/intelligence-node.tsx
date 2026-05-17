'use client'

import { motion } from 'framer-motion'

interface IntelligenceNodeProps {
  x?: number
  y?: number
  size?: number
  delay?: number
}

export function IntelligenceNode({
  x = 50,
  y = 50,
  size = 20,
  delay = 0,
}: IntelligenceNodeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute pointer-events-none z-[1]"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer Ambient Glow */}
        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-blue-500 blur-3xl"
          style={{
            width: size * 6,
            height: size * 6,
          }}
        />

        {/* Runtime Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 2.8],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
            delay,
          }}
          className="absolute rounded-full border border-blue-500/30"
          style={{
            width: size * 1.5,
            height: size * 1.5,
          }}
        />

        {/* Secondary Pulse */}
        <motion.div
          animate={{
            scale: [1, 2.2],
            opacity: [0.2, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeOut',
            delay: delay + 0.8,
          }}
          className="absolute rounded-full border border-cyan-400/20"
          style={{
            width: size * 1.2,
            height: size * 1.2,
          }}
        />

        {/* Core Node */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            relative
            rounded-full
            bg-blue-500
            shadow-[0_0_25px_rgba(59,130,246,0.9)]
          "
          style={{
            width: size * 0.35,
            height: size * 0.35,
          }}
        >
          {/* Inner Core */}
          <div
            className="
              absolute inset-[20%]
              rounded-full
              bg-white
              opacity-90
            "
          />
        </motion.div>

        {/* Rotating Runtime Ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            rounded-full
            border border-dashed border-blue-500/20
          "
          style={{
            width: size * 2.2,
            height: size * 2.2,
          }}
        />

        {/* Micro Runtime Indicators */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute"
        >
          <div
            className="
              absolute
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(125,211,252,0.8)]
            "
            style={{
              width: 3,
              height: 3,
              left: size,
              top: -2,
            }}
          />

          <div
            className="
              absolute
              rounded-full
              bg-blue-400
              shadow-[0_0_10px_rgba(96,165,250,0.8)]
            "
            style={{
              width: 2,
              height: 2,
              left: -size * 0.8,
              top: size * 0.4,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
