import type { ApiError, ApiResponse } from "@src/models/api.interface";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/vue-query";
import { showToast } from "./toast";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 10 } },
});

interface MutationLib<TData, TVariables> {
  mutationFn: (variables: TVariables) => Promise<ApiResponse<TData>>;
  keysRefresh?: readonly string[];
  messageToastSuccess?: string;
  messageToastError?: string;
  showToastError?: boolean;
}

const useMutationLib = <TData, TVariables>({
  mutationFn,
  keysRefresh,
  messageToastSuccess,
  messageToastError = "Operación fallida",
  showToastError = false,
}: MutationLib<TData, TVariables>) => {
  const queryClient = useQueryClient();

  return useMutation<ApiResponse<TData>, ApiError, TVariables>({
    mutationFn: mutationFn,
    onSuccess: () => {
      if (messageToastSuccess) {
        showToast(messageToastSuccess, {
          type: "success",
        });
      }

      if (keysRefresh?.length !== 0) {
        keysRefresh?.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: [key] });
        });
      }
    },
    onError: (e) => {
      if (showToastError) {
        showToast(e.message || messageToastError, {
          autoClose: 5000,
        });
      }
    },
  });
};

export { useMutationLib, queryClient };
