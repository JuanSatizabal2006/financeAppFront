import { useQuery } from "@tanstack/vue-query";
import { useMutationLib } from "@src/lib/tanstackQuery";
import {
  createCreditCard,
  getCreditCards,
  updateCreditCard,
} from "@src/services/creditCard.service";
import { CREDIT_QUERY_KEYS } from "@src/constants/keysQuery.constants";

const useGetCreditCard = () => {
  return useQuery({
    queryKey: [CREDIT_QUERY_KEYS.GET],
    queryFn: getCreditCards,
    placeholderData: { data: [] },
  });
};

const useCreateCreditCard = () => {
  return useMutationLib({
    mutationFn: createCreditCard,
    keysRefresh: [CREDIT_QUERY_KEYS.GET],
    messageToastSuccess: "¡Tarjeta de credito agregada!",
  });
};

const useUpdateCreditCard = () => {
  return useMutationLib({
    mutationFn: updateCreditCard,
    keysRefresh: [CREDIT_QUERY_KEYS.GET],
    messageToastSuccess: "¡Tarjeta de credito agregada!",
  });
};

export { useGetCreditCard, useCreateCreditCard, useUpdateCreditCard };
