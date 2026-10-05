"use client";

import { useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  delay = 0,
  duration = 1.2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const format = (value: number) => {
      const rounded = Math.round(value).toString();
      return separator ? rounded.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : rounded;
    };

    node.textContent = format(from);
    if (!startWhen) return;

    let frame = 0;
    let startTime = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        onStart?.();
        const begin = () => {
          startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - startTime) / (duration * 1000));
            const eased = 1 - Math.pow(1 - progress, 3);
            node.textContent = format(from + (to - from) * eased);
            if (progress < 1) frame = requestAnimationFrame(tick);
            else onEnd?.();
          };
          frame = requestAnimationFrame(tick);
        };
        window.setTimeout(begin, delay * 1000);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, from, delay, duration, startWhen, separator, onStart, onEnd]);

  return <span ref={ref} className={className} />;
}
