import { useQuery } from "@tanstack/vue-query";
import { getBills } from "../services/bill.service";
import { BILL_QUERY_KEYS } from "@src/models/bill.interface";

export function useGetBills() {
  return useQuery({
    queryKey: [BILL_QUERY_KEYS.GET],
    queryFn: getBills,
    initialData: { data: [] },
  });
}
