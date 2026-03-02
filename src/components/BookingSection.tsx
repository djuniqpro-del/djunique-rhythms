import React, { useState } from 'react';
import { toast } from 'sonner';
import { Send, User, Mail, MessageSquare, Music } from 'lucide-react';

const BookingSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Booking inquiry sent! DJ Unique will contact you shortly.');
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 px-6 bg-neutral-950 overflow-hidden relative">
      {/* Abstract Background Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">SECURE YOUR <span className="text-cyan-500">DATE</span></h2>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
            Interested in booking DJ Unique for your next event? Whether it's a festival, club night, or high-end private party, let's make it unforgettable.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-xl">
                <Music className="text-cyan-500" />
              </div>
              <div>
                <p className="text-white font-bold">Custom Playlists</p>
                <p className="text-neutral-500 text-sm">Tailored sound for your specific audience.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-xl">
                <Send className="text-cyan-500" />
              </div>
              <div>
                <p className="text-white font-bold">Global Travel</p>
                <p className="text-neutral-500 text-sm">Ready to fly to any destination worldwide.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                <User size={14} /> Full Name
              </label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                <Mail size={14} /> Email Address
              </label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                <MessageSquare size={14} /> Event Details
              </label>
              <textarea 
                required
                rows={4}
                placeholder="Tell us about the event: date, location, expected attendance..."
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            <button 
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;