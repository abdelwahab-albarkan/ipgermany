'use client';

import React from 'react';

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-surface border border-border-subtle hover:border-gray-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-md px-3 py-2.5 text-sm text-white transition-all outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          E-Mail-Adresse
        </label>
        <input
          type="email"
          id="email"
          className="bg-surface border border-border-subtle hover:border-gray-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-md px-3 py-2.5 text-sm text-white transition-all outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="msg" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Ihre Nachricht
        </label>
        <textarea
          id="msg"
          rows={5}
          className="bg-surface border border-border-subtle hover:border-gray-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-md px-3 py-2.5 text-sm text-white transition-all outline-none resize-none"
          required
        />
      </div>

      <button
        type="submit"
        className="flex h-11 items-center justify-center gap-2 rounded-md bg-primary-500 text-sm font-semibold text-black hover:bg-primary-600 active:scale-95 transition-all"
      >
        Nachricht senden
      </button>
    </form>
  );
}
