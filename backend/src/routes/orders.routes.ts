import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller";

const router = Router();
const controller = new OrdersController();

router.get("/", controller.list);

export default router;
