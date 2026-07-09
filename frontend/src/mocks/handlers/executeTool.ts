import { useLogsStore } from "@/store/logs.store";
import { login } from "../services/auth.mock";
import { getOrderStatus } from "../services/orders.mock";
import { listProducts } from "../services/products.mock";
import { createResource, listResources } from "../services/resources.mock";

export async function executeTool(tool: string, payload?: any) {
  const { addLog } = useLogsStore.getState();

  let response;

  const endpointMap = {
    login: "POST /auth/login",
    listProducts: "GET /products",
    createResource: "POST /resources",
    listResources: "GET /resources",
    getOrderStatus: "GET /order-tracking/{id}",
  };

  switch (tool) {
    case "login":
      response = await login();
      break;

    case "listProducts":
      response = await listProducts();
      break;

    case "createResource":
      response = await createResource(payload);
      break;

    case "listResources":
      response = await listResources();
      break;

    case "getOrderStatus":
      response = await getOrderStatus();
      break;

    default:
      response = {
        resource: "unknown",
        success: false,
        latency: 0,
        data: null,
      };
  }

  addLog({
    id: crypto.randomUUID(),
    tool,
    endpoint: endpointMap[tool],
    latency: response.latency,
    success: response.success,
    timestamp: new Date().toISOString(),
  });

  return response;
}
