import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-14 bg-gradient-to-b from-pink-700 to-pink-900 text-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="rounded-lg bg-white/10 border border-white/20 p-3 text-sm mb-8">
          This is an independent institute information portal. Online preparation is available on NPrep.
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl">JINC Jodhpur</h3>
            <p className="mt-2 text-pink-100 text-sm">
              Nursing coaching institute information portal for students searching coaching options in Jodhpur.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Popular Pages</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li><a className="hover:underline" href="/nursing-coaching-jodhpur">Nursing Coaching in Jodhpur</a></li>
              <li><a className="hover:underline" href="/norcet-coaching-jodhpur">NORCET Coaching in Jodhpur</a></li>
              <li><a className="hover:underline" href="/rrb-nursing-coaching-jodhpur">RRB Nursing Coaching in Jodhpur</a></li>
              <li><a className="hover:underline" href="/student-experience">Student Experience</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl">Online Preparation</h3>
            <p className="mt-2 text-sm text-pink-100">Students can continue online learning at NPrep.</p>
            <a className="inline-block mt-3 rounded-full bg-white text-pink-700 px-4 py-2 font-semibold hover:bg-pink-50" href="https://nprep.in" target="_blank" rel="noopener noreferrer">
              Start Learning on NPrep
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
