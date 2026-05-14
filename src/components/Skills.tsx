import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { resumeData } from '../data/resume';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Technical Arsenal" subtitle="Skills & Frameworks" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative group hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
              
              <h3 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (catIndex * 0.1) + (itemIndex * 0.05) }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-purple-500/10 hover:border-purple-500/40 hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Neural Network Decoration (Abstract) */}
        <div className="mt-20 flex justify-center opacity-20 hover:opacity-40 transition-opacity">
           <svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[0, 50, 100].map((y, i) => (
                <React.Fragment key={i}>
                  <circle cx="20" cy={y} r="3" fill="#8B5CF6" />
                  <circle cx="200" cy={y} r="3" fill="#8B5CF6" />
                  <circle cx="380" cy={y} r="3" fill="#8B5CF6" />
                  <line x1="23" y1={y} x2="197" y2="0" stroke="#8B5CF6" strokeWidth="0.5" />
                  <line x1="23" y1={y} x2="197" y2="50" stroke="#8B5CF6" strokeWidth="0.5" />
                  <line x1="23" y1={y} x2="197" y2="100" stroke="#8B5CF6" strokeWidth="0.5" />
                  <line x1="203" y1="0" x2="377" y2={y} stroke="#8B5CF6" strokeWidth="0.5" />
                  <line x1="203" y1="50" x2="377" y2={y} stroke="#8B5CF6" strokeWidth="0.5" />
                  <line x1="203" y1="100" x2="377" y2={y} stroke="#8B5CF6" strokeWidth="0.5" />
                </React.Fragment>
              ))}
           </svg>
        </div>
      </div>
    </section>
  );
};

export default Skills;
