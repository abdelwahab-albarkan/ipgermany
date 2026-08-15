'use client';

import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border-subtle">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all ${
              isActive
                ? 'bg-primary-500 text-black shadow-md'
                : 'bg-surface border border-border-subtle text-gray-400 hover:text-white hover:border-gray-800'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
