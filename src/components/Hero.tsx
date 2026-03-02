import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/19a0e293-3b40-4dde-8060-813274f956cf/dj-hero-bg-5de69fe9-1772485607364.webp')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            Available for International Tours
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-4 leading-none">
            DJ <span className="text-cyan-500">UNIQUE</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Revolutionizing the soundscape. Experience the ultimate fusion of House, Techno, and Afrobeats.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-transform hover:scale-105">
            <Play size={20} fill="currentColor" />
            Listen Latest Mix
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 text-white px-8 py-4 rounded-full font-bold transition-transform hover:bg-neutral-800">
            <Calendar size={20} />
            View Tour Dates
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 cursor-pointer hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;