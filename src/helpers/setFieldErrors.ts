export function setFieldErrors<T extends object>(
  errors: Record<string, string>,
  values: T,
  setFieldError: (field: keyof T, message: string) => void
) {
  Object.entries(errors).forEach(([key, message]) => {
    if (key in values) {
      setFieldError(key as keyof T, message);
    }
  });
}
