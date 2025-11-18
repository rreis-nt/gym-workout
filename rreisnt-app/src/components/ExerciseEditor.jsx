import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Calendar, Dumbbell, Hash, Target, TrendingUp } from 'lucide-react'

export default function ExerciseEditor({ state, setState }) {
  const [selectedExercise, setSelectedExercise] = useState('')
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [isAdding, setIsAdding] = useState(false)

  const addProgress = async () => {
    if (!selectedExercise || !weight || !reps) return

    setIsAdding(true)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    const newState = { ...state }
    if (!newState.cargas[selectedExercise]) newState.cargas[selectedExercise] = []
    newState.cargas[selectedExercise].push({
      date: new Date(date).toISOString(),
      weight: parseFloat(weight),
      reps: parseInt(reps)
    })
    setState(newState)
    setWeight('')
    setReps('')
    setIsAdding(false)
  }

  const exercises = [
    { value: "Supino reto", label: "🏋️ Supino reto", category: "Chest" },
    { value: "Supino inclinado", label: "🏋️ Supino inclinado", category: "Chest" },
    { value: "Crucifixo", label: "🏋️ Crucifixo", category: "Chest" },
    { value: "Tríceps testa", label: "💪 Tríceps testa", category: "Triceps" },
    { value: "Tríceps corda", label: "💪 Tríceps corda", category: "Triceps" },
    { value: "Agachamento", label: "🦵 Agachamento", category: "Legs" },
    { value: "Leg press", label: "🦵 Leg press", category: "Legs" },
    { value: "Cadeira extensora", label: "🦵 Cadeira extensora", category: "Legs" },
    { value: "Cadeira flexora", label: "🦵 Cadeira flexora", category: "Legs" },
    { value: "Panturrilha", label: "🦵 Panturrilha", category: "Legs" },
    { value: "Puxada alta", label: "🏋️ Puxada alta", category: "Back" },
    { value: "Remada curvada", label: "🏋️ Remada curvada", category: "Back" },
    { value: "Remada máquina", label: "🏋️ Remada máquina", category: "Back" },
    { value: "Bíceps rosca direta", label: "💪 Bíceps rosca direta", category: "Biceps" },
    { value: "Bíceps martelo", label: "💪 Bíceps martelo", category: "Biceps" },
  ]

  const quickAddSets = [
    { label: 'Warm-up', weight: '60', reps: '5' },
    { label: 'Working Set', weight: '80', reps: '8' },
    { label: 'Heavy Set', weight: '100', reps: '3' },
  ]

  const applyQuickSet = (set) => {
    setWeight(set.weight)
    setReps(set.reps)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl text-heading text-gradient mb-2">
          Add Progress
        </h2>
        <p className="text-muted">Track your workout performance and build strength</p>
      </div>

      {/* Quick Add Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h3 className="text-lg font-semibold text-white-000 mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-accent-500" />
          Quick Sets
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {quickAddSets.map((set, index) => (
            <motion.button
              key={set.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => applyQuickSet(set)}
              className="p-4 bg-surface rounded-xl border border-border hover:border-accent-600 hover:bg-surface-hover transition-all duration-200 text-left group"
            >
              <div className="text-sm font-medium text-muted mb-1">{set.label}</div>
              <div className="text-lg font-bold text-accent-500">
                {set.weight}kg × {set.reps}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Main Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {/* Exercise Selection */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-white-000 mb-3 flex items-center">
            <Dumbbell className="w-4 h-4 mr-2 text-accent-500" />
            Exercise
          </label>
          <select
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
            className="input-primary w-full"
          >
            <option value="">Choose exercise</option>
            {exercises.map(ex => (
              <option key={ex.value} value={ex.value}>{ex.label}</option>
            ))}
          </select>
        </div>

        {/* Weight Input */}
        <div>
          <label className="block text-sm font-semibold text-white-000 mb-3 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-accent-500" />
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="80"
            className="input-primary w-full"
            min="0"
            step="0.5"
          />
        </div>

        {/* Reps Input */}
        <div>
          <label className="block text-sm font-semibold text-white-000 mb-3 flex items-center">
            <Hash className="w-4 h-4 mr-2 text-accent-500" />
            Reps
          </label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="10"
            className="input-primary w-full"
            min="1"
          />
        </div>

        {/* Date Input */}
        <div>
          <label className="block text-sm font-semibold text-white-000 mb-3 flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-accent-500" />
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-primary w-full"
          />
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={addProgress}
          disabled={!selectedExercise || !weight || !reps || isAdding}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center space-x-2"
        >
          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center space-x-2"
              >
                <div className="w-5 h-5 border-2 border-white-000/30 border-t-white-000 rounded-full animate-spin" />
                <span>Saving...</span>
              </motion.div>
            ) : (
              <motion.div
                key="add"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Progress</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Recent Entries Preview */}
      {selectedExercise && state.cargas[selectedExercise] && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-8 pt-6 border-t border-border"
        >
          <h4 className="text-lg font-semibold text-white-000 mb-4">Recent Entries</h4>
          <div className="space-y-2">
            {state.cargas[selectedExercise]
              .slice(-3)
              .reverse()
              .map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center p-3 bg-surface rounded-lg"
                >
                  <span className="text-sm text-muted">
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                  <span className="text-sm font-medium text-accent-500">
                    {entry.weight}kg × {entry.reps}
                  </span>
                </motion.div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
