"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { StatusBadge } from "@/components/ui/status-badge";

const systems = [
  {
    name: "REDEN",
    status: "active" as const,
    description: "Active Runtime Intelligence System - Core infrastructure module for adaptive runtime operations",
    features: ["Real-time Processing", "Adaptive Intelligence", "Runtime Optimization"],
    icon: "⚡",
    href: "/reden",
  },
  {
    name: "ORBIT",
    status: "experimental" as const,
    description: "Experimental Deployment Framework - Next-generation deployment and orchestration",
    features: ["Multi-Region Deploy", "Auto-scaling", "Load Balancing"],
    icon: "🛰️",
    href: "/systems",
  },
  {
    name: "VEKTOR",
    status: "internal" as const,
    description: "Internal Systems Infrastructure - Advanced data processing and analysis",
    features: ["Data Pipeline", "Analytics Engine", "Visualization"],
    icon: "📊",
    href: "/systems",
  },
  {
    name: "AXIOM",
    status: "development" as const,
    description: "In Development - Advanced reasoning and decision-making systems",
    features: ["Inference Engine", "Decision Logic", "Context Awareness"],
    icon: "🧠",
    href: "/systems",
  },
  {
    name: "SYNAPSE",
    status: "development" as const,
    description: "Future Infrastructure - Next-generation neural infrastructure",
    features: ["Neural Architecture", "Distributed Computing", "Future Tech"],
    icon: "🔮",
    href: "/systems",
  },
];

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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SystemsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold glow-text mb-4">Infrastructure Modules</h1>
          <p className="text-xl text-gray-400">Complete runtime systems engineered for production intelligence</p>
        </motion.div>

        {/* Systems Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {systems.map((system) => (
            <motion.div key={system.name} variants={item} whileHover={{ y: -4 }}>
              <Link href={system.href}>
                <GlassCard hover className="h-full cursor-pointer">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-4xl mb-2">{system.icon}</p>
                        <h3 className="text-2xl font-bold">{system.name}</h3>
                      </div>
                      <StatusBadge status={system.status} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {system.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      {system.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="w-full mt-6 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg text-sm font-medium text-blue-300 transition-colors">
                      Access Module →
                    </button>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}