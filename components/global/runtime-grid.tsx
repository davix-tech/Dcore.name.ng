'use client'

import { useEffect, useRef } from 'react'

export function RuntimeGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext('2d')

    if (!ctx) return

    let animationFrameId = 0

    const particles: {
      x: number
      y: number
      radius: number
      speed: number
      opacity: number
    }[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)

    // Runtime particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.4 + 0.05,
      })
    }

    let scanOffset = 0

    const drawGrid = () => {
      const gridSize = 72

      ctx.beginPath()

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }

      ctx.strokeStyle = 'rgba(255,255,255,0.035)'
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const drawGlow = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.height
      )

      gradient.addColorStop(0, 'rgba(37,99,235,0.12)')
      gradient.addColorStop(0.4, 'rgba(37,99,235,0.04)')
      gradient.addColorStop(1, 'rgba(0,0,0,0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const drawScanline = () => {
      scanOffset += 0.7

      if (scanOffset > canvas.height + 200) {
        scanOffset = -200
      }

      const scanGradient = ctx.createLinearGradient(
        0,
        scanOffset - 120,
        0,
        scanOffset + 120
      )

      scanGradient.addColorStop(0, 'rgba(59,130,246,0)')
      scanGradient.addColorStop(0.5, 'rgba(59,130,246,0.045)')
      scanGradient.addColorStop(1, 'rgba(59,130,246,0)')

      ctx.fillStyle = scanGradient
      ctx.fillRect(0, scanOffset - 120, canvas.width, 240)
    }

    const drawParticles = () => {
      particles.forEach((particle) => {
        particle.y -= particle.speed

        if (particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
        }

        ctx.beginPath()

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        )

        ctx.fillStyle = `rgba(59,130,246,${particle.opacity})`
        ctx.shadowBlur = 12
        ctx.shadowColor = 'rgba(59,130,246,0.6)'
        ctx.fill()
      })

      ctx.shadowBlur = 0
    }

    const drawNoise = () => {
      for (let i = 0; i < 120; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        ctx.fillStyle = 'rgba(255,255,255,0.015)'
        ctx.fillRect(x, y, 1, 1)
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Deep runtime background
      const bgGradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )

      bgGradient.addColorStop(0, '#030712')
      bgGradient.addColorStop(0.5, '#050816')
      bgGradient.addColorStop(1, '#02050f')

      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawGrid()
      drawGlow()
      drawScanline()
      drawParticles()
      drawNoise()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <>
      {/* Runtime Canvas */}
      <canvas
        ref={canvasRef}
        className="
          fixed inset-0
          w-full h-full
          z-0
          pointer-events-none
        "
      />

      {/* Ambient Overlay */}
      <div
        className="
          fixed inset-0 z-0 pointer-events-none
          bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_45%)]
        "
      />

      {/* Vignette */}
      <div
        className="
          fixed inset-0 z-0 pointer-events-none
          bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.65)_100%)]
        "
      />
    </>
  )
}
