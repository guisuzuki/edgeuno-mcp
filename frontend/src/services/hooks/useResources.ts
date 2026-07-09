import { useQuery } from "@tanstack/react-query";

import { getResources } from "@/services/api/resources.service";

export function useResources() {
  return useQuery({
    queryKey: ["resources"],
    queryFn: getResources,
  });
}
