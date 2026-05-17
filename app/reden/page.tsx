'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'
import { StatusBadge } from '@/components/ui/status-badge'

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

export default function RedenPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="heading-2 mb-4">REDEN Runtime Module</h1>
          <p className="text-gray-400 text-lg">
            Primary runtime environment for DCORE infrastructure execution
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <GlassCard>
              <div className="flex justify-between items-start mb-4">
                <h3 className="heading-3">Runtime Status</h3>
                <StatusBadge status="active" label="Operational" />
              </div>
              <p className="text-gray-300 mb-6">
                REDEN is the core runtime module responsible for executing all infrastructure operations with maximum efficiency and reliability.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">CPU Usage</p>
                  <p className="text-2xl text-dcore-blue font-bold">45%</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Memory</p>
                  <p className="text-2xl text-dcore-blue font-bold">2.3 GB</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Uptime</p>
                  <p className="text-2xl text-dcore-blue font-bold">99.98%</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Active Tasks</p>
                  <p className="text-2xl text-dcore-blue font-bold">1,247</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard>
              <h3 className="heading-3 mb-6">Core Features</h3>
              <div className="space-y-4">
                {[
                  'Real-time execution monitoring',
                  'Advanced resource management',
                  'Automatic scaling capabilities',
                  'Intelligent task scheduling',
                  'Comprehensive error handling',
                  'Performance optimization',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-dcore-blue rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
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
