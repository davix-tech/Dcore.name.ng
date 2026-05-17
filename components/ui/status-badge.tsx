'use client'

import { motion } from 'framer-motion'

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'pending'
  label: string
}

const statusColors = {
  active: 'bg-green-500/20 border-green-500 text-green-400',
  inactive: 'bg-red-500/20 border-red-500 text-red-400',
  pending: 'bg-yellow-500/20 border-yellow-500 text-yellow-400',
}

const indicatorColors = {
  active: 'bg-green-500',
  inactive: 'bg-red-500',
  pending: 'bg-yellow-500',
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${statusColors[status]}`}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`w-2 h-2 rounded-full ${indicatorColors[status]}`}
      />
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  )
}
