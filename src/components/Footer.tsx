import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { resumeData } from '../data/resume';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/3">
           <div className="text-2xl font-bold tracking-tighter text-white mb-6">
              NIKHIL <span className="text-purple-500">DIVEKAR</span>
           </div>
           <p className="text-gray-400 font-light mb-8 max-w-xs">
              AI Engineer in the making, focused on building intelligent systems that solve real-world logistical challenges.
           </p>
           <div className="flex gap-4">
              <a href={resumeData.basics.links.find(l => l.name === 'GitHub')?.url} target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"><Github size={20} /></a>
              <a href={resumeData.basics.links.find(l => l.name === 'LinkedIn')?.url} target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"><Linkedin size={20} /></a>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:w-2/3">
           <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <Mail size={18} className="text-purple-500" />
                    <a href={`mailto:${resumeData.basics.email}`}>{resumeData.basics.email}</a>
                 </li>
                 <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <Phone size={18} className="text-purple-500" />
                    <span>{resumeData.basics.phone}</span>
                 </li>
                 <li className="flex items-center gap-3 text-gray-400">
                    <MapPin size={18} className="text-purple-500" />
                    <span>{resumeData.basics.location}</span>
                 </li>
              </ul>
           </div>
           <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-4">
                 <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                 <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                 <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
                 <li><a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a></li>
              </ul>
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
         <div className="text-xs text-gray-500 font-mono tracking-widest uppercase">
            © 2024 Nikhil Divekar — All Rights Reserved
         </div>
         <div className="text-[10px] text-gray-600 font-mono uppercase">
            Built with React + Tailwind v4 + Framer Motion
         </div>
      </div>
    </footer>
  );
};

export default Footer;
