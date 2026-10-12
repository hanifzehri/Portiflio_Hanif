import React, { useEffect, useRef } from 'react'

export default function Background3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return undefined

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const particles = []
    const colors = ['37, 99, 235', '124, 58, 237', '8, 145, 178']
    let width = 0
    let height = 0
    let pixelRatio = 1
    let animationFrameId
    let pointerX = -1000
    let pointerY = -1000

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const count = Math.min(
        Math.floor((width * height) / (width < 600 ? 28000 : 19000)),
        width < 600 ? 26 : 58
      )
      particles.length = 0

      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: Math.random() * 1.4 + 0.7,
          color: colors[index % colors.length],
          alpha: Math.random() * 0.18 + 0.12
        })
      }
      draw()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      for (let first = 0; first < particles.length; first += 1) {
        const particle = particles[first]
        for (let second = first + 1; second < particles.length; second += 1) {
          const other = particles[second]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.hypot(dx, dy)
          if (distance > 145) continue

          context.beginPath()
          context.moveTo(particle.x, particle.y)
          context.lineTo(other.x, other.y)
          context.strokeStyle = `rgba(37, 99, 235, ${(1 - distance / 145) * 0.09})`
          context.lineWidth = 0.7
          context.stroke()
        }
      }

      particles.forEach((particle) => {
        if (!motionPreference.matches) {
          const dx = pointerX - particle.x
          const dy = pointerY - particle.y
          const distance = Math.hypot(dx, dy)
          if (distance > 0 && distance < 140) {
            particle.x += (dx / distance) * 0.12
            particle.y += (dy / distance) * 0.12
          }

          particle.x += particle.vx
          particle.y += particle.vy
          if (particle.x < 0) particle.x = width
          if (particle.x > width) particle.x = 0
          if (particle.y < 0) particle.y = height
          if (particle.y > height) particle.y = 0
        }

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(${particle.color}, ${particle.alpha})`
        context.fill()
      })
    }

    const animate = () => {
      draw()
      animationFrameId = window.requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      window.cancelAnimationFrame(animationFrameId)
      if (!motionPreference.matches && !document.hidden) {
        animationFrameId = window.requestAnimationFrame(animate)
      } else {
        draw()
      }
    }

    const handlePointerMove = (event) => {
      pointerX = event.clientX
      pointerY = event.clientY
    }
    const handlePointerLeave = () => {
      pointerX = -1000
      pointerY = -1000
    }

    resize()
    startAnimation()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)
    document.addEventListener('visibilitychange', startAnimation)
    motionPreference.addEventListener('change', startAnimation)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      document.removeEventListener('visibilitychange', startAnimation)
      motionPreference.removeEventListener('change', startAnimation)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.62
      }}
    />
  )
}
