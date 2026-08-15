'use client';

import React, { useState } from 'react';
import FeaturedPost from './FeaturedPost';
import CategoryFilter from './CategoryFilter';
import PostCard from './PostCard';
import NewsletterWidget from './NewsletterWidget';
import { BlogPost } from '@/lib/mongodb';

interface BlogListContainerProps {
  posts: BlogPost[];
}

export default function BlogListContainer({ posts }: BlogListContainerProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALLE');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALLE', 'ANLEITUNGEN', 'TESTBERICHTE', 'SPORT'];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === 'ALLE' ||
      post.category.toUpperCase() === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const gridPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <div>
      {/* Featured Article - only show if search and filter are clear */}
      {activeCategory === 'ALLE' && searchQuery === '' && featuredPost && (
        <FeaturedPost post={featuredPost} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
            {/* Search Input */}
            <input
              type="text"
              placeholder="Artikel suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface border border-border-subtle hover:border-gray-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-md px-4 py-2 text-sm text-white transition-all outline-none w-full sm:max-w-xs mb-4"
            />
          </div>

          {filteredPosts.length === 0 ? (
            <div className="p-16 rounded-xl border border-border-subtle bg-surface-card/30 text-center">
              <p className="text-gray-400 text-base">
                Keine Artikel entsprechen Ihren Suchfiltern. Wählen Sie eine andere Kategorie.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {gridPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Widgets */}
        <aside className="lg:col-span-4 flex flex-col gap-8 self-start lg:sticky lg:top-24">
          <NewsletterWidget />
          
          <div className="p-6 rounded-xl border border-border-subtle bg-[#101010]/40">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Kategorien</h3>
            <div className="flex flex-col gap-3 text-sm">
              {categories.filter(c => c !== 'ALL').map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`flex justify-between items-center text-left ${
                    activeCategory === c ? 'text-primary-500 font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{c.charAt(0) + c.slice(1).toLowerCase()}</span>
                  <span className="text-xs bg-surface border border-border-subtle px-2 py-0.5 rounded text-gray-500 font-medium">
                    {posts.filter(p => p.category.toUpperCase() === c).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
