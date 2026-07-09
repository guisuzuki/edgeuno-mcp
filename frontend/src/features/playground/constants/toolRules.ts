export type ToolName =
  | "login"
  | "listProducts"
  | "createResource"
  | "listResources"
  | "getOrderStatus";

export interface ToolRule {
  tool: ToolName;
  keywords: string[];
}

export const TOOL_RULES: ToolRule[] = [
  {
    tool: "login",
    keywords: [
      "login",
      "authenticate",
      "authentication",
      "token",
      "apikey",
      "api key",
    ],
  },

  {
    tool: "listProducts",
    keywords: [
      "product",
      "products",
      "catalog",
      "catalogue",
      "plans",
      "offers",
      "available",
    ],
  },

  {
    tool: "createResource",
    keywords: [
      "create",
      "new",
      "provision",
      "deploy",
      "server",
      "vps",
      "resource",
      "instance",
      "vm",
    ],
  },

  {
    tool: "listResources",
    keywords: ["resources", "servers", "instances", "machines", "list", "show"],
  },

  {
    tool: "getOrderStatus",
    keywords: ["status", "tracking", "track", "order", "progress"],
  },
];
