import type { ApiError } from "@src/common/models/api.interface";

export async function normalizeFetchError(
  response: Response
): Promise<ApiError> {
  let result = null;

  result = await response.json();
    
  return {
    status: response.status,
    code: result?.code,
    type: result?.type,
    meta: result?.meta,
    message: result.message,
    error: result.error,
    errors: result.errors,
  };
}
