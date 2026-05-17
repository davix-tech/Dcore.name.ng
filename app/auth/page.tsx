'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GlassCard } from '@/components/ui/glass-card'

const steps = ['Email', 'Verification', 'Password', 'Complete']

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
    <div className="relative min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="heading-2 text-center mb-2">Authentication</h1>
          <p className="text-gray-400 text-center">Multi-step security verification</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex-1 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  i <= currentStep
                    ? 'bg-dcore-blue text-white'
                    : 'bg-gray-700 text-gray-400'
                }`}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all ${
                    i < currentStep ? 'bg-dcore-blue' : 'bg-gray-700'
                  }`}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Form Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-8"
        >
          <GlassCard>
            {currentStep === 0 && (
              <div className="space-y-4">
                <h3 className="heading-3 mb-4">Enter Your Email</h3>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dcore-blue"
                  placeholder="your@email.com"
                />
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="heading-3 mb-4">Verify Email</h3>
                <p className="text-gray-400 mb-4">Enter the 6-digit code sent to {formData.email}</p>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dcore-blue text-center tracking-widest"
                  placeholder="000000"
                  maxLength={6}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="heading-3 mb-4">Create Password</h3>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dcore-blue mb-3"
                  placeholder="Password"
                />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dcore-blue"
                  placeholder="Confirm Password"
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="heading-3">Authentication Complete!</h3>
                <p className="text-gray-400">Your account has been successfully created</p>
              </div>
            )}
          </GlassCard>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-center">
          {currentStep > 0 && (
            <button onClick={handleBack} className="btn-secondary">
              Back
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button onClick={handleNext} className="btn-primary">
              Next
            </button>
          )}
          {currentStep === steps.length - 1 && (
            <button onClick={() => setCurrentStep(0)} className="btn-primary">
              Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
