
import React from 'react'

import { motion} from 'framer-motion'
import IconForSkill from "../components/IconForSkill"

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}


const Skills = () => {
  return (
    <div>
      <section id="skills" className="min-h-screen py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className={`text-4xl ${fontStyles.heading} text-purple-400 mb-12 text-center`}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
          >
            &lt;Tech Stack/&gt;
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'Three.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'].map((skill, index) => (
              <motion.div
                key={skill}
                className="p-6 bg-black/30 backdrop-blur-sm border-2 border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.div
                  className="text-purple-400 text-4xl mb-4 opacity-80 group-hover:opacity-100"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <IconForSkill skill={skill} className="text-4xl mb-4 opacity-80 group-hover:opacity-100 transition-all" />
                </motion.div>

                <h3 className={`text-xl font-semibold text-white/90 ${fontStyles.heading}`}>{skill}</h3>
                <motion.div
                  className="text-white/60 text-sm mt-2 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <div className="h-1 w-full bg-purple-500/20 rounded-full">
                    <div
                      className="h-full bg-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(90 + index * 5, 100)}%` }}
                    />
                  </div>
                  Expert
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Skills
