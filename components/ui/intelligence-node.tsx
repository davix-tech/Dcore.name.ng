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
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.div
        animate={{
          boxShadow: [
            `0 0 ${size}px rgba(59, 130, 246, 0.5)`,
            `0 0 ${size * 2}px rgba(59, 130, 246, 0.8)`,
            `0 0 ${size}px rgba(59, 130, 246, 0.5)`,
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-2 h-2 bg-dcore-blue rounded-full"
      />
    </motion.div>
  )
}
