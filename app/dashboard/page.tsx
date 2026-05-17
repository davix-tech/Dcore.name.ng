"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { StatusBadge } from "@/components/ui/status-badge";

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

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold glow-text mb-2">Operational Dashboard</h1>
          <p className="text-gray-400">Real-time infrastructure intelligence and metrics</p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Active Systems", value: "5", change: "+2 this week" },
            { label: "Uptime", value: "99.9%", change: "Excellent" },
            { label: "Requests/sec", value: "1.2M", change: "+15% ↑" },
            { label: "Avg Latency", value: "45ms", change: "-3% ↓" },
          ].map((metric, i) => (
            <motion.div key={i} variants={item}>
              <GlassCard>
                <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                <p className="text-3xl font-bold glow-text mb-1">{metric.value}</p>
                <p className="text-xs text-gray-500">{metric.change}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-6"
          >
            {/* Active Deployments */}
            <motion.div variants={item}>
              <h2 className="text-xl font-bold glow-text mb-4">Active Deployments</h2>
              <GlassCard>
                <div className="space-y-4">
                  {[
                    { name: "REDEN-prod", status: "active", version: "v2.4.1" },
                    { name: "ORBIT-staging", status: "experimental", version: "v1.2.0" },
                    { name: "VEKTOR-internal", status: "internal", version: "v3.1.2" },
                  ].map((deploy, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div>
                        <p className="font-medium">{deploy.name}</p>
                        <p className="text-xs text-gray-400">{deploy.version}</p>
                      </div>
                      <StatusBadge status={deploy.status as any} />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* System Health */}
            <motion.div variants={item}>
              <h2 className="text-xl font-bold glow-text mb-4">System Health</h2>
              <GlassCard>
                <div className="space-y-4">
                  {[
                    { component: "API Gateway", health: 95 },
                    { component: "Runtime Engine", health: 92 },
                    { component: "Analytics Pipeline", health: 88 },
                  ].map((comp, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{comp.component}</span>
                        <span className="text-sm font-medium text-green-400">{comp.health}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                          style={{ width: `${comp.health}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            {/* Quick Stats */}
            <motion.div variants={item}>
              <h2 className="text-xl font-bold glow-text mb-4">Performance</h2>
              <GlassCard>
                <div className="space-y-4">
                  {[
                    { label: "Response Time", value: "45ms", icon: "⚡" },
                    { label: "Error Rate", value: "0.02%", icon: "✓" },
                    { label: "CPU Usage", value: "34%", icon: "📊" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{stat.icon}</span>
                        <span className="text-sm">{stat.label}</span>
                      </div>
                      <span className="font-medium text-blue-400">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Activity Feed */}
            <motion.div variants={item}>
              <h2 className="text-xl font-bold glow-text mb-4">Recent Activity</h2>
              <GlassCard>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {[
                    { event: "Deployment", service: "REDEN-prod", time: "2 min ago" },
                    { event: "Alert Resolved", service: "VEKTOR", time: "15 min ago" },
                    { event: "Scaling Event", service: "ORBIT", time: "1 hour ago" },
                  ].map((activity, i) => (
                    <div key={i} className="text-xs border-l-2 border-blue-500/30 pl-3 py-2">
                      <p className="font-medium text-blue-400">{activity.event}</p>
                      <p className="text-gray-400">{activity.service}</p>
                      <p className="text-gray-500">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}