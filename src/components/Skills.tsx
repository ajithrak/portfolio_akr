import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolioData';

const SKILL_IMAGES = ['skill-frontend', 'skill-state', 'skill-styling', 'skill-backend', 'skill-performance'];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50/80 dark:bg-zinc-900/30 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 border-b pb-2 border-gray-200 dark:border-zinc-800">
            Technical Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {SKILLS_DATA.map((cat, idx) => (
              <div key={idx}>
                {SKILL_IMAGES[idx] && (
                  <div className="mb-4 h-36 flex items-center justify-center p-4 bg-[#1d1c22] rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                    <img src={`/images/${SKILL_IMAGES[idx]}.webp`} alt="" loading="lazy" className="w-full h-full object-contain" />
                  </div>
                )}
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 bg-white dark:bg-zinc-800/60 rounded-md text-sm font-medium text-gray-700 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};