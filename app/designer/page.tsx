'use client'

import { useState, useEffect } from 'react'
import CarCanvas from './components/CarCanvas'
import ColorPicker from './components/ColorPicker'
import StickerLibrary from './components/StickerLibrary'
import SaveButton from './components/SaveButton'

interface DesignState {
  color: string
  stickers: string[]
}

export default function DesignerPage() {
  const [selectedColor, setSelectedColor] = useState('#87CEEB')
  const [stickers, setStickers] = useState<string[]>([])
  const [saved, setSaved] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('mini4wd-car-design')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData) as DesignState
        setSelectedColor(parsed.color || '#87CEEB')
        setStickers(parsed.stickers || [])
      } catch {
        // ignore
      }
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('mini4wd-car-design', JSON.stringify({ color: selectedColor, stickers }))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">🎨 我的戰車設計師</h1>
      <p className="text-slate-500 mb-4">My Car Designer</p>

      {saved && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl mb-4 text-sm font-bold">
          ✅ 已儲存！Saved!
        </div>
      )}

      <CarCanvas color={selectedColor} stickers={stickers} />

      <div className="w-full mt-6">
        <p className="text-slate-600 font-bold mb-3">🎨 揀顏色 Pick a Color</p>
        <ColorPicker selected={selectedColor} onSelect={setSelectedColor} />
      </div>

      <div className="w-full mt-6">
        <p className="text-slate-600 font-bold mb-3">⭐ 貼紙 Stickers</p>
        <StickerLibrary onSelect={s => setStickers(prev => [...prev, s])} />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setStickers([])}
          className="bg-gray-400 text-white px-5 py-3 rounded-xl shadow active:scale-95 transition-transform"
        >
          清除 Clear
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-5 py-3 rounded-xl shadow active:scale-95 transition-transform font-bold"
        >
          💾 儲存 Save
        </button>
      </div>
    </main>
  )
}