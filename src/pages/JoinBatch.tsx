import React from 'react';
import { siteContent } from '../data/siteContent';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const JoinBatch = () => {
  return (
    <div className="py-12 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Join Our Batch Today!</h1>
          <p className="text-lg text-brand-secondary max-w-3xl mx-auto">
            JINC is the most experienced Institute in Nursing in both online and offline segments with the highest selections in Nursing Competition exams.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-border">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-brand-light text-brand-pink rounded-full text-sm font-bold mb-6 w-fit">
                Our Offline Batch
              </div>
              <h2 className="text-3xl font-bold text-black mb-6">Learn Live, Succeed Together</h2>
              <ul className="space-y-4 mb-8">
                {siteContent.joinBatch.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <span className="text-brand-secondary font-medium text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg">Register for Offline Batch</Button>
            </div>
            <div className="h-64 md:h-auto bg-gray-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
                alt="Classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-pink/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
