"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

export function CounterUp() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const animation = animate(count, 1000, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  return (
    <div className="">
      <div className="text-center">
        <motion.div
          className="mb-2 text-6xl font-bold text-[var(--muted-foreground)]/80"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {displayValue.toLocaleString()}
          <span className="sr-only">
            {displayValue.toLocaleString()} active users
          </span>
        </motion.div>
        <p className="text-sm text-[var(--foreground)]/70">Active users</p>
      </div>
    </div>
  );
}
