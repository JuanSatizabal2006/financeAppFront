import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

import { createBill, editBill, getBills } from "../services/bill.service";
import { showToast } from "@src/lib/toast";

import { BILL_QUERY_KEYS } from "@src/constants/keysQuery.constants";
import type { ApiError, ApiResponse } from "@src/models/api.interface";
import type { BillCreate, BillManagSucces, BillUpdate } from "@src/models/bill.interface";

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
  return useMutation<ApiResponse<BillManagSucces>, ApiError, BillCreate>({
    mutationFn: createBill,
    onSuccess: () => {
      showToast("¡Gasto fijo agregado!", {
        type: "success",
      });
      queryClient.invalidateQueries({ queryKey: [BILL_QUERY_KEYS.GET] });
    },
  });
}

export function useUpdateBills() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<BillManagSucces>, ApiError, BillUpdate>({
    mutationFn: editBill,
    onSuccess: () => {
      showToast("¡Gasto fijo editado!", {
        type: "success",
      });
      queryClient.invalidateQueries({ queryKey: [BILL_QUERY_KEYS.GET] });
    },
  });
}
