"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { CircularButton } from "./circular-button";
import "./carousel.css";

type CarouselProps = {
  children: ReactNode;
};

export const Carousel = ({ children }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!containerRef.current) return;
    // scrollLeft, scrollWidth and clientWidth are HTMLElement attributes we will need
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollBy = (offset: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll(); // initial check
  }, []);

  return (
    <div className="carousel-wrapper">
      {showLeft && (
        <CircularButton
          className="nav-button left"
          onClick={() => scrollBy(-200)}
          icon="&#8249;"
        ></CircularButton>
      )}
      <div
        className="carousel-container"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {children}
      </div>
      {showRight && (
        <CircularButton
          className="nav-button right"
          onClick={() => scrollBy(200)}
          icon="&#8249;"
        ></CircularButton>
      )}
    </div>
  );
};
