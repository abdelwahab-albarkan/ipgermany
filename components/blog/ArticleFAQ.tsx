'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface ArticleFAQProps {
  faqs: FAQ[];
}

export default function ArticleFAQ({ faqs }: ArticleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="my-12">
      <h3 className="text-xl font-bold text-white mb-6 border-b border-border-subtle pb-3">
        Häufig gestellte Fragen
      </h3>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-lg border border-border-subtle bg-surface-card/40 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className="text-base font-bold text-white pr-4">{faq.question}</span>
                <span className="shrink-0 text-primary-500">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {isOpen && (
                <div className="p-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-border-subtle/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
