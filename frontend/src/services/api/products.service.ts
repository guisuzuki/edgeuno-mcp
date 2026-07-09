import { api } from "./client";

export interface Product {
  id: number;
  name: string;
  category: string;
  region: string;
  cpu: number;
  ram: string;
  storage: string;
  price: number;
}

export interface ProductsResponse {
  success: boolean;
  latency: string;
  data: Product[];
}

export async function getProducts() {
  const { data } = await api.get<ProductsResponse>("/products");

  return data;
}
