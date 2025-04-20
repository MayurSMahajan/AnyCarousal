"use client";

import React from "react";

type CircularButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
};

export const CircularButton = ({
  onClick,
  icon,
  className = "",
}: CircularButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`circular-button ${className}`}
      style={{
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        display: "grid",
        placeItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        border: "none",
        background: "white",
        color: "black",
        fontSize: "1.75rem",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          transform: "translateY(-7.5%)",
        }}
      >
        {icon}
      </p>
    </button>
  );
};
