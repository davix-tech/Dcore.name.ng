'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'

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

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="heading-2 mb-4">About DCORE</h1>
          <p className="text-gray-400 text-lg">
            Revolutionizing infrastructure management through cutting-edge technology
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
              <h3 className="heading-3 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                DCORE is dedicated to providing next-generation infrastructure management solutions that empower organizations to scale, innovate, and succeed in the digital age. We combine cutting-edge technology with intuitive design to deliver unparalleled performance and reliability.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard>
              <h3 className="heading-3 mb-4">Our Values</h3>
              <div className="space-y-3">
                {[
                  'Innovation: Constantly pushing the boundaries of what is possible',
                  'Reliability: Building systems you can depend on 24/7',
                  'Excellence: Committed to the highest standards of quality',
                  'Transparency: Open communication and honest partnerships',
                  'Sustainability: Building for the future responsibly',
                ].map((value, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-dcore-blue rounded-full mt-2"></div>
                    <span className="text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard>
              <h3 className="heading-3 mb-4">Why Choose DCORE</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✨ Enterprise-grade infrastructure solutions</li>
                <li>🚀 Seamless scalability and performance</li>
                <li>🔒 Military-grade security standards</li>
                <li>🎯 24/7 expert support team</li>
                <li>💡 Continuous innovation and updates</li>
              </ul>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
