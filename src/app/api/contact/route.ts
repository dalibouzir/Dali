import { NextResponse } from "next/server";
import { SITE } from "@/config/site";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
  token: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const TOKENS_PER_WINDOW = 5;

type Bucket = {
  tokens: number;
  lastRefill: number;
};

const buckets = new Map<string, Bucket>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (!forwarded) {
    return "unknown";
  }
  return forwarded.split(",")[0]?.trim() ?? "unknown";
}

function refillTokens(bucket: Bucket) {
  const now = Date.now();
  const elapsed = now - bucket.lastRefill;
  if (elapsed <= 0) {
    return bucket;
  }

  const tokensToAdd = Math.floor(elapsed / RATE_LIMIT_WINDOW_MS);
  if (tokensToAdd > 0) {
    bucket.tokens = Math.min(TOKENS_PER_WINDOW, bucket.tokens + tokensToAdd);
    bucket.lastRefill = now;
  }
  return bucket;
}

function consumeToken(ip: string) {
  const bucket = buckets.get(ip) ?? { tokens: TOKENS_PER_WINDOW, lastRefill: Date.now() };
  refillTokens(bucket);
  if (bucket.tokens <= 0) {
    buckets.set(ip, bucket);
    return false;
  }
  bucket.tokens -= 1;
  buckets.set(ip, bucket);
  return true;
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY ?? "1x0000000000000000000000000000000AA";
  if (!token) {
    return false;
  }

  try {
    const form = new FormData();
    form.append("secret", secret);
    form.append("response", token);
    if (ip && ip !== "unknown") {
      form.append("remoteip", ip);
    }

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });

    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as { success: boolean };
    return Boolean(data.success);
  } catch (error) {
    console.error("Turnstile verification failed", error);
    return false;
  }
}

function validatePayload(payload: ContactPayload) {
  const errors: string[] = [];

  if (!payload.name || payload.name.trim().length < 2) {
    errors.push("Name is required.");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email)) {
    errors.push("A valid email is required.");
  }

  if (!payload.message || payload.message.trim().length < 20) {
    errors.push("Please provide a bit more detail in the message.");
  }

  if (!payload.token) {
    errors.push("Verification token missing.");
  }

  return errors;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!consumeToken(ip)) {
    return NextResponse.json({ success: false, error: "Too many requests." }, { status: 429 });
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  const errors = validatePayload(payload);
  if (errors.length > 0) {
    return NextResponse.json({ success: false, error: errors.join(" ") }, { status: 400 });
  }

  const isHuman = await verifyTurnstile(payload.token, ip);
  if (!isHuman) {
    return NextResponse.json({ success: false, error: "Verification failed." }, { status: 400 });
  }

  console.info("[contact]", {
    name: payload.name,
    email: payload.email,
    company: payload.company ?? null,
    preview: payload.message.slice(0, 160),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: `Thanks for reaching out. ${SITE.name} will reply via ${SITE.email}.`,
  });
}

export const runtime = "edge";

// @improvement: edge contact endpoint with token bucket rate limiting and Turnstile verification
