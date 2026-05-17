"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

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

export default function AboutPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold glow-text mb-6">About DCORE</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We build infrastructure-grade intelligence platforms that power adaptive systems at scale.
          </p>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <GlassCard>
            <h2 className="text-3xl font-bold glow-text mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To enable organizations to build adaptive, intelligent systems that learn and optimize in real-time. We provide the infrastructure layer that powers next-generation applications.
            </p>
          </GlassCard>
        </motion.section>

        {/* Core Values */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          <motion.h2 variants={item} className="text-3xl font-bold glow-text mb-12">
            Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Infrastructure Grade",
                description: "Built for production systems handling millions of operations daily",
              },
              {
                title: "Adaptive Intelligence",
                description: "Systems that learn and optimize based on real-time data and patterns",
              },
              {
                title: "Operational Excellence",
                description: "Reliability, performance, and observability at every layer",
              },
              {
                title: "Runtime Optimization",
                description: "Continuous improvement through intelligent resource allocation",
              },
            ].map((value) => (
              <motion.div key={value.title} variants={item}>
                <GlassCard hover>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold glow-text mb-8">Technology Foundation</h2>
          <GlassCard>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Built On Modern Stack</h3>
                <p className="text-gray-400 mb-4">
                  Next.js for optimal performance, TypeScript for type safety, and Framer Motion for cinematic interfaces.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                {[
                  { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
                  { label: "Infrastructure", items: ["Serverless", "Edge Computing", "Distributed Systems", "Real-time APIs"] },
                ].map((category) => (
                  <div key={category.label}>
                    <h4 className="font-bold mb-3 text-blue-400">{category.label}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="text-gray-300 flex items-center gap-2">
                          <span className="text-blue-400">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.section>
      </div>
    </div>
  );
}