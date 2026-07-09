import { Bot } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
      <Bot size={60} className="text-cyan-400" />

      <div>
        <h2 className="text-2xl font-bold">AI Playground</h2>

        <p className="text-zinc-500">
          No tool executed yet. Start a conversation and I'll automatically
          select the best MCP Tool.
        </p>
      </div>
    </div>
  );
}
