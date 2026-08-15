import React from 'react';
import { STATS } from '@/lib/constants';
import { Stagger, StaggerItem } from '@/components/ui/motion';
import CountUp from '@/components/ui/CountUp';

export default function StatsBar() {
  return (
    <section className="border-y border-border-subtle bg-surface/50 py-10">
      <Stagger className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border-subtle rtl:divide-x-reverse">
        {STATS.map((stat, index) => (
          <StaggerItem
            key={index}
            className="flex flex-col items-center justify-center text-center p-4 md:first:border-none"
          >
            <CountUp
              value={stat.value}
              className="font-spartan text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2"
            />
            <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-semibold">
              {stat.label}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
