import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  size = "md",
  className = "",
  hover = true,
}: GlassCardProps) {
  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        glass-lg
        ${sizeClasses[size]}
        ${hover ? "hover:bg-white/[0.12] hover:shadow-glow transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}