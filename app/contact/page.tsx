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

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none" />

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
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />

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
          {/* Left Panel */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <GlassCard className="rounded-[32px] p-8">
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

                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
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

                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
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
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <GlassCard className="rounded-[36px] p-8 md:p-10">
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
                    placeholder="Operator Identity"
                    className="w-full h-14 rounded-2xl bg-white/[0.03] border border-white/10 px-5 text-white outline-none focus:border-blue-500"
                  />

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
                    placeholder="Runtime Email"
                    className="w-full h-14 rounded-2xl bg-white/[0.03] border border-white/10 px-5 text-white outline-none focus:border-blue-500"
                  />
                </div>

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
                  placeholder="Communication Subject"
                  className="w-full h-14 rounded-2xl bg-white/[0.03] border border-white/10 px-5 text-white outline-none focus:border-blue-500"
                />

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
                  placeholder="Operational Message"
                  className="w-full rounded-3xl bg-white/[0.03] border border-white/10 px-5 py-5 text-white outline-none resize-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-2xl bg-blue-500 text-white font-medium transition-all duration-300 hover:shadow-[0_0_45px_rgba(37,99,235,0.35)] disabled:opacity-70"
                >
                  {isSubmitting
                    ? 'Transmitting Infrastructure Inquiry...'
                    : 'Transmit Operational Message'}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
    }
