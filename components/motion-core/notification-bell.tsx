"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Bell } from "lucide-react";

type NotificationBellProps = {
  hasNotifications?: boolean;
  count?: number;
  onRing?: () => void;
};

export function NotificationBell({
  hasNotifications = true,
  count = 3,
  onRing,
}: NotificationBellProps) {
  const [isRinging, setIsRinging] = useState(false);

  useEffect(() => {
    if (hasNotifications) {
      setIsRinging(true);
      const timer = setTimeout(() => setIsRinging(false), 2000);
      if (onRing) onRing();
      return () => clearTimeout(timer);
    }
  }, [hasNotifications, onRing]);

  const ringVariants: Variants = {
    idle: { rotate: 0 },
    ringing: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative inline-block">
      <motion.button
        variants={ringVariants}
        animate={isRinging ? "ringing" : "idle"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
      >
        <Bell className="h-5 w-5" />
        {hasNotifications && count > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs font-bold text-destructive-foreground"
          >
            {count > 9 ? "9+" : count}
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
