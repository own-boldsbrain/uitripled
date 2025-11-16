"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function AnimatedBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0.2 }
            : { type: "spring", stiffness: 260, damping: 20, delay: 0.12 }
        }
        className="group"
      >
        <Badge className="gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted-foreground backdrop-blur transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/15 group-hover:text-primary">
          <motion.span
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { rotate: [0, 15, -15, 0], opacity: [0.6, 1, 0.6] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
            }
            aria-hidden
          >
            <Sparkles className="h-3 w-3 text-primary" />
          </motion.span>
          Feature
          <span className="rounded-full border border-border/40 bg-white/5 px-2 py-0.5 text-[0.6rem] text-muted-foreground transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/25 group-hover:text-primary">
            new
          </span>
        </Badge>
      </motion.div>
    </div>
  );
}
