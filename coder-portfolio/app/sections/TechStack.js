import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TechStackModal from '../components/TechStackModal'
import { skillsData } from '../constants/skillsData'

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

// Function to determine skill level label
const getSkillLevelLabel = (level) => {
  if (level <= 20) return 'Novice'
  if (level <= 35) return 'Beginner'
  if (level <= 65) return 'Intermediate'
  if (level <= 85) return 'Advanced'
  return 'Expert'
}

const TechStack = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    if (skill.url) {
      setSelectedSkill(skill);
      setModalOpen(true);
    }
  };

  return (
    <div>
      <section id="techstack" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl ${fontStyles.heading} text-purple-400 mb-12 text-center`}>
            &lt;Tech Stack/&gt;
          </h2>

          <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
                          initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
          >
            {skillsData.map((skill, index) => (
              <motion.button
                key={skill.name}
                type="button"
                onClick={() => handleSkillClick(skill)}
                className="p-6 bg-black/30 backdrop-blur-sm border-2 border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all group relative overflow-hidden w-full text-left"
              >
                {/* Icon with respective color */}
                <div className={`${skill.color} text-4xl mb-4`}>
                  <skill.icon />
                </div>

                {/* Skill name */}
                <h3 className={`text-xl font-semibold text-white/90 ${fontStyles.heading}`}>
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="h-1 bg-black/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <span className={`${fontStyles.mono} text-purple-400 text-sm mt-2 block`}>
                    {skill.level}% - {getSkillLevelLabel(skill.level)}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
      <TechStackModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        techName={selectedSkill?.name}
        techUrl={selectedSkill?.url}
        techIcon={selectedSkill?.icon}
        techDescription={selectedSkill?.description}
      />
    </div>
  )
}

export default TechStack