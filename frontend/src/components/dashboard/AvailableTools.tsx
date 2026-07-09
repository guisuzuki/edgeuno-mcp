import { useTools } from "@/services/hooks/useTools";
import { Wrench } from "lucide-react";

export function AvailableTools() {
  const { data: tools, isLoading: toolsIsLoading } = useTools();

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Available Tools</h2>

        <p className="text-sm text-zinc-500">Registered MCP Tools</p>
      </div>

      <div className="space-y-3">
        {!toolsIsLoading &&
          tools?.data.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center justify-between rounded-lg border border-zinc-800 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-cyan-500/10 p-2">
                  <Wrench size={18} className="text-cyan-400" />
                </div>

                <div>
                  <p className="font-medium text-white text-left">
                    {tool.name}
                  </p>

                  <p className="text-sm text-zinc-500">{tool.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    tool.active ? "bg-emerald-400" : "bg-red-400"
                  }`}
                />

                <span
                  className={`text-sm ${
                    tool.active ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {tool.active ? "Ready" : "Inactive"}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
