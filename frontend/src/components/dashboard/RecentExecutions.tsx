import { CheckCircle2 } from "lucide-react";
import { useLogsStore } from "@/store/logs.store";

export function RecentExecutions() {
  const logs = useLogsStore((state) => state.logs);

  const executions = logs.slice(0, 5);
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Recent Executions</h2>

        <p className="text-sm text-zinc-500">Latest MCP Tool executions</p>
      </div>

      <div className="space-y-4">
        {executions.map((execution) => (
          <div
            key={execution.id}
            className="flex items-center justify-between rounded-lg border border-zinc-800 p-4"
          >
            <div className="items-center">
              <p className="font-medium text-white text-left">
                {execution.tool}()
              </p>

              <p className="text-sm text-zinc-500">
                timestamp: {execution.timestamp}
              </p>
            </div>

            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={18} />

              <span className="text-sm">{`${execution.latency} ms`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
