import React from 'react';
import { siteContent } from '../data/siteContent';
import { Button } from '../components/ui/Button';
import { Gift } from 'lucide-react';

export const OffersAlters = () => {
  return (
    <div className="py-12 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black mb-8 flex items-center gap-3">
          <Gift className="text-brand-pink" /> Offers & Alerts
        </h1>
        
        <div className="grid gap-8">
          {siteContent.offers.map((offer, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-brand-pink flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-brand-light text-brand-pink text-xs font-bold rounded-full mb-3 uppercase">
                  {offer.title}
                </span>
                <h2 className="text-2xl font-bold text-black mb-2">{offer.subtitle}</h2>
                <p className="text-brand-secondary">{offer.description}</p>
              </div>
              <a href={offer.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="whitespace-nowrap">
                  {offer.buttonText}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
