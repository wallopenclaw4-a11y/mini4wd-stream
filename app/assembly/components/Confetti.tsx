'use client'

import { useEffect, useState } from 'react'

// TODO: Implement Confetti - celebration burst animation
export default function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<{ x: number; y: number; color: string; id: number }[]>([])

  useEffect(() => {
    if (active) {
      const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181']
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        id: i,
      }))
      setParticles(newParticles)
      setTimeout(() => setParticles([]), 2000)
    }
  }, [active])

  if (!active || particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  )
}