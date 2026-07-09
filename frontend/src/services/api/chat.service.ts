import { api } from "./client";

export interface ChatRequest {
  prompt: string;
}

export interface ChatResponse {
  success: boolean;
  latency: string;
  timestamp: string;
  data: {
    tool: string;
    assistant: string;
    timeline?: any[];
    response: any;
  };
}

export async function sendPrompt(body: ChatRequest): Promise<ChatResponse> {
  const { data } = await api.post<ChatResponse>("/ai/chat", body);

  return data;
}
