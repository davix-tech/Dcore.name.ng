'use client'

import { motion } from 'framer-motion'

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'pending'
  label: string
}

const statusStyles = {
  active: {
    border: 'border-emerald-500/20',
    background: 'bg-emerald-500/[0.08]',
    text: 'text-emerald-300',
    dot: 'bg-emerald-400',
    glow: 'shadow-[0_0_14px_rgba(74,222,128,0.6)]',
  },

  inactive: {
    border: 'border-red-500/20',
    background: 'bg-red-500/[0.08]',
    text: 'text-red-300',
    dot: 'bg-red-400',
    glow: 'shadow-[0_0_14px_rgba(248,113,113,0.5)]',
  },

  pending: {
    border: 'border-amber-500/20',
    background: 'bg-amber-500/[0.08]',
    text: 'text-amber-200',
    dot: 'bg-amber-400',
    glow: 'shadow-[0_0_14px_rgba(251,191,36,0.5)]',
  },
}

export function StatusBadge({
  status,
  label,
}: StatusBadgeProps) {
  const style = statusStyles[status]

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 4,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className={`
        relative
        inline-flex
        items-center
        gap-2.5
        overflow-hidden
        rounded-full
        border
        px-3.5
        py-1.5
        backdrop-blur-xl
        ${style.border}
        ${style.background}
      `}
    >
      {/* Runtime Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]
          pointer-events-none
        "
      />

      {/* Signal Dot */}
      <div className="relative flex items-center justify-center">
        {/* Pulse */}
        <motion.div
          animate={{
            scale: [1, 2.4],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className={`
            absolute
            rounded-full
            ${style.dot}
          `}
          style={{
            width: 8,
            height: 8,
          }}
        />

        {/* Core Dot */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className={`
            relative
            w-2 h-2
            rounded-full
            ${style.dot}
            ${style.glow}
          `}
        />
      </div>

      {/* Label */}
      <span
        className={`
          relative
          text-[11px]
          uppercase
          tracking-[0.18em]
          font-medium
          ${style.text}
        `}
      >
        {label}
      </span>

      {/* Edge Glow */}
      <div
        className="
          absolute
          inset-y-0
          right-0
          w-10
          bg-gradient-to-l
          from-white/[0.03]
          to-transparent
          pointer-events-none
        "
      />
    </motion.div>
  )
      }}
