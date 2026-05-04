'use client'

import { useState } from 'react'
import StepView from './components/StepView'
import StepProgress from './components/StepProgress'
import ToolHint from './components/ToolHint'
import Confetti from './components/Confetti'
import { zhHK } from '@/lib/i18n'

const TOTAL_STEPS = 12

export default function AssemblyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)

  const step = zhHK.assemblySteps[currentStep - 1]

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
        setCurrentStep(prev => prev + 1)
      }, 500)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-slate-800 mb-1">{zhHK.assemblyGuide}</h1>
      <p className="text-slate-500 mb-4">Assembly Guide</p>

      <StepProgress current={currentStep} total={TOTAL_STEPS} />

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <StepView step={currentStep} stepData={step} onComplete={handleNext} />
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-xl font-bold shadow ${
            currentStep === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-amber-300 text-amber-800 active:scale-95 transition-transform'
          }`}
        >
          ⬅ Back
        </button>
        <button
          onClick={handleNext}
          className="bg-amber-500 text-white text-xl font-bold px-8 py-4 rounded-2xl shadow-lg active:scale-95 transition-transform"
        >
          {currentStep === TOTAL_STEPS ? '🎉 Done!' : 'Next ➡'}
        </button>
      </div>

      <Confetti active={showConfetti} />
    </main>
  )
}