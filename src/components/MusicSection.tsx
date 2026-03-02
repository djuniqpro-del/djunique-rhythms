import React from 'react';
import { motion } from 'framer-motion';
import { Play, Headphones, Clock, Share2 } from 'lucide-react';

const mixes = [
  {
    title: "Summer Solstice Mix",
    genre: "Deep House",
    duration: "1:24:00",
    cover: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/19a0e293-3b40-4dde-8060-813274f956cf/dj-gear-close-up-aa1772fe-1772485607158.webp",
  },
  {
    title: "Techno Warehouse 04",
    genre: "Techno / Industrial",
    duration: "2:10:00",
    cover: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/19a0e293-3b40-4dde-8060-813274f956cf/concert-crowd-7ba48cdf-1772485608480.webp",
  },
  {
    title: "Afro-Heat Selection",
    genre: "Afrobeats / Amapiano",
    duration: "45:30",
    cover: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/19a0e293-3b40-4dde-8060-813274f956cf/dj-profile-photo-9a55d1aa-1772485614607.webp",
  },
];

const MusicSection = () => {
  return (
    <section id="music" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">LATEST <span className="text-cyan-500">MIXES</span></h2>
            <p className="text-neutral-400 max-w-md">Stream the signature sounds of DJ Unique. Fresh beats updated weekly from the underground and mainstream.</p>
          </div>
          <button className="text-cyan-500 font-bold border-b-2 border-cyan-500 pb-1 hover:text-cyan-400 transition-colors">
            Follow on Mixcloud
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mixes.map((mix, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={mix.cover} 
                  alt={mix.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black p-4 rounded-full shadow-xl">
                    <Play fill="black" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-500">{mix.genre}</span>
                  <div className="flex items-center gap-1 text-neutral-500 text-xs">
                    <Clock size={12} />
                    {mix.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{mix.title}</h3>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Headphones size={16} />
                    <span className="text-sm">2.4k plays</span>
                  </div>
                  <button className="text-neutral-500 hover:text-white transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;