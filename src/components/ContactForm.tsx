"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { profile } from "@/data/profile";

type Turnstile = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
      theme?: "light" | "dark" | "auto";
    },
  ) => string;
  reset: (id?: string) => void;
};

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

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

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA";

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const widgetRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const messageId = useId();
  const honeypotId = useId();
  const verificationId = useId();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let cancelled = false;

    const mountTurnstile = () => {
      if (!widgetRef.current || !window.turnstile || cancelled) {
        return;
      }
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => {
          setTurnstileToken(token);
          setError(null);
        },
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => setTurnstileToken(null),
        theme: "auto",
      });
    };

    const ensureScript = () => {
      const scriptId = "turnstile-script";
      const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (existing) {
        if (existing.dataset.loaded === "true") {
          mountTurnstile();
        } else {
          existing.addEventListener("load", () => {
            existing.dataset.loaded = "true";
            mountTurnstile();
          }, { once: true });
        }
        return;
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        script.dataset.loaded = "true";
        mountTurnstile();
      };
      document.head.appendChild(script);
    };

    // @improvement: lazy-load Turnstile widget with explicit render
    ensureScript();

    const poll = window.setInterval(() => {
      if (window.turnstile && widgetRef.current && !widgetIdRef.current) {
        mountTurnstile();
        window.clearInterval(poll);
      }
    }, 120);

    return () => {
      cancelled = true;
      window.clearInterval(poll);
      if (widgetIdRef.current) {
        window.turnstile?.reset(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const statusMessage = useMemo(() => {
    switch (status) {
      case "loading":
        return "Sending your brief…";
      case "success":
        return "Message received—I'll reply within one business day.";
      case "error":
        return error ?? "Something went wrong. Try again or email me directly.";
      default:
        return "Complete the form and verification. I typically reply within one business day.";
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

  const resetTurnstile = () => {
    if (widgetIdRef.current) {
      window.turnstile?.reset(widgetIdRef.current);
    }
    setTurnstileToken(null);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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

    if (!turnstileToken) {
      setStatus("error");
      setError("Please complete the verification before sending.");
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
          token: turnstileToken,
        }),
      });

      const payload = (await response.json()) as { success?: boolean; error?: string; message?: string };

      if (!response.ok || payload.success !== true) {
        throw new Error(payload.error ?? "Unable to send your message right now.");
      }

      setStatus("success");
      setForm(initialState);
      setError(null);
      resetTurnstile();
    } catch (submitError) {
      console.error(submitError);
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : `Unable to send your message. You can reach me directly at ${profile.email}.`,
      );
      resetTurnstile();
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

      <div className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] p-4">
        <p id={verificationId} className="sr-only">
          Complete the verification challenge before submitting the form.
        </p>
        <div ref={widgetRef} className="min-h-[70px]" aria-labelledby={verificationId} />
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

      <p className="text-xs text-[rgb(var(--muted))]">
        We store messages for up to 30 days, never share.
      </p>

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
