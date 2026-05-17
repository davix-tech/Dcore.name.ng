'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'
import { StatusBadge } from '@/components/ui/status-badge'

const systems = [
  {
    title: 'Core Runtime',
    description: 'Main execution engine managing all infrastructure operations',
    status: 'active',
    modules: ['Execution', 'Memory Management', 'Resource Allocation'],
  },
  {
    title: 'Network Layer',
    description: 'Advanced networking with low-latency communication',
    status: 'active',
    modules: ['TCP/IP', 'Load Balancing', 'DDoS Protection'],
  },
  {
    title: 'Storage System',
    description: 'Distributed storage with automatic replication',
    status: 'active',
    modules: ['Database', 'Cache', 'Backup Systems'],
  },
  {
    title: 'Security Core',
    description: 'Enterprise-grade security and compliance',
    status: 'active',
    modules: ['Encryption', 'Authentication', 'Audit Logging'],
  },
  {
    title: 'Analytics Engine',
    description: 'Real-time data processing and insights',
    status: 'active',
    modules: ['Data Processing', 'ML Pipelines', 'Visualization'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function SystemsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="heading-2 mb-4">Infrastructure Systems</h1>
          <p className="text-gray-400 text-lg">
            Five core systems powering the DCORE platform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {systems.map((system, i) => (
            <motion.div key={i} variants={itemVariants}>
              <GlassCard>
                <div className="mb-4 flex justify-between items-start">
                  <h3 className="heading-3">{system.title}</h3>
                  <StatusBadge status={system.status as any} label="Active" />
                </div>
                <p className="text-gray-300 mb-4">{system.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 font-semibold">Modules:</p>
                  {system.modules.map((module, j) => (
                    <div
                      key={j}
                      className="text-sm text-dcore-blue-glow bg-blue-500/10 px-2 py-1 rounded inline-block mr-2"
                    >
                      {module}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
