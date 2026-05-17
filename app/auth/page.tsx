'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GlassCard } from '@/components/ui/glass-card'

const steps = [
  'Identity',
  'Verification',
  'Security',
  'Infrastructure',
]

export default function AuthPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const [formData, setFormData] = useState({
    email: '',
    code: '',
    password: '',
    confirmPassword: '',
  })

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-32">
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
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Floating Runtime Orbs */}
      <div className="absolute top-24 left-24 w-3 h-3 bg-blue-500 rounded-full runtime-pulse opacity-70" />
      <div className="absolute bottom-32 right-32 w-2 h-2 bg-blue-400 rounded-full runtime-pulse opacity-50" />

      {/* Side Infrastructure Panel */}
      <div className="hidden xl:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col gap-4 opacity-60">
        <div className="runtime-panel rounded-3xl p-5 w-[220px]">
          <div className="text-xs uppercase tracking-[0.3em] text-white/35 mb-4">
            Runtime Status
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/45 text-sm">
                Identity Layer
              </span>

              <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/45 text-sm">
                Verification Node
              </span>

              <div className="w-2 h-2 rounded-full bg-blue-500 runtime-pulse" />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/45 text-sm">
                Secure Session
              </span>

              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        <div className="runtime-panel rounded-3xl p-5 w-[220px]">
          <div className="text-xs uppercase tracking-[0.3em] text-white/35 mb-4">
            Infrastructure
          </div>

          <div className="text-4xl font-semibold tracking-[-0.06em]">
            128
          </div>

          <div className="text-sm text-white/40 mt-2">
            Active Runtime Nodes
          </div>
        </div>
      </div>

      {/* Main Auth Interface */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-500 runtime-pulse" />

            <span className="text-xs tracking-[0.35em] uppercase text-white/40">
              Infrastructure Access Layer
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.07em] leading-none mb-6">
            Access Adaptive
            <br />
            Runtime Infrastructure
          </h1>

          <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            Secure runtime identity verification for operational intelligence
            environments and adaptive infrastructure systems.
          </p>
        </motion.div>

        {/* Runtime Sequence */}
        <div className="flex justify-between items-center mb-10 gap-2">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                className={`
                  relative w-11 h-11 rounded-full
                  flex items-center justify-center
                  text-sm font-medium
                  border transition-all duration-500

                  ${
                    i <= currentStep
                      ? 'bg-blue-500/20 border-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.25)]'
                      : 'bg-white/[0.03] border-white/10 text-white/35'
                  }
                `}
              >
                {i + 1}
              </motion.div>

              {i < steps.length - 1 && (
                <div className="flex-1 h-[1px] mx-2 bg-white/10 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: i < currentStep ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 top-0 h-full bg-blue-500"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Auth Card */}
        <motion.div
          key={currentStep}
          initial={{
            opacity: 0,
            y: 20,
            filter: 'blur(10px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <GlassCard className="runtime-glow rounded-[32px] p-8 md:p-10">
            {/* Identity */}
            {currentStep === 0 && (
              <div>
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-[0.32em] text-white/35 mb-4">
                    Identity Verification
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.05em] mb-4">
                    Initialize Infrastructure Access
                  </h2>

                  <p className="text-white/45 leading-relaxed">
                    Establish a secure runtime identity to access adaptive
                    orchestration systems and operational infrastructure.
                  </p>
                </div>

                <div className="space-y-5">
                  <input
                    type="email"
                    placeholder="Operational Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
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

                  <button
                    onClick={handleNext}
                    className="
                      w-full h-14 rounded-2xl
                      bg-blue-500
                      text-white
                      font-medium
                      tracking-[-0.02em]
                      transition-all duration-300
                      hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]
                    "
                  >
                    Access Infrastructure
                  </button>
                </div>
              </div>
            )}

            {/* Verification */}
            {currentStep === 1 && (
              <div>
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-[0.32em] text-white/35 mb-4">
                    Verification Runtime
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.05em] mb-4">
                    Confirm Runtime Identity
                  </h2>

                  <p className="text-white/45 leading-relaxed">
                    A secure verification sequence has been transmitted to:
                  </p>

                  <div className="mt-4 text-blue-400">
                    {formData.email}
                  </div>
                </div>

                <div className="space-y-5">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="000000"
                    value={formData.code}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        code: e.target.value,
                      })
                    }
                    className="
                      w-full h-16 rounded-2xl
                      bg-white/[0.03]
                      border border-white/10
                      px-5
                      text-center
                      text-2xl
                      tracking-[0.5em]
                      text-white
                      outline-none
                      transition-all
                      focus:border-blue-500
                      focus:bg-blue-500/[0.04]
                    "
                  />

                  <div className="flex gap-4">
                    <button
                      onClick={handleBack}
                      className="
                        flex-1 h-14 rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        text-white/70
                      "
                    >
                      Previous Layer
                    </button>

                    <button
                      onClick={handleNext}
                      className="
                        flex-1 h-14 rounded-2xl
                        bg-blue-500
                        text-white
                        font-medium
                      "
                    >
                      Validate Runtime
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security */}
            {currentStep === 2 && (
              <div>
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-[0.32em] text-white/35 mb-4">
                    Security Infrastructure
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.05em] mb-4">
                    Configure Secure Access
                  </h2>

                  <p className="text-white/45 leading-relaxed">
                    Establish operational security credentials for runtime access.
                  </p>
                </div>

                <div className="space-y-5">
                  <input
                    type="password"
                    placeholder="Secure Runtime Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    className="
                      w-full h-14 rounded-2xl
                      bg-white/[0.03]
                      border border-white/10
                      px-5
                      text-white
                      outline-none
                      transition-all
                      focus:border-blue-500
                    "
                  />

                  <input
                    type="password"
                    placeholder="Confirm Security Credential"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="
                      w-full h-14 rounded-2xl
                      bg-white/[0.03]
                      border border-white/10
                      px-5
                      text-white
                      outline-none
                      transition-all
                      focus:border-blue-500
                    "
                  />

                  <div className="flex gap-4">
                    <button
                      onClick={handleBack}
                      className="
                        flex-1 h-14 rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        text-white/70
                      "
                    >
                      Previous Layer
                    </button>

                    <button
                      onClick={handleNext}
                      className="
                        flex-1 h-14 rounded-2xl
                        bg-blue-500
                        text-white
                        font-medium
                      "
                    >
                      Initialize Session
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Complete */}
            {currentStep === 3 && (
              <div className="text-center py-6">
                <div className="w-24 h-24 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center mx-auto mb-8 runtime-pulse">
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                </div>

                <div className="text-xs uppercase tracking-[0.35em] text-blue-400 mb-4">
                  Infrastructure Linked
                </div>

                <h2 className="text-4xl font-semibold tracking-[-0.06em] mb-6">
                  Runtime Access Authorized
                </h2>

                <p className="text-white/45 leading-relaxed max-w-xl mx-auto mb-10">
                  Operational identity verification completed successfully.
                  Adaptive infrastructure session initialized across DCORE systems.
                </p>

                <button
                  className="
                    h-14 px-8 rounded-2xl
                    bg-blue-500
                    text-white
                    font-medium
                    hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]
                    transition-all
                  "
                >
                  Enter Infrastructure
                </button>
              </div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
                }
