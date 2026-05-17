interface StatusBadgeProps {
  status: "active" | "experimental" | "development" | "internal";
  label?: string;
}

const statusConfig = {
  active: {
    bg: "bg-emerald-500/20",
    border: "border-emerald-500/40",
    text: "text-emerald-300",
    dot: "bg-emerald-500",
  },
  experimental: {
    bg: "bg-amber-500/20",
    border: "border-amber-500/40",
    text: "text-amber-300",
    dot: "bg-amber-500",
  },
  development: {
    bg: "bg-blue-500/20",
    border: "border-blue-500/40",
    text: "text-blue-300",
    dot: "bg-blue-500",
  },
  internal: {
    bg: "bg-purple-500/20",
    border: "border-purple-500/40",
    text: "text-purple-300",
    dot: "bg-purple-500",
  },
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const config = statusConfig[status];
  const displayLabel = label || status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${config.bg} ${config.border} ${config.text}`}
    >
      <div className={`w-2 h-2 rounded-full ${config.dot} animate-pulse`} />
      {displayLabel}
    </div>
  );
}