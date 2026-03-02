import React from 'react';
import { Instagram, Twitter, Youtube, Facebook, Headphones } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-black tracking-tighter text-white mb-6 block">
              DJ<span className="text-cyan-500">UNIQUE</span>
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Setting the vibe for the modern era. From underground bunkers to stadium stages, DJ Unique brings the energy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-cyan-500 transition-colors group">
                <Instagram size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-cyan-500 transition-colors group">
                <Twitter size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-cyan-500 transition-colors group">
                <Youtube size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-cyan-500 transition-colors group">
                <Facebook size={18} className="group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#music" className="hover:text-cyan-500 transition-colors">Listen Mixes</a></li>
              <li><a href="#events" className="hover:text-cyan-500 transition-colors">Tour Schedule</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Merchandise</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Resources</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Tech Rider</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Booking FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Stay Connected</h4>
            <p className="text-neutral-500 text-sm mb-4">Join the mailing list for exclusive tracks and VIP tour access.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email"
                className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-cyan-500"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-cyan-500 hover:text-white transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2024 DJ UNIQUE RECORDS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            DESIGNED BY <span className="text-white">LOOM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;