import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { pageContent } from '../data/pagesContent';
import { NprepBlock } from '../components/NprepBlock';

export const InfoPage = () => {
  const { pathname } = useLocation();
  const content = pageContent[pathname];

  if (!content) {
    return null;
  }

  return (
    <>
      <SEOHead title={content.title} description={content.intro ?? content.title} canonicalUrl={pathname} />

      <section className="py-16 px-6 text-center bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
          {content.intro ? <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{content.intro}</p> : null}
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-6">
          {content.sections.map((section, idx) => (
            <div key={`${section.heading ?? 'section'}-${idx}`} className="p-6 rounded-2xl shadow-md bg-white border border-gray-100">
              {section.heading ? <h2 className="text-2xl font-semibold mt-0 mb-3">{section.heading}</h2> : null}
              {section.paragraph ? <p className="text-gray-600 leading-relaxed">{section.paragraph}</p> : null}
              {section.listItems ? (
                <ul className="space-y-2 text-gray-600 mt-4">
                  {section.listItems.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              ) : null}
              {section.orderedItems ? (
                <ol className="space-y-2 text-gray-600 mt-4 list-decimal pl-5">
                  {section.orderedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {content.links && content.links.length > 0 ? (
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-100">
              <h2 className="text-2xl font-semibold mt-0 mb-3">Related Pages</h2>
              <ul className="space-y-2 text-gray-600">
                {content.links.map((link) => (
                  <li key={link.path}>
                    • <Link className="text-blue-600 hover:underline" to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <NprepBlock />
    </>
  );
};
