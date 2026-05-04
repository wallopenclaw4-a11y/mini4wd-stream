'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { zhHK } from '@/lib/i18n'

// Parts Explorer card
function PartsCard() {
  return (
    <Link href="/parts">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg cursor-pointer"
      >
        <span className="text-6xl mb-3">🔍</span>
        <h2 className="text-white text-2xl font-bold">{zhHK.partsExplorer}</h2>
        <p className="text-blue-100 text-lg">Parts Explorer</p>
      </motion.div>
    </Link>
  )
}

// Assembly Guide card
function AssemblyCard() {
  return (
    <Link href="/assembly">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg cursor-pointer"
      >
        <span className="text-6xl mb-3">🧩</span>
        <h2 className="text-white text-2xl font-bold">{zhHK.assemblyGuide}</h2>
        <p className="text-amber-100 text-lg">Assembly Guide</p>
      </motion.div>
    </Link>
  )
}

// My Car Designer card
function DesignerCard() {
  return (
    <Link href="/designer">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg cursor-pointer"
      >
        <span className="text-6xl mb-3">🎨</span>
        <h2 className="text-white text-2xl font-bold">{zhHK.myCarDesigner}</h2>
        <p className="text-pink-100 text-lg">My Car Designer</p>
      </motion.div>
    </Link>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-indigo-100 flex flex-col items-center justify-center p-6 gap-6">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2 text-center">
          {zhHK.appName}
        </h1>
        <p className="text-slate-500 text-xl">{zhHK.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 w-full max-w-md">
        <PartsCard />
        <AssemblyCard />
        <DesignerCard />
      </div>

      <p className="text-slate-400 text-sm mt-4">{zhHK.tapToStart}</p>
    </main>
  )
}