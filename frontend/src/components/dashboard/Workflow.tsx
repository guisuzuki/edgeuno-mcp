import { ArrowRight, Bot, Database, Wrench } from "lucide-react";

export function Workflow() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">
      <h2 className="mb-8 text-lg font-semibold">OpenAPI Workflow</h2>

      <div className="flex items-center justify-center gap-6">
        <WorkflowItem icon={Database} title="Swagger" />

        <ArrowRight />

        <WorkflowItem icon={Wrench} title="MCP Tools" />

        <ArrowRight />

        <WorkflowItem icon={Bot} title="AI" />
      </div>
    </div>
  );
}

function WorkflowItem({ icon: Icon, title }) {
  return (
    <div className="flex flex-1 flex-col items-center rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <Icon size={32} className="mb-4 text-cyan-400" />

      <span className="font-semibold text-white">{title}</span>
    </div>
  );
}
