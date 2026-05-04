'use client'

import { motion } from 'framer-motion'

// TODO: Implement PartModal - popup with bilingual name, audio, animation
export default function PartModal({ part, onClose }: { part: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full" onClick={e => e.stopPropagation()}>
        <h2 className="text-3xl font-bold">{part}</h2>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-xl">
          Got it!
        </button>
      </div>
    </motion.div>
  )
}