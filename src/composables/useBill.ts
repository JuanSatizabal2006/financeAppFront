import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { createBill, getBills } from "../services/bill.service";
import { BILL_QUERY_KEYS } from "@src/constants/keysQuery.constants";
import type { ApiError, ApiResponse } from "@src/models/api.interface";
import type { BillManag, BillManagSucces } from "@src/models/bill.interface";
import { showToast } from "@src/lib/toast";

export function useGetBills() {
  return useQuery({
    queryKey: [BILL_QUERY_KEYS.GET],
    queryFn: getBills,
    placeholderData: { data: [] },
    // staleTime: 1000 * 60 * 10, //La data se mantiene fresh por 10 minutos
    refetchOnWindowFocus: false,
  });
}

export function useCreateBills() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<BillManagSucces>, ApiError, BillManag>({
    mutationFn: createBill,
    onSuccess: () => {
      showToast("¡Gasto fijo agregado!", {
        type: "success",
      });
      queryClient.invalidateQueries({ queryKey: [BILL_QUERY_KEYS.GET] });
    },
  });
}
