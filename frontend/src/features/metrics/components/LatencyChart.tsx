type Props = {
  data: Record<string, number>;
};

export function LatencyChart({ data }: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="mb-6 text-lg font-semibold">Tool Executions</h2>

      <div className="space-y-5">
        {Object.entries(data).map(([tool, count]) => (
          <div key={tool}>
            <div className="mb-2 flex justify-between">
              <span className="text-white">{tool}</span>

              <span className="text-white">{count}</span>
            </div>

            <div className="h-2 rounded bg-zinc-800">
              <div
                className="h-full rounded bg-cyan-400"
                style={{
                  width: `${count * 15}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
