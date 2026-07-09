import { orders } from "../db/orders";

export async function getOrderStatus() {
  return {
    resource: "orders",
    success: true,
    latency: 11,
    data: orders[0],
  };
}
