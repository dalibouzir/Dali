"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function ContactForm() {
  const [isPreparing, setIsPreparing] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    const subject = encodeURIComponent(`Portfolio contact from ${form.name.value}`);
    const body = encodeURIComponent(`${form.message.value}\n\nFrom: ${form.name.value} <${form.email.value}>`);
    const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setIsPreparing(true);
    window.location.href = mailto;
    window.setTimeout(() => {
      setIsPreparing(false);
      form.reset();
    }, 1600);
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-5" aria-describedby="contact-status">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label htmlFor="contact-name" className="flex flex-col gap-2 text-sm text-zinc-300">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Name</span>
          <input
            id="contact-name"
            name="name"
            required
            placeholder="Your name"
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-[hsl(var(--accent))] focus:bg-white/10"
          />
        </label>
        <label htmlFor="contact-email" className="flex flex-col gap-2 text-sm text-zinc-300">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Email</span>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-[hsl(var(--accent))] focus:bg-white/10"
          />
        </label>
      </div>
      <label htmlFor="contact-message" className="flex flex-col gap-2 text-sm text-zinc-300">
        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Message</span>
        <textarea
          id="contact-message"
          name="message"
          required
          placeholder="Project details, timeline, or any questions you have"
          rows={4}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-[hsl(var(--accent))] focus:bg-white/10"
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-accent" disabled={isPreparing}>
          {isPreparing ? "Preparing…" : "Send"}
        </button>
        <span id="contact-status" className="text-xs text-zinc-400" aria-live="polite">
          {isPreparing ? "Opening your email client…" : "I typically reply within 1–2 business days."}
        </span>
      </div>
    </form>
  );
}
