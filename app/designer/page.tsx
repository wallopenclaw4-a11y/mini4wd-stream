'use client'

import { useState } from 'react'
import CarCanvas from './components/CarCanvas'
import ColorPicker from './components/ColorPicker'
import StickerLibrary from './components/StickerLibrary'
import SaveButton from './components/SaveButton'

export default function DesignerPage() {
  const [selectedColor, setSelectedColor] = useState('#87CEEB')
  const [stickers, setStickers] = useState<string[]>([])

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">🎨 我的戰車設計師</h1>
      <p className="text-slate-500 mb-6">My Car Designer</p>

      <CarCanvas color={selectedColor} stickers={stickers} />

      <div className="w-full mt-6">
        <p className="text-slate-600 font-bold mb-3">Pick a Color</p>
        <ColorPicker selected={selectedColor} onSelect={setSelectedColor} />
      </div>

      <div className="w-full mt-6">
        <p className="text-slate-600 font-bold mb-3">Stickers</p>
        <StickerLibrary onSelect={s => setStickers([...stickers, s])} />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setStickers([])}
          className="bg-gray-400 text-white px-5 py-3 rounded-xl shadow"
        >
          Clear
        </button>
        <SaveButton onSave={() => alert('Saved! (localStorage coming soon)')} />
      </div>
    </main>
  )
}