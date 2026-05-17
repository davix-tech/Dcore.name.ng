'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'
import { StatusBadge } from '@/components/ui/status-badge'

const metrics = [
  { label: 'Total Requests', value: '1.2M', trend: '+12%' },
  { label: 'Active Users', value: '45.2K', trend: '+8%' },
  { label: 'Uptime', value: '99.98%', trend: '+0.02%' },
  { label: 'Avg Response', value: '120ms', trend: '-15%' },
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

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="heading-2 mb-2">Operational Dashboard</h1>
          <p className="text-gray-400">Real-time infrastructure metrics and analytics</p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          {metrics.map((metric, i) => (
            <motion.div key={i} variants={itemVariants}>
              <GlassCard>
                <p className="text-sm text-gray-400 mb-2">{metric.label}</p>
                <div className="flex justify-between items-end">
                  <p className="text-3xl font-bold text-dcore-blue">{metric.value}</p>
                  <span className="text-sm text-green-400">{metric.trend}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Status Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <GlassCard>
              <h3 className="heading-3 mb-6">System Status</h3>
              <div className="space-y-3">
                {[
                  { name: 'API Server', status: 'active' },
                  { name: 'Database', status: 'active' },
                  { name: 'Cache Layer', status: 'active' },
                  { name: 'Load Balancer', status: 'active' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-300">{item.name}</span>
                    <StatusBadge status={item.status as any} label="Running" />
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard>
              <h3 className="heading-3 mb-6">Recent Activities</h3>
              <div className="space-y-3">
                {[
                  'Database backup completed',
                  'Security update deployed',
                  'Cache invalidated',
                  'Load scaling triggered',
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-dcore-blue rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-300">{activity}</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
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
