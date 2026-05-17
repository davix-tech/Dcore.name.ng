'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'
import { IntelligenceNode } from '@/components/ui/intelligence-node'
import { StatusBadge } from '@/components/ui/status-badge'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function Home() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      {/* Intelligence Nodes Background */}
      <IntelligenceNode x={20} y={30} size={20} delay={0} />
      <IntelligenceNode x={80} y={60} size={25} delay={0.2} />
      <IntelligenceNode x={50} y={80} size={18} delay={0.4} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h1 className="heading-1 mb-6 bg-gradient-to-r from-dcore-blue to-dcore-blue-glow bg-clip-text text-transparent">
            DCORE Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Next-generation cinematic intelligence platform with real-time infrastructure monitoring
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/systems" className="btn-primary">
              Explore Systems
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {[
            {
              title: 'Real-Time Monitoring',
              description: 'Live infrastructure status with instant alerts',
              status: 'active',
            },
            {
              title: 'AI-Powered Analysis',
              description: 'Advanced analytics and predictive insights',
              status: 'active',
            },
            {
              title: 'Cinematic UI',
              description: 'Beautiful, responsive interface design',
              status: 'active',
            },
          ].map((feature, i) => (
            <motion.div key={i} variants={itemVariants}>
              <GlassCard>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="heading-3">{feature.title}</h3>
                  <StatusBadge status={feature.status as any} label="Live" />
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants}>
          <GlassCard className="text-center py-12">
            <h2 className="heading-2 mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-gray-300 mb-6">Join thousands of organizations using DCORE</p>
            <Link href="/contact" className="btn-primary inline-block">
              Start Your Journey
            </Link>
          </GlassCard>
        </motion.div>
      </motion.div>
    </div>
  )
}
