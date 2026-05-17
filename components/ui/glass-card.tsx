'use client'

import { ReactNode } from 'react'

import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({
  children,
  className = '',
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
        filter: 'blur(8px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true,
        margin: '-40px',
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
              transition: {
                duration: 0.35,
              },
            }
          : {}
      }
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        border border-white/[0.08]
        bg-white/[0.03]
        backdrop-blur-2xl
        shadow-[0_10px_60px_rgba(0,0,0,0.45)]
        ${className}
      `}
    >
      {/* Runtime Glow */}
      <div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-700
          bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_60%)]
        "
      />

      {/* Ambient Runtime Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]
          pointer-events-none
        "
      />

      {/* Runtime Border Glow */}
      <div
        className="
          absolute inset-0
          rounded-[30px]
          border border-blue-500/0
          group-hover:border-blue-500/20
          transition-all duration-700
        "
      />

      {/* Noise Layer */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          mix-blend-soft-light
          pointer-events-none
        "
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.7) 0.5px, transparent 0.5px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Top Runtime Line */}
      <div
        className="
          absolute top-0 left-10 right-10 h-px
          bg-gradient-to-r
          from-transparent
          via-blue-500/40
          to-transparent
        "
      />

      {/* Corner Intelligence Glow */}
      <div
        className="
          absolute -top-24 -right-24
          w-48 h-48
          rounded-full
          bg-blue-500/10
          blur-3xl
          opacity-40
          group-hover:opacity-70
          transition-opacity duration-700
        "
      />

      {/* Internal Content */}
      <div className="relative z-10 p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  )
}
