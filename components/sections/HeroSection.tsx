'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react';
import { TMDBMediaItem } from '@/lib/tmdb';
import PosterWall from '@/components/ui/PosterWall';

interface HeroSectionProps {
  movies: TMDBMediaItem[];
}

export default function HeroSection({ movies }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-32">
      {/* Ambient background: brand glow + dotted grid */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.5]" />
      <div className="absolute inset-0 -z-10 bg-radial from-primary-500/12 via-transparent to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text + CTA column (LCP — transform-only intro, never opacity-gated) */}
        <div className="lg:col-span-7 flex flex-col items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold text-primary-500 mb-8 self-center lg:self-start">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            GermanyStreamTV.com · Next-Gen IPTV-Server
          </div>

          <h1 className="font-spartan uppercase text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.9] self-center lg:self-start text-center lg:text-left mb-8">
            <span className="block text-white animate-slide-in-1">PREMIUM IPTV</span>
            <span className="block text-gradient animate-slide-in-2">IN DEUTSCHLAND</span>
            <span className="block text-white animate-slide-in-3">50.000+ SENDER IN 4K</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-center lg:text-left self-center lg:self-start">
            Live-TV, über 1.800 Sportkanäle und mehr als 180.000 Filme &amp; Serien in echtem 4K mit HDR10+. Ohne Vertrag, ohne Wartezeit – freigeschaltet in unter 60 Sekunden.
          </p>

          {/* Action CTAs — spring micro-interactions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto self-center lg:self-start">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary-500 px-8 text-base font-bold text-black shadow-lg shadow-primary-500/25 transition-colors hover:bg-primary-600"
              >
                Jetzt IPTV-Abo sichern
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              <Link
                href="/devices"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border-subtle bg-surface px-8 text-base font-semibold text-white hover:bg-surface-hover transition-colors"
              >
                Installationsanleitungen
              </Link>
            </motion.div>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 self-center lg:self-start">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary-500" strokeWidth={2} />
              99,9% Uptime
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-primary-500" strokeWidth={2} />
              Freischaltung in 60 Sek.
            </span>
          </div>
        </div>

        {/* Cinematic 3D poster wall */}
        <div className="lg:col-span-5 flex justify-center">
          <PosterWall items={movies} />
        </div>
      </div>
    </section>
  );
}
