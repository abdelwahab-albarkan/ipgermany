'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route changes (covers back/forward navigation too).
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // While the menu is open: lock body scroll and close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070707]/90 border-b border-border-subtle backdrop-blur-md py-2.5'
          : 'bg-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop Nav */}
        <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium transition-colors hover:text-white rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] ${
                  isActive ? 'text-primary-500' : 'text-gray-400'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link
            href="/pricing"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-500 px-6 text-sm font-semibold text-black shadow-lg shadow-primary-500/10 transition-all hover:bg-primary-600 hover:shadow-primary-600/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707]"
          >
            Jetzt abonnieren
          </Link>
        </div>

        {/* Mobile hamburger — 44px touch target */}
        <button
          type="button"
          onClick={() => setIsOpen(v => !v)}
          className="lg:hidden -mr-2.5 inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707]"
          aria-label={isOpen ? 'Navigationsmenü schließen' : 'Navigationsmenü öffnen'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>

      {/* Mobile drawer — rendered OUTSIDE <header> so the header's backdrop-blur
          (applied on scroll) never becomes its containing block. It stays fixed to
          the viewport. z-[45] sits above floating buttons (z-40) but below the
          header (z-50), so the hamburger/close button stays visible on top. */}
      {isOpen && (
        <div
          id="mobile-menu"
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 z-[45] flex flex-col overflow-y-auto overscroll-contain bg-[#070707]/98 backdrop-blur-lg px-6 pt-24 pb-10 animate-fade-in"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md py-2.5 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] ${
                    isActive ? 'text-primary-500' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/pricing"
            onClick={closeMenu}
            className="mt-8 flex h-12 w-full items-center justify-center rounded-md bg-primary-500 text-base font-semibold text-black shadow-lg shadow-primary-500/15 active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707]"
          >
            Jetzt abonnieren
          </Link>
        </div>
      )}
    </>
  );
}
