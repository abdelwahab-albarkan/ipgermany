'use client';

import React, { useState } from 'react';
import { User, Send, CheckCircle2 } from 'lucide-react';

export default function CommentSection() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [comments, setComments] = useState<Array<{ name: string; text: string; date: string }>>([
    { name: "Jonas D.", text: "Diese Anleitung hat mir geholfen, TiviMate in unter 2 Minuten auf meinem Firestick einzurichten. Die Stream-Stabilität ist unglaublich. Danke!", date: "vor 2 Tagen" },
    { name: "Emily R.", text: "Sind auch deutsche Bundesliga-Sender enthalten? Ich möchte Fußballspiele streamen.", date: "vor 1 Woche" }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      const newComment = {
        name,
        text: comment,
        date: "Gerade eben"
      };
      setComments([newComment, ...comments]);
      setSubmitted(true);
      setName('');
      setComment('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="my-16 border-t border-border-subtle pt-12">
      <h3 className="text-xl font-bold text-white mb-8">
        Diskussion ({comments.length})
      </h3>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-10 flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Ihr Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-surface border border-border-subtle hover:border-gray-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-md px-4 py-3 text-sm text-white transition-all outline-none"
            required
          />
        </div>
        <textarea
          placeholder="Teilen Sie Ihre Gedanken..."
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="bg-surface border border-border-subtle hover:border-gray-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-md px-4 py-3 text-sm text-white transition-all outline-none resize-none"
          required
        />
        <button
          type="submit"
          className="flex h-11 self-start items-center justify-center gap-2 rounded-md bg-primary-500 px-6 text-sm font-semibold text-black hover:bg-primary-600 active:scale-95 transition-all"
        >
          <Send className="h-4 w-4" />
          Kommentar posten
        </button>

        {submitted && (
          <div className="flex items-center gap-2 text-xs font-bold text-primary-500 mt-2 animate-fade-in">
            <CheckCircle2 className="h-4 w-4" />
            Kommentar erfolgreich veröffentlicht!
          </div>
        )}
      </form>

      {/* Comments List */}
      <div className="flex flex-col gap-6">
        {comments.map((c, index) => (
          <div key={index} className="flex gap-4 p-5 rounded-xl border border-border-subtle bg-surface-card/20">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface border border-border-subtle text-gray-500">
              <User className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-sm font-bold text-white">{c.name}</span>
                <span className="text-[10px] text-gray-500">{c.date}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
