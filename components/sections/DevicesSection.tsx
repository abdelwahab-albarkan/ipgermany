import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { DEVICES } from '@/lib/constants';
import { Reveal, Stagger, HoverCard } from '@/components/ui/motion';

type IconComponent = React.ComponentType<LucideProps>;
const Icons = LucideIcons as unknown as Record<string, IconComponent>;

export default function DevicesSection({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="py-24 bg-surface/30 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {showHeader && (
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-spartan text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Läuft, wo <span className="text-gradient">Sie fernsehen</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Fire TV Stick, Samsung, LG, Android TV, Apple TV oder Smartphone – mit Ihren Zugangsdaten in wenigen Minuten startklar, ohne komplizierte Einrichtung.
            </p>
          </Reveal>
        )}

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEVICES.map((device, index) => {
            const Icon = Icons[device.icon] ?? LucideIcons.Tv;
            return (
              <HoverCard
                key={index}
                className="group h-full p-8 rounded-xl border border-border-subtle bg-surface-card/60 shadow-card hover:border-primary-500/40 transition-colors flex gap-6 items-start"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-black transition-colors duration-300">
                  <Icon className="h-6 w-6 icon-hover" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">{device.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{device.description}</p>
                </div>
              </HoverCard>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
