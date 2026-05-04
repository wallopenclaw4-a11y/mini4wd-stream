'use client'

// TODO: Implement ExplodedView - long-press overlay showing parts separation
export default function ExplodedView({ parts, onClose }: { parts: string[]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <p className="text-white text-2xl">Exploded View</p>
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-4xl">✕</button>
    </div>
  )
}