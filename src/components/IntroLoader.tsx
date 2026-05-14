import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const IntroLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030303]"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo/Initials */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-24 h-24 flex items-center justify-center"
            >
              <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-ping" />
              <div className="absolute inset-0 border border-purple-500/20 rounded-full animate-pulse" />
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-blue-500">
                ND
              </span>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex flex-col items-center"
            >
              <div className="text-xs tracking-[0.3em] font-mono text-purple-400/60 uppercase">
                Initializing AI Core
              </div>
              <div className="mt-2 w-48 h-[1px] bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
