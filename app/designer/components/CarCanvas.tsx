'use client'

// TODO: Implement CarCanvas - SVG canvas with fill + stickers
export default function CarCanvas({ color, stickers }: { color: string; stickers: string[] }) {
  console.log('CarCanvas with color:', color, 'stickers:', stickers)
  return (
    <div className="w-full aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
      <p className="text-slate-400">Car Canvas</p>
    </div>
  )
}