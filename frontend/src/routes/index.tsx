import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/layout/Layout";

import { DashboardPage } from "@/pages/Dashboard";
import { ExplorerPage } from "@/pages/Explorer";
import { PlaygroundPage } from "@/pages/Playground";
import { MetricsPage } from "@/pages/Metrics";
import { LogsPage } from "@/pages/Log";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "explorer",
        element: <ExplorerPage />,
      },
      {
        path: "playground",
        element: <PlaygroundPage />,
      },
      {
        path: "metrics",
        element: <MetricsPage />,
      },
      { path: "logs", element: <LogsPage /> },
    ],
  },
]);
