'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// ... other imports ...
import Cursor from "./components/Cursor"
import Particles from "./components/Particles"
import IconForSkill from "./components/IconForSkill"



const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}




export default function Home() {


  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const lastScrollY = useRef(0)

  const [activeSection, setActiveSection] = useState('home')
  const sections = ['home', 'about', 'skills', 'projects', 'contact']





  // Mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
  }






  // Update the scroll detection useEffect
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 150; // Adjust this value based on your needs
      const offsets = sections.map(section => {
        const el = document.getElementById(section);
        return el ? el.getBoundingClientRect().top + window.scrollY - threshold : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= offsets[i]) {
          currentSection = sections[i];
          break;
        }
      }

      setActiveSection(currentSection);
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Add click handler for mobile menu links
  const handleNavClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth < 1024) { // lg breakpoint
      setIsMenuOpen(false);
    }
  };


  // Responsive navigation variants
  const mobileNavVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 }
  }


  const navVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }






  return (
    <div className={`min-h-screen b-black bg-opacity-20 text-gray-300 ${fontStyles.body}`}>
      <Particles />
      <Cursor />



      {/* Mobile Navigation */}
      <motion.nav
        className="fixed lg:hidden bottom-4 right-4 z-50"
        // initial={{ scale: 0 }}
        // animate={{
        //   scale: 1,
        //   y: isScrollingDown ? 100 : 0,
        //   opacity: isScrollingDown ? 0 : 1
        // }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <button
          onClick={toggleMenu}
          className="w-10 h-10 rounded-full bg-purple-500/30 backdrop-blur-lg border2 border-purple-400/50 flex items-center justify-center shadow-lg shadow-purple-500/20"
        >
          <motion.div
            className="w-6 h-6 relative flex flex-col justify-center"
            animate={isMenuOpen ? 'open' : 'closed'}
          >
            <motion.span
              className="absolute block w-full h-[2px] bg-purple-400 origin-center"
              variants={{
                closed: { y: "-8px", rotate: 0 },
                open: { y: 0, rotate: 45 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute block w-full h-[2px] bg-purple-400"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.span
              className="absolute block w-full h-[2px] bg-purple-400 origin-center"
              variants={{
                closed: { y: "8px", rotate: 0 },
                open: { y: 0, rotate: -45 }
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </button>
      </motion.nav>



















      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileNavVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl lg:hidden z-40 p-8"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Profile Section */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="mb-8"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4" />
                <h1 className={`text-2xl ${fontStyles.heading} text-white`}>
                  Zeeshan
                </h1>
                <p className={`text-purple-400 ${fontStyles.mono}`}>
                  Full-Stack Developer
                </p>
              </motion.div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4 flex-1">
                {sections.map((section) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    onClick={() => {
                      toggleMenu();
                      handleNavClick(section);
                    }}
                    className={`block text-2xl ${fontStyles.heading} ${activeSection === section
                      ? 'text-purple-400 pl-4 border-l-4 border-purple-400'
                      : 'text-gray-400'
                      }`}
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.1 * sections.indexOf(section) }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Social Links */}
              <div className="mt-8 mb-12 space-y-3">
                <motion.a
                  href="#"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 text-lg"
                  
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* GitHub SVG */}
                  </svg>
                  GitHub
                </motion.a>
                {/* Add other social links */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>








      {/* Sticky Bottom Bar (Mobile Only) */}
      <motion.div
        className="fixed lg:hidden bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-sm border-t border-white/10 z-40"
        animate={{ y: isScrollingDown ? 100 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex justify-around p-4">
          <a
            href="#contact"
            className="px-6 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium flex items-center gap-2"
          >
            <span>📧</span> Contact
          </a>
          <a
            href="#projects"
            className="px-6 py-2 bg-white/5 text-white/80 rounded-full text-sm font-medium flex items-center gap-2"
          >
            <span>💻</span> Projects
          </a>
        </div>
      </motion.div>






















      {/* Existing Desktop Navigation */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="hidden lg:block fixed left-0 top-0 h-screen w-72 p-8 border-r border-white/10 backdrop-blur-sm bg-black/30 bg-opacity-50 z-50"
      // ... existing desktop nav code ...
      >
        {/* ... desktop nav content ... */}
        <div className="flex flex-col items-start gap-6 h-full">
          {/* Animated Profile Section */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4"
            />
            <motion.h1
              className={`text-2xl ${fontStyles.heading} text-white`}
              whileHover={{ x: 5 }}
            >
              Zeeshan
            </motion.h1>
            <motion.p
              className={`text-purple-400 ${fontStyles.mono}`}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Full-Stack Developer
            </motion.p>
          </motion.div>

          {/* Animated Navigation Links */}
          <div className="space-y-4 w-full">
            {sections.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={() => handleNavClick(section)}
                className={`block text-lg transition-colors ${fontStyles.heading} ${activeSection === section
                  ? 'text-purple-400 pl-4 border-l-4 border-purple-400'
                  : 'text-gray-400 hover:text-purple-300'
                  }`}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 * sections.indexOf(section) }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </div>

          {/* Animated Social Links */}
          <motion.div
            className="mt-auto space-y-2 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400"
              whileHover={{ x: 5 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {/* GitHub SVG */}
              </svg>
              GitHub
            </motion.a>
            {/* Add other social links */}
          </motion.div>
        </div>
      </motion.nav>



























      {/* Main Content */}
      <main className="ml-0 lg:ml-72 pl-0 lg:pl-8 max-lg:w-[100%] overflow-hidden ">
        {/* ... existing content sections ... */}
        {/* Hero Section */}
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




        {/* About Section */}
        <section id="about" className="min-h-screen   mx-auto py-32">

          <motion.div
            className="max-w-6xl w-[90%] mx-auto backdrop-blur-xl bgred-500 bg-black/30 p-12 max-md:p-6 rounded-3xl border-2 border-purple-500/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >

            <h2 className={`text-4xl ${fontStyles.heading} text-purple-400 mb-8`}>
              &lt;About/&gt;
            </h2>





            <div className="grid md:grid-cols-2 w-[100%] bgblue-500 gap-12 items-center">


              <div className="space-y-6">

                <motion.p
                  className={`text-xl max-md:text-md w[85%] text-white/80 leading-relaxed ${fontStyles.body}`}
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                >
                  With <span className="text-purple-300">5+ years</span> of experience in full-stack development,
                  I bridge the gap between <span className="text-pink-300">technical excellence</span> and
                  <span className="text-purple-300"> user-centered design</span>. Specialized in modern web
                  technologies and interactive experiences.
                </motion.p>

                
                <motion.div
                  className="flex gap-4 justify-end"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >

                  <button className={`px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all ${fontStyles.mono}`}>
                    Download CV
                  </button>

                  {/* <button className={`px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 transition-all ${fontStyles.mono}`}>
                    View Certifications
                  </button> */}

                </motion.div>
              </div>



              <motion.div
                className="relative h-64 w-64 mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-purple-500/10 blur-2xl" />
                <div className="relative h-full w-full bg-black/50 backdrop-blur-sm rounded-2xl border-2 border-purple-500/30" />
              </motion.div>


            </div>




          </motion.div>
        </section>

        {/* Add other sections with similar motion enhancements */}

        {/* Skills Section */}
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

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className={`text-4xl ${fontStyles.heading} text-purple-400 mb-12 text-center`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              &lt;Projects/&gt;
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((project, index) => (
                <motion.div
                  key={project}
                  className="group relative h-96 bg-black/30 backdrop-blur-sm border-2 border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, type: 'spring' }}
                >
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <motion.div
                    className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                    transition={{ duration: 20, repeat: Infinity }}
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
                    >
                      Advanced web application with modern tech stack implementation
                    </motion.p>

                    <motion.div
                      className="flex gap-2 flex-wrap"
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                    >
                      {['React', 'Next.js', 'Node.js'].map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-tl-full"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 px-4">
          <motion.div
            className="max-w-2xl mx-auto backdrop-blur-xl bg-black/30 p-12 rounded-3xl border-2 border-purple-500/30"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
          >
            <motion.h2
              className={`text-4xl ${fontStyles.heading} text-purple-400 mb-8`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              &lt;Contact/&gt;
            </motion.h2>

            <form className="space-y-6">
              {['Name', 'Email', 'Message'].map((field, index) => (
                <motion.div
                  key={field}
                  className="space-y-2"
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <label className={`block text-white/80 ${fontStyles.mono}`}>
                    Your {field}
                  </label>
                  <motion.div whileHover={{ y: -2 }}>
                    {field === 'Message' ? (
                      <textarea
                        rows="5"
                        className="w-full bg-black/40 border-2 border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                      />
                    ) : (
                      <input
                        type={field === 'Email' ? 'email' : 'text'}
                        className="w-full bg-black/40 border-2 border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </form>
          </motion.div>
        </section>
      </main>





















    </div>
  )
}