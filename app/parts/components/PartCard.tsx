'use client'

// TODO: Implement PartCard - tappable card with STREAM badge
export default function PartCard({ name, onTap }: { name: string; onTap?: () => void }) {
  console.log('PartCard:', name)
  return (
    <button onClick={onTap} className="bg-white rounded-2xl p-4 shadow-md">
      {/* Part illustration + STREAM badge */}
    </button>
  )
}