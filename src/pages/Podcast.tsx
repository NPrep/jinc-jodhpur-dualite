import React from 'react';
import { Button } from '../components/ui/Button';
import { Mic } from 'lucide-react';

export const Podcast = () => {
  return (
    <div className="py-12 bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center py-20">
          <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center mb-8 animate-pulse shadow-lg shadow-brand-pink/50">
            <Mic size={40} />
          </div>
          <h2 className="text-brand-pink font-bold tracking-widest text-lg mb-2">JINC PODCAST</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">WISDOM WITH VISION</h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            Join Akki Sir as he shares insights from Kashmir to Kanyakumari. Daily tips for success, motivation, and life lessons. #shorts
          </p>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none px-12">
              Click Here
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
