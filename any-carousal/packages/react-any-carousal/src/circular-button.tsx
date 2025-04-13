"use client";

import React from "react";

type CircularButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
};

export const CircularButton = ({ onClick, icon, className = "" }: CircularButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`circular-button ${className}`}
      style={{
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        border: "none",
        background: "white",
        cursor: "pointer",
      }}
    >
      {icon}
    </button>
  );
};