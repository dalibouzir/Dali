import { NextResponse } from "next/server";
import { SITE } from "@/config/site";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
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
