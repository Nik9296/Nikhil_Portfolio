import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { resumeData } from '../data/resume';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Work Experience" subtitle="Professional Journey" />
        
        <div className="grid gap-8">
          {(resumeData as any).experience.map((exp: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative group hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 text-blue-400 font-mono text-xs uppercase tracking-tighter mb-2">
                    <Calendar size={14} /> {exp.duration}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-gray-400 font-medium flex items-center gap-2 mt-1">
                    <Building2 size={16} className="text-gray-600" /> {exp.company}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                    <Briefcase size={24} className="text-blue-500/40" />
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.bullets.map((bullet: string, bIdx: number) => (
                  <li key={bIdx} className="flex gap-4 text-gray-300 font-light leading-relaxed">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
