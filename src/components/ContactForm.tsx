"use client";

import { useId, useMemo, useState } from "react";

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
        return "Sending your brief…";
      case "success":
        return "Message received—I'll reply within one business day.";
      case "error":
        return error ?? "Something went wrong. Try again or email me directly.";
      default:
        return "Complete the form and I'll reply within one business day.";
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          company: form.company.trim(),
        }),
      });

      const payload = (await response.json()) as { success?: boolean; error?: string; message?: string };

      if (!response.ok || payload.success !== true) {
        throw new Error(payload.error ?? "Unable to send your message right now.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (deliveryError) {
      console.error(deliveryError);
      setStatus("error");
      setError("I couldn't send that. Try again or reach out directly via email.");
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
            className="w-full rounded-2xl border border-white/20 bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))] focus:border-cyan-400 focus:outline-none"
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
            className="w-full rounded-2xl border border-white/20 bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))] focus:border-cyan-400 focus:outline-none"
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
          className="w-full rounded-2xl border border-white/20 bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))] focus:border-cyan-400 focus:outline-none"
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
          className="w-full rounded-2xl border border-white/20 bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))] focus:border-cyan-400 focus:outline-none"
        />
      </label>
      <div className="flex flex-col gap-2 text-xs text-white/70">
        <p>{statusMessage}</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
