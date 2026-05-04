'use client'

import PartGrid from './components/PartGrid'

export default function PartsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-4">🔍 零件探索區</h1>
      <p className="text-slate-500 mb-6">Parts Explorer</p>
      <PartGrid />
    </main>
  )
}