import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { SEOHead } from '../components/seo/SEOHead';
import { Calendar, User, Tag, ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const schema = {
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.coverImage,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "JINC Jodhpur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jinc-jodhpur-replica.com/logo.png"
      }
    },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <>
      <SEOHead 
        title={post.title} 
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.coverImage}
        publishedTime={post.date}
        author={post.author}
        schema={schema}
      />

      <div className="py-12 bg-brand-light min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-brand-secondary hover:text-brand-pink mb-6 transition-colors">
            <ChevronLeft size={20} /> Back to Blog
          </Link>

          <article className="bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 text-sm text-brand-secondary mb-6">
                <span className="bg-brand-light text-brand-pink px-3 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  {post.author}
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="prose prose-lg prose-pink max-w-none text-brand-secondary">
                <ReactMarkdown>{post.content}</ReactMarkdown>
                <p className="italic text-gray-400 mt-8 border-l-4 border-brand-border pl-4">
                  (Note: This is a demo blog post content. In a real application, this would be a full-length article loaded from an MDX file.)
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-brand-border">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-brand-light text-brand-secondary rounded-md text-sm hover:bg-pink-100 transition-colors cursor-pointer">
                      <Tag size={14} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
