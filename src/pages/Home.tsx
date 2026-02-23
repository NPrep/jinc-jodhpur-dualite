import React from 'react';
import { siteContent } from '../data/siteContent';
import { Button } from '../components/ui/Button';
import { BookOpen, Video, FileQuestion, Building2, GraduationCap, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';

export const Home = () => {
  const { home } = siteContent;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-8 h-8 text-brand-pink" />;
      case 'Video': return <Video className="w-8 h-8 text-brand-pink" />;
      case 'FileQuestion': return <FileQuestion className="w-8 h-8 text-brand-pink" />;
      default: return null;
    }
  };

  const schema = {
    "@type": "EducationalOrganization",
    "name": "JINC Jodhpur",
    "description": home.hero.heading,
    "url": "https://jincjodhpur.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteContent.header.address,
      "addressLocality": "Jodhpur",
      "addressRegion": "Rajasthan",
      "postalCode": "342011",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteContent.header.phone,
      "contactType": "customer service"
    }
  };

  return (
    <>
      <SEOHead 
        title="Home - India's Most Trusted Nursing Coaching" 
        description={home.hero.description}
        canonicalUrl="/"
        schema={schema}
      />
      
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 py-12 lg:py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <h2 className="text-blue-100 font-bold tracking-wide uppercase text-sm md:text-base">
                  {home.hero.heading}
                </h2>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                  {home.hero.title}
                </h1>
                <p className="text-lg text-blue-50 leading-relaxed">
                  {home.hero.description}
                </p>
                <p className="text-base md:text-lg font-semibold text-blue-100">{home.hero.hybridModel}</p>
                <p className="text-sm md:text-base font-medium text-blue-100">{siteContent.header.address}</p>
                <div className="pt-4">
                  <a href="https://nprep.in/login" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-950/30">
                      {home.hero.cta}
                    </Button>
                  </a>
                  <p className="mt-3 text-sm text-blue-100">Online classes powered by NPrep</p>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-white/20 bg-white/10 backdrop-blur-sm flex flex-col justify-between p-8">
                  <div className="inline-flex items-center gap-3 bg-white/10 border border-white/30 rounded-full px-4 py-2 w-fit">
                    <div className="w-10 h-10 rounded-full bg-white text-blue-800 flex items-center justify-center font-extrabold">J</div>
                    <div>
                      <p className="font-bold">JINC Jodhpur</p>
                      <p className="text-xs text-blue-100">Nursing Coaching Institute</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/10 p-4 border border-white/20">
                      <Building2 className="w-6 h-6 mb-2 text-blue-100" />
                      <p className="font-semibold">Offline Center</p>
                      <p className="text-sm text-blue-100">Jodhpur classroom batches</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4 border border-white/20">
                      <GraduationCap className="w-6 h-6 mb-2 text-blue-100" />
                      <p className="font-semibold">Live Online</p>
                      <p className="text-sm text-blue-100">NPrep-enabled classes</p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-blue-950/40 p-4 border border-white/20">
                    <p className="font-semibold flex items-center gap-2"><Sparkles className="w-4 h-4" /> Focused Preparation</p>
                    <p className="text-sm text-blue-100 mt-1">Structured daily plan for NORCET, AIIMS, CHO and major nursing competitive exams.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hindi Banner */}
        <section className="bg-brand-pink text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-multiply">
            <img src={home.hindiBanner.image} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {home.hindiBanner.text}
            </h2>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black">Why Choose JINC? | JINC क्यों चुनें?</h2>
              <div className="w-20 h-1 bg-brand-pink mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {home.features.map((feature, idx) => (
                <div key={idx} className="bg-brand-light p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-brand-border flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-brand-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 bg-brand-light mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black">Student Outcomes | चयन परिणाम</h2>
              <div className="w-20 h-1 bg-brand-pink mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {home.outcomes.map((outcome, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-brand-border relative shadow-sm">
                  <p className="text-xs uppercase tracking-wider text-brand-pink font-semibold mb-2">{outcome.metric}</p>
                  <p className="text-2xl font-extrabold text-black mb-3">{outcome.value}</p>
                  <p className="text-brand-secondary text-sm">{outcome.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black">Meet Our Faculty | हमारे शिक्षक</h2>
              <p className="mt-3 text-brand-secondary">Experienced mentors for classroom and online nursing preparation.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-xl border border-brand-border p-6 bg-brand-light">
                  <div className="w-20 h-20 rounded-full bg-brand-pink/20 text-brand-pink font-bold flex items-center justify-center mb-4">Photo</div>
                  <h3 className="text-lg font-bold text-black">Faculty Name {item}</h3>
                  <p className="text-sm text-brand-secondary mt-1">Qualification: M.Sc Nursing / Specialty certification</p>
                  <p className="text-sm text-brand-secondary">Subject: Medical-Surgical Nursing</p>
                  <p className="text-xs text-brand-pink font-medium mt-3">Profile details coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Removed Infrastructure & Stats Section as requested */}
      </div>
    </>
  );
};
