"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { CircularButton } from "./CircularButton";
import { CarouselProps, Theme, ScrollSnapOptions } from "./carousel-props";
import "./carousel.css";

const defaultProps = {
  theme: "light" as Theme,
  icon: <span>&#8249;</span> as ReactNode,
  iconColor: "#fff",
  iconBgColor: "#333",
  scrollSnapType: "start" as ScrollSnapOptions,
};

export const Carousel = (rawProps: CarouselProps) => {
  const props = mergeProps(defaultProps, rawProps);
  const {
    children,
    theme,
    icon,
    iconColor,
    iconBgColor,
    scrollSnapType,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!containerRef.current) return;
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
          icon={icon}
          style={{ color: iconColor, backgroundColor: iconBgColor }}
          theme={theme}
        />
      )}
      <div
        className="carousel-container"
        ref={containerRef}
        onScroll={handleScroll}
        style={{ scrollSnapType: `x ${scrollSnapType}` }}
      >
        {children}
      </div>
      {showRight && (
        <CircularButton
          className="nav-button right"
          onClick={() => scrollBy(200)}
          icon={icon}
          style={{ color: iconColor, backgroundColor: iconBgColor }}
          theme={theme}
        />
      )}
    </div>
  );
};

/**
 * Utility method for merging props together, this method allows us to override default 
 * carousel configurations with user passed configurations.
 * @param defaults - Strictly typed default configurations used for styling & behaviour
 * @param userProps - Partially typed configurations which override the default configs
 * @returns  - A merged configuration object used to customise the carousel
 */
// Here Partial<T> means - “I want to override some fields of T, not necessarily all.”
// The return type - T & U means we want to return an intersection of T & U
// Thus returning a value that includes all properties of T (the defaults), but with any fields from U overriding T.
function mergeProps<T extends object, U extends Partial<T>>(defaults: T, overrides: U): T & U {
  return { ...defaults, ...overrides };
}