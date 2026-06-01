"use client";

import { useId, useMemo, useState } from "react";
import { SITE } from "@/config/site";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  company: "",
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

  const statusMessage = useMemo(() => {
    switch (status) {
      case "loading":
        return "Preparing your email draft…";
      case "success":
        return "Email draft opened. Send it and I'll reply within one business day.";
      case "error":
        return error ?? "Something went wrong. Try again or email me directly.";
      default:
        return "Complete the form to open a prefilled email draft.";
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

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

    setStatus("loading");

    try {
      const subject = `Portfolio inquiry from ${form.name.trim()}`;
      const body = [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Company: ${form.company.trim() || "N/A"}`,
        "",
        "Message:",
        form.message.trim(),
      ].join("\n");
      const mailtoUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;

      setStatus("success");
      setForm(initialState);
    } catch (deliveryError) {
      console.error(deliveryError);
      setStatus("error");
      setError("I couldn't open your email client. Reach out directly using the email link below.");
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-white/70" htmlFor={nameId}>
          Your name
          <input
            id={nameId}
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/20 bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))] focus:border-[rgb(var(--brand))] focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm text-white/70" htmlFor={emailId}>
          Email
          <input
            id={emailId}
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/20 bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))] focus:border-[rgb(var(--brand))] focus:outline-none"
          />
        </label>
      </div>
      <label className="space-y-1 text-sm text-white/70" htmlFor={companyId}>
        Company (optional)
        <input
          id={companyId}
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/20 bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))] focus:border-[rgb(var(--brand))] focus:outline-none"
        />
      </label>
      <label className="space-y-1 text-sm text-white/70" htmlFor={messageId}>
        Message
        <textarea
          id={messageId}
          name="message"
          rows={6}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/20 bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))] focus:border-[rgb(var(--brand))] focus:outline-none"
        />
      </label>
      <div className="flex flex-col gap-2 text-xs text-white/70">
        <p>{statusMessage}</p>
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-4 hover:text-[rgb(var(--brand))]">
          {SITE.email}
        </a>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-[rgb(var(--brand))] px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Opening…" : "Open Email Draft"}
        </button>
      </div>
    </form>
  );
}
