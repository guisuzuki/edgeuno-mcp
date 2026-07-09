import { Activity, CheckCircle2, Gauge, Wrench } from "lucide-react";

import { MetricCard } from "@/components/cards/MetricCard";

type Props = {
  requests: number;
  latency: number;
  success: number;
  tools: number;
};

export function MetricOverview({ requests, latency, success, tools }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Requests"
        value={requests}
        subtitle="Executed"
        icon={Activity}
      />

      <MetricCard
        title="Latency"
        value={`${latency} ms`}
        subtitle="Average"
        icon={Gauge}
      />

      <MetricCard
        title="Success"
        value={`${success}%`}
        subtitle="Rate"
        icon={CheckCircle2}
      />

      <MetricCard
        title="Tools"
        value={tools}
        subtitle="Registered"
        icon={Wrench}
      />
    </div>
  );
}
