import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import { TrendingUp, Calendar, BarChart3 } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function ProgressChart({ cargas }) {
  const [selectedExercise, setSelectedExercise] = useState('')
  const [viewMode, setViewMode] = useState('all') // 'all', 'weekly', 'monthly'

  const exercises = Object.keys(cargas || {})
  const currentExercise = selectedExercise || (exercises.length > 0 ? exercises[0] : null)

  const processData = (exerciseData) => {
    if (!exerciseData) return { labels: [], data: [] }

    const sortedEntries = exerciseData.sort((a, b) => new Date(a.date) - new Date(b.date))

    if (viewMode === 'weekly') {
      const weeklyData = {}
      sortedEntries.forEach(entry => {
        const weekStart = new Date(entry.date)
        weekStart.setDate(weekStart.getDate() - weekStart.getDay())
        const weekKey = weekStart.toISOString().split('T')[0]

        if (!weeklyData[weekKey]) {
          weeklyData[weekKey] = { total: 0, count: 0, max: 0 }
        }
        weeklyData[weekKey].total += entry.weight
        weeklyData[weekKey].count += 1
        weeklyData[weekKey].max = Math.max(weeklyData[weekKey].max, entry.weight)
      })

      return {
        labels: Object.keys(weeklyData).map(date => new Date(date).toLocaleDateString()),
        data: Object.values(weeklyData).map(week => Math.round(week.max * 10) / 10)
      }
    }

    if (viewMode === 'monthly') {
      const monthlyData = {}
      sortedEntries.forEach(entry => {
        const monthKey = entry.date.substring(0, 7) // YYYY-MM
        if (!monthlyData[monthKey]) {
          monthlyData[monthKey] = { total: 0, count: 0, max: 0 }
        }
        monthlyData[monthKey].total += entry.weight
        monthlyData[monthKey].count += 1
        monthlyData[monthKey].max = Math.max(monthlyData[monthKey].max, entry.weight)
      })

      return {
        labels: Object.keys(monthlyData).map(month => {
          const [year, monthNum] = month.split('-')
          return new Date(year, monthNum - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        }),
        data: Object.values(monthlyData).map(month => Math.round(month.max * 10) / 10)
      }
    }

    return {
      labels: sortedEntries.map(entry => new Date(entry.date).toLocaleDateString()),
      data: sortedEntries.map(entry => entry.weight)
    }
  }

  const { labels, data: chartData } = processData(currentExercise ? cargas[currentExercise] : null)

  const data = {
    labels,
    datasets: currentExercise ? [
      {
        label: `${currentExercise} (kg)`,
        data: chartData,
        borderColor: '#E2322B',
        backgroundColor: 'rgba(226, 50, 43, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: '#E2322B',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
    ] : [],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#E2322B',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#807E81',
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#807E81',
          font: {
            size: 12,
          },
        },
        beginAtZero: true,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-white-000 mb-2">Exercise</label>
          <select
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
            className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all text-white-000"
          >
            {exercises.map(ex => (
              <option key={ex} value={ex} className="bg-bg-900">{ex}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('all')}
            className={`px-4 py-3 rounded-xl transition-all font-medium ${
              viewMode === 'all'
                ? 'bg-accent-600 text-white shadow-lg'
                : 'bg-white/5 text-muted-400 hover:bg-white/10'
            }`}
          >
            <BarChart3 className="w-4 h-4 inline mr-1" />
            All
          </button>
          <button
            onClick={() => setViewMode('weekly')}
            className={`px-4 py-3 rounded-xl transition-all font-medium ${
              viewMode === 'weekly'
                ? 'bg-accent-600 text-white shadow-lg'
                : 'bg-white/5 text-muted-400 hover:bg-white/10'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-1" />
            Weekly
          </button>
          <button
            onClick={() => setViewMode('monthly')}
            className={`px-4 py-3 rounded-xl transition-all font-medium ${
              viewMode === 'monthly'
                ? 'bg-accent-600 text-white shadow-lg'
                : 'bg-white/5 text-muted-400 hover:bg-white/10'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-1" />
            Monthly
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
        <div className="h-64 sm:h-80">
          {currentExercise && chartData.length > 0 ? (
            <Line data={data} options={options} />
          ) : (
            <div className="h-full flex items-center justify-center text-muted-400">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No progress data available</p>
                <p className="text-sm">Add some exercises to see your progress!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
