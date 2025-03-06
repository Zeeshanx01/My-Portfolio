'use client'
import Cursor from "./components/Cursor"
import Particles from "./components/Particles"
import { ParallaxProvider } from "react-scroll-parallax";
 
import { Parallax } from "react-scroll-parallax"

export default function Home() {
  return (
    <ParallaxProvider>

      <div className="relative h-screen bg-black overflow-hidden">

        <Particles />
        <Cursor />
        <Parallax speed={-10} />
        <Parallax speed={10} />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-cyber-purple">
            Welcome to My Portfolio
          </h1>
        </div>
      </div>
    </ParallaxProvider>
  )
}
