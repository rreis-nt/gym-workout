import React, { createContext, useContext, useState, useEffect } from 'react'
import { loadStateFromStorage, saveStateToStorage } from '../utils/exportImport'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(() => loadStateFromStorage())

  useEffect(() => {
    const interval = setInterval(() => saveStateToStorage(state), 30000)
    return () => clearInterval(interval)
  }, [state])

  const updateState = (patch) => {
    setState(prev => {
      const next = { ...prev, ...patch, last_modified: new Date().toISOString() }
      saveStateToStorage(next)
      return next
    })
  }

  const value = {
    state,
    setState,
    updateState,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
