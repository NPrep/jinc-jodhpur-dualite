import React from 'react';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';
import { siteContent } from '../data/siteContent';
import { CheckCircle, ExternalLink } from 'lucide-react';

export const Courses = () => {
  return (
    <>
      <SEOHead 
        title="Nursing Courses - NORCET, CHO, AIIMS" 
        description="Join the best nursing coaching classes for NORCET, CHO, ESIC, and other competitive exams. Online and offline batches available."
        canonicalUrl="/courses"
      />
      
      <div className="py-12 bg-brand-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black">Our Courses</h1>
            <p className="mt-4 text-brand-secondary">Choose the best program for your nursing career</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {siteContent.courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border border-brand-border overflow-hidden hover:shadow-xl transition-all flex flex-col relative group">
                {/* Header */}
                <div className="bg-brand-pink p-6 text-white text-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                   <h3 className="text-2xl font-bold relative z-10">{course.title}</h3>
                   <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium relative z-10">
                     {course.type}
                   </span>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-6 flex-grow">
                    <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm border-b border-gray-100 pb-2">Features</h4>
                    <ul className="space-y-3">
                      {course.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-brand-secondary">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <a href={course.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                        Enroll Now <ExternalLink size={16} />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
