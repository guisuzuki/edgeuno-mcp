import { resources } from "../db/resources";

export async function listResources() {
  return {
    success: true,
    latency: 14,
    data: resources,
  };
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

  return {
    success: true,
    latency: 18,
    data: resource,
  };
}
