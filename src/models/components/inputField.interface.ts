type TypeInputField = "text" | "number" | "email" | "password" | "date";

interface InputFieldProps {
  label?: string;
  inputId: string;
  type?: TypeInputField;
  placeholder?: string;
  isRequired?: boolean;
}

export type { InputFieldProps, TypeInputField };
