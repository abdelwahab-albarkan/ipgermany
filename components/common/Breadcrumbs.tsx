import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import JsonLd from './JsonLd';
import { breadcrumbSchema } from '@/lib/structured-data';

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Accessible breadcrumb trail + matching BreadcrumbList JSON-LD.
 * The last item is the current page (aria-current), earlier items link back.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Brotkrümel-Navigation" className="max-w-7xl mx-auto px-6 pt-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
          {items.map((crumb, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="h-3 w-3 text-gray-600" aria-hidden strokeWidth={2} />}
                {isLast ? (
                  <span className="font-medium text-gray-300" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="transition-colors hover:text-primary-500">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
