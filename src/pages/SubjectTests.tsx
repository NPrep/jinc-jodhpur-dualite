import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';

export const SubjectTests = () => {
  return (
    <>
      <SEOHead 
        title="Subject Wise Tests - JINC Jodhpur" 
        description="Practice specific nursing subjects like MSN, OBG, CHN, Pedia, Psychiatry, and more."
        canonicalUrl="/subject-tests"
      />
      <div className="py-12 bg-brand-light min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 border-b border-brand-border pb-4">
            <h1 className="text-3xl font-bold text-black flex items-center gap-3">
              <BookOpen className="text-brand-pink" />
              Subject Wise Tests
            </h1>
            <span className="px-3 py-1 bg-white border border-brand-pink text-brand-pink rounded-full text-sm font-semibold">
              Total ({siteContent.tests.subject.length})
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {siteContent.tests.subject.map((test, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-brand-border hover:shadow-md transition-all flex flex-col justify-between">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 text-xl mb-1">{test.title}</h3>
                  <p className="text-sm text-brand-secondary">Topic specific practice test</p>
                </div>
                <a href={test.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2">
                    Take Test <ExternalLink size={14} />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
