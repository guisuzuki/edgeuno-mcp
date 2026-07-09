import { api } from "./client";

export interface Resource {
  id: number;
  hostname: string;
  region: string;
  status: string;
  product: string;
}

export interface ResourcesResponse {
  success: boolean;
  latency: string;
  data: Resource[];
}

export async function getResources() {
  const { data } = await api.get<ResourcesResponse>("/resources");

  return data;
}
