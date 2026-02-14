import React from 'react';
import { siteContent } from '../data/siteContent';
import { Button } from '../components/ui/Button';
import { Bell } from 'lucide-react';

export const VacancyResults = () => {
  return (
    <div className="py-12 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Vacancy Column */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold text-black mb-6 flex items-center gap-2">
              <Bell className="text-brand-pink" /> Vacancy & Results
            </h1>
            
            {siteContent.vacancies.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-brand-border hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-xs font-bold text-brand-pink uppercase tracking-wide">{item.alert}</span>
                    <h3 className="text-xl font-bold text-black mt-1 mb-2">{item.title}</h3>
                    <p className="text-brand-secondary italic text-sm">"{item.quote}"</p>
                  </div>
                  <Button size="sm" variant="outline" className="shrink-0">
                    {item.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar About */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-border sticky top-24">
              <div className="mb-6 flex justify-center">
                 <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center text-brand-pink font-bold text-4xl border-4 border-brand-pink/20">
                    J
                 </div>
              </div>
              <h2 className="text-2xl font-bold text-black mb-2 text-center">JINC JODHPUR</h2>
              <p className="text-brand-secondary text-sm mb-4 text-center">JINC Eductech Pvt. Ltd.</p>
              
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {["Nursing Officer", "Nursing", "10 Year's"].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-brand-light text-brand-secondary text-xs rounded-md">{tag}</span>
                ))}
              </div>

              <p className="text-brand-secondary text-sm leading-relaxed mb-8 text-center">
                JINC is a premier institute for nursing competitive exams. We are dedicated to providing quality education and guidance to aspiring nursing officers.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-brand-border">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-brand-pink">120+</span>
                  <span className="text-xs text-brand-secondary">Courses</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-brand-pink">100K</span>
                  <span className="text-xs text-brand-secondary">Active Students</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
