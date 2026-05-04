'use client'

// TODO: Implement StepView - single assembly step with animation
export default function StepView({ step, onComplete }: { step: number; onComplete?: () => void }) {
  console.log('StepView: step', step)
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <p className="text-2xl text-slate-700">Step {step} animation</p>
    </div>
  )
}