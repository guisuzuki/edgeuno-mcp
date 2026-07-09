import { useLogsStore } from "@/store/logs.store";

import {
  averageLatency,
  groupByTool,
  successRate,
} from "@/features/metrics/utils";

import { MetricOverview } from "@/features/metrics/components/MetricOverview";
import { LatencyChart } from "@/features/metrics/components/LatencyChart";
import { TopTools } from "@/features/metrics/components/TopTools";

export function MetricsPage() {
  const logs = useLogsStore((state) => state.logs);

  const grouped = groupByTool(logs);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Metrics</h1>

        <p className="text-zinc-500">Monitor MCP performance.</p>
      </div>

      <MetricOverview
        requests={logs.length}
        latency={averageLatency(logs)}
        success={successRate(logs)}
        tools={Object.keys(grouped).length}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <LatencyChart data={grouped} />

        <TopTools data={grouped} />
      </div>
    </div>
  );
}
