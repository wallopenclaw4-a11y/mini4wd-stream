'use client'

import { useState } from 'react'
import { zhHK } from '@/lib/i18n'

// Gear sizes: small, medium, large
const GEARS = [
  { id: 's', label: 'S', radius: 20, color: '#888' },
  { id: 'm', label: 'M', radius: 30, color: '#666' },
  { id: 'l', label: 'L', radius: 40, color: '#444' },
]

// Shuffle on mount
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function SortBySize() {
  const [shuffledGears] = useState(() => shuffle(GEARS))
  const [slots, setSlots] = useState<(typeof GEARS[0] | null)[]>([null, null, null])
  const [dragging, setDragging] = useState<string | null>(null)
  const [completed, setCompleted] = useState(false)

  const handleDragStart = (id: string) => setDragging(id)

  const handleDrop = (slotIndex: number) => {
    if (!dragging) return
    const gear = GEARS.find(g => g.id === dragging)
    if (!gear) return

    const newSlots = [...slots]
    newSlots[slotIndex] = gear
    setSlots(newSlots)
    setDragging(null)

    // Check if all slots filled correctly
    if (newSlots.every((s, i) => s?.id === GEARS[i].id)) {
      setCompleted(true)
    }
  }

  const handleReset = () => {
    setSlots([null, null, null])
    setCompleted(false)
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-slate-700 mb-2">{zhHK.sortBySize.title}</h3>
      <p className="text-slate-500 text-sm mb-4">{zhHK.sortBySize.subtitle}</p>

      {/* Draggable gears */}
      <div className="flex justify-center gap-4 mb-6">
        {shuffledGears.map(gear => {
          const isPlaced = slots.some(s => s?.id === gear.id)
          return (
            <div
              key={gear.id}
              draggable={!isPlaced && !completed}
              onDragStart={() => handleDragStart(gear.id)}
              onClick={() => !isPlaced && !completed && setDragging(gear.id)}
              className={`flex flex-col items-center cursor-grab ${isPlaced ? 'opacity-30' : 'opacity-100'} ${completed ? 'pointer-events-none' : ''}`}
            >
              <svg width={gear.radius * 2} height={gear.radius * 2}>
                <circle
                  cx={gear.radius}
                  cy={gear.radius}
                  r={gear.radius - 2}
                  fill={gear.color}
                  stroke="#333"
                  strokeWidth="2"
                />
                <circle cx={gear.radius} cy={gear.radius} r={gear.radius / 3} fill="#ddd" stroke="#333" strokeWidth="1" />
                {/* Gear teeth */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180
                  const x1 = gear.radius + (gear.radius - 4) * Math.cos(angle)
                  const y1 = gear.radius + (gear.radius - 4) * Math.sin(angle)
                  const x2 = gear.radius + (gear.radius + 6) * Math.cos(angle)
                  const y2 = gear.radius + (gear.radius + 6) * Math.sin(angle)
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="3" strokeLinecap="round" />
                  )
                })}
              </svg>
              <span className="text-xs font-bold text-slate-500 mt-1">{gear.label}</span>
            </div>
          )
        })}
      </div>

      {/* Drop slots */}
      <div className="flex justify-center gap-6 mb-4">
        {GEARS.map((expectedGear, i) => (
          <div
            key={i}
            onClick={() => handleDrop(i)}
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleDrop(i)}
            className={`flex flex-col items-center border-2 border-dashed rounded-xl p-4 transition-colors ${
              slots[i]?.id === expectedGear.id ? 'border-green-400 bg-green-50' : 'border-slate-300 bg-slate-50'
            }`}
          >
            <p className="text-xs text-slate-400 mb-2">{['Small 小', 'Medium 中', 'Large 大'][i]}</p>
            {slots[i] ? (
              <span className="text-2xl font-bold text-slate-600">{slots[i]!.label}</span>
            ) : (
              <span className="text-slate-300 text-2xl">?</span>
            )}
          </div>
        ))}
      </div>

      {completed && (
        <div className="text-center mb-4">
          <p className="text-green-600 font-bold text-lg">🎉 啱啦！Correct!</p>
        </div>
      )}

      <div className="flex gap-3">
        {!completed ? (
          <p className="text-sm text-slate-500 text-center w-full">點擊齒輪再點擊正確嘅位置！Tap gear then tap the right slot!</p>
        ) : (
          <button onClick={handleReset} className="flex-1 bg-green-500 text-white py-3 rounded-xl font-bold">
            🔄 再玩一次
          </button>
        )}
      </div>
    </div>
  )
}