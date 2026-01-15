import type { ApiResponse, FetchOptions } from "@src/models/api.interface";
import { normalizeFetchError } from "./errors";

const API_URL = "http://localhost:3000/api/v1";

export async function fetcher<T>(
  url: string,
  options: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const { params, body, ...init } = options;

  const query = params
    ? "?" + new URLSearchParams(params as Record<string, string>).toString()
    : "";

  const response = await fetch(`${API_URL}${url}${query}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw await normalizeFetchError(response);
  }

  return response.json() as Promise<ApiResponse<T>>;
}
