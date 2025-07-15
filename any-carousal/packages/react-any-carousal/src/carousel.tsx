"use client";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { CircularButton } from "./CircularButton";
import { DEFAULT_DURATION, DEFAULT_EASING, DEFAULT_SCROLL_OFFSET, MAX_DURATION, MIN_DURATION } from "./constants/carousel";
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
  scrollOffset: DEFAULT_SCROLL_OFFSET,
  scrollEasing: DEFAULT_EASING,
  duration: DEFAULT_DURATION
};

export const Carousel = (rawProps: CarouselProps) => {
  const props = useMemo(() => mergeProps(defaultProps, rawProps), [rawProps]);
  const {
    children,
    theme,
    iconOptions,
    scrollSnapType,
    scrollOffset,
    autoSlideInterval,
    scrollEasing,
    duration,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(autoSlideInterval ? true : false);

  const sanitizedDuration = useMemo(() => {
    return typeof duration === "number"
      ? Math.min(Math.max(duration, MIN_DURATION), MAX_DURATION)
      : DEFAULT_DURATION;
  }, [duration]);

  /**
   * Called when the content is scrolled. 
   * It handles the logic to show or hide left/right scroll icons.
   */
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  /**
   * Explicitly trigger scrolling on the carousel
   * @param direction = `-1` denotes scrolling backwards, `1` denotes scrolling to forwards
   * @returns 
   */
  const triggerScroll = (direction: number) => {
    setAutoScrollEnabled(false); // Stop auto-scrolling on user interaction
    if (!containerRef.current) return;

    const fallbackEasing = [0.25, 0.8, 0.5, 1];
    const parsedEasing = scrollEasing?.match(/cubic-bezier\(([^)]+)\)/)?.[1];
    const easingValues = parsedEasing?.split(',').map(Number);

    const [x1, y1, x2, y2] = easingValues?.length === 4 ? easingValues : fallbackEasing;
    const easing = bezierEasing(x1 ?? 0.25, y1 ?? 0.8, x2 ?? 0.5, y2 ?? 1);

    animateScrollBy(containerRef.current, (scrollOffset * direction), sanitizedDuration, easing);
  };

  const animateScrollBy = (
    container: HTMLDivElement,
    offset: number,
    duration: number,
    easingFn: (t: number) => number
  ) => {
    const start = container.scrollLeft;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easingFn(progress);
      container.scrollLeft = start + offset * eased;

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
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

  return (
    <div className="carousel-wrapper">
      {showLeft && (
        <CircularButton
          className="nav-button left"
          onClick={() => triggerScroll(-1)}
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
          onClick={() => triggerScroll(1)}
          icon={iconOptions.icon}
          style={iconOptions.iconStyles}
          theme={theme}
        />
      )}
    </div>
  );
};

Carousel.displayName = "Carousel";

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