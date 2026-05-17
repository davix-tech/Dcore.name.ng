'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'

const metrics = [
  {
    label: 'Runtime Requests',
    value: '18.4M',
    trend: '+12.8%',
  },
  {
    label: 'Adaptive Sessions',
    value: '128K',
    trend: '+8.2%',
  },
  {
    label: 'Infrastructure Stability',
    value: '99.992%',
    trend: '+0.04%',
  },
  {
    label: 'Execution Latency',
    value: '42ms',
    trend: '-18%',
  },
]

const systems = [
  {
    name: 'REDEN Runtime',
    status: 'Operational',
  },
  {
    name: 'ORBIT Layer',
    status: 'Experimental',
  },
  {
    name: 'AXIOM Infrastructure',
    status: 'Deploying',
  },
  {
    name: 'SYNAPSE Intelligence',
    status: 'Monitoring',
  },
]

const activities = [
  'Runtime orchestration sequence synchronized',
  'Behavioral optimization layer recalibrated',
  'Adaptive infrastructure deployment completed',
  'Security intelligence node verified',
  'Autonomous experimentation pipeline updated',
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

export default function DashboardPage() {
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
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Runtime Nodes */}
      <div className="absolute top-24 left-24 w-3 h-3 rounded-full bg-blue-500 runtime-pulse opacity-70" />
      <div className="absolute bottom-32 right-24 w-2 h-2 rounded-full bg-blue-400 runtime-pulse opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
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
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />

            <span className="text-xs tracking-[0.35em] uppercase text-white/40">
              Operational Intelligence Environment
            </span>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.07em] leading-none mb-8">
                Adaptive Runtime
                <br />
                Infrastructure Dashboard
              </h1>

              <p className="text-lg text-white/45 max-w-3xl leading-relaxed">
                Real-time orchestration visibility across adaptive systems,
                runtime intelligence layers, infrastructure operations,
                experimentation pipelines, and autonomous optimization environments.
              </p>
            </div>

            <div className="runtime-panel rounded-3xl p-6 min-w-[280px]">
              <div className="text-xs tracking-[0.3em] uppercase text-white/35 mb-4">
                Runtime Status
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-semibold tracking-[-0.05em]">
                    Operational
                  </div>

                  <div className="text-white/40 mt-2">
                    All infrastructure systems active
                  </div>
                </div>

                <div className="w-4 h-4 rounded-full bg-blue-500 runtime-pulse" />
              </div>
            </div>
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
                <div className="flex items-start justify-between mb-6">
                  <div className="text-white/40 text-sm">
                    {metric.label}
                  </div>

                  <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />
                </div>

                <div className="flex items-end justify-between">
                  <div className="text-4xl font-semibold tracking-[-0.05em]">
                    {metric.value}
                  </div>

                  <div className="text-blue-400 text-sm">
                    {metric.trend}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Dashboard Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.9fr] gap-6 mb-6"
        >
          {/* Runtime Visualization */}
          <motion.div variants={itemVariants}>
            <GlassCard className="rounded-[36px] p-8 min-h-[420px] relative overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-4">
                    Runtime Orchestration
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                    Adaptive Intelligence Activity
                  </h2>
                </div>

                <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />
              </div>

              {/* Visualization Grid */}
              <div className="absolute inset-0 opacity-[0.05]">
                <div
                  className="
                    absolute inset-0
                    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
                    bg-[size:48px_48px]
                  "
                />
              </div>

              {/* Fake Runtime Visualization */}
              <div className="relative h-[250px] flex items-center justify-center">
                <div className="absolute w-[320px] h-[320px] border border-blue-500/20 rounded-full" />
                <div className="absolute w-[220px] h-[220px] border border-blue-500/20 rounded-full" />
                <div className="absolute w-[120px] h-[120px] border border-blue-500/20 rounded-full" />

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: 'linear',
                  }}
                  className="absolute w-[320px] h-[320px]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500" />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: 'linear',
                  }}
                  className="absolute w-[220px] h-[220px]"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400" />
                </motion.div>

                <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center backdrop-blur-xl">
                  <div className="w-4 h-4 rounded-full bg-blue-500 runtime-pulse" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  'Behavioral Optimization',
                  'Autonomous Runtime',
                  'Adaptive Monitoring',
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

          {/* Systems */}
          <motion.div variants={itemVariants}>
            <GlassCard className="rounded-[36px] p-8 h-full">
              <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-4">
                Infrastructure Systems
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.05em] mb-10">
                Runtime Ecosystem
              </h2>

              <div className="space-y-5">
                {systems.map((system, i) => (
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
                      <div className="text-lg tracking-[-0.03em]">
                        {system.name}
                      </div>

                      <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />
                    </div>

                    <div className="text-white/40 text-sm">
                      {system.status}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Bottom Panels */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 xl:grid-cols-3 gap-6"
        >
          {/* Activity Feed */}
          <motion.div
            variants={itemVariants}
            className="xl:col-span-2"
          >
            <GlassCard className="rounded-[36px] p-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-4">
                    Operational Feed
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                    Runtime Activity Timeline
                  </h2>
                </div>

                <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />
              </div>

              <div className="space-y-6">
                {activities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex gap-5"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse mt-1" />

                      {i !== activities.length - 1 && (
                        <div className="w-[1px] flex-1 bg-white/10 mt-3" />
                      )}
                    </div>

                    <div className="pb-8">
                      <div className="text-white/75 mb-2">
                        {activity}
                      </div>

                      <div className="text-white/35 text-sm">
                        Runtime event registered • 2m ago
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Infrastructure Panel */}
          <motion.div variants={itemVariants}>
            <GlassCard className="rounded-[36px] p-8 h-full">
              <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-4">
                Infrastructure Metrics
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.05em] mb-10">
                System Health
              </h2>

              <div className="space-y-8">
                {[
                  ['CPU Orchestration', '82%'],
                  ['Runtime Memory', '68%'],
                  ['Network Stability', '99%'],
                  ['Behavioral Sync', '94%'],
                ].map(([label, value], i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/55 text-sm">
                        {label}
                      </span>

                      <span className="text-white">
                        {value}
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: value }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                        }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
      }
