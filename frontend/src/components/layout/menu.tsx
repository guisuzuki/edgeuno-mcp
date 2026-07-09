import {
  Activity,
  Bot,
  LayoutDashboard,
  Wrench,
  ScrollIcon,
} from "lucide-react";

export const menu = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },

  {
    title: "API Explorer",
    path: "/explorer",
    icon: Wrench,
  },

  {
    title: "AI Playground",
    path: "/playground",
    icon: Bot,
  },

  {
    title: "Metrics",
    path: "/metrics",
    icon: Activity,
  },

  {
    title: "Logs",
    path: "/logs",
    icon: ScrollIcon,
  },
];
