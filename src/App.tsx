import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import IntroLoader from './components/IntroLoader';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import AdditionalInfo from './components/AdditionalInfo';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#030303] text-white selection:bg-purple-500/30 selection:text-purple-200">
      <IntroLoader onComplete={() => setLoading(false)} />
      
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedBackground />
            <Navbar />
            
            <main>
              <Hero />
              <Experience />
              <Projects />
              <Skills />
              <Achievements />
              <Education />
              <AdditionalInfo />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Global Styles for smooth scroll */}
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
        body {
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #030303;
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #2a2a2a;
        }
      `}} />
    </div>
  );
}

