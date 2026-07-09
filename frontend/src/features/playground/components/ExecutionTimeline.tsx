import { CheckCircle2, Circle } from "lucide-react";

import type { ExecutionStep } from "../types";

type Props = {
  steps: ExecutionStep[];
};

export function ExecutionTimeline({ steps }: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="mb-6 font-semibold text-white">Tool Execution</h3>

      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-3">
            {step.completed ? (
              <CheckCircle2 className="text-emerald-400" size={18} />
            ) : (
              <Circle className="text-zinc-600" size={18} />
            )}

            <span className="text-white">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
