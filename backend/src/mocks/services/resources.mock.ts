import { successResponse } from "../../utils/apiResponse";

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

export async function listResources() {
  return successResponse(resources, 14);
}

export async function createResource(payload: any) {
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
