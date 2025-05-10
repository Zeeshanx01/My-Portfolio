import React from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

const Projects = () => {
  return (
    <div>
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-4xl ${fontStyles.heading} text-purple-400 mb-12 text-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            &lt;Projects/&gt;
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project, index) => (
              <motion.div
                key={project}
                className="group relative h-96 bg-black/30 backdrop-blur-sm border-2 border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.div
                  className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                  transition={{ duration: 30, repeat: Infinity }}
                />

                <div className="p-8 relative z-10">
                  <motion.div
                    className="text-purple-400 text-2xl mb-4 flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-white/50">0{index + 1}.</span>
                    Project {project}
                  </motion.div>

                  <motion.p
                    className="text-white/80 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Advanced web application with modern tech stack implementation
                  </motion.p>

                  <motion.div
                    className="flex gap-2 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {['React', 'Next.js', 'Node.js'].map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                        whileHover={{ scale: 1.02 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-tl-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
