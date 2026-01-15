export interface ApiError {
  status?: number;
  message?: string;
  error?: string;
  errors?: Record<string, string>;
  code?: string;
  type?: string;
  meta?: unknown;
}

export interface FetchOptions extends Omit<RequestInit, "body"> {
  params?: Record<string, string | number>;
  body?: unknown;
}

export interface ApiResponse<T> extends ApiError {
  data: T;
}

export interface ApiSucces<T> {
  data: T;
  message: string;
}
