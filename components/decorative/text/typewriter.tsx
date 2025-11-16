"use client";

import { motion, useReducedMotion } from "framer-motion";

const text = "Welcome to UI-TripleD...";

export function TypewriterText() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center p-12">
        <h2 className="text-3xl font-bold">{text}</h2>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex items-center justify-center p-12">
      <motion.h2
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold"
        aria-label={text}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={child} aria-hidden="true">
            {char}
          </motion.span>
        ))}
        <span className="sr-only">{text}</span>
      </motion.h2>
    </div>
  );
}
