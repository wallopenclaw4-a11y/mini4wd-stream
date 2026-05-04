'use client'

import { motion } from 'framer-motion'

interface StepData {
  step: number
  titleZH: string
  titleEN: string
  tool: string
  hintZH: string
  hintEN: string
  parentHintZH: string
  parentHintEN: string
}

export default function StepView({ step, stepData, onComplete }: { step: number; stepData: StepData; onComplete?: () => void }) {
  const isDone = step === 12

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-3xl p-6 shadow-lg w-full"
      >
        <div className="flex items-center justify-center mb-4">
          <span className="text-6xl">{stepData.tool}</span>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-slate-700">{stepData.titleZH}</h2>
          <p className="text-lg text-slate-500">{stepData.titleEN}</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-4 mb-4">
          <p className="text-amber-800 font-bold mb-1">👆 提示</p>
          <p className="text-slate-600">{stepData.hintZH}</p>
          <p className="text-slate-400 text-sm mt-1 italic">{stepData.hintEN}</p>
        </div>

        <div className="bg-sky-50 rounded-2xl p-4 mb-4">
          <p className="text-sky-700 font-bold mb-1">👨‍👩‍👧 家長提示</p>
          <p className="text-slate-600 text-sm">{stepData.parentHintZH}</p>
          <p className="text-slate-400 text-xs mt-1 italic">{stepData.parentHintEN}</p>
        </div>

        {isDone && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center text-6xl mb-4"
          >
            🎉
          </motion.div>
        )}

        {onComplete && !isDone && (
          <button
            onClick={onComplete}
            className="w-full bg-green-500 text-white py-3 rounded-xl font-bold active:scale-95 transition-transform"
          >
            ✅ 完成呢步話畀我知！
          </button>
        )}
      </motion.div>
    </div>
  )
}