'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'

const metrics = [
  {
    label: 'Runtime State',
    value: 'Operational',
  },
  {
    label: 'Optimization Layer',
    value: 'Adaptive',
  },
  {
    label: 'Infrastructure Mode',
    value: 'Live',
  },
  {
    label: 'Experimentation Engine',
    value: 'Synchronized',
  },
]

const runtimeFeatures = [
  'Behavioral optimization orchestration',
  'Adaptive experimentation infrastructure',
  'Autonomous runtime decision routing',
  'Live optimization intelligence layer',
  'Infrastructure-grade analytics processing',
  'Dynamic orchestration synchronization',
]

const infrastructureLayers = [
  'Runtime Orchestration Layer',
  'Adaptive Intelligence Environment',
  'Behavioral Optimization Pipeline',
  'Infrastructure Synchronization Core',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(10px)',
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

export default function RedenPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Runtime Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />
      </div>

      {/* Ambient Runtime Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[950px] h-[950px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Runtime Nodes */}
      <div className="absolute top-24 left-24 w-3 h-3 rounded-full bg-blue-500 runtime-pulse opacity-70" />
      <div className="absolute bottom-32 right-24 w-2 h-2 rounded-full bg-blue-400 runtime-pulse opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />

            <span className="text-xs tracking-[0.35em] uppercase text-white/40">
              Adaptive Optimization Runtime
            </span>
          </div>

          <div className="max-w-6xl">
            <h1 className="text-5xl md:text-7xl xl:text-[92px] font-semibold tracking-[-0.08em] leading-none mb-8">
              REDEN
              <br />
              Runtime Infrastructure
            </h1>

            <p className="text-lg md:text-xl text-white/45 max-w-4xl leading-relaxed">
              REDEN is DCORE’s adaptive optimization infrastructure layer —
              designed for orchestration, experimentation, behavioral adaptation,
              runtime intelligence, and operational synchronization across
              evolving digital environments.
            </p>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
            >
              <GlassCard className="runtime-glow rounded-[30px] p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white/40 text-sm">
                    {metric.label}
                  </div>

                  <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />
                </div>

                <div className="text-2xl xl:text-3xl font-semibold tracking-[-0.05em] text-white/92">
                  {metric.value}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.85fr] gap-6 mb-6"
        >
          {/* Runtime Visualization */}
          <motion.div variants={itemVariants}>
            <GlassCard className="rounded-[36px] p-8 min-h-[500px] relative overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-4">
                    Runtime Intelligence Environment
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                    Adaptive Orchestration Layer
                  </h2>
                </div>

                <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />
              </div>

              {/* Grid */}
              <div className="absolute inset-0 opacity-[0.05]">
                <div
                  className="
                    absolute inset-0
                    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
                    bg-[size:48px_48px]
                  "
                />
              </div>

              {/* Runtime Orbital Visual */}
              <div className="relative h-[320px] flex items-center justify-center">
                <div className="absolute w-[360px] h-[360px] border border-blue-500/20 rounded-full" />
                <div className="absolute w-[260px] h-[260px] border border-blue-500/20 rounded-full" />
                <div className="absolute w-[140px] h-[140px] border border-blue-500/20 rounded-full" />

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                  }}
                  className="absolute w-[360px] h-[360px]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500" />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 14,
                    ease: 'linear',
                  }}
                  className="absolute w-[260px] h-[260px]"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400" />
                </motion.div>

                <div className="w-24 h-24 rounded-full bg-blue-500/20 border border-blue-500/40 backdrop-blur-xl flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500 runtime-pulse" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  'Behavioral Optimization',
                  'Adaptive Experimentation',
                  'Runtime Intelligence',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="runtime-panel rounded-2xl p-4 text-sm text-white/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Infrastructure Status */}
          <motion.div variants={itemVariants}>
            <GlassCard className="rounded-[36px] p-8 h-full">
              <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-4">
                Infrastructure State
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.05em] mb-10">
                Runtime Status
              </h2>

              <div className="space-y-6">
                {[
                  ['Runtime Core', 'Operational'],
                  ['Behavioral Engine', 'Synchronized'],
                  ['Experimentation Layer', 'Adaptive'],
                  ['Infrastructure Health', 'Stable'],
                  ['Analytics Pipeline', 'Streaming'],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-5
                    "
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-white/70">
                        {label}
                      </div>

                      <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />
                    </div>

                    <div className="text-white/40 text-sm">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Bottom Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 xl:grid-cols-3 gap-6"
        >
          {/* Runtime Features */}
          <motion.div
            variants={itemVariants}
            className="xl:col-span-2"
          >
            <GlassCard className="rounded-[36px] p-8">
              <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-4">
                Runtime Capabilities
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.05em] mb-10">
                Infrastructure Intelligence Stack
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {runtimeFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-6
                    "
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse mt-1" />

                      <div className="text-xs uppercase tracking-[0.25em] text-white/30">
                        Active
                      </div>
                    </div>

                    <div className="text-white/75 leading-relaxed">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Infrastructure Layers */}
          <motion.div variants={itemVariants}>
            <GlassCard className="rounded-[36px] p-8 h-full">
              <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-4">
                Infrastructure Layers
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.05em] mb-10">
                Runtime Architecture
              </h2>

              <div className="space-y-5">
                {infrastructureLayers.map((layer, i) => (
                  <div
                    key={i}
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-5
                    "
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-white/75">
                        {layer}
                      </div>

                      <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button
                  className="
                    w-full h-14 rounded-2xl
                    bg-blue-500
                    text-white
                    font-medium
                    tracking-[-0.02em]
                    transition-all duration-300
                    hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]
                  "
                >
                  Access Runtime Infrastructure
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
            }
