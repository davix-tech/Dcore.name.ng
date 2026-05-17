import type { Metadata } from 'next'
import './globals.css'

import { Providers } from './providers'

import { Navigation } from '@/components/global/navigation'
import { RuntimeGrid } from '@/components/global/runtime-grid'

export const metadata: Metadata = {
  title: 'DCORE — Adaptive Intelligence Infrastructure',
  description:
    'Infrastructure systems focused on runtime orchestration, behavioral optimization, experimentation architecture, and adaptive operational intelligence.',

  keywords: [
    'DCORE',
    'adaptive infrastructure',
    'runtime intelligence',
    'behavioral optimization',
    'operational systems',
    'experimentation infrastructure',
    'infrastructure orchestration',
  ],

  robots: {
    index: true,
    follow: true,
  },

  viewport: {
    width: 'device-width',
    initialScale: 1,
  },

  openGraph: {
    title: 'DCORE',
    description:
      'Adaptive intelligence infrastructure for orchestration, experimentation, and operational runtime systems.',
    siteName: 'DCORE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark"
    >
      <body
        className="
          min-h-screen
          overflow-x-hidden
          bg-[#050816]
          text-white
          antialiased
          selection:bg-blue-500/30
        "
      >
        <Providers>
          {/* Global Runtime Environment */}
          <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Runtime Grid */}
            <RuntimeGrid />

            {/* Ambient Top Glow */}
            <div
              className="
                absolute
                top-[-20%]
                left-1/2
                -translate-x-1/2
                w-[1200px]
                h-[1200px]
                rounded-full
                bg-blue-500/10
                blur-[180px]
                opacity-70
              "
            />

            {/* Secondary Runtime Glow */}
            <div
              className="
                absolute
                bottom-[-10%]
                right-[-10%]
                w-[700px]
                h-[700px]
                rounded-full
                bg-blue-500/5
                blur-[140px]
              "
            />

            {/* Operational Noise Overlay */}
            <div
              className="
                absolute inset-0
                opacity-[0.03]
                mix-blend-soft-light
              "
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />

            {/* Runtime Scan Effect */}
            <div
              className="
                absolute inset-0
                bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.015),transparent)]
                animate-pulse
                opacity-20
              "
            />
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Main Runtime Layer */}
          <main className="relative z-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
    }
