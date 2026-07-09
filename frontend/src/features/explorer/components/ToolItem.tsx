import { Wrench } from "lucide-react";

type Props = {
  tool: any;
  selected: boolean;
  onSelect: () => void;
};

export function ToolItem({ tool, selected, onSelect }: Props) {
  return (
    <button
      onClick={onSelect}
      className={`
        w-full rounded-lg border p-4 text-left transition
        cursor-pointer text-white
        ${
          selected
            ? "border-cyan-500 bg-cyan-500/10"
            : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <Wrench size={18} className="text-cyan-400" />

        <div>
          <strong>{tool.name}</strong>

          <p className="text-xs text-zinc-500">{tool.endpoint}</p>
        </div>
      </div>
    </button>
  );
}
