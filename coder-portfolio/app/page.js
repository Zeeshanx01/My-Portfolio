'use client'
import Cursor from "./components/Cursor"
import Particles from "./components/Particles"


export default function Home() {
  return (
    <div className="min-h-screen bgblack overflow-x-hidden">
      <Particles />
      <Cursor />
      
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-6 backdrop-blur-xl bg-black/30 px-8 py-4 mb-20 rounded-full border border-white/10 shadow-2xl shadow-purple-500/10">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-purple-400 text-lg font-medium transition-all hover:scale-105"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="backdrop-blur-2xl bg-black/40 p-12 rounded-3xl border-2 border-purple-500/30 relative overflow-hidden group">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10" />
          
          {/* Animated terminal */}
          <div className="space-y-6">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            &lt;_ Zeeshan Portfolio
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-1 w-24 bg-purple-500/50 animate-pulse" />
              <p className="text-white/80 text-xl font-mono">
                Initializing system...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 mt-10">
        <div className="max-w-6xl mx-auto backdrop-blur-xl bg-black/30 p-12 rounded-3xl border-2 border-purple-500/30 relative group">
          <div className="absolute -inset-1 bg-purple-500/10 blur-3xl" />
          <h2 className="text-4xl font-bold text-purple-400 mb-8">&lt;About/&gt;</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-white/80 leading-relaxed">
                Full-stack developer specializing in creating immersive digital experiences. 
                5+ years of experience bridging design and technology.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all">
                  Download CV
                </button>
                <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 transition-all">
                  View Certifications
                </button>
              </div>
            </div>
            <div className="relative h-64 w-64 mx-auto">
              <div className="absolute inset-0 bg-purple-500/10 blur-2xl" />
              <div className="relative h-full w-full bg-black/50 backdrop-blur-sm rounded-2xl border-2 border-purple-500/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-400 mb-12 text-center">&lt;Tech Stack/&gt;</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'Three.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'].map((skill) => (
              <div 
                key={skill}
                className="p-6 bg-black/30 backdrop-blur-sm border-2 border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group"
              >
                <div className="text-purple-400 text-4xl mb-4 opacity-80 group-hover:opacity-100">
                  {/* Add icon here */}
                  ⚡
                </div>
                <h3 className="text-xl font-semibold text-white/90">{skill}</h3>
                <p className="text-white/60 text-sm mt-2">Expert Level</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-400 mb-12 text-center">&lt;Projects/&gt;</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div 
                key={project}
                className="group relative h-96 bg-black/30 backdrop-blur-sm border-2 border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all"
              >
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 relative z-10">
                  <div className="text-purple-400 text-2xl mb-4">Project {project}</div>
                  <p className="text-white/80 mb-4">Advanced web application with modern tech stack implementation</p>
                  <div className="flex gap-2 flex-wrap">
                    {['React', 'Next.js', 'Node.js'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto backdrop-blur-xl bg-black/30 p-12 rounded-3xl border-2 border-purple-500/30">
          <h2 className="text-4xl font-bold text-purple-400 mb-8">&lt;Contact/&gt;</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-white/80">Your Name</label>
              <input
                type="text"
                className="w-full bg-black/40 border-2 border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-white/80">Email Address</label>
              <input
                type="email"
                className="w-full bg-black/40 border-2 border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-white/80">Message</label>
              <textarea
                rows="5"
                className="w-full bg-black/40 border-2 border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}