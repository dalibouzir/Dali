import "server-only";
import { SITE } from "@/config/site";

export type ViewStats = {
  allTime: number;
  last30Days: number;
  previous30Days: number;
};

const DEFAULT_STATS: ViewStats = {
  allTime: 0,
  last30Days: 0,
  previous30Days: 0,
};

const ANALYTICS_API_BASE = "https://vercel.com/api/web/analytics";
const ANALYTICS_DOMAIN =
  process.env.VERCEL_WEB_ANALYTICS_DOMAIN || new URL(SITE.url).host.replace(/^https?:\/\//, "");
const ANALYTICS_TOKEN =
  process.env.VERCEL_WEB_ANALYTICS_TOKEN || process.env.VERCEL_API_TOKEN || process.env.ANALYTICS_TOKEN;

type TimeseriesPoint = {
  date?: string;
  value?: number;
  views?: number;
  pageViews?: number;
};

const sumViews = (payload: unknown): number => {
  if (!payload || typeof payload !== "object") {
    return 0;
  }

  const data = Array.isArray((payload as { analytics?: TimeseriesPoint[] }).analytics)
    ? (payload as { analytics: TimeseriesPoint[] }).analytics
    : Array.isArray((payload as { data?: TimeseriesPoint[] }).data)
      ? (payload as { data: TimeseriesPoint[] }).data
      : Array.isArray(payload)
        ? (payload as TimeseriesPoint[])
        : [];

  return data.reduce((total, point) => total + (point?.views ?? point?.pageViews ?? point?.value ?? 0), 0);
};

const fetchFromAnalytics = async (path: string, params: Record<string, string>) => {
  if (!ANALYTICS_TOKEN || !ANALYTICS_DOMAIN) {
    return null;
  }

  const url = new URL(`${ANALYTICS_API_BASE}/${path}`);
  url.searchParams.set("url", ANALYTICS_DOMAIN);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ANALYTICS_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 * 60 }, // cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`Analytics request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

const fetchViewsForRange = async (days: number, offsetDays = 0) => {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);
  end.setUTCDate(end.getUTCDate() - offsetDays);

  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - days);

  const payload = await fetchFromAnalytics("timeseries", {
    start: start.toISOString(),
    end: end.toISOString(),
    unit: "day",
  });

  return sumViews(payload);
};

const fetchAllTimeViews = async () => {
  try {
    const summary = await fetchFromAnalytics("summary", {});
    if (summary && typeof summary === "object") {
      if (typeof (summary as { totalPageViews?: number }).totalPageViews === "number") {
        return (summary as { totalPageViews: number }).totalPageViews;
      }

      const domains = (summary as { domains?: { pageViews?: number }[] }).domains;
      if (Array.isArray(domains)) {
        return domains.reduce((total, item) => total + (item.pageViews ?? 0), 0);
      }
    }
  } catch {
    // If summary endpoint fails we attempt to pull a longer timeseries window.
  }

  // Fallback to a 365-day rolling window to approximate "all time" when summary is unavailable.
  return fetchViewsForRange(365);
};

export async function getViewStats(): Promise<ViewStats> {
  if (!ANALYTICS_TOKEN || !ANALYTICS_DOMAIN) {
    return DEFAULT_STATS;
  }

  try {
    const [last30Days, previous30Days, allTime] = await Promise.all([
      fetchViewsForRange(30),
      fetchViewsForRange(30, 30),
      fetchAllTimeViews(),
    ]);

    return {
      allTime,
      last30Days,
      previous30Days,
    };
  } catch {
    return DEFAULT_STATS;
  }
}
