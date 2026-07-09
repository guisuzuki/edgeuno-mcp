import { useQuery } from "@tanstack/react-query";

import { getOrders } from "@/services/api/orders.service";

export function useOrders() {
  return useQuery({
    queryKey: ["Orders"],
    queryFn: getOrders,
  });
}
