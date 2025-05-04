'use client'
import { useState, useEffect, useRef } from 'react'
// ... other imports ...
import Cursor from "./components/Cursor"
import Particles from "./components/Particles"
import UnderConstruction from "./components/UnderConstruction"
import LoadingScreen from "./components/LoadingScreen"

import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for components
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Adjust this time as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen b-black bg-opacity-20 text-gray-300 ${fontStyles.body}`}>
      {/* <UnderConstruction /> */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Particles />
          <Cursor />
          <Navbar />

          {/* Main Content */}
          <main className="ml-0 lg:ml-72 pl-0 lg:pl-8 max-lg:w-[100%] overflow-hidden ">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <Contact />
          </main>
        </>
      )}
    </div>
  )
}