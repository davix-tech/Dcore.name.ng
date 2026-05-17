"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { IntelligenceNode } from "@/components/ui/intelligence-node";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RedenPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex justify-center mb-6">
            <IntelligenceNode size="md" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold glow-text mb-4">REDEN</h1>
          <p className="text-xl text-gray-400 mb-2">Active Runtime Intelligence System</p>
          <div className="flex justify-center">
            <StatusBadge status="active" label="Active Runtime" />
          </div>
        </motion.section>

        {/* Core Infrastructure */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          <motion.h2 variants={item} className="text-3xl font-bold glow-text mb-12">
            Core Infrastructure
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Runtime Engine",
                description: "High-performance execution layer with adaptive optimization",
              },
              {
                name: "API Infrastructure",
                description: "Scalable REST and GraphQL APIs with real-time capabilities",
              },
              {
                name: "SDK Framework",
                description: "Multi-language SDKs for seamless integration",
              },
              {
                name: "Analytics Pipeline",
                description: "Real-time metrics, monitoring, and intelligent insights",
              },
            ].map((component) => (
              <motion.div key={component.name} variants={item}>
                <GlassCard hover>
                  <h3 className="text-lg font-bold mb-2">{component.name}</h3>
                  <p className="text-gray-400 text-sm">{component.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Developer Resources */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold glow-text mb-12">Developer Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📚", label: "Documentation", desc: "Complete API & SDK guides" },
              { icon: "🔧", label: "SDKs", desc: "Multiple language support" },
              { icon: "⚙️", label: "Configuration", desc: "Runtime optimization" },
            ].map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard hover>
                  <p className="text-4xl mb-3">{resource.icon}</p>
                  <h3 className="font-bold mb-2">{resource.label}</h3>
                  <p className="text-gray-400 text-sm">{resource.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold glow-text mb-12">Infrastructure Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Startup",
                price: "$99",
                desc: "/month",
                features: ["Up to 1M requests", "Basic Analytics", "Community Support"],
              },
              {
                tier: "Professional",
                price: "$499",
                desc: "/month",
                features: ["Up to 50M requests", "Advanced Analytics", "Priority Support"],
                featured: true,
              },
              {
                tier: "Enterprise",
                price: "Custom",
                desc: "for your scale",
                features: ["Unlimited requests", "24/7 Support", "Dedicated Infrastructure"],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard hover className={plan.featured ? "ring-2 ring-blue-500" : ""}>
                  <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                  <p className="text-3xl font-bold glow-text mb-1">{plan.price}</p>
                  <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-300">
                        <span className="text-blue-400">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg font-medium text-blue-300 transition-colors">
                    Get Started
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}