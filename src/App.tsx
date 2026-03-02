import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MusicSection from './components/MusicSection';
import EventSection from './components/EventSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import FloatingPlayer from './components/FloatingPlayer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden">
      <Toaster position="top-center" richColors />
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <MusicSection />
        <EventSection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingPlayer />
    </div>
  );
}

export default App;