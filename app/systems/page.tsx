'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'

const systems = [
  {
    name: 'REDEN',
    status: 'Active Runtime',
    description:
      'Adaptive optimization infrastructure designed for behavioral orchestration, experimentation systems, and runtime intelligence synchronization.',
    capabilities: [
      'Behavioral Optimization',
      'Runtime Experimentation',
      'Adaptive Intelligence',
    ],
  },
  {
    name: 'ORBIT',
    status: 'Experimental',
    description:
      'Operational intelligence environment focused on orchestration visibility, adaptive routing systems, and infrastructure observability.',
    capabilities: [
      'Infrastructure Visibility',
      'Adaptive Routing',
      'Operational Telemetry',
    ],
  },
  {
    name: 'VEKTOR',
    status: 'Internal Systems',
    description:
      'Internal synchronization layer powering infrastructure coordination, deployment sequencing, and runtime state management.',
    capabilities: [
      'Deployment Coordination',
      'State Synchronization',
      'Runtime Sequencing',
    ],
  },
  {
    name: 'AXIOM',
    status: 'In Development',
    description:
      'Emerging intelligence infrastructure for autonomous orchestration, adaptive execution modeling, and runtime optimization.',
    capabilities: [
      'Autonomous Orchestration',
      'Execution Modeling',
      'Optimization Flows',
    ],
  },
  {
    name: 'SYNAPSE',
    status: 'Future Infrastructure',
    description:
      'Next-generation adaptive systems architecture exploring intelligence evolution, distributed orchestration, and behavioral adaptation.',
    capabilities: [
      'Distributed Intelligence',
      'Adaptive Evolution',
      'Behavioral Systems',
    ],
  },
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

export default function SystemsPage() {
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

      {/* Ambient Glow */}
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
              Adaptive Infrastructure Ecosystem
            </span>
          </div>

          <div className="max-w-6xl">
            <h1 className="text-5xl md:text-7xl xl:text-[92px] font-semibold tracking-[-0.08em] leading-none mb-8">
              DCORE
              <br />
              Systems Architecture
            </h1>

            <p className="text-lg md:text-xl text-white/45 max-w-4xl leading-relaxed">
              A growing ecosystem of adaptive infrastructure systems designed
              for orchestration, experimentation, runtime intelligence,
              behavioral optimization, and operational synchronization.
            </p>
          </div>
        </motion.div>

        {/* Systems Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {systems.map((system, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
            >
              <GlassCard className="rounded-[34px] p-8 h-full relative overflow-hidden group">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.03] transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="text-xs tracking-[0.28em] uppercase text-white/30 mb-3">
                        Infrastructure System
                      </div>

                      <h2 className="text-4xl font-semibold tracking-[-0.06em]">
                        {system.name}
                      </h2>
                    </div>

                    <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse mt-2" />
                  </div>

                  {/* Status */}
                  <div className="mb-8">
                    <div className="text-sm text-white/35 mb-2">
                      Operational State
                    </div>

                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />

                      <span className="text-sm text-white/75">
                        {system.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/55 leading-relaxed mb-10">
                    {system.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mb-10">
                    <div className="text-xs tracking-[0.28em] uppercase text-white/30 mb-5">
                      Core Capabilities
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {system.capabilities.map((capability, j) => (
                        <div
                          key={j}
                          className="
                            rounded-full
                            border border-white/10
                            bg-white/[0.03]
                            px-4 py-2
                            text-sm text-white/70
                          "
                        >
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Access */}
                  <button
                    className="
                      w-full h-14 rounded-2xl
                      bg-white/[0.04]
                      border border-white/10
                      text-white/80
                      transition-all duration-300
                      hover:bg-blue-500
                      hover:border-blue-500
                      hover:text-white
                      hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]
                    "
                  >
                    Access System
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
    }
