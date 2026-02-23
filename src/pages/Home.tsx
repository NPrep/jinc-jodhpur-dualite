import React from 'react';
import { siteContent } from '../data/siteContent';
import { Button } from '../components/ui/Button';
import { BookOpen, Video, FileQuestion } from 'lucide-react';
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
        {/* Hero Section - Using Primary Background Pink */}
        <section className="bg-brand-light py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <h2 className="text-brand-pink font-bold tracking-wide uppercase text-sm md:text-base">
                  {home.hero.heading}
                </h2>
                <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
                  {home.hero.title}
                </h1>
                <p className="text-lg text-brand-secondary leading-relaxed">
                  {home.hero.description}
                </p>
                <div className="pt-4">
                  <a href="https://nprep.in/login" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-pink-200">
                      {home.hero.cta}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                  <img 
                    src={home.hero.image} 
                    alt="Nursing Education" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hindi Banner */}
        <section className="bg-brand-pink text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-multiply">
            <img loading="lazy" src={home.hindiBanner.image} alt="Background" className="w-full h-full object-cover" />
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
              <h2 className="text-3xl font-bold text-black">JINC-Jodhpur offers to you</h2>
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

        {/* Testimonials */}
        <section className="py-16 bg-[var(--bg-light)] mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--bg-light)] p-12 text-center rounded-2xl border border-[var(--border)]">
              <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">Hear from real students</h2>
              <a
                href="https://nprep.in/blogs?filter=NORCET+Success+Story"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--accent-hover)]"
              >
                Read verified success stories on NPrep
              </a>
            </div>
          </div>
        </section>

        {/* Removed Infrastructure & Stats Section as requested */}
      </div>
    </>
  );
};
