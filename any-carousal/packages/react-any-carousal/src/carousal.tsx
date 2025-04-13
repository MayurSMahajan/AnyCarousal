"use client"
import React, { ReactNode, useRef } from "react";

type CarouselProps = {
  children: ReactNode;
};

export const Carousel = ({ children }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="carousel">
      <div className="carousel__inner" ref={containerRef}>
        {children}
      </div>
    </div>
  );
};