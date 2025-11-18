import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Circle, Dumbbell, Target, Trophy } from 'lucide-react'

export default function WeekCards({ state, setState }) {
  const semanaAtual = state.treinos?.semana1 || {}

  const toggleExercise = (dia, exercicio) => {
    const newState = { ...state }
    if (!newState.treinos.semana1[dia]) newState.treinos.semana1[dia] = {}
    newState.treinos.semana1[dia][exercicio] = !newState.treinos.semana1[dia][exercicio]
    setState(newState)
  }

  const getDayColor = (dia) => {
    const colors = {
      'Segunda-feira': 'from-blue-500 to-blue-600',
      'Terça-feira': 'from-green-500 to-green-600',
      'Quarta-feira': 'from-purple-500 to-purple-600',
      'Quinta-feira': 'from-red-500 to-red-600',
      'Sexta-feira': 'from-yellow-500 to-yellow-600',
      'Sábado': 'from-pink-500 to-pink-600'
    }
    return colors[dia] || 'from-gray-500 to-gray-600'
  }

  const getDayIcon = (dia) => {
    const icons = {
      'Segunda-feira': Dumbbell,
      'Terça-feira': Target,
      'Quarta-feira': Trophy,
      'Quinta-feira': Dumbbell,
      'Sexta-feira': Target,
      'Sábado': Trophy
    }
    return icons[dia] || Dumbbell
  }

  const completedCount = (dia) => {
    const exercises = semanaAtual[dia] || {}
    const total = Object.keys(exercises).length
    const completed = Object.values(exercises).filter(Boolean).length
    return { completed, total }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.keys(semanaAtual).map((dia, index) => {
        const { completed, total } = completedCount(dia)
        const isCompleted = completed === total && total > 0
        const progressPercentage = total > 0 ? (completed / total) * 100 : 0
        const DayIcon = getDayIcon(dia)

        return (
          <motion.div
            key={dia}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`relative card card-hover overflow-hidden ${
              isCompleted ? 'ring-2 ring-accent-500 shadow-accent-glow' : ''
            }`}
          >
            {/* Background gradient for completed days */}
            {isCompleted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-accent opacity-5 rounded-2xl"
              />
            )}

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${getDayColor(dia)} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <DayIcon className="w-6 h-6 text-white-000" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg text-heading font-bold">
                      <span className="hidden sm:inline">{dia}</span>
                      <span className="sm:hidden">{dia.split('-')[0]}</span>
                    </h3>
                    <p className="text-sm text-muted">
                      {total} exercises
                    </p>
                  </div>
                </div>

                {isCompleted && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-accent-500"
                  >
                    <CheckCircle className="w-6 h-6" />
                  </motion.div>
                )}
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted">Progress</span>
                  <span className="text-sm font-medium text-accent-500">
                    {completed}/{total}
                  </span>
                </div>
                <div className="w-full bg-surface rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                    className={`h-full bg-gradient-to-r ${getDayColor(dia)} rounded-full shadow-inner`}
                  />
                </div>
              </div>

              {/* Exercises list */}
              <div className="space-y-3">
                {Object.keys(semanaAtual[dia]).map((ex, exIndex) => (
                  <motion.div
                    key={ex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 + exIndex * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => toggleExercise(dia, ex)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3 p-3 rounded-xl bg-surface-hover hover:bg-surface transition-all duration-200">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {semanaAtual[dia][ex] ? (
                          <CheckCircle className="w-5 h-5 text-accent-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-400 group-hover:text-accent-400 transition-colors" />
                        )}
                      </motion.div>
                      <span className={`text-sm font-medium transition-all flex-1 ${
                        semanaAtual[dia][ex]
                          ? 'text-accent-400 line-through opacity-75'
                          : 'text-white-000 group-hover:text-accent-300'
                      }`}>
                        {ex}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Completion status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="mt-6 pt-4 border-t border-border"
              >
                <div className="flex items-center justify-center space-x-2">
                  {isCompleted ? (
                    <>
                      <Trophy className="w-4 h-4 text-accent-500" />
                      <span className="text-sm text-accent-500 font-medium">
                        Day Complete! 🎉
                      </span>
                    </>
                  ) : (
                    <>
                      <Target className="w-4 h-4 text-muted-400" />
                      <span className="text-sm text-muted">
                        {total - completed} remaining
                      </span>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
