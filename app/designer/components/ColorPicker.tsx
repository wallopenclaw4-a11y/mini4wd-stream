'use client'

const COLORS = [
  '#FF6B6B', // red
  '#4ECDC4', // teal
  '#FFE66D', // yellow
  '#45B7D1', // blue
  '#96CEB4', // green
  '#F38181', // pink
  '#AA96DA', // purple
  '#FCBAD3', // light pink
  '#2C3E50', // black/dark
  '#DFE6E9', // white/silver
]

export default function ColorPicker({ selected, onSelect }: { selected: string; onSelect: (c: string) => void }) {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {COLORS.map(c => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`w-12 h-12 rounded-full border-4 ${selected === c ? 'border-slate-800 scale-110' : 'border-transparent'}`}
          style={{ backgroundColor: c }}
        />
      ))}
    </div>
  )
}