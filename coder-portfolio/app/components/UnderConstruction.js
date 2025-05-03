'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function UnderConstruction() {
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-black/90 border-2 border-purple-500/50 rounded-xl p-8 max-w-md w-full shadow-[0_0_30px_rgba(125,60,255,0.3)]"
          >
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
            
            {/* Content */}
            <div className="relative">
              <div className="flex justify-center mb-6">
                <motion.div
                  className="w-64 h-32 bg-black/50 border border-purple-500/30 rounded-lg p-4 font-mono text-sm relative overflow-hidden"
                >
                  {/* Terminal header */}
                  <div className="flex gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>

                  {/* Animated code lines */}
                  <div className="space-y-1">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-purple-400"
                    >
                      $ npm run dev
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-green-400"
                    >
                      &gt; Starting development server...
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="text-blue-400"
                    >
                      &gt; Building components...
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      className="text-yellow-400"
                    >
                      &gt; Optimizing assets...
                    </motion.div>
                  </div>

                  {/* Progress bar */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 h-1 bg-purple-500/20 rounded-full overflow-hidden"
                  >
                    <motion.div
                      className="h-full bg-purple-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>

                  {/* Cursor */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-2 h-4 bg-purple-500"
                    animate={{
                      opacity: [1, 0, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>

              <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">
                Portfolio in Development
              </h2>
              <p className="text-gray-300 mb-6 text-center leading-relaxed">
                Welcome to my portfolio website. I'm currently refining and enhancing the experience to better showcase my work and skills. Please check back soon for the complete version.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBack}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium shadow-lg shadow-purple-500/20"
              >
                Go Back
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 