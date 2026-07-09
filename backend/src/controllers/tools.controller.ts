import { Request, Response } from "express";
import { listTools } from "../mocks/services/tools.mock";

export class ToolsController {
  async list(req: Request, res: Response) {
    const response = await listTools();

    return res.json(response);
  }
}
