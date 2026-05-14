import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ChevronDown, ChevronUp, Cpu, BarChart, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { resumeData } from '../data/resume';
import { cn } from '../lib/utils';

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Selected Works" subtitle="Case Studies & Research" />

        <div className="space-y-12">
          {resumeData.projects.map((project, index) => {
            const isExpanded = expandedId === index;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={cn(
                  "relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden transition-all duration-700",
                  isExpanded ? "shadow-[0_0_50px_-12px_rgba(139,92,246,0.3)]" : ""
                )}
              >
                <div className="bg-[#0c0c14] rounded-[2.4rem] p-8 md:p-12 relative z-10">
                  <div className="flex flex-col md:flex-row gap-12">
                    {/* Image Area/Visual Placeholder */}
                    <div className="md:w-1/3 aspect-video md:aspect-[4/5] bg-gradient-to-br from-purple-900/40 to-black rounded-[2rem] flex flex-col items-center justify-center border border-white/5 group overflow-hidden">
                       <BarChart className="text-purple-500/40 group-hover:scale-110 transition-transform duration-500" size={64} />
                       <div className="mt-4 text-[10px] font-mono tracking-tighter text-purple-400/30 uppercase">Neural Analysis Visualization</div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-widest leading-none">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.technologies.map(tech => (
                          <div key={tech} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-300 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            {tech}
                          </div>
                        ))}
                      </div>

                      {project.outcome && (
                        <div className="mb-8 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                           <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-2">Key Outcome</span>
                           <p className="text-sm text-gray-300 italic">"{project.outcome}"</p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-4">
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : index)}
                          className="px-8 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-purple-100 transition-colors"
                        >
                          Project Details {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {project.links && project.links.length > 0 && (
                          <div className="flex gap-4">
                            {project.links.map(link => (
                              <a key={link.name} href={link.url} className="p-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all flex items-center gap-2 group/link">
                                <ExternalLink size={20} />
                                <span className="text-xs font-medium opacity-0 group-hover/link:opacity-100 max-w-0 group-hover/link:max-w-[100px] transition-all overflow-hidden whitespace-nowrap">{link.name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-12 pt-12 border-t border-white/5 grid md:grid-cols-2 gap-12">
                           <div>
                              <h4 className="flex items-center gap-2 text-purple-400 font-bold uppercase tracking-widest text-xs mb-6">
                                <MapPin size={14} /> Problem & Approach
                              </h4>
                              <p className="text-gray-400 font-light leading-relaxed">
                                {project.description}
                              </p>
                           </div>
                           <div>
                              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-6">
                                <Cpu size={14} /> Technical Contributions
                              </h4>
                              <ul className="space-y-4">
                                {project.bullets.map((bullet, idx) => (
                                  <li key={idx} className="flex gap-3 text-gray-300">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                    <span className="text-sm font-light italic">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
