'use client'

import { useState } from 'react'
import { zhHK } from '@/lib/i18n'

export default function CountHoles() {
  const [count, setCount] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [correct] = useState(4) // TT-02 chassis has 4 screw holes per side = 8 total, but simplified for kids

  const handleClick = () => {
    if (answered) return
    setCount(prev => prev + 1)
  }

  const handleCheck = () => {
    if (answered) return
    setAnswered(true)
  }

  const handleReset = () => {
    setCount(0)
    setAnswered(false)
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-slate-700 mb-2">{zhHK.countHoles.title}</h3>
      <p className="text-slate-500 text-sm mb-4">{zhHK.countHoles.subtitle}</p>

      {/* Chassis SVG with tap areas */}
      <svg viewBox="0 0 200 100" className="w-full mb-4" onClick={handleClick}>
        {/* Chassis body */}
        <rect x="20" y="20" width="160" height="60" rx="10" fill="#ddd" stroke="#999" strokeWidth="2" />
        
        {/* Screw holes - clickable zones */}
        {[
          { cx: 40, cy: 35 },
          { cx: 40, cy: 65 },
          { cx: 160, cy: 35 },
          { cx: 160, cy: 65 },
        ].map((hole, i) => (
          <g key={i}>
            <circle cx={hole.cx} cy={hole.cy} r="12" fill="transparent" className="cursor-pointer hover:fill-sky-200" />
            <circle cx={hole.cx} cy={hole.cy} r="8" fill={count > i ? '#4ECDC4' : '#666'} stroke="#333" strokeWidth="1" />
          </g>
        ))}

        {/* Gearbox area */}
        <rect x="85" y="35" width="30" height="30" rx="5" fill="#888" stroke="#555" strokeWidth="1" />
      </svg>

      <div className="text-center mb-4">
        <p className="text-3xl font-bold text-slate-700">
          {count} <span className="text-lg text-slate-400">個窿 holes</span>
        </p>
        {answered && (
          <p className={`mt-2 text-lg font-bold ${count === correct ? 'text-green-600' : 'text-red-500'}`}>
            {count === correct ? zhHK.countHoles.correct : zhHK.countHoles.wrong}
            {count !== correct && ` (正確答案: ${correct})`}
          </p>
        )}
      </div>

      <div className="flex gap-3">
        {!answered ? (
          <button
            onClick={handleCheck}
            className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-bold"
          >
            ✅ 確定答案
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex-1 bg-green-500 text-white py-3 rounded-xl font-bold"
          >
            🔄 再試一次
          </button>
        )}
      </div>
    </div>
  )
}