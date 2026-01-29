import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { siteContent } from '../../data/siteContent';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-brand-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              {/* Replace the src below with the actual JINC Logo URL from Google */}
              <img 
                src="https://img-wrapper.vercel.app/image?url=https://placehold.co/180x60/white/F72685?text=JINC+JODHPUR&font=montserrat" 
                alt="JINC Jodhpur" 
                className="h-12 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {siteContent.header.navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-semibold transition-colors uppercase",
                  isActive(item.path) 
                    ? "text-brand-pink bg-brand-light" 
                    : "text-brand-secondary hover:text-brand-pink hover:bg-brand-light"
                )}
              >
                {item.label}
              </Link>
            ))}

            <a 
              href="https://nprep.in/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button size="sm" className="gap-2">
                <User size={16} /> Login
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-secondary hover:text-brand-pink hover:bg-brand-light focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {siteContent.header.navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-secondary hover:text-brand-pink hover:bg-brand-light"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-2">
              <a href="https://nprep.in/login" target="_blank" rel="noopener noreferrer">
                <Button className="w-full justify-center">Login</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
