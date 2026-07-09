import type { ToolResponse } from "../types";

type Props = {
  response: ToolResponse | null;
};

export function JsonResponse({ response }: Props) {
  if (!response) return null;

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-white">Tool Response</h3>

        <span className="text-sm text-cyan-400">{response.latency}</span>
      </div>

      <pre className="overflow-auto rounded-lg bg-zinc-900 p-4 text-sm text-white">
        {JSON.stringify(response.data, null, 2)}
      </pre>
    </div>
  );
}
