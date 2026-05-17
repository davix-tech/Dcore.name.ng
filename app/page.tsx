"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IntelligenceNode } from "@/components/ui/intelligence-node";
import { GlassCard } from "@/components/ui/glass-card";
import { StatusBadge } from "@/components/ui/status-badge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const systems = [
  {
    name: "REDEN",
    status: "active" as const,
    description: "Active Runtime Intelligence System",
    icon: "⚡",
  },
  {
    name: "ORBIT",
    status: "experimental" as const,
    description: "Experimental Deployment Framework",
    icon: "🛰️",
  },
  {
    name: "VEKTOR",
    status: "internal" as const,
    description: "Internal Systems Infrastructure",
    icon: "📊",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 mb-20"
      >
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div variants={item} className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-3"
            >
              <IntelligenceNode size="sm" />
              <span className="text-blue-400 text-sm font-medium">DCORE RUNTIME</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl font-bold leading-tight glow-text drop-shadow-lg"
            >
              Beyond Static Systems
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-gray-400 leading-relaxed"
            >
              Adaptive systems and runtime intelligence platform. Building the infrastructure layer for next-generation intelligent applications.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/systems"
                className="px-8 py-3 bg-blue-600/80 hover:bg-blue-500 rounded-lg font-medium transition-colors glow-border"
              >
                Explore Systems
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Animation */}
          <motion.div
            variants={item}
            className="flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IntelligenceNode size="lg" className="drop-shadow-2xl shadow-blue-500/50" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-20"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Runtime Systems", value: "5" },
            { label: "Infrastructure Modules", value: "3" },
            { label: "Active Deployments", value: "∞" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold glow-text">{stat.value}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Systems */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-12 glow-text">Featured Systems</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {systems.map((sys, i) => (
            <motion.div
              key={sys.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <GlassCard hover>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{sys.icon}</span>
                    <StatusBadge status={sys.status} />
                  </div>
                  <h3 className="text-xl font-bold">{sys.name}</h3>
                  <p className="text-gray-400 text-sm">{sys.description}</p>
                  <Link
                    href={`/${sys.name.toLowerCase()}`}
                    className="inline-block text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}