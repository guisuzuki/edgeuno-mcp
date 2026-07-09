import { useMemo, useState } from "react";

import { useLogsStore } from "@/store/logs.store";

import { EmptyLogs } from "@/features/logs/components/EmptyLogs";
import { LogFilters } from "@/features/logs/components/LogFilters";
import { LogTable } from "@/features/logs/components/LogTable";

export function LogsPage() {
  const logs = useLogsStore((state) => state.logs);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [tool, setTool] = useState("all");

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch =
        log.tool.toLowerCase().includes(search.toLowerCase()) ||
        log.endpoint.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        (status === "success" && log.success) ||
        (status === "error" && !log.success);

      const matchesTool = tool === "all" || log.tool === tool;

      return matchesSearch && matchesStatus && matchesTool;
    });
  }, [logs, search, status, tool]);

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">Logs</h1>

      <p className="mb-4! text-zinc-500">Monitor every MCP Tool execution.</p>

      <LogFilters
        search={search}
        onSearch={setSearch}
        status={status}
        onStatus={setStatus}
        tool={tool}
        onTool={setTool}
      />

      {filteredLogs.length === 0 ? (
        <EmptyLogs />
      ) : (
        <LogTable logs={filteredLogs} />
      )}
    </div>
  );
}
