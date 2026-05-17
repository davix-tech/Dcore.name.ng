"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { IntelligenceNode } from "@/components/ui/intelligence-node";

type AuthStep = "email" | "verify" | "password" | "country";

export default function AuthPage() {
  const [step, setStep] = useState<AuthStep>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);

    if (step === "email") setStep("verify");
    else if (step === "verify") setStep("country");
    else if (step === "country") setStep("password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <GlassCard size="lg" className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <IntelligenceNode size="md" />
            </div>
            <h1 className="text-3xl font-bold glow-text">Access Infrastructure</h1>
            <p className="text-gray-400 text-sm">Enter the DCORE runtime environment</p>
          </div>

          {/* Form Steps */}
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {step === "email" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
              </>
            )}

            {step === "verify" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Verification Code</label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="000000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors text-center tracking-widest"
                    maxLength={6}
                  />
                  <p className="text-xs text-gray-500 mt-2">Code sent to {email}</p>
                </div>
              </>
            )}

            {step === "country" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors"
                  >
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="NG">Nigeria</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </>
            )}

            {step === "password" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-400">I agree to the terms and conditions</span>
                  </label>
                </div>
              </>
            )}
          </motion.div>

          {/* Progress Indicator */}
          <div className="flex gap-1">
            {["email", "verify", "country", "password"].map((s) => (
              <div
                key={s}
                className={`flex-1 h-1 rounded-full transition-colors ${
                  ["email", "verify", "country", "password"].indexOf(step) >= ["email", "verify", "country", "password"].indexOf(s as AuthStep)
                    ? "bg-blue-500"
                    : "bg-white/10"
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            {step !== "email" && (
              <button
                onClick={() => {
                  const steps: AuthStep[] = ["email", "verify", "country", "password"];
                  const currentIndex = steps.indexOf(step);
                  if (currentIndex > 0) setStep(steps[currentIndex - 1]);
                }}
                className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-medium transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={loading}
              className="flex-1 px-6 py-3 bg-blue-600/80 hover:bg-blue-500 disabled:opacity-50 rounded-lg font-medium transition-colors glow-border"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="animate-spin">⚙️</span>
                  {step === "password" ? "Authenticating" : "Verifying"}
                </span>
              ) : step === "password" ? (
                "Access Infrastructure"
              ) : (
                "Continue"
              )}
            </button>
          </div>

          {/* Help Link */}
          <div className="text-center">
            <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              Need help? Contact support →
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}