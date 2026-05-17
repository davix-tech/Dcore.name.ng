'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const principles = [
  {
    title: 'Runtime Adaptability',
    description:
      'Dynamic infrastructure systems capable of behavioral adjustment across evolving operational environments.',
  },
  {
    title: 'Infrastructure Precision',
    description:
      'System-level orchestration designed for deterministic execution, visibility, and operational consistency.',
  },
  {
    title: 'Autonomous Optimization',
    description:
      'Continuous experimentation pipelines enabling adaptive performance refinement at runtime scale.',
  },
  {
    title: 'System Resilience',
    description:
      'Fault-tolerant architectural patterns engineered for persistent operational continuity.',
  },
]

const characteristics = [
  'Adaptive orchestration runtime',
  'Operational intelligence systems',
  'Behavioral optimization infrastructure',
  'Autonomous experimentation environments',
  'Infrastructure-grade security architecture',
  'Real-time runtime monitoring systems',
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Ambient Runtime Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />
      </div>

      {/* Runtime Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />
            <span className="text-xs tracking-[0.32em] uppercase text-white/40">
              Infrastructure Intelligence Layer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.06em] leading-none mb-8 max-w-5xl">
            Building Adaptive Runtime Infrastructure
            For Intelligent Operational Systems
          </h1>

          <p className="text-lg text-white/50 max-w-3xl leading-relaxed">
            DCORE develops adaptive runtime infrastructure designed to orchestrate
            operational intelligence across evolving digital environments.
            The platform focuses on behavioral optimization, autonomous
            experimentation, runtime orchestration, and system adaptability
            at infrastructure scale.
          </p>
        </motion.div>

        {/* Operational Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"
        >
          {[
            ['Runtime Stability', '99.982%'],
            ['Active Infrastructure Nodes', '128'],
            ['Adaptive Execution Layers', '24'],
          ].map(([label, value], i) => (
            <motion.div key={i} variants={itemVariants}>
              <GlassCard>
                <div className="text-white/40 text-sm mb-4">{label}</div>
                <div className="text-4xl font-semibold tracking-[-0.04em]">
                  {value}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Operational Principles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
              Operational Principles
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em]">
              Infrastructure Built For Adaptive Intelligence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, i) => (
              <motion.div key={i} variants={itemVariants}>
                <GlassCard>
                  <div className="flex items-start justify-between mb-5">
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                      {principle.title}
                    </h3>

                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 runtime-pulse" />
                  </div>

                  <p className="text-white/50 leading-relaxed">
                    {principle.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure Characteristics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
              Infrastructure Characteristics
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em]">
              Operational Intelligence Environment
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {characteristics.map((item, i) => (
              <GlassCard key={i}>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />

                  <span className="text-white/70 tracking-[-0.02em]">
                    {item}
                  </span>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
      }
