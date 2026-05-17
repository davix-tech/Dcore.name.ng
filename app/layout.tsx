import type { Metadata } from 'next'
import { Providers } from './providers'
import { RuntimeGrid } from '@/components/global/runtime-grid'
import { Navigation } from '@/components/global/navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'DCORE - Infrastructure Intelligence Platform',
  description: 'Next-generation cinematic infrastructure platform with real-time intelligence',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dcore-dark text-white overflow-x-hidden">
        <Providers>
          <RuntimeGrid />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
