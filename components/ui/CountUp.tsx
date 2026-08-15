'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

/**
 * Parses a German-formatted stat string into its numeric target, decimals and
 * suffix. Examples: "50.000+" → {target: 50000, decimals: 0, suffix: "+"},
 * "99,9%" → {target: 99.9, decimals: 1, suffix: "%"}, "60+" → {60, 0, "+"}.
 */
function parseStat(value: string) {
  const suffix = value.match(/[^\d.,]+$/)?.[0] ?? '';
  const numPart = suffix ? value.slice(0, value.length - suffix.length) : value;
  const decimals = numPart.includes(',') ? (numPart.split(',')[1]?.length ?? 0) : 0;
  const target = parseFloat(numPart.replace(/\./g, '').replace(',', '.'));
  return { target, decimals, suffix, valid: !Number.isNaN(target) };
}

function formatDE(v: number, decimals: number) {
  return v.toLocaleString('de-DE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Animated count-up for marketing stats. Starts at 0 and counts up to the
 * target when it scrolls into view (once), preserving the German number format
 * and suffix. Uses tabular figures to avoid layout shift; honours reduced-motion
 * and falls back gracefully if IntersectionObserver can't fire (hidden tab).
 */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const { target, decimals, suffix, valid } = parseStat(value);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(() => (reduce || !valid ? value : formatDE(0, decimals) + suffix));
  const [fallback, setFallback] = useState(false);

  // Safety net: if the document can't run IntersectionObserver (background tab),
  // reveal the final numbers after a short grace period.
  useEffect(() => {
    if (typeof document !== 'undefined' && document.hidden) {
      const t = setTimeout(() => setFallback(true), 250);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!valid || reduce) {
      setDisplay(value);
      return;
    }
    if (!(inView || fallback)) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      onUpdate: (v) => setDisplay(formatDE(v, decimals) + suffix),
    });
    return () => controls.stop();
  }, [inView, fallback, reduce, valid, target, decimals, suffix, value]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </span>
  );
}
