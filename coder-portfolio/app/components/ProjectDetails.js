// components/ProjectDetails.js
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiX, FiCalendar, FiGithub, FiUser, FiBriefcase, FiInfo, FiArrowLeft } from 'react-icons/fi';
import { getProjectTypeLabel, getProjectTypeColor } from '../constants/projectsData';

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  mono: "font-['Fira_Code']"
};

const PortfolioBadge = ({ projectType }) => {
  const label = getProjectTypeLabel(projectType);
  const color = getProjectTypeColor(projectType);
  
  // Define color classes based on project type
  const colorClasses = {
    blue: "border-blue-500/30 text-blue-300",
    purple: "border-purple-500/30 text-purple-300",
    green: "border-green-500/30 text-green-300"
  };
  
  return (
    <div className={`absolute top-4 left-4 flex items-center gap-2 bg-black/10 backdrop-blur-sm px-3 py-1 rounded-full border ${colorClasses[color]} text-sm`}>
      <FiInfo className="text-xs" />
      <span>{label}</span>
    </div>
  );
};

const ProjectDetails = ({ project, onClose }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center md:p-4 max-md:h-full"
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-[95rem] w-full bg-slate-900/0 border border-purple-500/30 rounded-xl md:p-8 max-md:px-1 max-md:py-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
      >
        <button
          className="absolute top-4 right-4 text-white/60 hover:text-white"
          onClick={onClose}
        >
          <FiX size={24} />
        </button>

        <div className="space-y-8">
          <PortfolioBadge projectType={project.projectType} />

          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden border border-purple-500/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"

            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          <div className="p-6 w-full bg-black-300/30 rounded-xl border border-purple-500/20 md:flex justify-between">


            <div className="md:w-[68%] max-md:mb-4 flex flex-col gap-4 justify-between">



              <div className="">
                <h5 className={`text-3xl ${fontStyles.heading} text-purple-400 mb-3`}>
                  Overview
                </h5>
                <p className="text-white/80 leading-relaxed">
                  {project.details.purpose} This project showcases advanced full-stack
                  development capabilities including API design, database management, and modern
                  UI implementation. The system features secure authentication, real-time analytics,
                  and responsive design principles.
                </p>
              </div>







              <div className=" px-3 pb-3 flex gap-3">
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







            </div>



            <div className="md:w-[30%] grid grid-cols-1 gap-4 mb-6 p-4 rounded-xl border border-purple-500/20">
              <h4 className={`text-2xl ${fontStyles.heading} text-purple-400 mb-6`}>
                Project Details
              </h4>
              <div className="flex items-center gap-3">
                <FiCalendar className="text-purple-400" />
                <div>
                  <p className="text-white/60 text-sm">Timeline</p>
                  <p className="text-white/90">{project.details.timeline}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiUser className="text-purple-400" />
                <div>
                  <p className="text-white/60 text-sm">My Role</p>
                  <p className="text-white/90">{project.details.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiBriefcase className="text-purple-400" />
                <div>
                  <p className="text-white/60 text-sm">Client</p>
                  <p className="text-white/90">{project.details.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiInfo className="text-purple-400" />
                <div>
                  <p className="text-white/60 text-sm">Status</p>
                  <p className="text-white/90">{project.details.status}</p>
                </div>
              </div>
            </div>







          </div>

          <div className="mt-8">
            <h4 className={`text-2xl ${fontStyles.heading} text-purple-400 mb-6`}>
              Gallery
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
              {project.screenshots.map((ss, index) => {
                const isPortrait = ss.orientation === 'P';
                return (
                  <motion.div
                    key={index}
                    className={`relative rounded-lg overflow-hidden border border-purple-500/20
                      ${isPortrait ? 'row-span-2 aspect-[2/3]' : 'row-span-1 aspect-[4/3]'}
                      group cursor-zoom-in`}
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
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className={`text-white/80 text-sm ${fontStyles.mono}`}>
                        Click to enlarge
                      </span>
                    </div>
                  </motion.div>
                );
              })}





            </div>
            {/* Back Button */}
            <div className="mt-8 flex justify-center">
              <button

                onClick={onClose}
                className="flex items-center gap-2 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-full border border-purple-500/30 transition-all"
              >
                <FiArrowLeft className="text-purple-300" />
                <span className="text-purple-300">Back to Projects</span>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {zoomedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </motion.div>

  );
};

export default ProjectDetails;
