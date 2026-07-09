import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/services/api/products.service";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
