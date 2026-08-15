'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterWidget() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="p-6 rounded-xl border border-border-subtle bg-surface-card/60">
      <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Newsletter</h3>
      <p className="text-xs text-gray-400 leading-relaxed mb-6">
        Abonnieren Sie Streaming-Tutorials, Sport-News und exklusive Angebote.
      </p>

      {submitted ? (
        <div className="flex flex-col items-center text-center gap-3 py-4 text-primary-500 animate-fade-in">
          <CheckCircle2 className="h-10 w-10" />
          <div className="text-xs font-bold text-white">Erfolgreich abonniert!</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail-Adresse eingeben"
            className="bg-surface border border-border-subtle hover:border-gray-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-md px-3 py-2.5 text-sm text-white transition-all outline-none w-full"
            required
          />
          <button
            type="submit"
            className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary-500 text-xs font-semibold text-black hover:bg-primary-600 active:scale-95 transition-all"
          >
            <Send className="h-3.5 w-3.5" />
            Newsletter abonnieren
          </button>
        </form>
      )}
    </div>
  );
}
