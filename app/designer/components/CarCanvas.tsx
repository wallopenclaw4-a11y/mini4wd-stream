'use client'

import { useRef, useState } from 'react'

interface Sticker {
  id: string
  emoji: string
  x: number
  y: number
}

export default function CarCanvas({ color, stickers }: { color: string; stickers: string[] }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [placedStickers, setPlacedStickers] = useState<Sticker[]>([])
  const [nextId, setNextId] = useState(0)

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    if (stickers.length > 0) {
      const emoji = stickers[placedStickers.length % stickers.length]
      setPlacedStickers(prev => [...prev, { id: `s${nextId}`, emoji, x, y }])
      setNextId(prev => prev + 1)
    }
  }

  const clearStickers = () => setPlacedStickers([])

  return (
    <div className="w-full">
      <svg
        ref={svgRef}
        viewBox="0 0 300 160"
        className="w-full aspect-[300/160] bg-gray-100 rounded-2xl cursor-crosshair"
        onClick={handleSvgClick}
      >
        {/* Car body - top-down view */}
        <g transform="translate(150,80)">
          {/* Main body */}
          <rect x="-120" y="-35" width="240" height="70" rx="15" fill={color} stroke="#333" strokeWidth="2" />
          {/* Hood */}
          <rect x="-100" y="-28" width="80" height="56" rx="8" fill={color} stroke="#333" strokeWidth="1" />
          {/* Cabin */}
          <rect x="-20" y="-25" width="70" height="50" rx="5" fill={color} stroke="#333" strokeWidth="1" />
          {/* Rear */}
          <rect x="55" y="-22" width="55" height="44" rx="8" fill={color} stroke="#333" strokeWidth="1" />
          {/* Windows */}
          <rect x="-15" y="-22" width="60" height="40" rx="4" fill="#a8d8ea" stroke="#333" strokeWidth="1" opacity="0.8" />
          {/* Front bumper */}
          <rect x="-125" y="-30" width="15" height="60" rx="4" fill="#555" />
          {/* Rear bumper */}
          <rect x="110" y="-30" width="15" height="60" rx="4" fill="#555" />
          {/* Wheels - top view representation */}
          <ellipse cx="-95" cy="-38" rx="15" ry="8" fill="#333" />
          <ellipse cx="-95" cy="38" rx="15" ry="8" fill="#333" />
          <ellipse cx="85" cy="-38" rx="15" ry="8" fill="#333" />
          <ellipse cx="85" cy="38" rx="15" ry="8" fill="#333" />
          {/* Wheel hubs */}
          <circle cx="-95" cy="-38" r="4" fill="#888" />
          <circle cx="-95" cy="38" r="4" fill="#888" />
          <circle cx="85" cy="-38" r="4" fill="#888" />
          <circle cx="85" cy="38" r="4" fill="#888" />
          {/* Headlights */}
          <circle cx="-118" cy="-18" r="5" fill="#FFE66D" stroke="#333" strokeWidth="1" />
          <circle cx="-118" cy="18" r="5" fill="#FFE66D" stroke="#333" strokeWidth="1" />
          {/* Taillights */}
          <rect x="110" y="-18" width="8" height="10" rx="2" fill="#FF6B6B" stroke="#333" strokeWidth="1" />
          <rect x="110" y="8" width="8" height="10" rx="2" fill="#FF6B6B" stroke="#333" strokeWidth="1" />
          {/* Center stripe */}
          <line x1="-110" y1="0" x2="105" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeDasharray="10,5" />
        </g>

        {/* Placed stickers */}
        {placedStickers.map(s => (
          <text
            key={s.id}
            x={`${s.x}%`}
            y={`${s.y}%`}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="28"
            style={{ pointerEvents: 'none' }}
          >
            {s.emoji}
          </text>
        ))}

        {/* Hint text */}
        {placedStickers.length === 0 && (
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-slate-400 text-sm" style={{ pointerEvents: 'none' }}>
            Click to place stickers! 點擊放貼紙！
          </text>
        )}
      </svg>
      {placedStickers.length > 0 && (
        <button onClick={clearStickers} className="mt-2 text-sm text-slate-500 underline">
          Clear stickers 清除貼紙
        </button>
      )}
    </div>
  )
}