type InfoCardVariant = "info" | "alert" | "error";

interface InfoCardProps {
  message: string;
  variant?: InfoCardVariant;
  showIcon?: boolean;
}

export type { InfoCardVariant, InfoCardProps };
