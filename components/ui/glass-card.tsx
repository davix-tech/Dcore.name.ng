'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' } : {}}
      className={`glass rounded-2xl p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}
