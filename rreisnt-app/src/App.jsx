import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppProvider, useApp } from './context/AppContext'
import DashboardPage from './pages/DashboardPage'

const AppContent = () => {
  const { state } = useApp()

  useEffect(() => {
    document.title = `RREISNT High Performance · ${state?.athlete?.nome || 'Athlete'}`
  }, [state])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <DashboardPage />
    </motion.div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
