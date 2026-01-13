export interface ApiError {
  status: number;
  message: string;
  error?: string;
  errors?: Record<string, string>;
  code?: string;
  type?: string;
  meta?: unknown;
}

export interface FetchOptions extends RequestInit {
  params?: Record<string, string | number>;
}

export interface ApiResponse<T> {
  data: T;
  message?: "Gastos fijos encontrados";
}
