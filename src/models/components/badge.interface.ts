export type BadgeStatus = "success" | "warning" | "error" | "info" | "neutral";

export interface BadgeProps {
  label: string;
  status?: BadgeStatus;
}

export default {};
