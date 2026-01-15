interface OptionSelect {
  id: string;
  name: string;
}

interface SelectFieldProps {
  label?: string;
  inputId: string;
  options: OptionSelect[];
  placeholder?: string;
  isRequired?: boolean;
}

export type { OptionSelect, SelectFieldProps };
