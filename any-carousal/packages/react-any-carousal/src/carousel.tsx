"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { CircularButton } from "./CircularButton";
import { CarouselProps, Theme, ScrollSnapOptions, IconOptions } from "./carousel-props";
import bezierEasing from 'bezier-easing';
import "./carousel.css";

const defaultProps = {
  theme: "light" as Theme,
  iconOptions: {
    icon: <span>&#8249;</span> as ReactNode,
    iconStyles: { color: "whitesmoke", backgroundColor: "#333" },
  } as IconOptions,
  scrollSnapType: "start" as ScrollSnapOptions,
  scrollOffset: 1000,
  scrollEasing: 'cubic-bezier(0.42, 0, 0.58, 1)',
};

export const Carousel = (rawProps: CarouselProps) => {
  const props = mergeProps(defaultProps, rawProps);
  const {
    children,
    theme,
    iconOptions,
    scrollSnapType,
    scrollOffset,
    autoSlideInterval,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(autoSlideInterval ? true : false);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollBy = (offset: number) => {
    setAutoScrollEnabled(false); // Stop auto-scrolling on user interaction
    if (!containerRef.current) return;
    // containerRef.current.scrollBy({ left: offset, behavior: "smooth" });

    // const easing = bezierEasing(0.25, 0.8, 0.5, 1);
    const parsedEasing = props.scrollEasing?.match(/cubic-bezier\(([^)]+)\)/)?.[1];
    const [x1, y1, x2, y2] = parsedEasing?.split(',').map(Number) || [0.25, 0.8, 0.5, 1];

    const easing = bezierEasing(x1 ?? 0.25, y1 ?? 0.8, x2 ?? 0.5, y2 ?? 1);
    animateScrollBy(containerRef.current, offset, 600, easing);
  };

  useEffect(() => {
    handleScroll(); // initial check
  }, []);


  useEffect(() => {
    if (!autoScrollEnabled || !containerRef.current || !autoSlideInterval) return;

    const interval = Number(autoSlideInterval);
    if (isNaN(interval)) return;

    const intervalId = setInterval(() => {
      containerRef.current?.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }, interval);

    return () => clearInterval(intervalId);
  }, [autoScrollEnabled, autoSlideInterval, scrollOffset]);

  function animateScrollBy(
    container: HTMLDivElement,
    offset: number,
    duration: number = 600,
    easingFn: (t: number) => number
  ) {
    const start = container.scrollLeft;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFn(progress);
      container.scrollLeft = start + offset * easedProgress;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  return (
    <div className="carousel-wrapper">
      {showLeft && (
        <CircularButton
          className="nav-button left"
          onClick={() => scrollBy(-1 * scrollOffset)}
          icon={iconOptions.icon}
          style={iconOptions.iconStyles}
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
          onClick={() => scrollBy(scrollOffset)}
          icon={iconOptions.icon}
          style={iconOptions.iconStyles}
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