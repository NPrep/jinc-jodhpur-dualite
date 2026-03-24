import React from 'react';

export const NprepBlock = () => (
  <section className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
    <h2 className="text-2xl font-bold text-blue-900">Online Preparation Option</h2>

    <p className="mt-3 text-gray-700">
      Students who prefer online learning can prepare for nursing officer exams using NPrep.
    </p>

    <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-1">
      <li>AIIMS NORCET preparation</li>
      <li>Mock tests</li>
      <li>Previous year papers</li>
      <li>Structured learning</li>
    </ul>

    <a
      className="mt-4 inline-block font-semibold text-blue-700 hover:underline"
      href="https://nprep.in"
      target="_blank"
      rel="noopener noreferrer"
    >
      Start Learning
    </a>
  </section>
);
