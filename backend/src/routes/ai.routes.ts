import { Router } from "express";

import { AIController } from "../controllers/ai.controllers";

export const aiRouter = Router();

const controller = new AIController();

aiRouter.post("/chat", controller.chat);
