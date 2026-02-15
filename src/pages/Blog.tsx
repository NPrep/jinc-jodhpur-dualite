import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { SEOHead } from '../components/seo/SEOHead';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const Blog = () => {
  const schema = {
    "@type": "Blog",
    "name": "JINC Jodhpur Blog",
    "description": "Latest updates, exam strategies, and nursing career guidance from JINC Jodhpur.",
    "url": "https://jincjodhpur.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "JINC Jodhpur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jincjodhpur.com/logo.png"
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Blog - Nursing Exam Preparation & Updates" 
        description="Read the latest articles on NORCET, AIIMS, RRB, and other nursing competitive exams. Expert tips and strategies from JINC Jodhpur."
        canonicalUrl="/blog"
        schema={schema}
      />
      
      <div className="py-12 bg-brand-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">JINC Nursing Blog</h1>
            <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
              Stay updated with the latest exam notifications, preparation strategies, and success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border border-brand-border h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 text-xs text-brand-secondary mb-4">
                    <span className="bg-brand-light text-brand-pink px-2 py-1 rounded font-medium">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="block mb-4 flex-grow">
                    <h2 className="text-xl font-bold text-black hover:text-brand-pink transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <div className="pt-4 border-t border-brand-border flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm text-brand-secondary">
                      <User size={14} />
                      <span className="truncate max-w-[120px]">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-brand-pink text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
