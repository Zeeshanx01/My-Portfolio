import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaCode, FaStackOverflow } from 'react-icons/fa';






const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}






const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const sections = ['home', 'about', 'skills', 'techstack', 'projects', 'contact']
  const [activeSection, setActiveSection] = useState('home')
  const currentYear = new Date().getFullYear();


  const handleRedirect = () => {
    window.open("https://github.com/Zeeshanx01", "_blank", "noopener,noreferrer");
  };

  const handleSourceCode = () => {
    window.open("https://github.com/Zeeshanx01/LinkTweak", "_blank", "noopener,noreferrer");
  };

  const lastScrollY = useRef(0)

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
    <div>





















      {/* Mobile Navigation Menu Button */}
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4 overflow-hidden" >
                  {/* <img src="/Hero/profile.jpg" alt="" /> */}
                  <img src={process.env.NEXT_PUBLIC_PROFILE_PIC} alt="" />
                </div>
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
              <div
                className="mt-8  space-y-3"

              >




                {/* Github Button */}
                <div className="duration-500 flex space-x-4 py-2">

                  <button
                    onClick={handleRedirect}
                    className="duration-500 bg-gradient-to-br from-gray-800/60 to-gray-700/60 rounded-full px-6 py-3 hover:from-gray-700/60 hover:to-gray-800/60 transition-all hover:shadow-glow flex items-center space-x-2 relative overflow-hidden group"
                  >
                    <FaGithub className="duration-500 h-6 w-6 group-hover:rotate-45 transition-transform" />
                    <span className="duration-500 text-sm group-hover:translate-x-1 transition-transform">Visit Github</span>
                    <span className="duration-500 absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </button>


                </div>





                {/* Glowing Social Links */}
                <div className="duration-500 flex space-x-6">
                  <a
                    href="https://linkedin.com/in/zeeshan-munir-b073a51b9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-300 text-gray-400 hover:text-[#0A66C2] transition-colors 
                          p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:shadow-glow"
                  >
                    <FaLinkedin className="duration-100 h-6 w-6" />
                  </a>

                  <a
                    href="mailto:zeeshan.x01000@gmail.com"
                    className="duration-300 text-gray-400 hover:text-white transition-colors
                          p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:shadow-glow"
                  >
                    <FaEnvelope className="duration-100 h-6 w-6" />
                  </a>

                  <a
                    href="https://stackoverflow.com/users/20757870/zeeshan-munir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-300 text-gray-400 hover:text-orange-500 transition-colors
                          p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:shadow-glow"
                  >
                    <FaStackOverflow className="duration-100 h-6 w-6" />
                  </a>

                  <a
                    href="https://instagram.com/zeeshan_x01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-300 text-gray-400 hover:text-pink-500 transition-colors
                          p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:shadow-glow"
                  >
                    <FaInstagram className="duration-100 h-6 w-6" />
                  </a>
                </div>






                {/* Copyright */}
                <div className="duration-300 border-t border-gray-800 pt-4 pb-0 px-20 text-center">
                  <p className="duration-300 text-xs text-gray-400 hover:text-indigo-400 transition-colors">
                    &copy; {currentYear} Zeeshan Munir. All rights reserved.
                  </p>
                  <p className="duration-300 mt-1 text-xs text-gray-400 hover:text-purple-400 transition-colors">
                    Built with ❤️ using NextJS, Tailwind CSS, and Framer Motion.
                  </p>
                </div>





              </div>



            </div>
          </motion.div>
        )}
      </AnimatePresence>














      {/* Sticky Bottom Bar (Mobile Only) */}
      <motion.div
        className="fixed lg:hidden bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-sm border-t border-white/10 z-30"
        animate={{ y: isScrollingDown ? 100 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex justify-around p-4 mr-10">
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

              whileHover={{ rotate: 0, scale: 1.05 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4 overflow-hidden" >
              {/* <img src="/Hero/profile.jpg" alt="" /> */}
              <img src={process.env.NEXT_PUBLIC_PROFILE_PIC} alt="" />

            </motion.div>


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











            {/* Github Button */}
            <div className="duration-500 flex space-x-4 py-2">

              <button
                onClick={handleRedirect}
                className="duration-500 bg-gradient-to-br from-gray-800/60 to-gray-700/60 rounded-full px-6 py-3 hover:from-gray-700/60 hover:to-gray-800/60 transition-all hover:shadow-glow flex items-center space-x-2 relative overflow-hidden group"
              >
                <FaGithub className="duration-500 h-6 w-6 group-hover:rotate-45 transition-transform" />
                <span className="duration-500 text-sm group-hover:translate-x-1 transition-transform">Visit Github</span>
                <span className="duration-500 absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>


            </div>





            {/* Glowing Social Links */}
            <div className="duration-500 flex space-x-6">
              <a
                href="https://linkedin.com/in/zeeshan-munir-b073a51b9"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 text-gray-400 hover:text-[#0A66C2] transition-colors 
                          p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:shadow-glow"
              >
                <FaLinkedin className="duration-100 h-6 w-6" />
              </a>

              <a
                href="mailto:zeeshan.x01000@gmail.com"
                className="duration-300 text-gray-400 hover:text-white transition-colors
                          p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:shadow-glow"
              >
                <FaEnvelope className="duration-100 h-6 w-6" />
              </a>

              <a
                href="https://stackoverflow.com/users/20757870/zeeshan-munir"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 text-gray-400 hover:text-orange-500 transition-colors
                          p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:shadow-glow"
              >
                <FaStackOverflow className="duration-100 h-6 w-6" />
              </a>

              <a
                href="https://instagram.com/zeeshan_x01"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 text-gray-400 hover:text-pink-500 transition-colors
                          p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:shadow-glow"
              >
                <FaInstagram className="duration-100 h-6 w-6" />
              </a>
            </div>






            {/* Copyright */}
            {/* <div className="duration-300 border-t border-gray-800 pt-4 pb-0 text-center">
                <p className="duration-300 text-xs text-gray-400 hover:text-indigo-400 transition-colors">
                  &copy; {currentYear} Zeeshan Munir. All rights reserved.
                </p>
                <p className="duration-300 mt-1 text-xs text-gray-400 hover:text-purple-400 transition-colors">
                  Built with ❤️ using NextJS, Tailwind CSS, and Framer Motion.
                </p>
              </div> */}









          </motion.div>
        </div>
      </motion.nav>


    </div>
  )
}

export default Navbar