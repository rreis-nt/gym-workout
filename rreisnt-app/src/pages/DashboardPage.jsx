import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import WeekCards from '../components/WeekCards'
import ExerciseEditor from '../components/ExerciseEditor'
import ProgressChart from '../components/ProgressChart'
import StatsCard from '../components/StatsCard'
import { exportJSON, importJSONFile } from '../utils/exportImport'
import { useApp } from '../context/AppContext'
import { useProgression } from '../hooks/useProgression'
import { TrendingUp, Clock, Flame, Award, Upload, BarChart3 } from 'lucide-react'

const DashboardPage = () => {
  const { state, setState, updateState } = useApp()
  const { getBestLifts, getTotalStats } = useProgression(state.cargas)
  const [activeTab, setActiveTab] = useState('overview')

  const totalStats = getTotalStats()
  const bestLifts = getBestLifts()

  const handleExport = () => {
    exportJSON(state)
  }

  const handleImport = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    try {
      const parsed = await importJSONFile(file)
      setState(parsed)
      alert('Dados importados com sucesso!')
    } catch (err) {
      alert('Arquivo inválido')
    }
  }

  const statsCards = [
    {
      icon: TrendingUp,
      label: 'Total Weight',
      value: `${totalStats.totalWeight.toFixed(0)}kg`,
      color: 'from-blue-500 to-blue-600',
      delay: 0.1
    },
    {
      icon: Clock,
      label: 'Training Time',
      value: `${Math.floor(totalStats.totalTime / 60)}h ${totalStats.totalTime % 60}m`,
      color: 'from-green-500 to-green-600',
      delay: 0.2
    },
    {
      icon: Flame,
      label: 'Calories',
      value: totalStats.estimatedCalories.toFixed(0),
      color: 'from-orange-500 to-red-500',
      delay: 0.3
    },
    {
      icon: Award,
      label: 'Sessions',
      value: totalStats.totalSessions,
      color: 'from-purple-500 to-purple-600',
      delay: 0.4
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-dark text-white-000">
      <Header athlete={state.athlete} onExport={handleExport} />

      <main className="max-w-7xl mx-auto container-padding section-spacing safe-bottom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-display text-gradient mb-4">
            Welcome Back
          </h1>
          <p className="text-xl text-muted-300 max-w-2xl mx-auto">
            Track your progress, crush your goals, and become the athlete you were born to be.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          {statsCards.map((stat, index) => (
            <StatsCard
              key={stat.label}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              color={stat.color}
              delay={stat.delay}
            />
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-surface rounded-2xl p-1 border border-border">
            <div className="flex space-x-1">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'progress', label: 'Progress', icon: TrendingUp },
                { id: 'workouts', label: 'Workouts', icon: Award }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-accent text-white-000 shadow-accent-glow'
                      : 'text-muted-300 hover:text-white-000 hover:bg-surface-hover'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Current Week */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="card"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl text-heading text-gradient mb-2">
                      Current Week
                    </h2>
                    <p className="text-muted">Mark completed exercises and track your consistency</p>
                  </div>
                  <WeekCards state={state} setState={setState} />
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="card"
                >
                  <ExerciseEditor state={state} setState={setState} />
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Progress Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="card"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl text-heading text-gradient mb-2">
                      Progress
                    </h3>
                    <p className="text-muted text-sm">Weight progression over time</p>
                  </div>
                  <ProgressChart cargas={state.cargas} />
                </motion.div>

                {/* Best Lifts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="card"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl text-heading text-gradient mb-2">
                      🏆 Best Lifts
                    </h3>
                    <p className="text-muted text-sm">Your personal records</p>
                  </div>
                  <div className="space-y-4">
                    {bestLifts.slice(0, 5).map((lift, index) => (
                      <motion.div
                        key={lift.exercise}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex justify-between items-center p-4 bg-surface rounded-xl border border-border hover:border-accent-600 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white-000 font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="font-medium">{lift.exercise}</span>
                        </div>
                        <span className="text-accent-500 font-bold text-lg">{lift.bestLift}kg</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Data Management */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="card"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl text-heading text-gradient mb-2">
                      Data Management
                    </h3>
                    <p className="text-muted text-sm">Backup and restore your progress</p>
                  </div>
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleExport}
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <Upload className="w-5 h-5" />
                      <span>Export Data</span>
                    </motion.button>
                    <div className="relative">
                      <input
                        type="file"
                        accept="application/json"
                        onChange={handleImport}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-secondary flex items-center justify-center space-x-2"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Import Data</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl text-heading text-gradient mb-2">
                  Detailed Progress
                </h2>
                <p className="text-muted">Comprehensive view of your training journey</p>
              </div>
              <ProgressChart cargas={state.cargas} detailed />
            </motion.div>
          )}

          {activeTab === 'workouts' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center card"
            >
              <h2 className="text-3xl text-heading text-gradient mb-4">
                Workout Management
              </h2>
              <p className="text-muted mb-8">Create, edit, and manage your workout routines</p>
              <div className="text-muted-400">
                <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Coming soon - Advanced workout planning features</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  )
}

export default DashboardPage
