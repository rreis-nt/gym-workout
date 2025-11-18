import { useMemo } from 'react'

export const useProgression = (cargas) => {
  const progressionData = useMemo(() => {
    const exercises = Object.keys(cargas || {})
    const data = {}

    exercises.forEach(exercise => {
      const entries = cargas[exercise] || []
      const sortedEntries = entries.sort((a, b) => new Date(a.date) - new Date(b.date))

      // Calculate weekly progression
      const weeklyData = {}
      sortedEntries.forEach(entry => {
        const weekStart = new Date(entry.date)
        weekStart.setDate(weekStart.getDate() - weekStart.getDay())
        const weekKey = weekStart.toISOString().split('T')[0]

        if (!weeklyData[weekKey]) {
          weeklyData[weekKey] = { totalWeight: 0, totalReps: 0, count: 0, maxWeight: 0 }
        }

        weeklyData[weekKey].totalWeight += entry.weight * entry.reps
        weeklyData[weekKey].totalReps += entry.reps
        weeklyData[weekKey].count += 1
        weeklyData[weekKey].maxWeight = Math.max(weeklyData[weekKey].maxWeight, entry.weight)
      })

      data[exercise] = {
        entries: sortedEntries,
        weeklyData,
        bestLift: Math.max(...sortedEntries.map(e => e.weight)),
        totalSessions: sortedEntries.length,
        averageWeight: sortedEntries.reduce((sum, e) => sum + e.weight, 0) / sortedEntries.length || 0,
      }
    })

    return data
  }, [cargas])

  const getWeeklyProgress = (exercise) => {
    return progressionData[exercise]?.weeklyData || {}
  }

  const getBestLifts = () => {
    return Object.entries(progressionData).map(([exercise, data]) => ({
      exercise,
      bestLift: data.bestLift,
      sessions: data.totalSessions,
    })).sort((a, b) => b.bestLift - a.bestLift)
  }

  const getTotalStats = () => {
    const allEntries = Object.values(progressionData).flatMap(data => data.entries)
    const totalWeight = allEntries.reduce((sum, e) => sum + (e.weight * e.reps), 0)
    const totalTime = allEntries.length * 45 // Assuming 45 minutes per session
    const estimatedCalories = totalWeight * 0.0005 // Rough estimate

    return {
      totalWeight,
      totalTime,
      estimatedCalories,
      totalSessions: allEntries.length,
    }
  }

  return {
    progressionData,
    getWeeklyProgress,
    getBestLifts,
    getTotalStats,
  }
}
