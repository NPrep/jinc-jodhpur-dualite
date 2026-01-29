import React from 'react';

export const SelectedNursingOfficers = () => {
  // Simulating a gallery of successful candidates
  const galleryItems = Array(8).fill(null).map((_, i) => ({
    id: i,
    image: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400&h=400`, // Placeholder
    caption: `NORCET ${8 + (i % 2)}`
  }));

  return (
    <div className="py-12 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black mb-8 border-b border-brand-border pb-4">Selected Nursing Officers</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative aspect-square bg-white rounded-lg overflow-hidden shadow-sm border border-brand-border">
              <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-xl bg-white">
                Candidate Image
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center text-sm font-semibold">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
