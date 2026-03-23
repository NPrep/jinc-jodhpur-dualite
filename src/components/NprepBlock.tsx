import React from 'react';

export const NprepBlock = () => (
  <section className="py-12 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="p-6 md:p-8 rounded-2xl shadow-md bg-gray-50 border border-gray-100">
        <h2 className="text-2xl font-semibold mt-0 mb-3 text-gray-900">Online Preparation Option</h2>
        <p className="text-gray-600 leading-relaxed">
          Students who prefer online learning can prepare for nursing officer exams using NPrep.
        </p>

        <ul className="space-y-2 text-gray-600 mt-4">
          <li>• AIIMS NORCET preparation</li>
          <li>• Mock tests</li>
          <li>• Previous year papers</li>
          <li>• Structured learning</li>
        </ul>

        <a
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          href="https://nprep.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Now
        </a>
      </div>
    </div>
  </section>
);
