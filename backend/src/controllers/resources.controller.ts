import { Request, Response } from "express";
import { listResources } from "../mocks/services/resources.mock";

export class ResourcesController {
  async list(req: Request, res: Response) {
    const response = await listResources();

    return res.json(response);
  }
}
