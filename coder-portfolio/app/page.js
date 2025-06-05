'use client'
import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
// ... other imports ...
import UnderConstruction from "./components/UnderConstruction"
// import LoadingScreen from "./components/LoadingScreen"






// Dynamically import heavy components
const Particles = dynamic(() => import("./components/Particles"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
})

const Cursor = dynamic(() => import("./components/Cursor"), {
  ssr: false
})

const Navbar = dynamic(() => import("./components/Navbar"), {
  loading: () => <div className="h-16 bg-black/20 backdrop-blur-sm" />
})

// Dynamically import sections
const Hero = dynamic(() => import("./sections/Hero"))
const About = dynamic(() => import("./sections/About"))
const Skills = dynamic(() => import("./sections/Skills"))
const TechStack = dynamic(() => import("./sections/TechStack"))
const Projects = dynamic(() => import("./sections/Projects"))
const Contact = dynamic(() => import("./sections/Contact"))

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}
// 
// 
// dhsfgjsdhfs
export default function Home() {

  // Enter checking push
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for components
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 0) // Reduced loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen b-black bg-opacity-20 text-gray-300 ${fontStyles.body}`}>
      <UnderConstruction />
      {isLoading ? (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
        </div>
      ) : (
        <>



          <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
            <Particles />
          </Suspense>
          
          <Suspense fallback={null}>
            <Cursor />
          </Suspense>





          <Suspense fallback={<div className="h-16 bg-black/20 backdrop-blur-sm" />}>
            <Navbar />
          </Suspense>

          {/* Main Content */}
          <main className="ml-0 lg:ml-72 pl-0 lg:pl-8 max-lg:w-[100%] overflow-hidden">



            <Suspense fallback={<div className="h-screen" />}>
              <Hero />
            </Suspense>

            <Suspense fallback={<div className="h-screen" />}>
              <About />
            </Suspense>

            <Suspense fallback={<div className="h-screen" />}>
              <Skills />
            </Suspense>

            <Suspense fallback={<div className="h-screen" />}>
              <TechStack />
            </Suspense>

            <Suspense fallback={<div className="h-screen" />}>
              <Projects />
            </Suspense>

            <Suspense fallback={<div className="h-screen" />}>
              <Contact />
            </Suspense>
                        <style jsx global>{`
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          background: #0f0f0f;
        }
        ::-webkit-scrollbar-thumb {
          background: #8d47cf;
          border-radius: 4px;
        }
        .masonry-column {
        background-clip: padding-box;
        width: 100% !important;
      }
            @supports (grid-template-rows: masonry) {
      .auto-rows-[minmax(200px,auto)] {
        grid-template-rows: masonry;
      }
    }
    
    .grid {
      grid-auto-flow: dense;
    }

    @container/image-group (min-width: 300px) {
      .row-span-2 {
        grid-row: span 2;
      }
    }

    
      `}</style>
          </main>
        </>
      )}
    </div>
  )
}