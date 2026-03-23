import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Institute', path: '/jinc-jodhpur-institute' },
  { label: 'Courses', path: '/jinc-jodhpur-courses' },
  { label: 'Faculty', path: '/jinc-jodhpur-faculty' },
  { label: 'Fees', path: '/jinc-jodhpur-fees' },
  { label: 'Admission', path: '/jinc-jodhpur-admission-process' }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-extrabold text-xl text-pink-700 tracking-tight">JINC Jodhpur</Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-3 py-2 rounded-full text-sm font-semibold transition-colors',
                  location.pathname === item.path
                    ? 'bg-pink-600 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-pink-50 hover:text-pink-700'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden rounded-md p-2 text-pink-700 hover:bg-pink-50"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1 border-t border-pink-100 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'block rounded-md px-3 py-2 font-medium',
                location.pathname === item.path ? 'bg-pink-600 text-white' : 'text-gray-700 hover:bg-pink-50'
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
