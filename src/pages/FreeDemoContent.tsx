import React from 'react';

export const FreeDemoContent = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-6xl aspect-[21/9] bg-gray-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center relative">
            <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000" 
                alt="Demo Banner" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <h1 className="relative z-10 text-4xl font-bold text-gray-800 bg-white/80 px-8 py-4 rounded-lg backdrop-blur-sm">
                FREE DEMO CONTENT
            </h1>
        </div>
      </div>
    </div>
  );
};
