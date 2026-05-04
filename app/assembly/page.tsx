'use client'

import { useState } from 'react'
import StepView from './components/StepView'
import StepProgress from './components/StepProgress'
import ToolHint from './components/ToolHint'
import Confetti from './components/Confetti'

const TOTAL_STEPS = 12

export default function AssemblyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
        setCurrentStep(prev => prev + 1)
      }, 500)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-slate-800 mb-4">🧩 組裝指南</h1>
      <p className="text-slate-500 mb-6">Assembly Guide</p>

      <StepProgress current={currentStep} total={TOTAL_STEPS} />

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <StepView step={currentStep} onComplete={handleNext} />
        <ToolHint tool="screwdriver" />
      </div>

      <button
        onClick={handleNext}
        className="mt-6 bg-amber-500 text-white text-xl font-bold px-8 py-4 rounded-2xl shadow-lg active:scale-95 transition-transform"
      >
        Next ➡
      </button>

      <Confetti active={showConfetti} />
    </main>
  )
}