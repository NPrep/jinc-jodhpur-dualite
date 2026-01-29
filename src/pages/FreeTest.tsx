import React from 'react';
import { FileQuestion, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';

export const FreeTest = () => {
  return (
    <>
      <SEOHead 
        title="PYQ - Previous Year Questions - JINC Jodhpur" 
        description="Practice with Free Previous Year Question Papers for RRB Nursing Officer exams."
        canonicalUrl="/freetest"
      />
      <div className="py-12 bg-brand-light min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 border-b border-brand-border pb-4">
            <h1 className="text-3xl font-bold text-black flex items-center gap-3">
              <FileQuestion className="text-brand-pink" />
              Previous Year Questions (PYQ)
            </h1>
            <span className="px-3 py-1 bg-white border border-brand-pink text-brand-pink rounded-full text-sm font-semibold">
              Total ({siteContent.tests.pyq.length})
            </span>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden">
            <div className="p-6 bg-brand-pink/5 border-b border-brand-border">
              <h2 className="text-xl font-bold text-brand-pink">RRB Previous Year Questions</h2>
              <p className="text-brand-secondary text-sm">Practice with actual exam questions to boost your preparation.</p>
            </div>
            <div className="divide-y divide-gray-100">
              {siteContent.tests.pyq.map((test, idx) => (
                <div key={idx} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{test.title}</h3>
                    <p className="text-sm text-gray-500">Check out this test on NPrep</p>
                  </div>
                  <a href={test.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 whitespace-nowrap">
                      Start Test <ExternalLink size={14} />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
