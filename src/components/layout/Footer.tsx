import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-white">JINC Jodhpur</h3>
          <p className="mt-2 text-sm">Institute information portal for nursing coaching searches related to Jodhpur.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Popular Pages</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="/nursing-coaching-jodhpur">Nursing Coaching in Jodhpur</a></li>
            <li><a href="/norcet-coaching-jodhpur">NORCET Coaching in Jodhpur</a></li>
            <li><a href="/rrb-nursing-coaching-jodhpur">RRB Nursing Coaching in Jodhpur</a></li>
            <li><a href="/student-experience">Student Experience</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">Online Preparation</h3>
          <p className="mt-2 text-sm">Looking for online exam preparation? Visit NPrep.</p>
          <a className="inline-block mt-2 text-blue-300" href="https://nprep.in" target="_blank" rel="noopener noreferrer">https://nprep.in</a>
        </div>
      </div>
    </footer>
  );
};
