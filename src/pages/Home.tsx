import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { NprepBlock } from '../components/NprepBlock';

export const Home = () => {
  return (
    <>
      <SEOHead
        title="JINC Jodhpur Nursing Coaching Institute"
        description="JINC Jodhpur institute information portal for nursing coaching, courses, admission, and exam overview pages."
        canonicalUrl="/"
      />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">JINC Jodhpur Nursing Coaching Institute</h1>

        <p className="text-gray-700 leading-relaxed">
          JINC Jodhpur is known for providing coaching for government nursing exams such as AIIMS NORCET,
          Railway Nursing Superintendent and other nursing officer recruitments.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">Courses Offered</h2>
          <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
            <li><Link className="text-blue-700 hover:underline" to="/norcet-coaching-jodhpur">NORCET Coaching</Link></li>
            <li><Link className="text-blue-700 hover:underline" to="/rrb-nursing-coaching-jodhpur">RRB Nursing Coaching</Link></li>
            <li><Link className="text-blue-700 hover:underline" to="/nursing-officer-coaching-jodhpur">Nursing Officer Exam Preparation</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">Faculty and Teaching Approach</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Experienced faculty provide classroom-based teaching, covering important nursing topics and exam-oriented preparation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">Student Support</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Students receive guidance, doubt support and structured learning through classroom sessions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">Admission Process</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Students can enroll by visiting the institute, selecting their course and completing registration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">Useful Links</h2>
          <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
            <li><Link className="text-blue-700 hover:underline" to="/jinc-jodhpur-admission-process">Admission</Link></li>
            <li><Link className="text-blue-700 hover:underline" to="/jinc-jodhpur-fees">Fees</Link></li>
            <li><Link className="text-blue-700 hover:underline" to="/jinc-jodhpur-institute">JINC Jodhpur Institute Details</Link></li>
          </ul>
        </section>

        <NprepBlock />
      </div>
    </>
  );
};
