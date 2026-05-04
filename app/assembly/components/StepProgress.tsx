'use client'

// TODO: Implement StepProgress - "Step N of M" indicator with progress bar
export default function StepProgress({ current, total }: { current: number; total: number }) {
  const progress = (current / total) * 100
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-lg font-bold text-slate-700">
        Step {current} of {total}
      </span>
      <div className="w-64 h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}