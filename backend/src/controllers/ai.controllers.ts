import { Request, Response } from "express";
import { ToolAgent } from "../ai/agent/agent";

const agent = new ToolAgent();

export class AIController {
  async chat(req: Request, res: Response) {
    try {
      const { prompt } = req.body;
      const result = await agent.run(prompt);
      return res.json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        latency: 0,
        timestamp: new Date().toISOString(),
        error: {
          code: "INTERNAL_SERVER_ERROR",
          message: "Unexpected error",
        },
      });
    }
  }
}
