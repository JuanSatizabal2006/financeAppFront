type FormatedNumberSizes = "md" | "xl";

export interface FormatedNumberProps {
  value: number | string;
  size?: FormatedNumberSizes;
  symbol?: string;
  title?: string;
}
