// components/ChevronIcon.tsx
import React from "react";

type ChevronIconProps = {
  size?: number;
  color?: string;
};

export const ChevronIcon = ({
  size = 24,
  color = "#f8f8f8",
}: ChevronIconProps) => {

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};