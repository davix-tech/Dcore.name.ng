'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    alert('Thank you for your message! We will get back to you soon.')
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="heading-2 mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-lg">
            Have questions? We would love to hear from you. Send us a message.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <GlassCard>
              <h3 className="heading-3 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Email</p>
                  <p className="text-gray-200">hello@dcore.ng</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Phone</p>
                  <p className="text-gray-200">+234 (123) 456-7890</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Address</p>
                  <p className="text-gray-200">Lagos, Nigeria</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Support Hours</p>
                  <p className="text-gray-200">24/7 Available</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-dcore-blue"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-dcore-blue"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-dcore-blue"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Message</label>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-dcore-blue resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
