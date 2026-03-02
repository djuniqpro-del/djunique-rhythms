import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, X, Volume2 } from 'lucide-react';

const FloatingPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg"
      >
        <div className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-800 border border-white/5 relative">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/19a0e293-3b40-4dde-8060-813274f956cf/dj-gear-close-up-aa1772fe-1772485607158.webp" 
              alt="Mix Cover" 
              className="w-full h-full object-cover"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-0.5">
                {[1, 2, 3].map(i => (
                  <motion.div 
                    key={i}
                    animate={{ height: [4, 12, 4] }}
                    transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                    className="w-1 bg-cyan-400 rounded-full"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex-grow min-w-0">
            <h4 className="text-white text-sm font-bold truncate">Summer Solstice Mix</h4>
            <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-black">DJ Unique • House</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="text-neutral-400 hover:text-white transition-colors p-2 hidden sm:block">
              <SkipBack size={18} fill="currentColor" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
            >
              {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" className="ml-0.5" />}
            </button>
            <button className="text-neutral-400 hover:text-white transition-colors p-2 hidden sm:block">
              <SkipForward size={18} fill="currentColor" />
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-neutral-600 hover:text-white transition-colors p-2 ml-2"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute -bottom-0 left-8 right-8 h-1 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: isPlaying ? '100%' : '35%' }}
            transition={{ duration: isPlaying ? 3600 : 0.5, ease: "linear" }}
            className="h-full bg-cyan-500 shadow-[0_0_8px_#22d3ee]"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingPlayer;