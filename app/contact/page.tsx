'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GlassCard } from '@/components/ui/glass-card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    await new Promise((resolve) =>
      setTimeout(resolve, 1800)
    )

    setIsSubmitting(false)

    alert('Infrastructure inquiry transmitted successfully.')

    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Floating Runtime Nodes */}
      <div className="absolute top-24 left-20 w-3 h-3 rounded-full bg-blue-500 runtime-pulse opacity-70" />
      <div className="absolute bottom-32 right-24 w-2 h-2 rounded-full bg-blue-400 runtime-pulse opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
              Infrastructure Communication Layer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.07em] leading-none mb-8 max-w-5xl">
            Establish Secure
            <br />
            Operational Communication
          </h1>

          <p className="text-lg text-white/45 max-w-3xl leading-relaxed">
            Direct communication channel for infrastructure inquiries,
            runtime partnerships, operational deployment discussions,
            and adaptive systems collaboration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-8"
        >
          {/* Left Infrastructure Panel */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <GlassCard className="runtime-glow rounded-[32px] p-8">
              <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-6">
                Infrastructure Status
              </div>

              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-white/45 text-sm mb-2">
                      Runtime Network
                    </div>

                    <div className="text-xl font-medium">
                      Operational
                    </div>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-white/45 text-sm mb-2">
                      Communication Layer
                    </div>

                    <div className="text-xl font-medium">
                      Secure Active
                    </div>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-white/45 text-sm mb-2">
                      Infrastructure Region
                    </div>

                    <div className="text-xl font-medium">
                      Lagos Node
                    </div>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
              </div>
            </GlassCard>

            <GlassCard className="rounded-[32px] p-8">
              <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-6">
                Communication Channels
              </div>

              <div className="space-y-7">
                <div>
                  <div className="text-white/40 text-sm mb-2">
                    Infrastructure Email
                  </div>

                  <div className="text-lg tracking-[-0.03em]">
                    hello@dcore.name.ng
                  </div>
                </div>

                <div>
                  <div className="text-white/40 text-sm mb-2">
                    Operational Availability
                  </div>

                  <div className="text-lg tracking-[-0.03em]">
                    Continuous Runtime Monitoring
                  </div>
                </div>

                <div>
                  <div className="text-white/40 text-sm mb-2">
                    Infrastructure Location
                  </div>

                  <div className="text-lg tracking-[-0.03em]">
                    Lagos Operational Region
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="rounded-[32px] p-8">
              <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-6">
                Active Systems
              </div>

              <div className="space-y-4">
                {[
                  'REDEN Runtime',
                  'ORBIT Experimental Layer',
                  'AXIOM Infrastructure',
                  'SYNAPSE Adaptive Systems',
                ].map((system, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white/70">
                      {system}
                    </span>

                    <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Interface */}
          <motion.div variants={itemVariants}>
            <GlassCard className="runtime-glow rounded-[36px] p-8 md:p-10">
              <div className="mb-10">
                <div className="text-xs tracking-[0.32em] uppercase text-white/35 mb-5">
                  Operational Inquiry Interface
                </div>

                <h2 className="text-4xl font-semibold tracking-[-0.06em] mb-5">
                  Initialize Communication Sequence
                </h2>

                <p className="text-white/45 leading-relaxed max-w-2xl">
                  Submit infrastructure inquiries, deployment requests,
                  adaptive systems discussions, runtime partnerships,
                  or operational collaboration proposals.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-white/45 mb-3">
                      Operator Identity
                    </label>

                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          name: e.target.value,
                        })
                      }
                      placeholder="Infrastructure Operator"
                      className="
                        w-full h-14 rounded-2xl
                        bg-white/[0.03]
                        border border-white/10
                        px-5
                        text-white
                        outline-none
                        transition-all
                        focus:border-blue-500
                        focus:bg-blue-500/[0.04]
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/45 mb-3">
                      Runtime Email
                    </label>

                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          email: e.target.value,
                        })
                      }
                      placeholder="operator@infrastructure.io"
                      className="
                        w-full h-14 rounded-2xl
                        bg-white/[0.03]
                        border border-white/10
                        px-5
                        text-white
                        outline-none
                        transition-all
                        focus:border-blue-500
                        focus:bg-blue-500/[0.04]
                      "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/45 mb-3">
                    Communication Subject
                  </label>

                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        subject: e.target.value,
                      })
                    }
                    placeholder="Infrastructure Deployment Inquiry"
                    className="
                      w-full h-14 rounded-2xl
                      bg-white/[0.03]
                      border border-white/10
                      px-5
                      text-white
                      outline-none
                      transition-all
                      focus:border-blue-500
                      focus:bg-blue-500/[0.04]
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/45 mb-3">
                    Operational Message
                  </label>

                  <textarea
                    required
                    rows={7}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        message: e.target.value,
                      })
                    }
                    placeholder="Describe infrastructure requirements, runtime objectives, deployment goals, or operational collaboration details..."
                    className="
                      w-full rounded-3xl
                      bg-white/[0.03]
                      border border-white/10
                      px-5 py-5
                      text-white
                      outline-none
                      resize-none
                      transition-all
                      focus:border-blue-500
                      focus:bg-blue-500/[0.04]
                    "
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    relative w-full h-16 rounded-2xl
                    bg-blue-500
                    text-white
                    font-medium
                    tracking-[-0.02em]
                    overflow-hidden
                    transition-all duration-300
                    hover:shadow-[0_0_45px_rgba(37,99,235,0.35)]
                    disabled:opacity-70
                  "
                >
                  <span className="relative z-10">
                    {isSubmitting
                      ? 'Transmitting Infrastructure Inquiry...'
                      : 'Transmit Operational Message'}
                  </span>

                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: 'linear',
                    }}
                    className="
                      absolute inset-0
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                    "
                  />
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
      }    console.log('Form submitted:', formState)
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
