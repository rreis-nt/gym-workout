import React, { useEffect } from 'react'

export default function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [onClose, duration])

  return (
    <div className="fixed bottom-4 right-4 bg-accent-600 text-white-000 px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  )
}
