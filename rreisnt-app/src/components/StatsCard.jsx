import React from 'react'
import { motion } from 'framer-motion'

export default function StatsCard({ icon: Icon, label, value, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="card card-hover cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-2xl bg-gradient-to-br ${color} shadow-accent-glow`}>
          <Icon className="w-6 h-6 text-white-000" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted font-medium">{label}</p>
          <p className="text-2xl lg:text-3xl text-heading font-bold">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}
