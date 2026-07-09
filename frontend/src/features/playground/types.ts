export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ExecutionStep {
  id: string;
  label: string;
  completed: boolean;
}

export interface ToolResponse {
  success: boolean;
  latency: string;
  data: any;
}
