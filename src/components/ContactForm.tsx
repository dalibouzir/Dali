"use client";

import { useId, useMemo, useState } from "react";
import { profile } from "@/data/profile";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
  honeypot: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  company: "",
  honeypot: "",
};

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const messageId = useId();
  const honeypotId = useId();

  const statusMessage = useMemo(() => {
    switch (status) {
      case "loading":
        return "Preparing a draft email…";
      case "success":
        return "Email draft opened. Looking forward to your message!";
      case "error":
        return error ?? "Something went wrong. Try messaging me directly.";
      default:
        return "I typically reply within one business day.";
    }
  }, [status, error]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setError(null);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.honeypot.trim().length > 0) {
      setStatus("error");
      setError("Spam detected. If this is a mistake, drop me a note at the email below.");
      return;
    }

    if (form.name.trim().length < 2) {
      setStatus("error");
      setError("Please share your name so I know who to reply to.");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("error");
      setError("That email doesn’t look quite right. Could you double-check it?");
      return;
    }

    if (form.message.trim().length < 16) {
      setStatus("error");
      setError("A little more detail helps me prepare. Add a short summary of your request.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const lines = [
      form.message.trim(),
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const body = encodeURIComponent(lines);
    const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setStatus("loading");
    try {
      window.location.href = mailto;
      window.setTimeout(() => {
        setStatus("success");
        setForm(initialState);
      }, 600);
    } catch (submitError) {
      console.error(submitError);
      setStatus("error");
      setError("Unable to open your email client. You can reach me at bouzirdali@gmail.com.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
      aria-describedby="contact-status"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={nameId} className="text-sm font-semibold text-[rgb(var(--text))]">
            Name <span className="text-[rgb(var(--brand))]">*</span>
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-3 text-sm text-[rgb(var(--text))] shadow-sm transition focus:border-[rgb(var(--brand)/0.45)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring)/0.4)]"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={emailId} className="text-sm font-semibold text-[rgb(var(--text))]">
            Email <span className="text-[rgb(var(--brand))]">*</span>
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-3 text-sm text-[rgb(var(--text))] shadow-sm transition focus:border-[rgb(var(--brand)/0.45)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring)/0.4)]"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={companyId} className="text-sm font-semibold text-[rgb(var(--text))]">
          Company or organization (optional)
        </label>
        <input
          id={companyId}
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={handleChange}
          className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-3 text-sm text-[rgb(var(--text))] shadow-sm transition focus:border-[rgb(var(--brand)/0.45)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring)/0.4)]"
          placeholder="Team, product, or company"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className="text-sm font-semibold text-[rgb(var(--text))]">
          How can I help? <span className="text-[rgb(var(--brand))]">*</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-3 text-sm text-[rgb(var(--text))] shadow-sm transition focus:border-[rgb(var(--brand)/0.45)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring)/0.4)]"
          placeholder="Project context, goals, timelines, or anything else that will help me prepare."
        />
      </div>

      {/* Honeypot */}
      <div className="hidden">
        <label htmlFor={honeypotId}>
          Leave this field blank
          <input
            id={honeypotId}
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
            value={form.honeypot}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="btn btn-accent"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        <div
          id="contact-status"
          role="status"
          aria-live="polite"
          className={`text-sm ${status === "error" ? "text-red-500" : "text-[rgb(var(--text-secondary))]"}`}
        >
          {statusMessage}
        </div>
      </div>

      <div className="rounded-3xl border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface-muted)/0.3)] p-4 text-sm text-[rgb(var(--text-secondary))]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
          Prefer direct contact?
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] px-3 py-2 font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <a
            className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] px-3 py-2 font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          >
            {profile.phone}
          </a>
          <a
            className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] px-3 py-2 font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </form>
  );
}
