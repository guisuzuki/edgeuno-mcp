import { Request, Response } from "express";
import { listProducts } from "../mocks/services/products.mock";

export class ProductsController {
  async list(req: Request, res: Response) {
    const response = await listProducts();

    return res.json(response);
  }
}
