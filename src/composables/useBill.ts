import { useMutation, useQuery } from "@tanstack/vue-query";
import { getBills } from "../services/bill.service";
import { BILL_QUERY_KEYS } from "@src/models/bill.interface";

export function useGetBills() {
  return useQuery({
    queryKey: [BILL_QUERY_KEYS.GET],
    queryFn: getBills,
    placeholderData: { data: [] },
    staleTime: 1000 * 60 * 5, //La data se mantiene fresh por 5 minutos
    refetchOnWindowFocus: false,
  });
}

// export function useCreateBills(){
//   return useMutation({mutationFn : cre})
// }