import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { resumeData } from '../data/resume';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Education Timeline */}
          <div>
            <SectionHeading title="Education" subtitle="Academic Path" />
            <div className="space-y-12">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-10 border-l border-white/10"
                >
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] border-4 border-[#030303]" />
                  
                  <div className="flex items-center gap-3 text-purple-400 font-mono text-xs uppercase tracking-tighter mb-2">
                    <Calendar size={14} /> {edu.duration}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                    <GraduationCap size={16} /> {edu.institution}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map(h => (
                       <span key={h} className="text-xs text-gray-500 italic bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                        {h}
                       </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionHeading title="Certifications" subtitle="Professional Validation" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md group hover:border-purple-500/50 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <Award size={20} />
                  </div>
                  <h3 className="text-md font-bold text-white mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    <BookOpen size={12} /> {cert.platform}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Publication Spotlight (if needed here too) */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
               <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Latest Research Publication</h4>
               <p className="text-gray-300 font-light italic text-sm leading-relaxed">
                  "Addressing the City's Resource, Transport and Logistics Challenges" - exploring the intersection of AI and Urban Management.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
