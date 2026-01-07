import { useState, useEffect, useRef, useCallback } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
}

export const useCountUp = ({
  end,
  duration = 2000,
  decimals = 0,
  suffix = "",
  prefix = "",
  separator = ",",
}: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const formatNumber = useCallback((num: number): string => {
    let formatted = num.toFixed(decimals);
    
    // Add thousand separators for whole numbers
    if (decimals === 0 && separator) {
      formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    
    return `${prefix}${formatted}${suffix}`;
  }, [decimals, separator, prefix, suffix]);

  const startAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    
    hasAnimated.current = true;
    
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (end - startValue) * easeOut;
      
      setCount(currentValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [end, duration]);

  // Intersection Observer to trigger animation when element comes into view
  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            // Trigger animation when element is visible
            startAnimation();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px', // No margin adjustment - trigger when element enters viewport
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [startAnimation]);

  return {
    count: formatNumber(count),
    elementRef,
  };
};

