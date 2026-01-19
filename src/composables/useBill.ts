import { useQuery } from "@tanstack/vue-query";
import { useMutationLib } from "@src/lib/tanstackQuery";
import {
  createBill,
  deleteBill,
  editBill,
  getBills,
} from "../services/bill.service";
import { BILL_QUERY_KEYS } from "@src/constants/keysQuery.constants";

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
  return useMutationLib({
    mutationFn: createBill,
    keysRefresh: [BILL_QUERY_KEYS.GET],
    messageToastSuccess: "¡Gasto fijo agregado!",
  });
}

export function useUpdateBills() {
  return useMutationLib({
    mutationFn: editBill,
    keysRefresh: [BILL_QUERY_KEYS.GET],
    messageToastSuccess: "¡Gasto fijo editado!",
  });
}

export function useDeleteBill() {
  return useMutationLib({
    mutationFn: deleteBill,
    keysRefresh: [BILL_QUERY_KEYS.GET],
    messageToastSuccess: "¡Gasto fijo eliminado!",
    messageToastError: "No se pudo eliminar",
    showToastError: true,
  });
}
