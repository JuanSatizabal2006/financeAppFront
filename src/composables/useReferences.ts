import { useQuery } from "@tanstack/vue-query";
import {
  CREDIT_QUERY_KEYS,
  REFERENCES_KEY,
} from "@src/constants/keysQuery.constants";
import { getCategories } from "@src/services/references.service";
import { getCreditCards } from "@src/services/creditCard.service";

function useCategories() {
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

const useGetCreditCardOptions = () => {
  return useQuery({
    queryKey: [CREDIT_QUERY_KEYS.GET],
    queryFn: getCreditCards,
    placeholderData: { data: [] },
    select: (response) => response.data.map(({ id, name, maxTotal }) => ({ id, name, maxTotal })),
  });
};

export { useCategories, useGetCreditCardOptions };
