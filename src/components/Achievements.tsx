import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Target } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { resumeData } from '../data/resume';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Impact & Recognition" subtitle="Achievements & Milestones" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/30 transition-all group"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Trophy size={24} />
                </div>
                <span className="text-xs font-mono text-gray-500">{achievement.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extracurriculars */}
        <div className="mt-20">
           <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">
             <Star size={14} className="text-blue-400" /> Extracurricular Activities
           </h4>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {resumeData.extracurricular.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/0 flex flex-col justify-between">
                   <span className="text-gray-300 text-sm font-light leading-snug">{item.activity}</span>
                   <span className="text-[10px] font-mono text-blue-400 mt-4">{item.date}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
