'use client'

// TODO: Implement ColorPicker - row of color buttons
export default function ColorPicker({ selected, onSelect }: { selected: string; onSelect: (c: string) => void }) {
  const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#A8E6CF', '#DDA0DD', '#87CEEB']
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {colors.map(c => (
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