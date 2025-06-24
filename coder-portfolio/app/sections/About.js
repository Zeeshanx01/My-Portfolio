import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AboutModal from '../components/AboutModal'
import { FaCode, FaGraduationCap, FaLightbulb, FaBook, FaGamepad, FaMusic, FaCamera } from 'react-icons/fa'

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

const timeline = [
  {
    year: '2021',
    title: 'Started Web Development',
    description: 'Began learning HTML and CSS, building my first web pages',
    icon: FaCode
  },
  {
    year: '2022',
    title: 'University Journey',
    description: 'Started BSCS degree while continuing to learn web development',
    icon: FaGraduationCap
  },
  {
    year: '2024',
    title: 'Full Stack Focus',
    description: 'Dived into JavaScript, Node.js, and modern frameworks',
    icon: FaLightbulb
  },
  {
    year: '2025',
    title: 'Future Goals',
    description: 'Planning to explore Python and AI development',
    icon: FaBook
  }
]

const interests = [
  {
    title: 'Coding',
    description: 'Passionate about solving problems and building projects',
    icon: FaCode,
    color: 'text-purple-400'
  },
  {
    title: 'Music',
    description: 'Love listening to various genres',
    icon: FaMusic,
    color: 'text-pink-400'
  },
  {
    title: 'Photography',
    description: 'Capturing moments and landscapes',
    icon: FaCamera,
    color: 'text-blue-400'
  }
]

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div>
      <section id="about" className="min-h-screen mx-auto py-32">
        <motion.div
          className="max-w-6xl w-[90%] max-sm:w-full mx-auto backdrop-blur-sm max-sm:backdrop-blur-none bgblack/10 p-12 max-md:p-6 rounded-3xl border max-sm:border-none border-purple-500/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className={`text-4xl ${fontStyles.heading} text-purple-400 mb-8`}>
            &lt;About/&gt;
          </h2>

          <div className="w-full max-w-4xl mx-auto space-y-12">
            {/* Main Introduction */}
            <div className="space-y-6">
              <motion.p
                className={`text-xl max-md:text-md text-white/80 leading-relaxed ${fontStyles.body} cursor-pointer`}
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                onClick={() => setIsModalOpen(true)}
              >
                A <span className="text-purple-300">frontend developer</span> crafting
                <span className="text-pink-300"> immersive digital experiences</span> through modern web technologies.
                Specializing in responsive designs, interactive animations, and seamless user interfaces.
                <span className="text-purple-300 ml-2">Click to learn more →</span>
              </motion.p>

              <motion.div
                className="flex gap-4 justify-end"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <button className={`px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all ${fontStyles.mono}`}>
                  Download CV
                </button>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {[
                { label: 'Portfolio Projects Completed', value: '6+' },
                { label: 'Years Learning', value: '2+' },
                { label: 'Technologies', value: '8+' },
                // { label: 'Happy Clients', value: '5+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className={`text-2xl ${fontStyles.heading} text-purple-400 mb-1`}>{stat.value}</p>
                  <p className={`text-sm ${fontStyles.body} text-white/60`}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h3 className={`text-xl ${fontStyles.heading} text-purple-400 mb-6`}>Timeline</h3>
              <div className="relative">
                {/* Vertical Line */}
                <motion.div
                  className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-purple-500/50"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  transition={{ duration: 1 }}
                />

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      className="relative pl-16"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Dot and Year */}
                      <div className="absolute left-0 top-0">
                        <motion.div
                          className="absolute left-[35px] top-0 w-3 h-3 -translate-x-1/2 bg-purple-500 rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        />
                        <motion.div
                          className="absolute left-[35px] top-0 w-3 h-3 -translate-x-1/2 bg-purple-500/20 rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 2.5 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        />
                        <motion.span
                          className={`absolute -left-4 top-2 -translate-y-1/2 ${fontStyles.heading} text-purple-400`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                        >
                          {item.year}
                        </motion.span>
                      </div>

                      {/* Content Card */}
                      <motion.div
                        className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <item.icon className="text-xl text-purple-400" />
                          <h4 className={`${fontStyles.heading} text-white/90`}>{item.title}</h4>
                        </div>
                        <p className={`${fontStyles.body} text-white/60`}>{item.description}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Personal Interests */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h3 className={`text-xl ${fontStyles.heading} text-purple-400 mb-6`}>Personal Interests</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <interest.icon className={`text-3xl ${interest.color} mb-3`} />
                    <h4 className={`${fontStyles.heading} text-white/90 mb-2`}>{interest.title}</h4>
                    <p className={`${fontStyles.body} text-white/60`}>{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Modal Dialog */}
        <AboutModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fontStyles={fontStyles}
        />
      </section>
    </div>
  )
}

export default About
