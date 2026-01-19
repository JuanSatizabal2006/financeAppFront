import { QUOTAS_CREDIT_CARD_KEY } from "@src/constants/keysQuery.constants";
import { getQuotasCreditCards } from "@src/services/quotasCreditCard.service";
import { useQuery } from "@tanstack/vue-query";

const useGetQuotasCreditCard = () => {
  return useQuery({
    queryKey: [QUOTAS_CREDIT_CARD_KEY.GET],
    queryFn: getQuotasCreditCards,
    placeholderData: { data: [] },
  });
};

export { useGetQuotasCreditCard };
