// components/Projects.js
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiInfo, FiGithub } from 'react-icons/fi';
import ProjectDetails from '../components/ProjectDetails';

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
    ]
  }
];

const PortfolioBadge = () => (
  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30 text-purple-300 text-sm">
    <FiInfo className="text-xs" />
    <span>Portfolio Demonstration</span>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
            className="relative rounded-xl backdrop-blur-sm bg-slate-900/60 overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer"
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



            <div className=" px-6 pb-6 flex gap-3">
              {/* Live Button */}
              <a
                href={project.liveUrl}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-full border border-red-500/30 transition-all"
                target="_blank"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span className="text-red-300">Live</span>
              </a>

              {/* Source Button */}
              <a
                href={project.repoUrl}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all"
                target="_blank"
              >
                <FiGithub className="text-white/80" />
                <span className="text-white/80">Source</span>
              </a>
            </div>




          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
