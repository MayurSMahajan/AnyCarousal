import { ReactNode } from "react";

export type ScrollSnapOptions = "start" | "center" | "end" | "none";

export type Theme = "light" | "dark";

export type CarouselProps = {
  children: ReactNode;

  // Simple config
  theme?: Theme;

  // Advanced overrides
  icon?: ReactNode;
  iconColor?: string;
  iconBgColor?: string;
  scrollSnapType?: ScrollSnapOptions
};