"use client";

import { profile } from "@/data/profile";

export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    const subject = encodeURIComponent(`Portfolio contact from ${form.name.value}`);
    const body = encodeURIComponent(`${form.message.value}\n\nFrom: ${form.name.value} <${form.email.value}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-[hsl(var(--accent))] focus:bg-white/10"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-[hsl(var(--accent))] focus:bg-white/10"
        />
      </div>
      <textarea
        name="message"
        required
        placeholder="Project details, timeline, or any questions you have"
        rows={4}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-[hsl(var(--accent))] focus:bg-white/10"
      />
      <div>
        <button type="submit" className="btn btn-accent">Send</button>
      </div>
    </form>
  );
}
