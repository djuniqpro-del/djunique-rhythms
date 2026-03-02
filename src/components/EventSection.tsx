import React from 'react';
import { Calendar, MapPin, Ticket } from 'lucide-react';

const events = [
  {
    date: "AUG 15",
    venue: "Electric Sky Rooftop",
    city: "Addis Ababa, ET",
    status: "Tickets Available",
  },
  {
    date: "SEP 02",
    venue: "Underground Bass Hall",
    city: "Nairobi, KE",
    status: "Limited Entry",
  },
  {
    date: "SEP 18",
    venue: "Neon Garden Festival",
    city: "Dubai, UAE",
    status: "Sold Out",
  },
  {
    date: "OCT 12",
    venue: "The Warehouse Project",
    city: "London, UK",
    status: "Presale Open",
  },
];

const EventSection = () => {
  return (
    <section id="events" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">TOUR <span className="text-cyan-500">DATES</span></h2>
          <p className="text-neutral-400">Catch DJ Unique live at these upcoming cities and venues.</p>
        </div>

        <div className="space-y-4">
          {events.map((event, idx) => (
            <div 
              key={idx}
              className="flex flex-col md:flex-row items-center justify-between p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-cyan-500/50 transition-colors gap-6"
            >
              <div className="flex items-center gap-8 w-full md:w-auto">
                <div className="text-center min-w-[60px]">
                  <p className="text-cyan-500 font-black text-xl leading-none">{event.date.split(' ')[1]}</p>
                  <p className="text-neutral-500 text-xs font-bold">{event.date.split(' ')[0]}</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{event.venue}</h3>
                  <div className="flex items-center gap-1 text-neutral-400 text-sm">
                    <MapPin size={14} className="text-cyan-500" />
                    {event.city}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto gap-4">
                <span className={`text-xs font-bold uppercase tracking-widest ${event.status === 'Sold Out' ? 'text-red-500' : 'text-neutral-500'}`}>
                  {event.status}
                </span>
                <button 
                  disabled={event.status === 'Sold Out'}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                    event.status === 'Sold Out' 
                    ? 'bg-neutral-800 text-neutral-600 cursor-not-allowed' 
                    : 'bg-white text-black hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  <Ticket size={18} />
                  Get Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm">For private bookings or corporate events, please use the contact form below.</p>
        </div>
      </div>
    </section>
  );
};

export default EventSection;