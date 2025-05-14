import React from 'react'
import { motion } from 'framer-motion'
import { SiNextdotjs, SiTailwindcss, SiShadcnui, SiClerk, SiStreamlit } from 'react-icons/si'

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

const techStack = [
  { 
    name: 'Next.js', 
    icon: SiNextdotjs, 
    color: 'text-white',
    url: 'https://nextjs.org'
  },
  { 
    name: 'Tailwind CSS', 
    icon: SiTailwindcss, 
    color: 'text-cyan-400',
    url: 'https://tailwindcss.com'
  },
  { 
    name: 'shadcn/ui', 
    icon: SiShadcnui, 
    color: 'text-purple-400',
    url: 'https://ui.shadcn.com'
  },
  { 
    name: 'Clerk', 
    icon: SiClerk, 
    color: 'text-blue-400',
    url: 'https://clerk.com'
  },
  { 
    name: 'Stream', 
    icon: SiStreamlit, 
    color: 'text-green-400',
    url: 'https://getstream.io'
  }
]

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section id="home" className="min-h-screen py-32 w-[90%] mx-auto flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              I craft <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">modern web experiences</span>
            </motion.h2>
            <motion.p
              className={`text-xl text-gray-400 leading-relaxed ${fontStyles.body} mb-8`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {/* A frontend specialist passionate about building beautiful, responsive, and user-friendly web applications using modern technologies and best practices. */}
              {/* A frontend specialist dedicated to crafting visually stunning, responsive, and intuitive web applications with cutting-edge technologies and industry standards. */}
              {/* A frontend specialist dedicated to creating visually appealing, highly responsive, and user-centric web applications leveraging modern technologies and industry best practices. */}
              
              A frontend specialist passionate about creating visually appealing, highly responsive, and user-centric web applications leveraging modern technologies and industry best practices.
            </motion.p>

            {/* Tech Stack */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {techStack.map((tech, index) => (
                <motion.a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                >
                  <tech.icon className={`text-xl ${tech.color}`} />
                  <span className="text-gray-300">{tech.name}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Animated illustration or pattern */}
          <motion.div
            className="relative h-[500px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative h-full w-full bg-black/30 backdrop-blur-sm rounded-3xl border-2 border-purple-500/30 p-8">
              <div className="h-full w-full bg-[url('/grid.svg')] opacity-10" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-64 h-64 border-2 border-purple-500/30 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hero
