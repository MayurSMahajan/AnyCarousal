"use client";

import React from "react";

type CubInfoCardProps = {
  imageUrl: string;
  species: string;
  weightAtBirth: string;
  heightAtBirth: string;
  funFact: string;
};

export const CubInfoCard = ({
  imageUrl,
  species,
  weightAtBirth,
  heightAtBirth,
  funFact,
}: CubInfoCardProps) => {
  return (
    <div
      style={{
        position: "relative",
        width: "clamp(250px, 30vw, 400px)",
        minHeight: "300px",
        aspectRatio: "3/4",
        borderRadius: "1rem",
        overflow: "hidden",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(10px)",
        color: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "flex-end",
        border: "1px solid #555",
      }}
    >
      <div
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 75%,  rgba(0, 0, 0, 0.9) 100%)",
          width: "100%",
          height: "100%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.5rem" }}>{species} Cub</h2>
        <div style={{ marginBottom: "1rem", fontSize: "clamp(0.75rem, 1.05vw, 1.4rem)" }}>
          <p style={{ margin: "0.25rem 0" }}>Weight: {weightAtBirth}</p>
          <p style={{ margin: "0.25rem 0" }}>Height: {heightAtBirth}</p>
          <p style={{ marginTop: "0.5rem", fontStyle: "italic" }}>{funFact}</p>
        </div>
      </div>
    </div>
  );
};