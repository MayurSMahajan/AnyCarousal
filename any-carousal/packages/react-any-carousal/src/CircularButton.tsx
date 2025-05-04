"use client";

import React from "react";
import { Theme } from "./carousel-props";

type CircularButtonProps = {
  className?: string;
  icon: React.ReactNode;
  theme?: Theme;
  style?: React.CSSProperties;
  onClick: () => void;
};

export const CircularButton = ({
  onClick,
  icon,
  className = "",
  theme = 'light',
  style = {}
}: CircularButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`circular-button ${className}`}
      style={{
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        border: "none",
        backgroundColor: theme == 'light' ?  "white" : "black",
        color: theme == 'dark' ?  "white" : "black",
        fontSize: "1.75rem",
        cursor: "pointer",
        ...style
      }}
    >
        {icon}
    </button>
  );
};
