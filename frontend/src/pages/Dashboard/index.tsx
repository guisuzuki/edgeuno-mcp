import { Boxes, Clock3, Server, Activity } from "lucide-react";

import { MetricCard } from "@/components/cards/MetricCard";
import { AvailableTools } from "@/components/dashboard/AvailableTools";
import { RecentExecutions } from "@/components/dashboard/RecentExecutions";
import { Workflow } from "@/components/dashboard/Workflow";

import { useOrders } from "@/services/hooks/useOrders";
import { useProducts } from "@/services/hooks/useProducts";
import { useResources } from "@/services/hooks/useResources";

export function DashboardPage() {
  const { data: products, isLoading: loadingProducts } = useProducts();
  const { data: resources, isLoading: loadingResources } = useResources();
  const { data: orders, isLoading: loadingOrders } = useOrders();

  const loading = loadingProducts || loadingResources || loadingOrders;

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  const productsCount = products?.data.length ?? 0;

  const resourcesCount = resources?.data.length ?? 0;

  const ordersCount = orders?.data.length ?? 0;

  const runningResources =
    resources?.data.filter((resource) => resource.status === "Running")
      .length ?? 0;

  const averageLatency = Math.round(
    (Number(products?.latency.replace(" ms", "")) +
      Number(resources?.latency.replace(" ms", "")) +
      Number(orders?.latency.replace(" ms", ""))) /
      3,
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-zinc-500">EdgeUno MCP Server Overview</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Products"
          value={productsCount}
          subtitle="Available"
          icon={Boxes}
        />

        <MetricCard
          title="Resources"
          value={resourcesCount}
          subtitle={`${runningResources} Running`}
          icon={Server}
        />

        <MetricCard
          title="Orders"
          value={ordersCount}
          subtitle="Provisioning"
          icon={Activity}
        />

        <MetricCard
          title="Avg Latency"
          value={`${averageLatency} ms`}
          subtitle="API Response"
          icon={Clock3}
        />
      </div>

      <Workflow />

      <div className="grid gap-6 xl:grid-cols-2">
        <RecentExecutions />

        <AvailableTools />
      </div>
    </div>
  );
}
