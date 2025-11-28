import { getAnalytics } from "@vercel/analytics/server";

type ViewStats = {
  current: number;
  previous: number;
  deltaPct: number;
};

const DEFAULT_STATS: ViewStats = {
  current: 0,
  previous: 0,
  deltaPct: 0,
};

export async function getViewStats(): Promise<ViewStats> {
  try {
    const [{ views: views30 = 0 } = {}, { views: views60 = 0 } = {}] = await Promise.all([
      getAnalytics({ period: "30d", limit: 1 }),
      getAnalytics({ period: "60d", limit: 1 }),
    ]);

    const current = Math.max(views30 ?? 0, 0);
    const previous = Math.max((views60 ?? 0) - current, 0);
    const deltaPct = previous === 0 ? 0 : ((current - previous) / previous) * 100;

    return {
      current,
      previous,
      deltaPct: Number.isFinite(deltaPct) ? deltaPct : 0,
    };
  } catch {
    return DEFAULT_STATS;
  }
}
