"use client";

export function RuntimeGrid() {
  return (
    <>
      {/* Horizontal grid lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(59, 130, 246, 0.08)"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="gridGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle
            cx="50%"
            cy="50%"
            r="800"
            fill="url(#gridGradient)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Subtle noise texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" seed=\"2\" /></filter><rect width=\"100%\" height=\"100%\" fill=\"white\" filter=\"url(%23noise)\" /></svg>')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Ambient glow cores */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl opacity-30" />
      </div>
    </>
  );
}