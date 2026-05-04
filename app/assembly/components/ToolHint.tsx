'use client'

import { motion } from 'framer-motion'

// TODO: Implement ToolHint - bouncing arrow indicating which tool to use
export default function ToolHint({ tool }: { tool: string }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      className="text-5xl"
    >
      👆
    </motion.div>
  )
}