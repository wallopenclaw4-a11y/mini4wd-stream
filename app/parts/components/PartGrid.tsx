'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { zhHK } from '@/lib/i18n'

const PARTS = zhHK.partsList

export default function PartGrid() {
  const [selectedPart, setSelectedPart] = useState<typeof PARTS[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-2">
        {PARTS.map((part, i) => (
          <motion.button
            key={part.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelectedPart(part)}
            className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center relative overflow-hidden"
          >
            <span className="absolute top-2 right-2 text-xs font-bold bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">
              STREAM:{part.stream}
            </span>
            <span className="text-4xl mb-2">{part.emoji}</span>
            <span className="text-lg font-bold text-slate-700">{part.nameZH}</span>
            <span className="text-xs text-slate-400">{part.nameEN}</span>
            <span className="text-xs text-slate-300">{part.pinyin}</span>
          </motion.button>
        ))}
      </div>

      {selectedPart && (
        <PartModal part={selectedPart} onClose={() => setSelectedPart(null)} />
      )}
    </>
  )
}

function PartModal({ part, onClose }: { part: typeof PARTS[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full" onClick={e => e.stopPropagation()}>
        <div className="flex flex-col items-center mb-4">
          <span className="text-6xl mb-2">{part.emoji}</span>
          <h2 className="text-3xl font-bold text-slate-700">{part.nameZH}</h2>
          <p className="text-slate-500">{part.nameEN} · {part.pinyin}</p>
          <span className="mt-2 text-xs font-bold bg-sky-100 text-sky-700 px-3 py-1 rounded-full">
            STREAM:{part.stream}
          </span>
        </div>

        <div className="bg-sky-50 rounded-2xl p-4 mb-4">
          <p className="text-sky-800 font-bold mb-1">🇭🇰 粵語</p>
          <p className="text-slate-700">{part.descriptionZH}</p>
          <p className="text-slate-500 text-sm mt-1 italic">{part.descriptionEN}</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-4 mb-4">
          <p className="text-amber-700 font-bold mb-2">🔬 為你解說</p>
          <p className="text-slate-600 text-sm">{part.mechanicsZH}</p>
          <p className="text-slate-400 text-xs mt-2 italic">{part.mechanicsEN}</p>
        </div>

        <div className="flex gap-3 mb-4">
          <button
            onClick={() => alert(`🔊 Audio: 粵語 — ${part.nameZH}\n${part.descriptionZH}`)}
            className="flex-1 bg-blue-500 text-white py-2 rounded-xl text-sm font-bold"
          >
            🔊 粵語
          </button>
          <button
            onClick={() => alert(`🔊 Audio: English — ${part.nameEN}\n${part.descriptionEN}`)}
            className="flex-1 bg-slate-500 text-white py-2 rounded-xl text-sm font-bold"
          >
            🔊 English
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-sky-500 text-white py-3 rounded-xl font-bold"
        >
          Got it! 知道了！
        </button>
      </div>
    </motion.div>
  )
}