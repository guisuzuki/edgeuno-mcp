import { api } from "./client";

export interface ToolParameter {
  name: string;
  type: string;
  required?: boolean;
}

export interface Tool {
  id: string;
  name: string;
  method: string;
  endpoint: string;
  description: string;
  parameters: ToolParameter[];
  active: boolean;
}

export interface ToolsResponse {
  success: boolean;
  latency: string;
  data: Tool[];
}

export async function getTools() {
  const { data } = await api.get<ToolsResponse>("/tools");

  return data;
}
