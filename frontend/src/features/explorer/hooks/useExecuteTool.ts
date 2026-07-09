import { useState } from "react";

import { executeTool } from "@/mocks/handlers/executeTool";

export function useExecuteTool() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  async function execute(tool: string, payload?: any) {
    setLoading(true);
    setResponse(null);

    try {
      const result = await executeTool(tool, payload);

      setResponse(result);

      return result;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    response,
    execute,
  };
}
