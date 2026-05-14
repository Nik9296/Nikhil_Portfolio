import React from 'react';
import { motion } from 'motion/react';
import { Download, ChevronRight, Brain, Bot, Network, Eye } from 'lucide-react';
import { resumeData } from '../data/resume';
import { cn } from '../lib/utils';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const floatingBadges = [
    { icon: <Brain size={16} />, label: "Deep Learning", color: "from-purple-500/20 to-purple-500/0" },
    { icon: <Bot size={16} />, label: "AI Agents", color: "from-blue-500/20 to-blue-500/0" },
    { icon: <Eye size={16} />, label: "Computer Vision", color: "from-indigo-500/20 to-indigo-500/0" },
    { icon: <Network size={16} />, label: "NLP", color: "from-cyan-500/20 to-cyan-500/0" },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full animate-pulse delay-700" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full text-center"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          {resumeData.basics.name}<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-300">
             AI Engineer
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <button
            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            Download Resume <Download size={18} />
          </button>
        </motion.div>

        {/* Floating AI Badges */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {floatingBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
              className={cn(
                "flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-gradient-to-br backdrop-blur-xl",
                badge.color
              )}
            >
              <div className="text-purple-400">{badge.icon}</div>
              <span className="text-sm font-medium text-gray-300">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
