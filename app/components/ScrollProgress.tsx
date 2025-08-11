"use client";

import { cn } from "../utils/aceternity";
import { motion, MotionProps, useScroll } from "motion/react";
import React from "react";
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    return (
      <motion.div
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[4px] rounded-full origin-left bg-[#fffdf7]",
          className
        )}
        style={{
          scaleX: scrollYProgress,
        }}
        {...props}
      />
    );
  }
);

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;
