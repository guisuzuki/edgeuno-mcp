import { Router } from "express";
import { ToolsController } from "../controllers/tools.controller";

const router = Router();
const controller = new ToolsController();

router.get("/", controller.list);

export default router;
