"use client";

import { motion } from "framer-motion";

interface IntelligenceNodeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IntelligenceNode({
  size = "md",
  className = "",
}: IntelligenceNodeProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const innerSize = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-400/30"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Middle ring */}
      <div className="absolute inset-1 rounded-full border border-blue-500/20" />

      {/* Core */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50 flex items-center justify-center">
        <motion.div
          className={`${innerSize[size]} bg-white rounded-full opacity-90`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}