import React, { useState } from 'react'
import { motion } from 'framer-motion'

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

const skills = [
  { name: 'Frontend Development & Responsive Design', level: 95 },
  { name: 'Backend Development', level: 40 },
  { name: 'Database Management', level: 65 },
  { name: 'AI Integration', level: 20 },
  { name: 'UI/UX Design', level: 70 },
  { name: 'Cross-Browser Compatibility', level: 90 },
  { name: 'Version Control (Git)', level: 80 },
  { name: 'API Development', level: 35 },

  // New suggested additions
  // { name: 'Testing (Jest/Cypress)', level: 65 },
  // { name: 'DevOps Basics', level: 55 },
  // { name: 'Web Performance Optimization', level: 85 },
  // { name: 'Accessibility (WCAG)', level: 70 },
  // { name: 'Mobile-First Development', level: 88 },
  // { name: 'Build Tools (Webpack/Vite)', level: 75 },
  // { name: 'CMS Integration', level: 60 }
]

const Skills = () => {

  return (
    <div>
      <section id="skills" className="min-h-screen mx-auto py-32">
        <motion.div
          className="max-w-6xl w-[90%] mx-auto backdrop-blur-sm bg-black/30 p-12 max-md:p-6 rounded-3xl border max-sm:border-none border-purple-500/30 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className={`text-4xl ${fontStyles.heading} text-purple-400 mb-8`}>
            &lt;Core Skills/&gt;
          </h2>

          <div className="w-full max-w-4xl mx-auto space-y-12">
            {/* Skills Progress */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {/* <h3 className={`text-xl ${fontStyles.heading} text-purple-400 mb-4`}>Core Skills</h3> */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between">
                    <span className={`${fontStyles.body} text-white/80`}>{skill.name}</span>
                    <span className={`${fontStyles.mono} text-purple-400`}>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Skills