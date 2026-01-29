import React from 'react';
import { siteContent } from '../data/siteContent';

export const OurTeam = () => {
  return (
    <div className="py-12 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Meet our team members</h1>
          <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
            Meet our core team members who are working day and night for your success in Nursing Career
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black border-l-4 border-brand-pink pl-4 mb-8">
            OUR TEAM <span className="text-brand-secondary font-normal ml-2">/ JINC Best Faculty</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.team.members.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-brand-border">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center border-t border-brand-border">
                  <h3 className="text-xl font-bold text-black">{member.name}</h3>
                  <p className="text-brand-pink font-medium mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
