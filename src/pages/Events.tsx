import React from 'react';
import { Button } from '../components/ui/Button';

export const Events = () => {
  const events = Array(4).fill({
    brand: "JINC JODHPUR",
    title: "NORCET 9",
    tagline: "JINC HAI TO SELECTION HAI",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000"
  });

  return (
    <div className="py-12 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black mb-8">Upcoming Events</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row h-auto md:h-64 border border-brand-border">
              <div className="md:w-2/5 h-48 md:h-full">
                <img src={event.image} alt="Event" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col justify-center flex-1">
                <span className="text-xs font-bold text-gray-400 tracking-wider mb-2">{event.brand}</span>
                <h2 className="text-2xl font-bold text-black mb-2">{event.title}</h2>
                <p className="text-brand-pink font-medium mb-6">{event.tagline}</p>
                <Button className="w-fit">JOIN NOW</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
