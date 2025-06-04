import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiX, FiCalendar, FiUser, FiBriefcase, FiInfo, FiArrowLeft } from 'react-icons/fi';

import Masonry from 'react-masonry-css';
const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
};

const projectsData = [
  {
    id: 1,
    title: "LinkTweak (Portfolio Project)",
    description: "URL shortening tool demonstration",
    tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    image: "/projects/linktweak/linktweak-01.png",
    liveUrl: "#",
    repoUrl: "#",
    details: {
      timeline: "Feb 2024 - Apr 2024",
      role: "Full-stack Developer",
      client: "Personal Project",
      status: "Completed",
      purpose: "Demonstrates full-stack development capabilities with modern web technologies",
      features: [
        "Custom URL shortening",
        "Analytics dashboard",
        "User authentication",
        "QR code generation"
      ]
    },
    screenshots: [
      { path: "/projects/linktweak/linktweak-02.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-08.jpg", orientation: "P" },
      { path: "/projects/linktweak/linktweak-03.png", orientation: "L" },

      { path: "/projects/linktweak/linktweak-04.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-05.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-06.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-09.jpg", orientation: "P" },
      { path: "/projects/linktweak/linktweak-07.png", orientation: "L" },
      // ...
    ]
  }
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  // Add state for zoomed image
  const [zoomedImage, setZoomedImage] = useState(null);
  // Add orientation to screenshots data
  const enhancedProjectsData = projectsData.map(project => ({
    ...project,
    screenshots: project.screenshots.map((ss, index) => ({
      path: ss,
      orientation: index % 2 === 0 ? 'L' : 'P' // Example logic, adjust based on actual images
    }))
  }));

  const PortfolioBadge = () => (
    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30 text-purple-300 text-sm">
      <FiInfo className="text-xs" />
      <span>Portfolio Demonstration</span>
    </div>
  );
  // Masonry breakpoint columns
  const breakpointColumnsObj = {
    default: 3,
    1280: 3,
    1024: 2,
    768: 1
  };












  return (
    <section id="projects" className="min-h-screen py-20 px-4">














      <motion.h2
        className={`text-4xl ${fontStyles.heading} text-purple-400 mb-12 text-center`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        &lt;Projects/&gt;
      </motion.h2>















      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="relative rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={() => setSelectedProject(project)}
          >
            <PortfolioBadge />

            <div className="relative h-64 bg-black/50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="p-6 bg-gradient-to-b from-black/80 to-purple-900/5">
              <h3 className={`text-2xl ${fontStyles.heading} text-purple-300 mb-2`}>
                {project.title}
              </h3>
              <p className="text-white/80">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>






















      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center md:p-4 max-md:h-full"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-[95rem] w-full bg-black border border-purple-500/30 rounded-xl md:p-8 max-md:px-1 max-md:py-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <FiX size={24} />
              </button>

              <div className="space-y-8">
                <PortfolioBadge />

                {/* Project Cover Image */}
                <div className="relative h-72 md:h-96 rounded-xl overflow-hidden borderborder-purple-500/20">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>













                {/* Project Details Box */}
                <div className="p-6 w-full bg-black-300/30 rounded-xl border border-purple-500/20 md:flex justify-between">




                  {/* Project Overview */}
                  <div className="md:w-[68%] max-md:mb-6 bgblue-300/30 rounded-xl borderborder-purple-500/20">
                    <h5 className={`text-3xl ${fontStyles.heading} text-purple-400 mb-3`}>
                      Overview
                    </h5>
                    <p className="text-white/80 leading-relaxed">
                      {selectedProject.details.purpose} This project showcases advanced full-stack
                      development capabilities including API design, database management, and modern
                      UI implementation. The system features secure authentication, real-time analytics,
                      and responsive design principles.
                    </p>
                  </div>





                  <div className="md:w-[30%] grid grid-cols-1 md:grid-cols gap-4 mb-6 p-4 bgyellow-300/30 rounded-xl border border-purple-500/20">
                    <h4 className={`text-2xl ${fontStyles.heading} text-purple-400 mb-6`}>
                      Project Details
                    </h4>
                    <div className="flex items-center gap-3">
                      <FiCalendar className="text-purple-400" />
                      <div>
                        <p className="text-white/60 text-sm">Timeline</p>
                        <p className="text-white/90">{selectedProject.details.timeline}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiUser className="text-purple-400" />
                      <div>
                        <p className="text-white/60 text-sm">My Role</p>
                        <p className="text-white/90">{selectedProject.details.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiBriefcase className="text-purple-400" />
                      <div>
                        <p className="text-white/60 text-sm">Client</p>
                        <p className="text-white/90">{selectedProject.details.client}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiInfo className="text-purple-400" />
                      <div>
                        <p className="text-white/60 text-sm">Status</p>
                        <p className="text-white/90">{selectedProject.details.status}</p>
                      </div>
                    </div>
                  </div>












                </div>














                {/* Image Gallery */}
                <div className="mt-8">
                  <h4 className={`text-2xl ${fontStyles.heading} text-purple-400 mb-6`}>
                    Gallery
                  </h4>

                  <div
                    onClick={() => setZoomedImage(ss.path)}
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
                    {selectedProject.screenshots.map((ss, index) => {
                      const isPortrait = ss.orientation === 'P';
                      return (
                        <motion.div
                          key={index}
                          className={`
            relative rounded-lg overflow-hidden border border-purple-500/20
            ${isPortrait ? 'row-span-2' : 'row-span-1'}
            ${isPortrait ? 'aspect-[2/3]' : 'aspect-[4/3]'}
            group cursor-zoom-in
          `}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setZoomedImage(ss.path);
                          }}
                        >
                          <Image
                            src={ss.path}
                            alt={`Screenshot ${index + 1}`}
                            fill
                            className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white/80 text-sm ${fontStyles.mono}">
                              Click to enlarge
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Back Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-full border border-purple-500/30 transition-all"
                  >
                    <FiArrowLeft className="text-purple-300" />
                    <span className="text-purple-300">Back to Projects</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
      {zoomedImage && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          <Image
            src={zoomedImage}
            alt="Zoomed view"
            fill
            className="object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setZoomedImage(null)}
          >
            <FiX size={32} />
          </button>
        </div>
      )}
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
    </section>
  );
};

export default Projects;