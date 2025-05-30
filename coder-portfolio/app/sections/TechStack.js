import React from 'react'
import { SiReact, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiDocker, SiTailwindcss, SiJavascript, SiMysql, SiShadcnui, SiFramer, SiClerk, SiScrollreveal, SiStorybook , SiStreamlit,SiThreedotjs,SiExpress,SiAmazonaws,  } from 'react-icons/si'

// For icons not available in 'si' package:
import { HiOutlineCube } from 'react-icons/hi2'; // HeroUI alternative


import { motion } from 'framer-motion'

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

const skills = [

  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', level: 85 },
  { name: 'React', icon: SiReact, color: 'text-blue-400', level: 75 },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', level: 65 },
  { name: 'ExpressJS', icon: SiExpress, color: 'text-green-400', level: 65 }, // Correct Express icon

  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 55 },
  { name: 'Clerk', icon: SiClerk, color: 'text-blue-400', level: 75 },
  { name: 'Stream', icon: SiStreamlit, color: 'text-green-400', level: 70 },

  { name: 'LordIcons', icon: SiStorybook, color: 'text-yellow-400', level: 95 }, // Changed to Storybook
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 90 },
  { name: 'HeroUI', icon: HiOutlineCube, color: 'text-pink-400', level: 75 }, // Generic UI icon
  { name: 'shadcn/ui', icon: SiShadcnui, color: 'text-purple-400', level: 75 }, // Changed to Material UI
  { name: 'ReactBits', icon: SiReact, color: 'text-blue-400', level: 80 },
  { name: 'React-Scroll', icon: SiScrollreveal, color: 'text-orange-400', level: 65 },
  { name: 'FlowBite', icon: SiTailwindcss, color: 'text-cyan-400', level: 85 }, // Closest match
  { name: 'Three.js', icon: SiThreedotjs, color: 'text-purple-400', level: 35 },
  { name: 'Framer-Motion', icon: SiFramer, color: 'text-blue-400', level: 65 },



  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 80 },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500', level: 25 },

  // { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-400', level: 60 },
  // { name: 'Python', icon: SiPython, color: 'text-blue-600', level: 65 },
  // { name: 'Docker', icon: SiDocker, color: 'text-blue-500', level: 75 }
]




// Function to determine skill level label
const getSkillLevelLabel = (level) => {
  if (level <= 20) return 'Novice'
  if (level <= 35) return 'Beginner'
  if (level <= 65) return 'Intermediate'
  if (level <= 85) return 'Advanced'
  return 'Expert'
}

const TechStack = () => {
  return (
    <div>
      <section id="techstack" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl ${fontStyles.heading} text-purple-400 mb-12 text-center`}>
            &lt;Tech Stack/&gt;
          </h2>

          <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
                          initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-6 bg-black/30 backdrop-blur-sm border-2 border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group relative overflow-hidden"
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.05 }}
              >
                {/* Icon with respective color */}
                <div className={`${skill.color} text-4xl mb-4`}>
                  <skill.icon />
                </div>

                {/* Skill name */}
                <h3 className={`text-xl font-semibold text-white/90 ${fontStyles.heading}`}>
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="h-1 bg-black/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-purple-500"
                      // bg-gradient-to-r from-purple-500 to-pink-500
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <span className={`${fontStyles.mono} text-purple-400 text-sm mt-2 block`}>
                    {skill.level}% - {getSkillLevelLabel(skill.level)}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TechStack