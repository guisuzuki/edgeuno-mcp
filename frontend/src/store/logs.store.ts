import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface LogEntry {
  id: string;
  tool: string;
  endpoint: string;
  latency: number;
  timestamp: string;
  success: boolean;
}

interface LogsStore {
  logs: LogEntry[];
  addLog: (log: LogEntry) => void;
}

export const useLogsStore = create<LogsStore>()(
  persist(
    (set) => ({
      logs: [],

      addLog: (log) =>
        set((state) => ({
          logs: [log, ...state.logs],
        })),
    }),
    {
      name: "edgeuno-logs",
    },
  ),
);
