import type { LucideIcon } from "lucide-vue-next";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  label?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
}

export type { ButtonVariant, ButtonSize, ButtonProps };
