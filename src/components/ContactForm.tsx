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
    <form onSubmit={onSubmit} className="mt-6 grid gap-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="name" required placeholder="Your name" className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-cyan-500" />
        <input type="email" name="email" required placeholder="Your email" className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-cyan-500" />
      </div>
      <textarea name="message" required placeholder="Your message" rows={4} className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-cyan-500" />
      <div>
        <button type="submit" className="btn btn-accent">Send</button>
      </div>
    </form>
  );
}

