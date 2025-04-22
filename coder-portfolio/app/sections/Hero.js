import React from 'react'

import { motion} from 'framer-motion'



const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}


const Hero = () => {
  return (
    <div>
      <section id="home" className="min-h-screen py-32 bg-red500 w-[90%] mx-auto flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <motion.p
            className={`text-purple-400 mb-4 ${fontStyles.mono}`}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            className={`text-7xl ${fontStyles.heading} text-white mb-6`}
            initial={{ letterSpacing: '-0.05em' }}
            whileInView={{ letterSpacing: '0em' }}
            transition={{ duration: 0.8 }}
          >
            Zeeshan.
          </motion.h1>
          <motion.h2
            className={`text-5xl ${fontStyles.heading} text-gray-400 mb-8`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            I build <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">digital experiences</span>
          </motion.h2>
          <motion.p
            className={`text-xl text-gray-400 leading-relaxed ${fontStyles.body}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Specializing in crafting <span className="text-purple-300">immersive web applications</span> and
            <span className="text-pink-300"> interactive experiences</span> through modern web technologies.
          </motion.p>
        </motion.div>
      </section>
    </div>
  )
}

export default Hero
