import { useQuery } from "@tanstack/vue-query";
import { REFERENCES_KEY } from "@src/constants/keysQuery.constants";
import { getCategories } from "@src/services/references.service";

export function useCategories() {
  return useQuery({
    queryKey: [REFERENCES_KEY.categories.get],
    queryFn: getCategories,
    placeholderData: { data: [] },
    //De esta forma hacemos que la peticion siempre viva
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
