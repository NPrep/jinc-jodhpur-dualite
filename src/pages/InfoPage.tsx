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
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900">{content.title}</h1>

        {content.intro ? <p className="mt-4 text-gray-700 leading-relaxed">{content.intro}</p> : null}

        <div className="mt-8 space-y-6">
          {content.sections.map((section, idx) => (
            <section key={`${section.heading ?? 'section'}-${idx}`}>
              {section.heading ? <h2 className="text-2xl font-semibold text-gray-900">{section.heading}</h2> : null}
              {section.paragraph ? <p className="mt-2 text-gray-700 leading-relaxed">{section.paragraph}</p> : null}
              {section.listItems ? (
                <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.orderedItems ? (
                <ol className="mt-2 list-decimal pl-6 text-gray-700 space-y-1">
                  {section.orderedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ) : null}
            </section>
          ))}
        </div>

        {content.links && content.links.length > 0 ? (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">Related Pages</h2>
            <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
              {content.links.map((link) => (
                <li key={link.path}>
                  <Link className="text-blue-700 hover:underline" to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <NprepBlock />
      </div>
    </>
  );
};
