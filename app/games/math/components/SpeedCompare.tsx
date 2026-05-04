'use client'

import { useState } from 'react'
import { zhHK } from '@/lib/i18n'

export default function SpeedCompare() {
  const [speed, setSpeed] = useState(50)

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-slate-700 mb-2">{zhHK.speedCompare.title}</h3>
      <p className="text-slate-500 text-sm mb-4">{zhHK.speedCompare.subtitle}</p>

      {/* Visual speed indicator */}
      <div className="relative h-8 bg-slate-200 rounded-full mb-4 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all duration-300"
          style={{ width: `${speed}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-slate-600 bg-white/80 px-2 py-0.5 rounded-full">
            {speed}%
          </span>
        </div>
      </div>

      {/* Speed labels */}
      <div className="flex justify-between text-sm text-slate-500 mb-4">
        <span>🐌 慢 slow</span>
        <span>🚗 中 medium</span>
        <span>🚀 快 fast</span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={speed}
        onChange={e => setSpeed(Number(e.target.value))}
        className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-amber-500"
      />

      {/* Car visualization */}
      <div className="mt-6 flex justify-center">
        <div className="relative">
          {/* Simple car SVG that "moves" based on speed */}
          <svg width="120" height="60" viewBox="0 0 120 60">
            <g
              style={{
                transform: `translateX(${speed * 0.3}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Car body */}
              <rect x="10" y="20" width="90" height="25" rx="8" fill={speed > 70 ? '#FF6B6B' : speed > 40 ? '#FFE66D' : '#4ECDC4'} />
              {/* Cabin */}
              <rect x="30" y="12" width="50" height="20" rx="5" fill="#a8d8ea" />
              {/* Wheels */}
              <circle cx="30" cy="45" r="10" fill="#333" />
              <circle cx="30" cy="45" r="5" fill="#888" />
              <circle cx="80" cy="45" r="10" fill="#333" />
              <circle cx="80" cy="45" r="5" fill="#888" />
            </g>
            {/* Speed lines */}
            {speed > 30 && (
              <g>
                <line x1="0" y1="25" x2={speed / 5} y2="25" stroke="#ccc" strokeWidth="2" />
                <line x1="0" y1="35" x2={speed / 4} y2="35" stroke="#ccc" strokeWidth="2" />
                <line x1="0" y1="45" x2={speed / 6} y2="45" stroke="#ccc" strokeWidth="2" />
              </g>
            )}
          </svg>
        </div>
      </div>

      <p className="text-center text-slate-500 text-sm mt-2">
        {speed < 30 && '🐌 慢慢行～'}
        {speed >= 30 && speed < 60 && '🚗 正常速度'}
        {speed >= 60 && speed < 85 && '🏎️ 好快呀！'}
        {speed >= 85 && '🚀 極速！！！'}
      </p>
    </div>
  )
}