import { QUOTAS_CREDIT_CARD_KEY } from "@src/constants/keysQuery.constants";
import { useMutationLib } from "@src/lib/tanstackQuery";
import {
  createQuotaCreditCard,
  getQuotasCreditCards,
} from "@src/services/quotasCreditCard.service";
import { useQuery } from "@tanstack/vue-query";

const useGetQuotasCreditCard = () => {
  return useQuery({
    queryKey: [QUOTAS_CREDIT_CARD_KEY.GET],
    queryFn: getQuotasCreditCards,
    placeholderData: { data: [] },
  });
};

const useCreateQuotaCreditCard = () => {
  return useMutationLib({
    mutationFn: createQuotaCreditCard,
    messageToastSuccess: "¡Cuota agregada con éxito!",
    keysRefresh: [QUOTAS_CREDIT_CARD_KEY.GET],
  });
};

export { useGetQuotasCreditCard, useCreateQuotaCreditCard };
