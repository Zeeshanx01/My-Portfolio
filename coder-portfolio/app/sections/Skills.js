import React from 'react'
import { motion } from 'framer-motion'
import IconForSkill from "../components/IconForSkill"

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

// Skill level classification function
const getSkillLevelLabel = (level) => {
  if (level <= 30) return 'Novice';
  if (level <= 55) return 'Competent';
  if (level <= 79) return 'Proficient';
  if (level <= 94) return 'Expert';
  return 'Master'; // For 95-100%
};

const Skills = () => {
  const skills = [
    { name: 'React', level: 15 },
    { name: 'MongoDB', level: 65 },
    { name: 'Next.js', level: 90 },
    { name: 'Three.js', level: 80 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Docker', level: 82 }
  ]

  return (
    <div>
      {/* <section id="skills" className="min-h-screen py-20 px-4">
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
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="p-6 bg-black/30 backdrop-blur-sm border-2 border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring' }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.div
                  className="text-purple-400 text-4xl mb-4 opacity-80 group-hover:opacity-100"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <IconForSkill skill={skill.name} className="text-4xl mb-4 opacity-80 group-hover:opacity-100 transition-all" />
                </motion.div>

                <h3 className={`text-xl font-semibold text-white/90 ${fontStyles.heading}`}>{skill.name}</h3>

                <motion.div
                  className="text-white/60 text-sm mt-2 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <div className="h-1 w-full bg-purple-500/20 rounded-full">
                    <div
                      className="h-full bg-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-purple-400 text-xs font-medium">
                    {getSkillLevelLabel(skill.level)}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section> */}
    </div>
  )
}

export default Skills