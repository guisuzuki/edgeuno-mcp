import { api } from "./client";

export interface Order {
  id: number;
  status: string;
  progress: number;
}

export interface OrdersResponse {
  success: boolean;
  latency: string;
  data: Order[];
}

export async function getOrders() {
  const { data } = await api.get<OrdersResponse>("/orders");

  return data;
}
