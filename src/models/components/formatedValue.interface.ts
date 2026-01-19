type FormatedValueSizes = "md" | "xl";
type FormatedValueType = "number" | "date" | "none";

export interface FormatedValueProps {
  value: string | number | Date;
  size?: FormatedValueSizes;
  symbol?: string;
  title?: string;
  type?: FormatedValueType;
}
