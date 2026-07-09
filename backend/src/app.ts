import express from "express";
import cors from "cors";

import productsRoutes from "./routes/products.routes";
import resourcesRoutes from "./routes/resources.routes";
import ordersRoutes from "./routes/orders.routes";
import toolsRoutes from "./routes/tools.routes";
import { aiRouter } from "./routes/ai.routes";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/resources", resourcesRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/tools", toolsRoutes);
app.use("/api/ai", aiRouter);
