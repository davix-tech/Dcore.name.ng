"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-6">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold glow-text mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-400">Contact our team for partnerships, inquiries, or support</p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <GlassCard>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <a
              href="mailto:contact@dcore.io"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              contact@dcore.io
            </a>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-bold mb-2">Sales</h3>
            <a
              href="mailto:sales@dcore.io"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              sales@dcore.io
            </a>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600/80 hover:bg-blue-500 rounded-lg font-medium transition-colors glow-border"
              >
                Send Message
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}