export interface ToolDecision {
  tool: ToolName;
  arguments: Record<string, unknown>;
}

export interface AgentResponse {
  tool: string;
  assistant: string;
  response: unknown;
}

export type ToolName =
  | "login"
  | "listProducts"
  | "createResource"
  | "listResources"
  | "getOrderStatus";
