import React from 'react';
import { siteContent } from '../../data/siteContent';
import { Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
             {/* Logo in Footer */}
            <div className="mb-6">
               <img 
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x50/111827/F72685?text=JINC+JODHPUR&font=montserrat" 
                alt="JINC Jodhpur" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-brand-pink flex-shrink-0" />
                <p>{siteContent.header.phone}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-pink">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/courses" className="hover:text-brand-pink transition-colors">Courses</a></li>
              <li><a href="/freetest" className="hover:text-brand-pink transition-colors">PYQ</a></li>
              <li><a href="/blog" className="hover:text-brand-pink transition-colors">Blog</a></li>
              <li><a href="/subject-tests" className="hover:text-brand-pink transition-colors">Subject Tests</a></li>
              <li><a href="/mock-tests" className="hover:text-brand-pink transition-colors">Mock Tests</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-pink">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              JINC is India's premier nursing coaching institute, dedicated to shaping the future of nursing professionals with top-notch education and guidance.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
