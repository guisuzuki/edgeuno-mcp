type Props = {
  data: Record<string, number>;
};

export function TopTools({ data }: Props) {
  const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="mb-6 text-lg font-semibold">Top Executed Tools</h2>

      <div className="space-y-4">
        {sorted.map(([tool, count]) => (
          <div key={tool} className="flex justify-between">
            <span className="text-white">{tool}</span>

            <strong className="text-white">{count}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
