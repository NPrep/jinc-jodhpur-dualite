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
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-gray-900">JINC Jodhpur</Link>
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn('px-3 py-2 rounded-md text-sm', location.pathname === item.path ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100')}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen((v) => !v)}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1 border-t">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
