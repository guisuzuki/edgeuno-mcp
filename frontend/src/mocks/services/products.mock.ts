import { products } from "../db/products";

export async function listProducts() {
  return {
    resource: "products",
    success: true,
    latency: 18,
    data: products,
  };
}
