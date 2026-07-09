import type { LogEntry } from "@/store/logs.store";

export function averageLatency(logs: LogEntry[]) {
  if (!logs.length) return 0;

  return Math.round(
    logs.reduce((acc, log) => acc + log.latency, 0) / logs.length,
  );
}

export function successRate(logs: LogEntry[]) {
  if (!logs.length) return 100;

  const success = logs.filter((log) => log.success).length;

  return Math.round((success / logs.length) * 100);
}

export function groupByTool(logs: LogEntry[]) {
  return logs.reduce(
    (acc, log) => {
      acc[log.tool] = (acc[log.tool] ?? 0) + 1;

      return acc;
    },
    {} as Record<string, number>,
  );
}
