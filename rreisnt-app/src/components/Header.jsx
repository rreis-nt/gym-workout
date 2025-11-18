import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Download, User } from 'lucide-react'

export default function Header({ athlete, onExport }) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-dark-to-accent backdrop-blur-xl border-b border-border shadow-glass-strong safe-top"
    >
      <div className="max-w-7xl mx-auto container-padding py-4 sm:py-6">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-accent-glow animate-float"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/src/assets/logo.svg" alt="RREISNT" className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-display text-gradient tracking-tight">
                RREISNT
              </h1>
              <p className="text-muted-300 text-xs sm:text-sm font-medium tracking-wide">
                HIGH PERFORMANCE
              </p>
            </div>
          </motion.div>

          {/* Athlete Info & Actions */}
          <div className="flex items-center space-x-4">
            {/* Athlete Info - Desktop */}
            <motion.div
              className="text-right hidden sm:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center shadow-accent-glow">
                  <User className="w-5 h-5 text-white-000" />
                </div>
                <div>
                  <p className="text-white-000 font-semibold text-lg leading-tight">
                    {athlete?.nome || 'Athlete'}
                  </p>
                  <p className="text-accent-500 text-sm font-medium">
                    {athlete?.codinome || 'Codename'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onExport}
              className="p-3 rounded-xl bg-surface-hover hover:bg-surface border border-border-hover hover:border-accent-600 transition-all duration-200 group"
              title="Export Data"
            >
              <Download className="w-5 h-5 text-muted-300 group-hover:text-accent-500 transition-colors" />
            </motion.button>

            {/* Mobile athlete info */}
            <motion.div
              className="text-right sm:hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white-000 font-semibold text-sm">{athlete?.nome || 'Athlete'}</p>
              <p className="text-accent-500 text-xs">{athlete?.codinome || 'Codename'}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
