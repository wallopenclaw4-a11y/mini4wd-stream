'use client'

// TODO: Implement StickerLibrary - grid of draggable sticker stamps
export default function StickerLibrary({ onSelect }: { onSelect: (s: string) => void }) {
  const stickers = ['⭐', '⚡', '🔥', '1', '2', '3', '🏁', '💨']
  return (
    <div className="grid grid-cols-4 gap-3">
      {stickers.map((s, i) => (
        <button
          key={i}
          onClick={() => onSelect(s)}
          className="text-4xl bg-white rounded-xl p-3 shadow hover:scale-105 active:scale-95 transition-transform"
        >
          {s}
        </button>
      ))}
    </div>
  )
}