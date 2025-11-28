import "server-only";

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

export async function getViewStats(): Promise<ViewStats> {
  return DEFAULT_STATS;
}
