import React, { useState } from 'react'
import { SiReact, SiMongodb, SiNextdotjs, SiNodedotjs, SiClerk, SiPython, SiDocker, SiTailwindcss, SiJavascript, SiMysql, SiShadcnui, SiFramer, SiScrollreveal, SiStorybook , SiStreamlit,SiThreedotjs,SiExpress,SiAmazonaws,  } from 'react-icons/si'

// For icons not available in 'si' package:
import { HiOutlineCube } from 'react-icons/hi2'; // HeroUI alternative


import { motion } from 'framer-motion'
import TechStackModal from '../components/TechStackModal'

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

const skills = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', level: 85, url: 'https://nextjs.org', description: 'Next.js is a React framework for building fast, scalable web applications with server-side rendering, static site generation, and API routes. Use it for production-grade React apps.' },
  { name: 'React', icon: SiReact, color: 'text-blue-400', level: 75, url: 'https://react.dev', description: 'React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage state efficiently in web and mobile apps.' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', level: 65, url: 'https://nodejs.org', description: 'Node.js is a runtime for executing JavaScript on the server. It is used for building scalable backend services and APIs.' },
  { name: 'ExpressJS', icon: SiExpress, color: 'text-green-400', level: 65, url: 'https://expressjs.com', description: 'Express is a minimal and flexible Node.js web application framework for building APIs and web servers.' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 55, url: 'https://developer.mozilla.org/docs/Web/JavaScript', description: 'JavaScript is the programming language of the web, used for client-side and server-side development.' },
  { name: 'Clerk', icon: SiClerk, color: 'text-blue-400', level: 75, url: 'https://clerk.com', description: 'Clerk provides authentication and user management for modern web apps, making it easy to add sign-in, sign-up, and user profiles.' },
  { name: 'Stream', icon: SiStreamlit, color: 'text-green-400', level: 70, url: 'https://getstream.io', description: 'Stream offers APIs for scalable activity feeds and chat messaging in web and mobile apps.' },
  { name: 'LordIcons', icon: SiStorybook, color: 'text-yellow-400', level: 95, url: 'https://lordicon.com', description: 'LordIcons is a library of animated icons for modern web and mobile interfaces.' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 90, url: 'https://tailwindcss.com', description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.' },
  { name: 'HeroUI', icon: HiOutlineCube, color: 'text-pink-400', level: 75, url: 'https://www.heroicons.com/', description: 'HeroUI (Heroicons) is a set of free MIT-licensed high-quality SVG icons for you to use in your web projects.' },
  { name: 'shadcn/ui', icon: SiShadcnui, color: 'text-purple-400', level: 75, url: 'https://ui.shadcn.com', description: 'shadcn/ui is a collection of beautifully designed components built with Radix UI and Tailwind CSS.' },
  { name: 'ReactBits', icon: SiReact, color: 'text-blue-400', level: 80, url: 'https://reactbits.com', description: 'ReactBits is a collection of React patterns, techniques, tips, and tricks.' },
  { name: 'React-Scroll', icon: SiScrollreveal, color: 'text-orange-400', level: 65, url: 'https://www.npmjs.com/package/react-scroll', description: 'React-Scroll is a React component for animating vertical scrolling.' },
  { name: 'FlowBite', icon: SiTailwindcss, color: 'text-cyan-400', level: 85, url: 'https://flowbite.com', description: 'FlowBite is a library of UI components built on top of Tailwind CSS.' },
  { name: 'Three.js', icon: SiThreedotjs, color: 'text-purple-400', level: 35, url: 'https://threejs.org', description: 'Three.js is a JavaScript 3D library that makes WebGL simpler.' },
  { name: 'Framer-Motion', icon: SiFramer, color: 'text-blue-400', level: 65, url: 'https://www.framer.com/motion/', description: 'Framer Motion is a production-ready motion library for React to power animations.' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 80, url: 'https://www.mongodb.com', description: 'MongoDB is a NoSQL database for modern, scalable applications.' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500', level: 25, url: 'https://www.mysql.com', description: 'MySQL is a popular open-source relational database.' },
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    if (skill.url) {
      setSelectedSkill(skill);
      setModalOpen(true);
    }
  };

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
              <motion.button
                key={skill.name}
                type="button"
                onClick={() => handleSkillClick(skill)}
                className="p-6 bg-black/30 backdrop-blur-sm border-2 border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group relative overflow-hidden w-full text-left"
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
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <span className={`${fontStyles.mono} text-purple-400 text-sm mt-2 block`}>
                    {skill.level}% - {getSkillLevelLabel(skill.level)}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
      <TechStackModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        techName={selectedSkill?.name}
        techUrl={selectedSkill?.url}
        techIcon={selectedSkill?.icon}
        techDescription={selectedSkill?.description}
      />
    </div>
  )
}

export default TechStack