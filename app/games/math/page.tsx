'use client'

import Link from 'next/link'
import CountHoles from './components/CountHoles'
import SortBySize from './components/SortBySize'
import SpeedCompare from './components/SpeedCompare'

export default function MathGamesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">🔢 Math Mini-Games</h1>
      <p className="text-slate-500 mb-6">數學小遊戲 · Learn math with Mini 4WD!</p>

      <div className="grid grid-cols-1 gap-6 w-full max-w-md">
        <CountHoles />
        <SortBySize />
        <SpeedCompare />
      </div>

      <Link href="/" className="mt-8 bg-slate-400 text-white px-6 py-3 rounded-xl font-bold shadow">
        ← Back 回主頁
      </Link>
    </main>
  )
}