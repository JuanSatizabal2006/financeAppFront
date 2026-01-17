import { CREDIT_QUERY_KEYS } from "@src/constants/keysQuery.constants";
import { showToast } from "@src/lib/toast";
import type { ApiError, ApiResponse } from "@src/models/api.interface";
import type { CreateCreditCard, CreditCard } from "@src/models/core/creditCard.interface";
import {
  createCreditCard,
  getCreditCards,
} from "@src/services/creditCard.service";
import { QueryClient, useMutation, useQuery } from "@tanstack/vue-query";

const useGetCreditCard = () => {
  return useQuery({
    queryKey: [CREDIT_QUERY_KEYS.GET],
    queryFn: getCreditCards,
    placeholderData: { data: [] },
  });
};

const useCreateCreditCard = () => {
  const queryClient = new QueryClient();
  return useMutation<ApiResponse<CreditCard>, ApiError, CreateCreditCard>({
    mutationFn: createCreditCard,
    onSuccess: () => {
      showToast("Tarjeta de credito agregada!", {
        type: "success",
      });
      queryClient.invalidateQueries({ queryKey: [CREDIT_QUERY_KEYS.GET] });
    },
  });
};

export { useGetCreditCard, useCreateCreditCard };
