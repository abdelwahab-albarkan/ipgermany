import React from 'react';
import { Trophy, Star, Activity, Sparkles, Zap } from 'lucide-react';
import { SPORTS_CATEGORIES } from '@/lib/constants';
import { Reveal, Stagger, HoverCard } from '@/components/ui/motion';

export default function SportsSection() {
  const icons = [Trophy, Star, Activity, Sparkles, Zap];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <Reveal className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-spartan text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6">
          Kein Spiel <span className="text-gradient">mehr verpassen</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Bundesliga, Champions League, Premier League, Formel 1, US-Sport und Kampfsport – über 1.800 Sportkanäle in HD & 60 FPS. Alle Ligen an einem Ort, ohne fünf Einzelabos.
        </p>
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SPORTS_CATEGORIES.map((sport, index) => {
          const Icon = icons[index % icons.length];
          return (
            <HoverCard
              key={index}
              className="group h-full p-8 rounded-xl border border-border-subtle bg-surface-card/40 shadow-card hover:border-primary-500/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-black transition-colors duration-300">
                  <Icon className="h-5 w-5 icon-hover" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white">{sport.name}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {sport.leagues.map((league, subIndex) => (
                  <li key={subIndex} className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                    {league}
                  </li>
                ))}
              </ul>
            </HoverCard>
          );
        })}
      </Stagger>
    </section>
  );
}
