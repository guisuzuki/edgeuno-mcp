import { Request, Response } from "express";
import { getOrderStatus } from "../mocks/services/orders.mock";

export class OrdersController {
  async list(req: Request, res: Response) {
    const response = await getOrderStatus();

    return res.json(response);
  }
}
