'use client'

import { motion } from 'framer-motion'

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'pending'
  label: string
}

const statusStyles = {
  active:
    'border-blue-500/30 bg-blue-500/10 text-blue-400',

  inactive:
    'border-red-500/30 bg-red-500/10 text-red-400',

  pending:
    'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
}

const indicatorStyles = {
  active: 'bg-blue-500',
  inactive: 'bg-red-500',
  pending: 'bg-yellow-500',
}

export function StatusBadge({
  status,
  label,
}: StatusBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`
        inline-flex items-center gap-2
        rounded-full border
        px-3 py-1
        text-xs font-medium
        backdrop-blur-md
        ${statusStyles[status]}
      `}
    >
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className={`
          h-2 w-2 rounded-full
          ${indicatorStyles[status]}
        `}
      />

      <span>{label}</span>
    </motion.div>
  )
}
