import React, { useState } from 'react';
import { Menu, X, Music, Calendar, Mail, Instagram, Twitter, Youtube } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Music', href: '#music', icon: Music },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Booking', href: '#booking', icon: Mail },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tighter text-white">
          DJ<span className="text-cyan-500">UNIQUE</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold tracking-tight text-white flex items-center gap-4"
          >
            <link.icon className="text-cyan-500" />
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => setIsOpen(false)}
          className="mt-8 bg-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest"
        >
          Hire Me
        </button>
        
        <div className="flex gap-6 mt-12 text-neutral-500">
           <Instagram />
           <Twitter />
           <Youtube />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;