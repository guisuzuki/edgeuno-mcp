import { useState } from "react";

import { sendPrompt } from "@/services/api/chat.service";

import type { ChatMessage } from "../types";

export function usePlayground() {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [response, setResponse] = useState<any>(null);

  async function send(prompt: string) {
    setLoading(true);

    try {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "user",
          content: prompt,
        },
      ]);

      const result = await sendPrompt({
        prompt,
      });

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: result.data.assistant,
        },
      ]);
      setSteps(result.data.timeline ?? []);

      setResponse(result.data.response);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    messages,
    response,
    send,
    steps,
  };
}
