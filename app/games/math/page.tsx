'use client'

import CountHoles from './components/CountHoles'
import SortBySize from './components/SortBySize'
import SpeedCompare from './components/SpeedCompare'

export default function MathGamesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">🔢 Math Mini-Games</h1>
      <p className="text-slate-500 mb-8">數學小遊戲</p>

      <div className="grid grid-cols-1 gap-6 w-full max-w-md">
        <CountHoles />
        <SortBySize />
        <SpeedCompare />
      </div>
    </main>
  )
}