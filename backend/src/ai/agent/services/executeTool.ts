import { errorResponse, successResponse } from "../../../utils/apiResponse";

const products = [
  {
    id: 1,
    name: "VPS Starter",
    category: "Compute",
    region: "Miami",
    cpu: 2,
    ram: "4 GB",
    storage: "80 GB SSD",
    price: 12,
  },
  {
    id: 2,
    name: "VPS Pro",
    category: "Compute",
    region: "São Paulo",
    cpu: 4,
    ram: "8 GB",
    storage: "160 GB SSD",
    price: 24,
  },
  {
    id: 3,
    name: "Bare Metal X",
    category: "Bare Metal",
    region: "Dallas",
    cpu: 16,
    ram: "64 GB",
    storage: "2 TB NVMe",
    price: 199,
  },
];

const resources = [
  {
    id: 101,
    hostname: "api-prod",
    region: "Miami",
    status: "Running",
    product: "VPS Starter",
  },
  {
    id: 102,
    hostname: "database",
    region: "São Paulo",
    status: "Running",
    product: "VPS Pro",
  },
];

const orders = [
  {
    id: 501,
    status: "Provisioning",
    progress: 62,
  },
];

async function listProducts() {
  return successResponse(products, 18);
}

async function listResources() {
  return successResponse(resources, 14);
}

async function createResource(payload: any) {
  const resource = {
    id: resources.reduce((max, r) => Math.max(max, r.id), 0) + 1,
    hostname: payload.hostname,
    region: payload.region,
    product: payload.productId,
    status: "Creating",
  };

  resources.push(resource);

  return successResponse(resource, 18);
}

async function getOrderStatus() {
  return successResponse(orders, 20);
}

export async function executeTool(tool: string, payload?: any) {
  try {
    switch (tool) {
      case "listProducts":
        return listProducts();

      case "createResource":
        return createResource(payload);

      case "listResources":
        return listResources();

      case "getOrderStatus":
        return getOrderStatus();

      default:
        return errorResponse("TOOL_NOT_FOUND", `Tool "${tool}" not found`);
    }
  } catch {
    return errorResponse(
      "TOOL_EXECUTION_ERROR",
      "Unexpected error executing tool",
    );
  }
}
