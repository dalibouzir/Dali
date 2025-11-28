import "server-only";
import { getAnalytics } from "@vercel/analytics/server";

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

const daysAgo = (target: number) => {
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCDate(date.getUTCDate() - target);
  return date;
};

export async function getViewStats(): Promise<ViewStats> {
  try {
    const now = new Date();
    const start30 = daysAgo(30);
    const prevEnd = daysAgo(30);
    const prevStart = daysAgo(60);

    const [allTimeSummary, last30DaysSummary, previous30DaysSummary] = await Promise.all([
      getAnalytics({ period: "all" }),
      getAnalytics({ startDate: start30, endDate: now }),
      getAnalytics({ startDate: prevStart, endDate: prevEnd }),
    ]);

    return {
      allTime: allTimeSummary?.pageViews ?? 0,
      last30Days: last30DaysSummary?.pageViews ?? 0,
      previous30Days: previous30DaysSummary?.pageViews ?? 0,
    };
  } catch {
    return DEFAULT_STATS;
  }
}
