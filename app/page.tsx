'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { GlassCard } from '@/components/ui/glass-card'
import { IntelligenceNode } from '@/components/ui/intelligence-node'

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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const infrastructureCapabilities = [
  'Runtime Orchestration',
  'Behavioral Optimization',
  'Adaptive Intelligence',
  'Operational Synchronization',
  'Experimentation Infrastructure',
  'Infrastructure Telemetry',
]

const runtimeSystems = [
  {
    name: 'REDEN',
    status: 'Active Runtime',
    description:
      'Adaptive optimization infrastructure focused on experimentation, orchestration, and runtime intelligence.',
  },
  {
    name: 'ORBIT',
    status: 'Experimental',
    description:
      'Operational intelligence layer for orchestration visibility and infrastructure synchronization.',
  },
  {
    name: 'AXIOM',
    status: 'In Development',
    description:
      'Autonomous infrastructure modeling environment for adaptive operational systems.',
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Intelligence Nodes */}
      <IntelligenceNode
        x={18}
        y={24}
        size={18}
        delay={0}
      />

      <IntelligenceNode
        x={84}
        y={38}
        size={24}
        delay={0.3}
      />

      <IntelligenceNode
        x={58}
        y={76}
        size={16}
        delay={0.5}
      />

      {/* Hero Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Hero */}
        <motion.section
          variants={itemVariants}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />

            <span className="text-xs uppercase tracking-[0.35em] text-white/40">
              Adaptive Intelligence Infrastructure
            </span>
          </div>

          <div className="max-w-6xl">
            <h1 className="heading-1 mb-10">
              Beyond
              <br />
              Static Systems
            </h1>

            <p className="text-lg md:text-xl text-white/45 max-w-4xl leading-relaxed mb-12">
              DCORE is an adaptive infrastructure environment focused on runtime
              orchestration, behavioral optimization, experimentation systems,
              and operational intelligence across evolving digital ecosystems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/systems"
                className="btn-primary"
              >
                Access Systems
              </Link>

              <Link
                href="/reden"
                className="btn-secondary"
              >
                Open REDEN Runtime
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Runtime Environment */}
        <motion.section
          variants={containerVariants}
          className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-6 mb-28"
        >
          {/* Runtime Visualization */}
          <motion.div variants={itemVariants}>
            <GlassCard className="rounded-[36px] p-8 min-h-[520px] relative overflow-hidden runtime-glow">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="runtime-label mb-4">
                    Operational Environment
                  </div>

                  <h2 className="text-4xl font-semibold tracking-[-0.06em]">
                    Runtime Intelligence Layer
                  </h2>
                </div>

                <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />
              </div>

              {/* Orbital System */}
              <div className="relative h-[340px] flex items-center justify-center">
                <div className="absolute w-[380px] h-[380px] border border-blue-500/20 rounded-full" />
                <div className="absolute w-[260px] h-[260px] border border-blue-500/20 rounded-full" />
                <div className="absolute w-[140px] h-[140px] border border-blue-500/20 rounded-full" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: 'linear',
                  }}
                  className="absolute w-[380px] h-[380px]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
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
                  'Adaptive Runtime',
                  'Behavioral Signals',
                  'Operational Intelligence',
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

          {/* Capability Stack */}
          <motion.div variants={itemVariants}>
            <GlassCard className="rounded-[36px] p-8 h-full">
              <div className="runtime-label mb-4">
                Infrastructure Capabilities
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.06em] mb-10">
                Adaptive Systems Stack
              </h2>

              <div className="space-y-5">
                {infrastructureCapabilities.map((capability, i) => (
                  <div
                    key={i}
                    className="
                      flex items-center justify-between
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-5
                    "
                  >
                    <div className="text-white/75">
                      {capability}
                    </div>

                    <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.section>

        {/* Systems */}
        <motion.section
          variants={containerVariants}
          className="mb-28"
        >
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="runtime-label mb-4">
              Infrastructure Ecosystem
            </div>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] mb-6">
              Operational Systems
            </h2>

            <p className="text-white/45 max-w-3xl leading-relaxed">
              DCORE systems are designed as interconnected adaptive layers —
              enabling orchestration, experimentation, synchronization, and
              infrastructure intelligence across evolving operational
              environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {runtimeSystems.map((system, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
              >
                <GlassCard className="rounded-[34px] p-8 h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.03] transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <div className="runtime-label mb-3">
                          Runtime System
                        </div>

                        <h3 className="text-4xl font-semibold tracking-[-0.06em]">
                          {system.name}
                        </h3>
                      </div>

                      <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse mt-2" />
                    </div>

                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 mb-8">
                      <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />

                      <span className="text-sm text-white/75">
                        {system.status}
                      </span>
                    </div>

                    <p className="text-white/55 leading-relaxed mb-10">
                      {system.description}
                    </p>

                    <button
                      className="
                        w-full h-14 rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        text-white/80
                        transition-all duration-300
                        hover:bg-blue-500
                        hover:border-blue-500
                        hover:text-white
                      "
                    >
                      Access System
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section variants={itemVariants}>
          <GlassCard className="rounded-[40px] p-10 md:p-16 text-center runtime-glow overflow-hidden relative">
            <div className="relative z-10">
              <div className="runtime-label mb-5">
                Infrastructure Access
              </div>

              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.06em] mb-8">
                Enter The
                <br />
                Runtime Environment
              </h2>

              <p className="text-white/45 max-w-3xl mx-auto leading-relaxed mb-12">
                Access adaptive orchestration systems, operational intelligence
                layers, and infrastructure experimentation environments built
                for next-generation runtime operations.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/auth"
                  className="btn-primary"
                >
                  Access Infrastructure
                </Link>

                <Link
                  href="/systems"
                  className="btn-secondary"
                >
                  View Systems
                </Link>
              </div>
            </div>
          </GlassCard>
        </motion.section>
      </motion.div>
    </div>
  )
      }
