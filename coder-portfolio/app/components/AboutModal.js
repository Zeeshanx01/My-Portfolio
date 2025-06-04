'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AboutModal = ({ isOpen, onClose, fontStyles }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            className="max-w-3xl w-full bg-black/90 border-2 border-purple-500/30 rounded-2xl p-8 max-md:p-6"
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl ${fontStyles.heading} text-purple-400`}>My Journey</h3>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 text-white/80">
                  <p className={`${fontStyles.body} leading-relaxed`}>
                    My journey in web development began in November 2021, starting with the basics of HTML and CSS. 
                    After a brief pause for university studies, I resumed my learning journey in May 2024, 
                    diving deep into JavaScript, Node.js, Express.js, and modern frontend frameworks.
                  </p>

                  <p className={`${fontStyles.body} leading-relaxed`}>
                    I specialize in creating responsive, animated interfaces and implementing dark/light mode themes. 
                    My tech stack includes <span className="text-purple-300">Next.js</span>, 
                    <span className="text-pink-300"> Tailwind CSS</span>, and modern authentication solutions like Clerk. 
                    I'm also expanding my backend knowledge with <span className="text-purple-300">MongoDB</span> and 
                    <span className="text-pink-300"> MySQL</span>.
                  </p>

                  <p className={`${fontStyles.body} leading-relaxed`}>
                    Currently pursuing my BSCS degree (expected completion: 2026), I'm focused on evolving into a 
                    full-stack developer. My long-term goal is to transition into AI development, combining web 
                    technologies with artificial intelligence to create innovative products.
                  </p>

                  <p className={`${fontStyles.body} leading-relaxed`}>
                    I stay updated with the latest technologies through platforms like LinkedIn and YouTube, 
                    constantly expanding my knowledge and skills in the ever-evolving world of web development. 
                    I believe in delivering quality work that meets user needs and exceeds expectations.
                  </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AboutModal
