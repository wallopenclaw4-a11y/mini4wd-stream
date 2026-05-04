'use client'

// TODO: Implement SaveButton - localStorage + share
export default function SaveButton({ onSave }: { onSave?: () => void }) {
  return (
    <button
      onClick={onSave}
      className="bg-purple-500 text-white text-lg font-bold px-6 py-3 rounded-xl shadow"
    >
      Save 🎨
    </button>
  )
}