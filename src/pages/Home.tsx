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

      <section className="py-16 px-6 text-center bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">JINC Jodhpur Nursing Coaching Institute</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            JINC Jodhpur is known for providing coaching for government nursing exams such as AIIMS NORCET,
            Railway Nursing Superintendent and other nursing officer recruitments.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-0 mb-3">Courses Offered</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/norcet-coaching-jodhpur" className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">NORCET Coaching</h3>
              <p className="text-gray-600">Classroom-focused coaching support for AIIMS NORCET aspirants in Jodhpur.</p>
            </Link>
            <Link to="/rrb-nursing-coaching-jodhpur" className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">RRB Nursing Coaching</h3>
              <p className="text-gray-600">Railway nursing exam coaching with structured classroom sessions.</p>
            </Link>
            <Link to="/nursing-officer-coaching-jodhpur" className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Nursing Officer Preparation</h3>
              <p className="text-gray-600">Program information for nursing officer exam-focused preparation tracks.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl shadow-md bg-white">
            <h2 className="text-2xl font-semibold mt-0 mb-3">Faculty and Teaching Approach</h2>
            <p className="text-gray-600 leading-relaxed">
              Experienced faculty provide classroom-based teaching, covering important nursing topics and exam-oriented preparation.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white">
            <h2 className="text-2xl font-semibold mt-0 mb-3">Student Support</h2>
            <p className="text-gray-600 leading-relaxed">
              Students receive guidance, doubt support and structured learning through classroom sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-100">
            <h2 className="text-2xl font-semibold mt-0 mb-3">Admission Process</h2>
            <p className="text-gray-600 leading-relaxed">
              Students can enroll by visiting the institute, selecting their course and completing registration.
            </p>

            <ul className="space-y-2 text-gray-600 mt-4">
              <li>• <Link className="text-blue-600 hover:underline" to="/jinc-jodhpur-admission-process">Admission</Link></li>
              <li>• <Link className="text-blue-600 hover:underline" to="/jinc-jodhpur-fees">Fees</Link></li>
              <li>• <Link className="text-blue-600 hover:underline" to="/jinc-jodhpur-institute">Institute Details</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <NprepBlock />
    </>
  );
};
