import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],

  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        dcore: {
          black: '#050816',
          obsidian: '#070B1A',
          carbon: '#0B1020',
          graphite: '#111827',
          surface: '#121826',
          panel: '#0F172A',
          border: 'rgba(255,255,255,0.08)',

          blue: '#2563EB',
          glow: '#3B82F6',
          cyan: '#7DD3FC',

          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',

          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
      },

      backgroundImage: {
        'runtime-grid':
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',

        'runtime-radial':
          'radial-gradient(circle at top, rgba(37,99,235,0.18), transparent 60%)',

        'runtime-glow':
          'linear-gradient(to right, rgba(37,99,235,0.25), rgba(125,211,252,0.15))',
      },

      boxShadow: {
        runtime:
          '0 0 30px rgba(37,99,235,0.18)',

        panel:
          '0 10px 40px rgba(0,0,0,0.45)',

        glow:
          '0 0 60px rgba(37,99,235,0.25)',

        ambient:
          '0 0 120px rgba(37,99,235,0.12)',
      },

      borderRadius: {
        runtime: '28px',
        panel: '32px',
      },

      backdropBlur: {
        runtime: '24px',
      },

      letterSpacing: {
        runtime: '0.18em',
      },

      animation: {
        'runtime-pulse':
          'runtime-pulse 3s ease-in-out infinite',

        float:
          'float 8s ease-in-out infinite',

        orbit:
          'orbit 18s linear infinite',

        shimmer:
          'shimmer 4s linear infinite',

        scan:
          'scan 6s linear infinite',

        flicker:
          'flicker 5s ease-in-out infinite',
      },

      keyframes: {
        'runtime-pulse': {
          '0%, 100%': {
            opacity: '0.65',
            transform: 'scale(1)',
          },

          '50%': {
            opacity: '1',
            transform: 'scale(1.06)',
          },
        },

        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },

          '50%': {
            transform: 'translateY(-14px)',
          },
        },

        orbit: {
          from: {
            transform: 'rotate(0deg)',
          },

          to: {
            transform: 'rotate(360deg)',
          },
        },

        shimmer: {
          '0%': {
            backgroundPosition: '-1200px 0',
          },

          '100%': {
            backgroundPosition: '1200px 0',
          },
        },

        scan: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },

          '50%': {
            opacity: '1',
          },

          '100%': {
            transform: 'translateY(300%)',
            opacity: '0',
          },
        },

        flicker: {
          '0%, 100%': {
            opacity: '1',
          },

          '10%': {
            opacity: '0.92',
          },

          '20%': {
            opacity: '1',
          },

          '30%': {
            opacity: '0.96',
          },

          '40%': {
            opacity: '1',
          },
        },
      },
    },
  },

  plugins: [],
}

export default config
