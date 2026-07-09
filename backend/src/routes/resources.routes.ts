import { Router } from "express";
import { ResourcesController } from "../controllers/resources.controller";

const router = Router();
const controller = new ResourcesController();

router.get("/", controller.list);

export default router;
